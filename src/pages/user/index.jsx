import React from 'react';
import { render } from 'react-dom';
import Style from './style.scss';

class User extends React.Component {
  constructor() {
    super();
    this.state = {
      name: 'hello'
    };
  }

  render() {
    return (
      <div className={Style.font}>Test, {this.state.name}</div>
    )
  }
}

render(
  <User />,
  document.getElementById('root')
);