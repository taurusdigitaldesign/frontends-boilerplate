import { observable, action } from 'mobx';
import { User } from '~/modals/user';

class UserStore {
  @observable info: User = {
    name: '',
    mobile: ''
  };

  @action
  setUserInfo = (name: string, mobile: string) => {
    this.info = {
      name,
      mobile
    };
  };
}

export { UserStore };
