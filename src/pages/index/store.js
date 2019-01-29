import { observable, action } from 'mobx';

class Store {
  @observable name = 'hello';

  @action
  setName = (value) => {
    this.name = value;
  }
}

export default Store