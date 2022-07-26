import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import MemoCardsProvider from './context/MemoCardsProvider';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <MemoCardsProvider>
    <App />
  </MemoCardsProvider>
);