import React from 'react';
// import {useState} from 'react';
import { ListGroup, Navbar, Nav, Col, Row } from 'react-bootstrap';



function TodoList(props) {

  console.log('lisiprop', props.list)
  return (
    <ListGroup>
      {props.list.map(item => (

        <Nav >
          <ListGroup.Item
            // className={`complete-${item.complete.toString()}`}
            key={item._id}>

            <Row className='firstRow'>
              <Col key={item._id} className={`complete-${item.complete.toString()}`} onClick={() => props.handleComplete(item._id)} >
                <span>
                  {`${item.complete}`? 'complete' : 'pending'}
      
                </span>
              </Col>

              <Col>
                {item.assignee}
              </Col>

              <Col className='end'>
                < button onClick={() => props.handleDelete(item._id)} >
                  x</button>
              </Col>
            </Row>

            <Row>
              <Col md="auto" className="textItem">
                <span>
                  {item.text}
                </span>
              </Col>
              <Col md={{ span: 9, offset: 3 }} className='end'>
                <span className='end'>
                  Difficulty:  {item.difficulty}
                </span>
              </Col>
            </Row>

          </ListGroup.Item>
        </Nav>


      ))}
    </ListGroup>
  );

}

export default TodoList;