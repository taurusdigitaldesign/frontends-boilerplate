import 'core-js/stable';
import 'regenerator-runtime/runtime';

import React from 'react';
import { render } from 'react-dom';
import Style from './style.scss';

const App = () => <div className={Style.box}>Hello world</div>;

render(<App />, document.getElementById('root'));
