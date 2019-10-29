import React from 'react';
import intl from 'react-intl-universal';
import { observer, inject } from 'mobx-react';
import { InfoItem } from '~/components';
import { UserStore } from '~/stores/user';
import Style from './style.scss';

interface IProps {
  userStore: UserStore;
}

@inject('userStore')
@observer
class Main extends React.Component<IProps> {
  render() {
    const { name, mobile } = this.props.userStore.info;

    return (
      <div className={Style.box}>
        <div className={Style.info}>
          <InfoItem text={`${intl.get('user.name.title')}: ${name}`} />
          <InfoItem text={`${intl.get('user.mobile.title')}: ${mobile}`} />
        </div>
      </div>
    );
  }
}

export default Main;
