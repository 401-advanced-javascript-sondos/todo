import React from 'react';
// import { useState } from 'react';
import { Button, Form, Card } from 'react-bootstrap';
import useForm from '../../hooks/useForm';
import Auth from '../../auth/auth';



function TodoForm(props) {

  const [handleSubmit, handleChange, values] = useForm(todoForm)


  function todoForm(item) {
    props.handleSubmit(item)
    console.log('item', item)
  }


  return (
    <>

      <Card style={{ width: '18rem' }}>
        <Card.Body>
          <h3>Add Item</h3>
          <Form onSubmit={handleSubmit}>

              <Form.Label>
                <span>To Do Item</span>
                <Form.Control name="text"
                  placeholder="Add To Do List Item"
                  onChange={handleChange} />
              </Form.Label>

            <Form.Label>
              <span>Difficulty Rating</span>
              <Form.Control defaultValue="1" type="range" min="1" max="5" name="difficulty" onChange={handleChange} />
            </Form.Label>

            <Form.Label>
              <span>Assigned To</span>
              <Form.Control type="text" name="assignee" placeholder="Assigned To" onChange={handleChange} />
            </Form.Label>

            <Button variant="primary" type='submit'> Add Item </Button>
          </Form>
        </Card.Body>
      </Card>

    </>
  );

}


export default TodoForm;