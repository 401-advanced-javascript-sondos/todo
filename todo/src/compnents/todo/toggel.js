import React from 'react';
import { Button } from 'react-bootstrap';

import { ToggelContext } from '../../cotext/show';

class ToggelContent extends React.Component {

    static contextType = ToggelContext;

    render() {

console.log('toggel',this.context.toggelStatus)
        return (

            <>
            
                <Button variant="primary" type='submit' onClick={this.context.toggelStatus} className="buttonShow">
                    {this.context.status} completed Items
                </Button>
             
            </>

        )

    }

}

export default ToggelContent;