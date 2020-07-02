import React, { Component } from 'react'
import { Button } from 'react-bootstrap';


class Counter extends Component {
    state = { count : 3,
    
        tags : ['tag1','tag2','tag3']
    
    }

    render() { 
        
        return (<React.Fragment><span style={ {fontSize:20 }} className={this.getBadgeClasses() } >{this.formatCount()}</span><Button variant="dark m-2 " size="md">
        Small button
        </Button>
        <ul>{this.state.tags.map(tag => <li key={tag} >{tag}</li> )}</ul>
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