import React, { Component } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

class ShelfD extends Component {
    constructor(){
        super();
        this.state = {
            shelf: []
        }
    }
    componentDidMount(){
        axios.get('http://localhost:3002/api/getShelfData?letter=' + 'D').then(response => {
            this.setState({
                shelf: response.data
            })
        })
    }
    render(){
        let shelves = this.state.shelf.map((bin, i) =>{
            return(
                <ul key={i} className="bins">
                    <Link to={`/D/binD${bin.id}`}>
                    <button className= "binButton">{bin.id}</button>
                    </Link>
                </ul>
            )
        });
        return(
            <div>
                <h4>Shelf D</h4>
                { shelves }
            </div>
        )
    }
}
export default ShelfD;