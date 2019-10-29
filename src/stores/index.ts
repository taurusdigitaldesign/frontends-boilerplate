import { UserStore } from './user';

class Root {
  static rootStore: Root;
  userStore: UserStore;

  constructor() {
    if (!Root.rootStore) {
      let self = this;
      this.userStore = new UserStore();
      Root.rootStore = self;
    }
    return Root.rootStore;
  }

  static getInstance = () => {
    return Root.rootStore;
  };
}

export default Root;
