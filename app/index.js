import styles from './app.css';
import React from 'react';
import ReactDOM from 'react-dom';

import Board from './components/board.js';

var element = document.createElement('div');
element.id = "app";
document.body.appendChild(element);

ReactDOM.render(<Board />, document.getElementById('app'));

