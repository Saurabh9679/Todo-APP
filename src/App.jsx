import React, { useEffect, useState } from 'react';
import './App.css';
import Todo from './components/Todo';
import TodoList from './components/TodoList';
import { data } from 'autoprefixer';
import { BiAdjust } from 'react-icons/bi';

function App (){
  const [listTodo, setListTodo] = useState([]);
  const [currtime, setTime] = useState("");
  const [currdate1, setcurrdate1] = useState("");

  useEffect(() => {
    const interval = setInterval(() => {
      const date1 = new Date();
      const time2 = date1.toLocaleTimeString();
      setTime(time2); // Update time every second
    }, 1000);

    const date1 = new Date();
    const date2 = date1.toLocaleDateString();
    setcurrdate1(date2); // Set date once on component mount

    return () => clearInterval(interval); // Cleanup interval
  }, []);
    //  setCurrentTime(()=>{
    //   const a = 
    //  })

  // Add a new item to the list
  const addList = (inputText) => {
    setListTodo([...listTodo, inputText]);
  };

  // Delete an item from the list
  const deleteListItem = (key) => {
    const newListTodo = [...listTodo];
    newListTodo.splice(key, 1);
    setListTodo(newListTodo);
  };

  const clearAllTodos = () => {
    setListTodo([]); // Reset listTodo to an empty array
  };

  return (
    <div className="main-container">
      <div className="center-container">
      <Todo addList={addList} />
        <h1 className="app-heading">TODO</h1>
        <hr />
       <h2 className='date'>DATE : {currdate1}</h2>
       <h2 className='date'> TIME : {currtime}</h2>
        {listTodo.map((listItem, i) => (
          <TodoList
            key={i}
            index={i}
            item={listItem}
            deleteItem={deleteListItem}
          />
         
        ))}
        <button  className="clear"onClick={clearAllTodos}>clear all</button>
      </div>
    </div>
  );
}

export default App;
