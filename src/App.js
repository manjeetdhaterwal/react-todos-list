import './App.css';
import Header from './myComponent/Header';
import { AddItems } from './myComponent/AddItems';
import { TodosList } from './myComponent/TodosList';
import { Footer } from './myComponent/Footer';
import { About } from './myComponent/About';
import React, { useState, useEffect } from 'react';
import {
  Router,
  Routes,
  Route,
  Link,
  Outlet,
} from "react-router-dom";

// https://randomuser.me/api/ - random api

function App() {
  let inittodo;
  if (localStorage.getItem("todos") === null) {
    inittodo = [];
  }
  else {
    inittodo = JSON.parse(localStorage.getItem("todos"));
  }

  const onDelete = (todo) => {
    console.log("deleting", todo);

    setTodos(todos.filter((e) => {
      return e !== todo;
    }))
  }

  const addItem = (title, desc) => {
    let sno;
    {
      todos.length !== 0 ?
      sno = todos[todos.length - 1].Sno + 1 : sno = 1
    }
    const newItem =
    {
      Sno: sno,
      title: title,
      desc: desc
    }

    setTodos([...todos, newItem]);
    // console.log(todos)
  }

  const [todos, setTodos] = useState(inittodo);

  // On changing array todos, it will run automatically.
  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos])

  return (
    // <>hello world !! {myVar}
    <>
      
      <Header title="My TODOs List" />
      <AddItems AddItem={addItem} />
      <TodosList Todos={todos} onDelete={onDelete} />
      <Footer />

      {/* <Router>
      <Header title="My TODOs List" />
        <Routes>
          <Route exact path="/" render={() => {
            return (<>
              <AddItems AddItem={addItem} />
              <TodosList Todos={todos} onDelete={onDelete} />
            </>)
          }}>
          </Route>

          <Route exact path="/about">
            <About />
          </Route>
          
        </Routes>
        <Footer />
      </Router> */}
      
    </>



  );
}

export default App;
