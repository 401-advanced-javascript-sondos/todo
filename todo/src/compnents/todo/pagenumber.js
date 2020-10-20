import React, { useContext } from 'react';
import { PanginationContext } from '../../cotext/pangination';
import { Button, Form, Card } from 'react-bootstrap';


function InputPage() {

    const content = useContext(PanginationContext);

    const handdelSubmit = (e) => {
        console.log('itemsnumber', e.target.value)
        content.setitems(e.target.value);
    }

 

    return (
        <>
         

            <Form.Label>
                {/* <span>Assigned To</span> */}
                <Form.Control type="number" name="number of item" placeholder="number of item" onChange={handdelSubmit} />
            </Form.Label>


        </>

    )

};

export default InputPage;