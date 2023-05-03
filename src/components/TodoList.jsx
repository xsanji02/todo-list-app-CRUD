import React from "react";
import { FaTrash } from "react-icons/fa";
import { FaEdit } from "react-icons/fa";

export const TodoList = ({ handleUpdate, handleDelete, inputTodos }) => {
  return (
    <div>
      {inputTodos.map((list) => {
        return (
          <ul className="list-container" key={list.id}>
            <li className="list-item">
              <span key={list.id}>{list.inputTodo}</span>
              <div className="icons">
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
  );
};
