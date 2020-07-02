import React, { Component } from 'react'
import { Button } from 'react-bootstrap';


class Counter extends Component {
    state = { count : 0}
    render() { 
    return (<React.Fragment><span  className="badge badge-primary m-3" >{this.formatCount()}</span><Button variant="dark" size="md">
    Small button
  </Button></React.Fragment>);
    }
    formatCount (){
        const {count} = this.state;
        return count === 0 ? <h5>Zero</h5> : count;
    };
}
 
export default Counter;     