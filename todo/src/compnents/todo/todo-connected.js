import React, { useEffect, useState } from 'react';
import { Container, Navbar, Col, Row } from 'react-bootstrap';
import TodoForm from './form.js';
import TodoList from './list.js';
import useAjax from '../../hooks/useAjax'

import './todo.scss';
import ToggelIem from '../../cotext/show';
import ToggelContent from './toggel.js';
import PanginationContext from '../../cotext/pangination';
import InputPage from './pagenumber';
import PaginationContent from './pagination';




const ToDo = () => {


  const [_addItem, _toggleComplete, _getTodoItems, _deleteItem, list] = useAjax();


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

         
            <ToggelIem list={list} >
            <PanginationContext list={list}>
              <div>
                <Row className="toggel">

                  <Col>
                    <Col>
                      <InputPage />
                    </Col>
                    <Col>
                      <ToggelContent />
                    </Col>

                  </Col>
                  <Col>

                    <TodoList
                      list={list}
                      handleComplete={_toggleComplete}
                      handleDelete={_deleteItem}
                    />
                  </Col>
                  <div className='Pagination'>
              <PaginationContent totalItems={list.length}/>
            </div >
                </Row>
              </div>
             

          </PanginationContext>

            </ToggelIem>

           
        </section>
      </Container>

    </>
  );
};

export default ToDo;
