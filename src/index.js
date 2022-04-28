import React, { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import AppuseRef from './AppuseRef';
import App from './App';

const rootElement = document.getElementById('root');
const root = createRoot(rootElement);

root.render(
  <StrictMode>
    <AppuseRef />
  </StrictMode>
);
