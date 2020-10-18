import React from 'react';
import { useState } from 'react';
import { Button, Form,Card } from 'react-bootstrap';



function TodoForm(props) {


  const [item, setItem] = useState({});

  const handleInputChange = e => {
    // console.log('item',item);
    setItem({ ...item, [e.target.name]: e.target.value });
    // console.log('itemafter',item);

  };

  const handleSubmit = (e) => {
    e.preventDefault();
    e.target.reset();
    props.handleSubmit(item);
    // const item = {};
    setItem({ item });
    console.log('sub',item)
  };


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
            onChange={handleInputChange} />
        </Form.Label>

        <Form.Label>
          <span>Difficulty Rating</span>
          <Form.Control defaultValue="1" type="range" min="1" max="5" name="difficulty" onChange={handleInputChange} />
        </Form.Label>

        <Form.Label>
          <span>Assigned To</span>
          <Form.Control type="text" name="assignee" placeholder="Assigned To" onChange={handleInputChange} />
        </Form.Label>

        <button variant="primary"> Add Item </button>
      </Form>
     </Card.Body>
      </Card>
    </>
  );

}


export default TodoForm;