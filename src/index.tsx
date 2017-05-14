import * as React from 'react';
import * as ReactDOM from 'react-dom';
import App from './components/App';
import config from './config';
import './index.css';

ReactDOM.render(<App config={config} />, document.getElementById('root'));
