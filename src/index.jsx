import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import 'normalize.css/normalize.css';
import { BrowserRouter } from 'react-router-dom';

import { ThemeContextProvider } from './contexts/ThemeContext';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ThemeContextProvider>
    <BrowserRouter>
      <App />
      </BrowserRouter>
    </ThemeContextProvider>

  </React.StrictMode>
);
