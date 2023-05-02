import { useState } from "react";
import "./App.css";
import { FaTrash } from "react-icons/fa";
import { FaEdit } from "react-icons/fa";
import { FaCheckCircle } from "react-icons/fa";

function App() {
  const [inputTodo, setInputTodo] = useState("");
  const [inputTodos, setInputTodos] = useState([]);
  const [inputEdit, setInputEdit] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (inputTodo !== "") {
      setInputTodos([{ id: Date.now(), inputTodo }, ...inputTodos]);
      setInputTodo("");
    }

    if (inputEdit) {
      const edited = inputTodos.find((edit) => edit.id === inputEdit);
      const updatedEdited = inputTodos.map((i) =>
        i.id === edited.id
          ? (i = { id: i.id, inputTodo })
          : { id: i.id, inputTodo: i.inputTodo }
      );
      setInputTodos(updatedEdited);
      setInputEdit(0);
    }
  };
  //continue later this is about line-through
  const handleCheck = (id) => {
    const checkList = inputTodos.find((check) => check.id === id)
    if (checkList) {

    }
  }
  
  const handleDelete = (id) => {
    const deleteList = inputTodos.filter((del) => del.id !== id);
    setInputTodos([...deleteList]);
  };

  const handleUpdate = (id) => {
    const updateList = inputTodos.find((find) => find.id === id);
    setInputTodo(updateList.inputTodo);
    setInputEdit(id);
  };

  return (
    <div className="parent-container">
      <h1>Todo-List App</h1>
      <div className="form-container">
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            value={inputTodo}
            placeholder="what do you need to accomplish today?"
            onChange={(e) => {
              setInputTodo(e.target.value);
            }}
          />
          <button type="submit">{inputEdit ? "Edit" : "Add"}</button>
        </form>
        {inputTodos.map((list) => {
          return (
            <ul className="list-container" key={list.id}>
              <li className="list-item">
                <span key={list.id}>{list.inputTodo}</span>
                <div className="icons">
                  <span onClick={() => handleCheck(list.id)}>
                    <FaCheckCircle />
                  </span>
                  <span
                    className="span-update"
                    onClick={() => handleUpdate(list.id)}
                  >
                    <FaEdit title="edit" className="edit-icon" />
                  </span>
                  <span
                    className="span-delete"
                    onClick={() => handleDelete(list.id)}
                  >
                    <FaTrash title="delete" className="del-icon" />
                  </span>
                </div>
              </li>
            </ul>
          );
        })}
      </div>
    </div>
  );
}

export default App;
