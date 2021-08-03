import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

function renderToDOM() {
  ReactDOM.render(
    <React.StrictMode>
      <App />
    </React.StrictMode>,
    document.getElementById('root')
  );
}
renderToDOM();
export {renderToDOM};
