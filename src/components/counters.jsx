import React, { Component } from 'react'
import Counter from './counter'
class Counters extends Component {
    state = {  counter:[
        { id:1,value:4},
        { id:2,value:0},
        { id:3,value:0},
        { id:4,value:0}
    ]  };

    handleDelete = counterId => {
        const counter = this.state.counter.filter(c => c.id !== counterId );
        this.setState({counter});
        
    };
    render() { 
        return ( 
            <div>
            {this.state.counter.map(counter => 
            <Counter key={counter.id} onDelete={this.handleDelete} value={counter.value} id={counter.id} >
            </Counter>)}
            </div>
        );
    }
}
 
export default Counters;