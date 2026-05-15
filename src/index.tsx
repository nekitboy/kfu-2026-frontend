import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router';
import { Provider } from 'react-redux';

import App from './app';
import { store } from './store';

const element = (
  <Provider store={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>
);

const rootElement = document.getElementById('root');
if (!rootElement) {
  throw new Error('No root element found');
}

const root = ReactDOM.createRoot(rootElement);

root.render(element);
