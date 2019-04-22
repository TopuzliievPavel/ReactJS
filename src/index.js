import React from 'react';
import ReactDOM from 'react-dom';
import './utils/styles/main.scss';
import { App } from '../src/app';
import './utils/fonts/fonts.scss';
import './utils/fonts/icons.scss';
import * as serviceWorker from './serviceWorker';


ReactDOM.render(<App />, document.getElementById('root'));

serviceWorker.unregister();
