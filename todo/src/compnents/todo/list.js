import React, { useContext } from 'react';
import { ListGroup, Nav, Toast, Badge, } from 'react-bootstrap';
import { ToggelContext } from '../../cotext/show';
import { PanginationContext } from '../../cotext/pangination';
// import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import 'bootstrap/dist/css/bootstrap.min.css';
import Auth from '../../auth/auth'
import { LoginContext } from '../../auth/cotext';
import InputPage from './pagenumber';
import ToggelContent from './toggel.js';
import './todo.scss';



function TodoList(props) {

  console.log('lisiprop', props.list);

  const toggelContext = useContext(ToggelContext);
  console.log('toggel', toggelContext)
  const pangination = useContext(PanginationContext);
  const loginContext = useContext(LoginContext);
  const badgeCursor = loginContext.can('update') ? 'pointer' : 'default';

  return (
    // <ListGroup>
    <>

      <Col>
        <InputPage />
      </Col>
      <Col>
        <ToggelContent />
      </Col>

      {/* </Row> */}
      {pangination.currentItems.map(item => (



        <Toast className={`complete-${item.complete}-${toggelContext.status}`}
        // key={item._id} style={{position: 'relative'}} onClick={() => props.handleDelete(item._id)}
        >
          <Toast
            key={item._id}
            onClose={() => loginContext.can('delete') && props.handleDelete(item._id)}
            style={{ position: 'relative' }}
          >

            <Toast.Header >
              <Auth capabilty="read">
                <Badge
                  pill
                  className={`complete-${item.complete}`}
                  //  onClick={() => props.handleComplete(item._id)}
                  style={{ marginRight: '15px', cursor: badgeCursor }}
                  onClick={() => loginContext.can('update') && props.handleComplete(item._id)}
                  variant={item.complete ? 'danger' : 'success'}
                >
                  {item.complete ? 'Complete' : 'Pending'}
                </Badge>
              </Auth>
              <strong className="mr-auto">{item.assignee}</strong>
            </Toast.Header>

            <Toast.Body>
              {item.text}
            </Toast.Body>

            <small style={{ position: 'absolute', bottom: 5, right: 5 }}>Difficulty: {item.difficulty}</small>
          </Toast>

        </Toast>

      ))}
    </>
  );

}

export default TodoList;

