import React, { Component } from 'react'
// import { Button } from 'react-bootstrap';
// import {Alert } from 'react-bootstrap';

class Counter extends Component {
    state = { count : this.props.counter.value
        };
    // constructor(){
    //     super();
    //     this.handleIncrement = this.handleIncrement.bind(this);
    // }
    // renderTags(){
    //     if (this.state.tags.length === 0 ) return <h3>There are no tags!</h3>;

    //     return  <ul>{this.state.tags.map(tag => <li key={tag} >{tag}</li> )}</ul>

    // }

    handleIncrement = () => {
        this.setState({count:this.state.count + 1});           
    };

    // handleDelete = counterId => {
    //     console.log(counterId);
        
    // };

    // dohandleIncrement = () => {
    //     this.handleIncrement({id:1});
    // }

    render() {                 
        return (<React.Fragment>
            <h1>{this.props.counter.id}</h1>
            <span style={ {fontSize:20 }} className={this.getBadgeClasses() } >{this.formatCount()}</span>
            <button className="btn btn-dark btn-lg m-2" onClick={this.handleIncrement} >Increment</button>
            <button className="btn btn-danger btn-lg m-2" onClick={()=>this.props.onDelete(this.props.counter.id)} >Delete</button>
            {/* {this.state.tags.length === 0  && <Alert variant="info m-2  " > <h3>Please Create a new tags!!</h3> </Alert>} 
            <Alert variant="danger m-2  " > {this.renderTags()} </Alert>  */}
            
        </React.Fragment>);
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