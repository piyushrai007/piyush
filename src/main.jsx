import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { ContentProvider } from './ContentContext.jsx';
import './index.css';

ReactDOM.render(
  <ContentProvider>
    <App />
  </ContentProvider>,
  document.getElementById('root')
);