import React from 'react';
import { useEffect, useState } from 'react';
import TodoForm from './form.js';
import TodoList from './list.js';
import { Container, Navbar } from 'react-bootstrap';
import './todo.scss';

function ToDo(props) {
  const [list, setList] = useState([]);

  const addItem = (item) => {
    item._id = Math.random();
    item.complete = false;
    setList([...list, item]);
    console.log('llll',list)
  };



  const toggleComplete = id => {

    let item = list.filter(i => i._id === id)[0] || {};

    if (item._id) {
      item.complete = !item.complete;
      let mylist = list.map(listItem => listItem._id === item._id ? item : listItem);
      setList(mylist);
    }

  };


  useEffect(() => {
    let list = [
      { _id: 1, complete: false, text: 'Clean the Kitchen', difficulty: 3, assignee: 'Person A' },
      { _id: 2, complete: false, text: 'Do the Laundry', difficulty: 2, assignee: 'Person A' },
      { _id: 3, complete: false, text: 'Walk the Dog', difficulty: 4, assignee: 'Person B' },
      { _id: 4, complete: true, text: 'Do Homework', difficulty: 3, assignee: 'Person C' },
      { _id: 5, complete: false, text: 'Take a Nap', difficulty: 1, assignee: 'Person B' },
    ];

    setList(list);
    console.log('list', list);

    document.title = `list:${list.filter((item) => !item.complete).length}`

  }, [])


  useEffect(() => {
    document.title = `list:${list.filter((item) => !item.complete).length}`
  }, [list])


  return (
    <>
      <Container className="contanier">

        <Navbar bg="primary" variant="dark"  id="home">
        <h2>
        <Navbar.Brand href="#home" >Home</Navbar.Brand>
        </h2>  
        </Navbar>


         <Navbar bg="primary" variant="dark" id="itemNumber" >
          <h2>
            <Navbar.Brand>
              There are {list.filter((item) => !item.complete).length} Items To Complete

          </Navbar.Brand>
          </h2>
          </Navbar>

       

        <section className="todo">

          <div>
            <TodoForm handleSubmit={addItem} />
          </div>

          <div>
            <TodoList
              list={list}
              handleComplete={toggleComplete}
            />
          </div>
        </section>
      </Container>
    </>
  );


}



export default ToDo;