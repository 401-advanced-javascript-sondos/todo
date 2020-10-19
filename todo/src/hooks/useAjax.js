import React from 'react';
import { useState } from 'react';
import axios from 'axios';


// const todoAPI = 'https://restyserver.herokuapp.com/api/v1/todo/';
// const todoAPI = 'https://api-js401.herokuapp.com/api/v1/todo';
const todoAPI = 'https://amman-api-server.herokuapp.com/todo';


function useAjax() {

  const [list, setList] = useState([]);

  const _addItem = (item) => {
    item={text: "add", difficulty: "4", assignee: "delete" ,complete:false , difficulty:4}
    item.due = new Date();
    console.log('it',item)
    axios(todoAPI, {
      method: 'post',
      mode: 'cors',
      cache: 'no-cache',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(item)
    })
      // .then(response => response.json())
      .then(savedItem => {
        // console.log('saved',savedItem.data)
        setList([...list, savedItem.data])
        // console.log('list',list)

      })
      .catch(console.error);
  };


  const _toggleComplete = id => {
console.log(id)
    let item = list.filter(i => i._id === id)[0] || {};
    console.log('itemid',item)

    if (item._id) {

      item.complete = !item.complete;
     
      let url = `${todoAPI}/${id}`;

      axios(url, {
        method: 'put',
        mode: 'cors',
        cache: 'no-cache',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(item)
      })
        // .then(response => response.json())
        .then(savedItem => {
          console.log('saved',savedItem.data)
          console.log('list',list.map(listItem => listItem._id === item._id ? savedItem.data : listItem))

          setList(list.map(listItem => listItem._id == item._id ? savedItem.data : listItem));
          // console.log('list',list)


        })
        .catch(console.error);
    }
  };

  const _getTodoItems = () => {
    axios(todoAPI, {
      method: 'get',
      mode: 'cors',
    })
      // .then(data => data.json())
      .then(data => {
        console.log('data', data)
        setList(data.data.results)
      })
      .catch(console.error);

  };

  const _deleteItem = id => {

    let item = list.filter(i => i._id === id)[0] || {};
    console.log('it',item._id)

    let url = `${todoAPI}/${id}`;

    axios(url, {
      method: 'delete',
      mode: 'cors',
      cache: 'no-cache',
      headers: { 'Content-Type': 'application/json' },
    })
      // .then(response => response.json())
      .then(savedItem => {
        console.log('saved',savedItem)
        setList(list.map(listItem => listItem._id != item._id ));
        _getTodoItems()
      })
      .catch(console.error);
  }


  return [_addItem, _toggleComplete, _getTodoItems, _deleteItem, list];


};

export default useAjax;