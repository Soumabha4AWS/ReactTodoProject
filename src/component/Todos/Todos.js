import './Todos.css';
import TodoItem from '../TodoItem/TodoItem';
import React, { useState } from 'react';


function Todos() {

  let [todo, setTodo] = useState({});
  let [todoArray, setTodoArray] = useState([]);

  const changeTodo = e => {
    setTodo({
      serialNo: Math.random(),
      title: e.target.value,
      desc: e.target.value,
      active: true
    });
  }

  const plusTodo = () => {
    setTodoArray([...todoArray, todo]);
  }


  const deleteTodo = (todo) => {
    console.log("todo :- ",todo);
    const indexOfArray = todoArray.indexOf(todo);
    console.log("indexOfArray :- ",indexOfArray);
    setTodoArray(todoArray.filter((element,index) => {return index !== indexOfArray}));
    console.log("todoArray :- ",todoArray);
  }

  return (
    <div className="container-fluid my-5">
      <div className="row">
        <div className="col-sm-6 mx-auto text-white shadow-lg p-3">
          <h3 className="text-center">ToDo to be added</h3>
          <div className="row">
            <div className="col-9">
              <input type="text" className="form-control" placeholder="Write Your Plan Here" onBlur={changeTodo} ></input>
            </div>
            <div className="col-2">
              <button className="btn btn-warning px-3 font-weight-bold" onClick={plusTodo}>+</button>
            </div>
          </div>
        </div>
      </div>
      <div className="container-fluid my-4">
        <div className="row">
          <div className="col-sm-6 mx-auto text-white shadow-lg p-3">
            <h3 className="text-center">List of Todos</h3>
            <ul>              
              {todoArray.map((value,index)=>{
                return <TodoItem addTodo={value} key={index} removeTodo={deleteTodo}></TodoItem>
              })}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Todos;
