import {  useState } from "react";
import { TodoForm } from "./components/TodoForm";
import { TodoList } from "./components/TodoList";
import "./App.css";

function App() {
  const [inputTodo, setInputTodo] = useState("");
  const [inputTodos, setInputTodos] = useState([]);
  const [inputEdit, setInputEdit] = useState(false);
  const [theme, setTheme] = useState("light");

  const handleSubmit = (e) => {
    e.preventDefault();
    //will not pass if empty string
    if (inputTodo !== "") {
      setInputTodos([{ id: Date.now(), inputTodo }, ...inputTodos]);
      setInputTodo("");
    }
    //if inputEdit state is truthy the state will be true and button update on edit mode
    if (inputEdit) {
      //find in the array if same unique id and stored it in const edited
      const edited = inputTodos.find((edit) => edit.id === inputEdit);
      //map over the inputTodos if equal to edited
      const updatedEdited = inputTodos.map((i) =>
        //use ternary condition if true create new object but same id and create new inputTodo
        //if false create new object but same id: and same inputTodo: 
        i.id === edited.id
          ? (i = { id: i.id, inputTodo })
          : { id: i.id, inputTodo: i.inputTodo }
      );
      //and send the updatedEdited in 2nd state which is setInputTodos
      setInputTodos(updatedEdited);
      //then set false the setInputEdit so the Add in button will update
      setInputEdit(false);
    }
  };
  //handle delete function 
  const handleDelete = (id) => {
    const deleteList = inputTodos.filter((del) => del.id !== id);
    setInputTodos([...deleteList]);
  };
  //handle update function find the same id on inputTodos array and store in updateList 
  const handleUpdate = (id) => {
    const updateList = inputTodos.find((find) => find.id === id);
    //send updatelist in setInputTodo
    setInputTodo(updateList.inputTodo);
    setInputEdit(id);
  };
  const toggleTheme = () => {
    setTheme((prevState) => (prevState === "light" ? "dark" : "light"));
  };

  return (
      <div className="main" id={theme}>
        <div className="parent-container" >
          <div className="form-container">
            <TodoForm
              handleSubmit={handleSubmit}
              inputTodo={inputTodo}
              inputEdit={inputEdit}
              setInputTodo={setInputTodo}
              toggleTheme={toggleTheme}
              theme={theme}
            />
            <div className="form-container">
              <TodoList
                handleUpdate={handleUpdate}
                handleDelete={handleDelete}
                inputTodos={inputTodos}
              />
            </div>
          </div>
        </div>
      </div>
  );
}

export default App;
