import React, { useContext } from 'react';
import { PanginationContext } from '../../cotext/pangination';
import './todo.scss'

const PaginationContent = ({ totalItems }) => {

    const context = useContext(PanginationContext);
    const Numbersofpage = [];

    for (let i = 1; i <= Math.ceil(totalItems / context.itemIn); i++) {
        Numbersofpage.push(i);
    };

console.log('current',Numbersofpage)

    return (
        <div>
            <ul className='Pagination'>


                <li>
                    <a onClick={context.current > 1 ? () => context.paginate(context.current--) : () => context.paginate(context.current)}>
                        previous
        </a>
                </li>



                {Numbersofpage.map(page => (
                    <li key={page} >
                        <a onClick={() => context.paginate(page)}>
                            {page}
                        </a>
                    </li>
                ))}


                <li>
                    
                    <a onClick={context.current > 1 ? () => context.paginate(context.current++) : () => context.paginate(context.current)}>
                        Next
        </a>

                </li>
            </ul>

        </div>


    )



}

export default PaginationContent;