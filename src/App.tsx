import {useState,FormEvent} from 'react'

import {Title} from './Title'
import {Button} from './Button'

function App() {
  const [count,setCount] = useState(0)

  function increase(){
    setCount(count+1)
    console.log(count)
  }
  
  const [todos, setTodos] = useState<string[]>([])
  const [todosText, setTodosText] = useState("")

  function createTodo(event:FormEvent){
    event.preventDefault()
    setTodos([...todos,todosText])
    setTodosText("")
  }
  return (
    <div>
      <Button onClick={increase}>Clicar</Button>
      <b>{count}</b>
      <div>
        <form method="post" onSubmit={createTodo}>
          <input 
            id="todoI"
            type="text"
            value={todosText}
            onChange={(event)=>{setTodosText(event.target.value)}}
          />
          <Button type="submit">Criar To-do</Button>
        </form>
        <ul>
          {
            todos.map((todo,index)=>{
              return (
                <li key={index}><input type="checkbox"/>{todo}</li>
              )
            })
          }
        </ul>
      </div>
    </div>
  );
}

export default App;