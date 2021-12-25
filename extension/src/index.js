import './index.css'
import App from './App';
import React from 'react';
import ReactDOM from 'react-dom';
import RouterWrapper from './router/RouterWrapper';

ReactDOM.render(
  <React.StrictMode>
    <RouterWrapper>
      <App />
    </RouterWrapper>
  </React.StrictMode>,
  document.getElementById('root')
);
