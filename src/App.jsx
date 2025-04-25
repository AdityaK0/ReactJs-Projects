import { useState } from 'react'
import Password from './Password/Password'
import Password2 from './Password/Password2'
import DualListExchanger from './components/DualListExchanger/DualListExchanger'
import Mouse from './components/MouseTracker/Mouse'
import DropDown from './components/DropDown/DropDown'
import ApiCaller from './components/WeatherAPI/ApiCaller'
import Board from './components/Tic-Tac-Toe/Board'
import Weather from './components/WeatherAPI/Weather'
import MultiStepForm from './components/Form/MultiStepForm'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <div>
      {/* <Password/> */}
      {/* <Password2/> */}
      {/* <DualListExchanger/> */}
      {/* <Mouse/> */}
      {/* <DropDown/> */}
      {/* <ApiCaller/> */}
      {/* <Weather/> */}
      {/* <Board/> */}
      {/* <Form/> */}
      <MultiStepForm/>
    </div>
    </>
  )
}

export default App
