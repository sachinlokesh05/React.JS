import React, { Component } from 'react'
// import { Button } from 'react-bootstrap';
// import {Alert } from 'react-bootstrap';

class Counter extends Component {
    render() {                 
        console.log(" Counter - Rendered ");

        return (<React.Fragment>
            <h1>{this.props.counter.id}</h1>
            <span style={ {fontSize:20 }} className={this.getBadgeClasses() } >{this.formatCount()}</span>
            <button 
            className="btn btn-dark btn-lg m-2"
            onClick={()=>this.props.onIncrement(this.props.counter)} >
                 Increment
                 </button>
            <button 
            className="btn btn-danger btn-lg m-2" 
            onClick={()=>this.props.onDelete(this.props.counter.id)} >
                Delete
                </button>
        </React.Fragment>);
    }
    getBadgeClasses() {
        let classes = "badge m-3 badge-";
        classes += this.props.counter.value === 0 ? "warning" : "primary";
        return classes;
    }
    formatCount (){
        const {value} = this.props.counter;
        return value === 0 ? "Zero" : value;
    }
}
 
export default Counter;     