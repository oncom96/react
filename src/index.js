import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter} from 'react-router-dom';

import './assets/plugin/bootstrap-4.3.1-dist/css/bootstrap.css';
import './assets/plugin/DataTables/datatables.min.css';
import './index.css';
import App from './App';

const rootElemet = document.getElementById('root');
ReactDOM.render(<BrowserRouter><App /></BrowserRouter>,rootElemet);