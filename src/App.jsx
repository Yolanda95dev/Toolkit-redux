import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

import { useDispatch, useSelector } from 'react-redux'
import { increment, incrementByAmount, decrement } from './store/slices/counter'


function App() {

  const { counter } = useSelector(state => state.counter)
  const dispatch = useDispatch()
  const number = 2

  return (
    <>
      <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>count is: {counter}</h1>
      <div className="card">
        <button onClick={() => dispatch(increment())}>
          Increment
        </button>
        <button onClick={() => dispatch(decrement())}>
          Decrement
        </button>
        <button onClick={() => dispatch(incrementByAmount(number))}>
          Increment by {number}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

export default App
