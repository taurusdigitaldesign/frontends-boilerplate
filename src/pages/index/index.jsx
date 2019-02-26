import React from 'react';
import { render } from 'react-dom';
import { observer } from "mobx-react";
import { Button } from 'antd';
import Store from "./store";

import Style from './style.scss';

@observer
class User extends React.Component {
  store = new Store();

  render() {
    return (
      <div className={Style.font}>{this.store.name}
        <Button type="primary">aaa</Button>
      </div>
    )
  }
}

render(
  <User />,
  document.getElementById('root')
);