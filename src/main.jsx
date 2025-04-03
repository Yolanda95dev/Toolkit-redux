import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { store } from './store'
import { Provider } from 'react-redux'
import PokemonApp from './PokemonApp.jsx'
import './index.css'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Provider store={store}>
      <PokemonApp />
    </Provider>
  </StrictMode>,
)
