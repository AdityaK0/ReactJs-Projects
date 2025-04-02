import { useState } from 'react'
import Password from './Password/Password'
import Password2 from './Password/Password2'
import DualListExchanger from './components/DualListExchanger/DualListExchanger'
import Mouse from './components/MouseTracker/Mouse'
import DropDown from './components/DropDown/DropDown'
import ApiCaller from './components/WeatherAPI/ApiCaller'
import Weather from './components/WeatherAPI/Weather'

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
      <Weather/>
    </div>
    </>
  )
}

export default App
