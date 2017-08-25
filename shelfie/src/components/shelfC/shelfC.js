import React, { Component } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

class ShelfC extends Component {
    constructor(){
        super();
        this.state = {
            shelf: []
        }
    }
    componentDidMount(){
        axios.get('http://localhost:3002/api/getShelfData?letter=' + 'C').then(response => {
            this.setState({
                shelf: response.data
            })
        })
    }
    render(){
        let shelves = this.state.shelf.map((bin, i) =>{
            return(
                <ul key={i} className="bins">
                    <Link to={`/C/binC${bin.id}`}>
                    <button className= "binButton">{bin.id}</button>
                    </Link>
                </ul>
            )
        });
        return(
            <div>
                <h4>Shelf C</h4>
                { shelves }
            </div>
        )
    }
}
export default ShelfC;