import './TodoItem.css';

function TodoItem(props) {
  return (
    <div className="col-sm-6 mx-auto text-white row">
        <li className="text-center shadow p-2 my-2 col-sm-9">{props.addTodo.title}</li> 
        <button className="btn btn-danger my-2 col-sm-2 offset-1" onClick={()=>props.removeTodo(props.addTodo)}>X</button>   
    </div>
  );
}

export default TodoItem;
