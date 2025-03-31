import { useState } from 'react'
import Password from './Password/Password'
import Password2 from './Password/Password2'
import DualListExchanger from './components/DualListExchanger/DualListExchanger'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <div>
      {/* <Password/> */}
      {/* <Password2/> */}
      <DualListExchanger/>
    </div>
    </>
  )
}

export default App
