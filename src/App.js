import React, { Component } from 'react';
import './App.css';
import Navbar from './components/navBar'
import Counters from "./components/counters"

class App extends Component {

  state = {  counters:[
    { id:1,value:0},
    { id:2,value:0},
    { id:3,value:0},
    { id:4,value:0}
    ]  };

    constructor(){
        super();
        console.log(" App - Constructor ");
        
    }

    componentDidMount ()  {
      //Ajax class
      console.log(" App - Mount");
      
    } ;

    handleDelete = counterId => {
        const counters = this.state.counters.filter(c => c.id !== counterId );
        this.setState({counters});
        
    };

    handleIncrement = counter => {
        const counters = [...this.state.counters];
        const index = counters.indexOf(counter);
        counters[index] = {...counter};
        counters[index].value++;        
        this.setState({counters});

    };

    handleReset = () => {
        const counters = this.state.counters.map(c => {
            c.value = 0;
            return c ;
        });
        this.setState({counters});
    }

render(){
  
  console.log(" App - Rendered");

  return (
    <React.Fragment>
    <Navbar totalCounters={this.state.counters.filter(c => c.value > 0).length}/>
    <main className="container">
      <Counters
      onIncrement={this.handleIncrement} 
      onDelete={this.handleDelete} 
      onReset={this.handleReset}
      counters={this.state.counters} 
      />
    </main>
    </React.Fragment> 
  );
}
}
export default App;
