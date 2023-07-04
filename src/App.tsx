import './App.css'
import { Counter } from './features/counter/Counter'
import { Outlet } from 'react-router-dom'
import Navigator from './features/navigator/Navigator'

function App() {
  return (
    <>
      <Navigator />
      <Outlet />
      <Counter />
    </>
  )
}

export default App
