import { observable, computed, action } from 'mobx';
import { get } from 'lodash';
import packageJson from '../../package.json';

export default class AppStore {
  appInfo = { name: packageJson.name, version: packageJson.version };

  pageViewFired = false;

  root = null;

  @observable history = null;

  @observable trackingData = new Map();

  @observable formValues = new Map();

  constructor(props = {}) {
    this.root = props.root || global || window || {};
  }

  _root(path, defaultValue = null) {
    return get(this.root, path, defaultValue);
  }

  @computed get appInfoString() {
    return `${this.appInfo.name} ${this.appInfo.version}`;
  }

  @action setHistory(history) {
    this.history = history;
  }

  @action goto(route) {
    if (this.history) this.history.push(route);
  }

  @action updateTrackingData(data, replace = false) {
    if (replace) this.trackingData.replace(data);
    else this.trackingData.merge(data);
  }

  @action clearTrackingData() {
    this.trackingData.clear();
  }

  trackEvent(data) {
    const event = Object.assign({}, this.trackingData.toJS(), data);
    console.log('tracked event', event);
    (this._root.dataLayer = this._root.dataLayer || []).push(event);
  }

  trackPageView(data) {
    if (!this.pageViewFired) {
      const event = Object.assign(
        { event: 'pageview', page: this.appInfo.name },
        data,
      );
      this.trackEvent(event);
      this.pageViewFired = true;
    } else {
      console.warn('Page view triggered after a page view was already sent');
    }
  }

  trackScreenView(screen, data) {
    const event = Object.assign({ event: 'screenview', screen }, data);
    this.trackEvent(event);
  }

  getFormData(formKey) {
    if (!this.formValues.has(formKey)) {
      this.formValues.set(formKey, new Map());
    }
    return this.formValues.get(formKey);
  }

  getFormValue(formKey, fieldKey) {
    const fields = this.getFormData(formKey);
    const fieldValue = fields.get(fieldKey) || '';
    return fields.get(fieldKey) || '';
  }

  @action
  setFormValue(formKey, fieldKey, fieldValue) {
    const fields = this.getFormData(formKey);
    fields.set(fieldKey, fieldValue);
  }
}
