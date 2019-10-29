import 'core-js/stable';
import 'regenerator-runtime/runtime';

import React from 'react';
import { render } from 'react-dom';
import intl from 'react-intl-universal';
import { Provider, observer } from 'mobx-react';
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';
import { Login, Main } from '~/routes';
import RootStore from '~/stores';
import Store from './store';
import './style.scss';

const locales = {
  zh_CN: require('~/.config/i18n/zh_CN.ts').default,
  en_US: require('~/.config/i18n/en_US.ts').default
};

@observer
class App extends React.Component {
  store = new Store();

  componentDidMount() {
    const currentLocale = 'zh_CN';
    intl
      .init({
        currentLocale,
        locales
      })
      .then(() => {
        this.store.setInit(true);
      });
  }

  render() {
    return (
      this.store.init && (
        <Provider {...new RootStore()}>
          <BrowserRouter>
            <Switch>
              <Route path="/login" component={Login} />
              <Route path="/main" component={Main} />
              <Redirect to="/login" />
            </Switch>
          </BrowserRouter>
        </Provider>
      )
    );
  }
}

render(<App />, document.getElementById('root'));
