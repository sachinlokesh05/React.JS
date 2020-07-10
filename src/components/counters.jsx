import React, { Component } from 'react'
import Counter from './counter'
class Counters extends Component {
    render() { 
        const { counters, onIncrement,onDelete,onReset} = this.props;
        return ( 
            <div>
            <button className="btn btn-primary btn-lg m2" 
            onClick={onReset} 
            >Reset
            </button>
            { counters.map(counter => (
            < Counter key={counter.id}
                    onIncrement={onIncrement} 
                    onDelete={onDelete} 
                    counter={counter} 
            /> 
             ) )}
            </div>
        );
    }
}
 
export default Counters;