import React, { Component } from 'react'
import { Button } from 'react-bootstrap';


class Counter extends Component {
    state = { count : 3}

    render() { 
        
        return (<React.Fragment><span style={ {fontSize:20 }} className={this.getBadgeClasses() } >{this.formatCount()}</span><Button variant="dark m-2 " size="md">
        Small button
        </Button></React.Fragment>);
    }
    getBadgeClasses() {
        let classes = "badge m-3 badge-";
        classes += this.state.count === 0 ? "warning" : "primary";
        return classes;
    }

    formatCount (){
        const {count} = this.state;
        return count === 0 ? "Zero" : count;
    };
}
 
export default Counter;     