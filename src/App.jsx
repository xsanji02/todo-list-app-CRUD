import { useState } from "react";
import { TodoForm } from "./components/TodoForm";
import { TodoList } from "./components/TodoList";
import "./App.css";

function App() {
  const [inputTodo, setInputTodo] = useState("");
  const [inputTodos, setInputTodos] = useState([]);
  const [inputEdit, setInputEdit] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    //this code determine if you type something in input elem it will only allow to pass 
    //if you type anything but not empty string then create a array of object id: for unique key of each list you create
    //and then it will render and make 1st state to empty string 
    if (inputTodo !== "") {
      setInputTodos([{ id: Date.now(), inputTodo }, ...inputTodos]);
      setInputTodo("");
    }
    //3rd state have a false initial value so if 3rd state have a value "false" it will update the add button and change to Edit
    if (inputEdit) {
      //create new var called edited then find same id that handleUpdate sent

      const edited = inputTodos.find((edit) => edit.id === inputEdit);
      //updatedEdited will create new var and map out the list to find the same id as edited
      const updatedEdited = inputTodos.map((i) =>
      //if id is equal to edited it will send back the updated inputTodo
      //if id is not equal it will just send back the prevState 
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
  //continue later this is about line-through
  const handleCheck = (id) => {
    const checkList = inputTodos.find((check) => check.id === id);
    if (checkList) {
    }
  };
  //filter out the id if is not equal to the selected parameter
  //and create new array then send it to the main state(array)
  const handleDelete = (id) => {
    const deleteList = inputTodos.filter((del) => del.id !== id);
    setInputTodos([...deleteList]);
  };
  //this code will use find method to find the same id 
  //if the id (param) equally to find (param) then take it and send to the 1st state
  //after that the id of updateList will send to 3rd State
  const handleUpdate = (id) => {
    const updateList = inputTodos.find((find) => find.id === id);
    setInputTodo(updateList.inputTodo);
    setInputEdit(id);
  };

  return (
    <div className="parent-container">
      <h1>Todo-List App</h1>
      <TodoForm
        handleSubmit={handleSubmit}
        inputTodo={inputTodo}
        inputEdit={inputEdit}
        setInputTodo={setInputTodo}
      />
      <div className="form-container">
        <TodoList
          handleCheck={handleCheck}
          handleUpdate={handleUpdate}
          handleDelete={handleDelete}
          inputTodos={inputTodos}
        />
      </div>
    </div>
  );
}

export default App;
