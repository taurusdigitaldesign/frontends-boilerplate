import { observable, action } from 'mobx';

class Store {
  @observable init: boolean = false;

  @action
  setInit = (value: boolean) => {
      this.init = value;
  }
}

export default Store;