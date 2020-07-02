import React, { Component } from 'react'
import { Button } from 'react-bootstrap';
import {Alert } from 'react-bootstrap';

class Counter extends Component {
    state = { count : 3,
    
        tags : []
    
    }

    renderTags(){
        if (this.state.tags.length === 0 ) return <h3>There are no tags!</h3>;

        return  <ul>{this.state.tags.map(tag => <li key={tag} >{tag}</li> )}</ul>

    }

    render() { 
        
    
        return (<React.Fragment>
            {this.state.tags.length === 0  && <Alert variant="info m-2  " > <h3>Please Create a new tags!!</h3> </Alert>}
            <Alert variant="danger m-2  " > {this.renderTags()} </Alert>
        </React.Fragment>);
    }
}
 
export default Counter;     