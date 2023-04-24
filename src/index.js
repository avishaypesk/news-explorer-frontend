import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './components/App/App';
import { BrowserRouter } from 'react-router-dom';
import { PopupProvider } from './contexts/PopupContext';
import { initialPopupState, popupReducer } from './reducers/popupReducer';
import { AuthProvider } from './contexts/AuthContext';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <AuthProvider>
        <PopupProvider initialState={initialPopupState} reducer={popupReducer}>
          <App />
        </PopupProvider>
      </AuthProvider>
    </BrowserRouter>
  </React.StrictMode>
);
