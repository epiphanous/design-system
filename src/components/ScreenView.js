import React from 'react';
import { observer, inject } from 'mobx-react';

@inject('app')
@observer
class ScreenView extends React.Component {
  componentDidMount() {
    const { app, screen, track } = this.props;
    app.trackScreenView(screen, track);
  }

  render() {
    const { children } = this.props;
    return <React.Fragment>{children}</React.Fragment>;
  }
}

export default ScreenView;
