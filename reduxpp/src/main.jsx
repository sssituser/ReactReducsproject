import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { Provider } from 'react-redux'
import './index.css'
import App from './App.jsx'
import 'mdbootstrap/css/bootstrap.css';
import 'mdbootstrap/css/mdb.css';
import {store} from "./redux/store.jsx"
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Provider store={store} >
      <App />
    </Provider>
  </StrictMode>,
)
