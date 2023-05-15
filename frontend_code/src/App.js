import { useEffect, useState } from "react";
import ToDo from "./components/ToDo";
import { addTask, fetchAllTasks, updateTask, deleteTask } from "./uitility/HandleApi";


function App() {

  const [toDo, setToDo] = useState([])
  const [text, setText] = useState("")
  const [isUpdating, setIsUpdating] = useState(false)
  const [toDoId, setToDoId] = useState("")

  useEffect(() => {
    fetchAllTasks(setToDo)
  }, [])

  const updateTask = (_id, text) => {
    setIsUpdating(true)
    setText(text)
    setToDoId(_id)
  }

  return (
    <div className="App">

      <div className="container">

        <h1>ToDo App</h1>

        <div className="top">
          <input
            type="text"
            placeholder="Add ToDos..."
            value={text}
            onChange={(e) => setText(e.target.value)}
          />

          <div
            className="add"
            onClick={isUpdating ?
              () => updateTask(toDoId, text, setToDo, setText, setIsUpdating)
              : () => addTask(text, setText, setToDo)}>
            {isUpdating ? "Update" : "Add"}
          </div>

        </div>

        <div className="list">

          {toDo.map((item) => <ToDo 
          key={item._id} 
          text={item.text}
          updateTask = {() => updateTask(item._id, item.text)}
          deleteTask = {() => deleteTask(item._id, setToDo)} />)}

        </div>

      </div>

    </div>
  );
}

export default App;