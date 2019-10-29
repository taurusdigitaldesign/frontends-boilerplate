import { observable, action } from 'mobx';
import { UserStore } from '~/stores/user';

class Store {
  userStore: UserStore;
  @observable name: string = '';
  @observable mobile: string = '';

  constructor(props) {
    this.userStore = props.user;
  }

  @action
  setName = (value: string) => {
    this.name = value;
  };

  @action
  setMobile = (value: string) => {
    this.mobile = value;
  };

  @action
  login = () => {
    this.userStore.setUserInfo(this.name, this.mobile);
    return true;
  };
}

export default Store;
