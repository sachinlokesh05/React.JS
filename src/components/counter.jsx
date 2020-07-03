import React, { Component } from 'react'
import { Button } from 'react-bootstrap';
// import {Alert } from 'react-bootstrap';

class Counter extends Component {
    state = { count : 3,
    
        tags : ['tag1','tag2','tag3']
    
    }

    renderTags(){
        if (this.state.tags.length === 0 ) return <h3>There are no tags!</h3>;

        return  <ul>{this.state.tags.map(tag => <li key={tag} >{tag}</li> )}</ul>

    }
    handleIncrement(){
        console.log("Increment Cliked");
        
    }

    render() { 
        
    
        return (<React.Fragment>
            <span style={ {fontSize:20 }} className={this.getBadgeClasses() } >{this.formatCount()}</span>
            <Button  onClick={this.handleIncrement} variant="dark m-2 " size="md">
            Small button
            </Button>
            {/* {this.state.tags.length === 0  && <Alert variant="info m-2  " > <h3>Please Create a new tags!!</h3> </Alert>} */}
            {/* <Alert variant="danger m-2  " > {this.renderTags()} </Alert> */}
            
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