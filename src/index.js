import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { initWeb } from '@tma.js/sdk';

// Инициализация Telegram Mini Apps SDK
if (window.Telegram) {
  initWeb();
} else {
  console.warn('Приложение запущено вне среды Telegram.');
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
