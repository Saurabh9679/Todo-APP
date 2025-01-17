import React from 'react';
import { MdDeleteOutline } from 'react-icons/md';

const TodoList = ({ item, index, deleteItem }) => {
  return (
    <li className="list-item">
      {item}
      <span
        className="icons icon-delete"
        onClick={() => deleteItem(index)}
      >
        <MdDeleteOutline />
      </span>
    </li>
  );
};

export default TodoList;
