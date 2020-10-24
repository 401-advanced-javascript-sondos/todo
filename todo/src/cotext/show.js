import React from 'react';

export const ToggelContext = React.createContext();

class ToggelIem extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            status: 'hide',
            toggelStatus: this.toggelStatus,
        };

    }

    toggelStatus = () => this.setState({ status: this.state.status == 'show' ? 'hide' : 'show' })

    render() {
        return (
            <ToggelContext.Provider value={this.state} >
                {this.props.children}
            </ToggelContext.Provider>
        )
    }
};

export default ToggelIem;