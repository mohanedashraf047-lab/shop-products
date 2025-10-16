
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import ProductsCart from './components/ProductsCart.jsx'
import store from './components/Redux/store.js'
import { Provider } from 'react-redux'

createRoot(document.getElementById('root')).render(
  <Provider store={store}>
    <App />
  </Provider>
)
