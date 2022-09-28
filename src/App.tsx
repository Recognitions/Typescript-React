import {useState} from 'react'

import {Title} from './Title'
import {Button} from './Button'

function App() {
  const [count,setCount] = useState(0)

  function increase(){
    setCount(count+1)
    console.log(count)
  }
  return (
    <div>
      <Button onClick={increase}>Clicar</Button>
      <b>{count}</b>
    </div>
  );
}

export default App;