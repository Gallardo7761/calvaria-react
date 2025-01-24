import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './css/index.css'
import "./css/Header.css";
import "./css/DownloadButton.css";
import './css/Container.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import App from './components/App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
