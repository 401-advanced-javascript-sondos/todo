import React, { useEffect, useState } from 'react';
import { Container, Navbar, Col, Row } from 'react-bootstrap';
import TodoForm from './form.js';
import TodoList from './list.js';
import useAjax from '../../hooks/useAjax'

import './todo.scss';
import ToggelIem from '../../cotext/show';
// import ToggelContent from './toggel.js';
import PanginationContext from '../../cotext/pangination';
// import InputPage from './pagenumber';
import PaginationContent from './pagination';
import Auth from '../../auth/auth';




const ToDo = () => {


  const [_addItem, _toggleComplete, _getTodoItems, _deleteItem, list] = useAjax();


  useEffect(() => {
    document.title = `list:${list.filter((item) => !item.complete).length}`
  }, [list])




  useEffect(_getTodoItems, []);

  return (
    <>
      <Container className="contanier">



        <Auth capability="read">
          <Navbar bg="primary" variant="dark" id="itemNumber" >
            <h2>
              <Navbar.Brand>
                There are {list.filter((item) => !item.complete).length} Items To Complete

          </Navbar.Brand>
            </h2>
          </Navbar>
        </Auth >

        <section className="todo">
          <Auth capability="create">
            <Col>
              <div>
                <TodoForm handleSubmit={_addItem} />
              </div>

            </Col>
          </Auth >

          <Col>
            <ToggelIem list={list} >
              <PanginationContext list={list}>
                <div>
                  <Row className="toggel">

                    {/* <Row> */}
                      {/* <Col>
                        <InputPage />
                      </Col>
                      <Col>
                        <ToggelContent />
                      </Col> */}
{/* 
                    </Row> */}
                    <Col>

                      <TodoList
                        list={list}
                        handleComplete={_toggleComplete}
                        handleDelete={_deleteItem}
                      />
                      {/* </Col> */}
                      {/* <Col> */}
                      <div className='Pagination'>
                        <PaginationContent totalItems={list.length} />
                      </div >
                    </Col>
                  </Row>
                </div>


              </PanginationContext>

            </ToggelIem>
          </Col>

        </section>
      </Container>

    </>
  );
};

export default ToDo;
