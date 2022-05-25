import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import {LanguageProvider} from './components/LanguageContext/LanguageProvider';
import NotificationProvider from "./components/Notifications/NotificationProvider";

import './style/index.scss';

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <NotificationProvider>
      <LanguageProvider>
        <App />
      </LanguageProvider>
    </NotificationProvider>
  </React.StrictMode>
);

