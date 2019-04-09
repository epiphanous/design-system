import React from 'react';
import { observer, inject } from 'mobx-react';

@inject('app')
@observer
class PageView extends React.Component {
  componentDidMount() {
    const { app, track } = this.props;
    app.trackPageView(track);
  }

  render() {
    const { children } = this.props;
    return <React.Fragment>{children}</React.Fragment>;
  }
}

export default PageView;
