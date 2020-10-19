import React, { useEffect, useState } from 'react';
import { Container, Navbar } from 'react-bootstrap';
import TodoForm from './form.js';
import TodoList from './list.js';
import useAjax from '../../hooks/useAjax'

import './todo.scss';

// const todoAPI = 'https://api-js401.herokuapp.com/api/v1/todo';
// const todoAPI = 'https://restyserver.herokuapp.com/';

const ToDo = () => {


  const [_addItem, _toggleComplete, _getTodoItems, _deleteItem, list] = useAjax();
  // const [list, setList] = useState([]);

  // const _addItem = (item) => {
  //   item.due = new Date();
  //   fetch(todoAPI, {
  //     method: 'post',
  //     mode: 'cors',
  //     cache: 'no-cache',
  //     headers: { 'Content-Type': 'application/json' },
  //     body: JSON.stringify(item)
  //   })
  //     .then(response => response.json())
  //     .then(savedItem => {
  //       setList([...list, savedItem])
  //     })
  //     .catch(console.error);
  // };

  // const _toggleComplete = id => {

  //   let item = list.filter(i => i._id === id)[0] || {};

  //   if (item._id) {

  //     item.complete = !item.complete;

  //     let url = `${todoAPI}/${id}`;

  //     fetch(url, {
  //       method: 'put',
  //       mode: 'cors',
  //       cache: 'no-cache',
  //       headers: { 'Content-Type': 'application/json' },
  //       body: JSON.stringify(item)
  //     })
  //       .then(response => response.json())
  //       .then(savedItem => {
  //         setList(list.map(listItem => listItem._id === item._id ? savedItem : listItem));
  //       })
  //       .catch(console.error);
  //   }
  // };

  // const _getTodoItems = () => {
  //   fetch(todoAPI, {
  //     method: 'get',
  //     mode: 'cors',
  //   })
  //     .then(data => data.json())
  //     .then(data => setList(data.results))
  //     .catch(console.error);
  // };


  // useEffect(() => {
  //   let list = [
  //     { _id: 1, complete: false, text: 'Clean the Kitchen', difficulty: 3, assignee: 'Person A' },
  //     { _id: 2, complete: false, text: 'Do the Laundry', difficulty: 2, assignee: 'Person A' },
  //     { _id: 3, complete: false, text: 'Walk the Dog', difficulty: 4, assignee: 'Person B' },
  //     { _id: 4, complete: true, text: 'Do Homework', difficulty: 3, assignee: 'Person C' },
  //     { _id: 5, complete: false, text: 'Take a Nap', difficulty: 1, assignee: 'Person B' },
  //   ];

  //   setList(list);
  //   console.log('list', list);

  //   document.title = `list:${list.filter((item) => !item.complete).length}`

  // }, [])

  
  useEffect(() => {
    document.title = `list:${list.filter((item) => !item.complete).length}`
  }, [list])




  useEffect(_getTodoItems, []);

  return (
    <>

      <Container className="contanier">

        <Navbar bg="primary" variant="dark" id="home">
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
            <TodoForm handleSubmit={_addItem} />
          </div>

          <div>
            <TodoList
              list={list}
              handleComplete={_toggleComplete}
              handleDelete={_deleteItem}
            />
          </div>
        </section>
        </Container>
    </>
  );
};

export default ToDo;
