import React , {useContext} from 'react';
// import {useContext} from 'react';
import { ListGroup, Nav } from 'react-bootstrap';

import {ToggelContext} from '../../cotext/show';
import {PanginationContext} from '../../cotext/pangination';
// import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import 'bootstrap/dist/css/bootstrap.min.css';




function TodoList(props) {

  console.log('lisiprop', props.list);

const toggelContext=useContext(ToggelContext);
console.log('toggel',toggelContext)
const pangination=useContext(PanginationContext);


  return (
    <ListGroup>
      
      {pangination.currentItems.map(item => (

        <Nav >
          <ListGroup.Item
            className={`complete-${item.complete}-${toggelContext.status}`}
            key={item._id}>

            <Row className = {`firstRow`} >

              <Col key={item._id} className={`complete-${item.complete}`} onClick={() => props.handleComplete(item._id)} >
                  {item.complete? 'complete':'pending'}
              </Col>

              <Col  md="auto">
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