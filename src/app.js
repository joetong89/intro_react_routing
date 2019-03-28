import React from 'react';
import ReactDOM from 'react-dom';
import FreeAgentTracker from './components/FreeAgentTracker';
import MainRouter from './routes/MainRouter';
import 'normalize.css/normalize.css';
import './styles/style.scss';

ReactDOM.render(<MainRouter />, document.getElementById('app'));