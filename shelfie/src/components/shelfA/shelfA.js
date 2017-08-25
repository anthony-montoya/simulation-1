import React, { Component } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

class ShelfA extends Component {
    constructor(){
        super();
        this.state = {
            shelf: []
        }
    }
    componentDidMount(){
        axios.get('http://localhost:3002/api/getShelfData?letter=' + 'A').then(res => {
            this.setState({
                shelf: res.data
            })
        })
    }
    
    render(){
        let shelves = this.state.shelf.map((bin, i) =>{
            return(
                <ul key={i} className="bins">
                    <Link to={`/A/binA${bin.id}`}>
                    <button className= "binButton">{bin.id}</button>
                    </Link>
                </ul>
            )
        });
        return(
            <div>
                <h4>Shelf A</h4>
                { shelves }
            </div>
        )
    }
}
export default ShelfA;