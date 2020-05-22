import React from 'react';
import intl from 'react-intl-universal';
import { observer, inject } from 'mobx-react';
import { Input, Button } from 'antd';
import { UserStore } from '~/stores/user';
import Store from './store';
import Style from './style.scss';

import picLogo from './images/logo.png';

interface IProps {
  history?: any;
  userStore: UserStore;
}

@inject('userStore')
@observer
class Login extends React.Component<IProps> {
  store = new Store({
    user: this.props.userStore
  });

  onNameChange = e => {
    this.store.setName(e.target.value);
  };

  onMobileChange = e => {
    this.store.setMobile(e.target.value);
  };

  onLogin = () => {
    const res = this.store.login();
    if (res) {
      this.props.history.push('/main');
    }
  };

  render() {
    const { name, mobile } = this.store;

    return (
      <div className={Style.box}>
        <div className={Style.login}>
          <img src={picLogo} />
          <Input
            className={Style.item}
            placeholder={intl.get('login.name.placeholder')}
            value={name}
            onChange={this.onNameChange}
          />
          <Input
            className={Style.item}
            placeholder={intl.get('login.mobile.placeholder')}
            value={mobile}
            onChange={this.onMobileChange}
          />
          <Button
            className={Style.item}
            type="primary"
            size="large"
            onClick={this.onLogin}
          >
            {intl.get('login.btn')}
          </Button>
        </div>
      </div>
    );
  }
}

export default Login;
