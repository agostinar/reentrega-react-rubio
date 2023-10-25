import React from 'react';
import { createRoot } from 'react-dom/client';
import { initFirebase } from '../../firebase/config'
import App from './App.jsx';


const rootElement = document.getElementById('root');

const root = createRoot(rootElement);

initFirebase();

root.render(
    <React.StrictMode>
      <App />
    </React.StrictMode>
);