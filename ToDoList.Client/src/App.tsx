import React, { useState } from 'react';
import './App.css';
import AddModal from './components/AddModal';
import { ToDo } from './model';
import ToDoList from './components/ToDoList';
import { DragDropContext, DropResult } from 'react-beautiful-dnd'
import Create from './components/api/Create';
import Update from "./components/api/Update";
import { v4 } from "uuid";

const App: React.FC = () => {

  const [todo, setTodo] = useState<string>("");
  const [description, setDesc] = useState<string>("");
  const [todos, setTodos] = useState<ToDo[]>([]);
  const [inProgressTasks, setInProgressTasks] = useState<ToDo[]>([]);
  const [doneTasks, setDoneTasks] = useState<ToDo[]>([]);

  const handleAdd = async (e: React.FormEvent) => {
    e.preventDefault();

      if (todo) {
          let id = await Create("0", todo, (todos.length + 1).toString(), description);
        setTodos([...todos, { id: id, orderId: "0", name: todo, state: 0, description: description }])
      console.log(id)
      setDesc("")
      setTodo("")
    }
    };

    const onDragStart = () => {

    }

  const onDragEnd = (result: DropResult) => {
    const {source, destination} = result;
    if(!destination 
      || (destination.droppableId === source.droppableId 
      && destination.index === source.index)) 
        return;

      console.log(source.droppableId);
      console.log(destination.droppableId);
    let add,
    fresh = todos,
    active = inProgressTasks,
    done = doneTasks;

    if(source.droppableId === 'newTodos'){
      add = fresh[source.index];
      fresh.splice(source.index, 1);
    } else if(source.droppableId === 'inProgressTodos') {
      add = active[source.index];
      active.splice(source.index, 1);
    }
    else {
      add = done[source.index];
      done.splice(source.index, 1);
    }

    if(destination.droppableId === 'newTodos'){
        add.state = 0;
        Update(add.id, "0", add.name, add.description, add.state, true);
      fresh.splice(destination.index, 0, add);
    } else if(destination.droppableId === 'inProgressTodos') {
        add.state = 1;
        Update(add.id, "0", add.name, add.description, add.state, true);
      active.splice(destination.index, 0, add);
    }
    else {
        add.state = 2;
        Update(add.id, "0", add.name, add.description, add.state, true);
      done.splice(destination.index, 0, add);
    }

    setTodos(fresh);
    setInProgressTasks(inProgressTasks);
    setDoneTasks(doneTasks);
  };

  return (

      <DragDropContext onDragEnd={onDragEnd} onDragStart={onDragStart}>
      <div className="App">
        <div className='header'>
          <h1 className="heading_text">To do list</h1>
        </div>
      <AddModal todo={todo} setTodo = {setTodo} description={description} setDesc = {setDesc} handleAdd ={handleAdd}/>
      <ToDoList todos={todos} setTodos={setTodos}
        inProgressTodos={inProgressTasks} setInProgressTodos={setInProgressTasks}
        doneTodos = {doneTasks} setDoneTodos = {setDoneTasks}/>
      </div>
    </DragDropContext>
    
  );
}

export default App;
