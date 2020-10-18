import React from 'react';
// import {useState} from 'react';
import { ListGroup } from 'react-bootstrap';

function TodoList (props){


  return (
    <ListGroup>
      {props.list.map(item => (
        <ListGroup.Item
          className={`complete-${item.complete.toString()}`}
          key={item._id}>
          <span onClick={() => props.handleComplete(item._id)}>
            {item.text}
          </span>
        </ListGroup.Item>
      ))}
    </ListGroup>
  );

}

export default TodoList;