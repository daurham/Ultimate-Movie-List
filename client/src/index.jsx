import React from 'react';
import ReactDOM, { render } from 'react-dom';
import { createRoot } from 'react-dom/client'
import Context from './Context';

const app = document.getElementById('app');
createRoot(app).render(<Context />);
