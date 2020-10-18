import React from 'react'
import { render, waitFor, screen, fireEvent } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect';
import TodoList from '../compnents/todo/list';


// describe('app tests', async(done) => {
    test('will add a new to do list item to the screen that is incomplete', async(done) => {

        const list = [{
            'text': 'end',
            'name': 'student',
            'range': '1',
            'complete': 'true',
        }];

        // render(<App />);
        // const toDoListInput = screen.getByPlaceholderText('Add To Do List Item');
        // fireEvent.change(toDoListInput, { target: { value: 'Go Jogging' } })
        // const button = screen.getAllByRole('button').filter(button => {
        //     return button.type === 'submit'
        // });
        render(<TodoList list={list}/>)
        // fireEvent.click(button[0]);
        const out=screen.getAllByRole('ListGroupItem');
        expect(out[0]).toHaveTextContent('end');
        expect(out[1]).toHaveTextContent('student')
        done();

        // expect(screen.getByText('Go Jogging')).toBeTruthy();
        // expect(screen.getByText('Go Jogging')).toHaveClass('list-group-item-success')
    });
// });