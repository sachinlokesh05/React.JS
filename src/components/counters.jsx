import React, { Component } from 'react'
import Counter from './counter'
class Counters extends Component {
    render() { 
        return ( 
            <div>
            <button className="btn btn-primary btn-lg m2" 
            onClick={this.props.onReset} 
            >Reset
            </button>
            {this.props.counters.map(counter => (
            < Counter key={counter.id}
                    onIncrement={this.props.onIncrement} 
                    onDelete={this.props.onDelete} 
                    counter={counter} 
            /> 
             ) )}
            </div>
        );
    }
}
 
export default Counters;