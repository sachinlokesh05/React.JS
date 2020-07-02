import React, { Component } from 'react'
import { Button } from 'react-bootstrap';


class Counter extends Component {
    state = { count : 0}

    styles = {
        fontSize : 20,
        fontWeight: "bold"
    };
    render() { 
    return (<React.Fragment><span style={ this.styles } className="badge badge-primary m-2" >{this.formatCount()}</span><Button variant="dark m-2 " size="md">
    Small button
  </Button></React.Fragment>);
    }
    formatCount (){
        const {count} = this.state;
        return count === 0 ? "Zero" : count;
    };
}
 
export default Counter;     