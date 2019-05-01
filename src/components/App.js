import React from 'react';
import { observer, inject } from 'mobx-react';
import { Route, Switch, withRouter } from 'react-router-dom';
import { Home, NotFound, PageView } from '.';
import GlobalStyles from '../theme/GlobalStyles';

@inject('app')
@withRouter
@observer
class App extends React.Component {
  constructor(props) {
    super(props);
    const { app, history } = props;
    app.setHistory(history);
  }

  render() {
    return (
      <PageView page="app">
        <GlobalStyles />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route component={NotFound} />
        </Switch>
      </PageView>
    );
  }
}

export default App;
