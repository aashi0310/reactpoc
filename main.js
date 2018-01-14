import React from 'react';
import PropTypes from 'prop-types';
import ReactDOM from 'react-dom';
import App from './App.jsx';
import StateEx from './StateEx.jsx';
import LifeCycle from './LifeCycle.jsx';
import ReactFormEx from './ReactFormEx.jsx';

ReactDOM.render(<App/>, document.getElementById('app'));
ReactDOM.render(<StateEx/>, document.getElementById('stateEx'));
ReactDOM.render(<LifeCycle/>, document.getElementById('lifeCycle'));
ReactDOM.render(<ReactFormEx/>, document.getElementById('reactFormEx'));


setTimeout(() => {
   ReactDOM.unmountComponentAtNode(document.getElementById('lifeCycle'));}, 10000);