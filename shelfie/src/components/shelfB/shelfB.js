import React, { Component } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

class ShelfB extends Component {
    constructor(){
        super();
        this.state = {
            shelf: []
        }
    }
    componentDidMount(){
        axios.get('http://localhost:3002/api/getShelfData?letter=' + 'B').then(response => {
            this.setState({
                shelf: response.data
            })
        })
    }
    render(){
        let shelves = this.state.shelf.map((bin, i) =>{
            return(
                <ul key={i} className="bins">
                    <Link to={`/B/binB${bin.id}`}>
                    <button className= "binButton">{bin.id}</button>
                    </Link>
                </ul>
            )
        });
        return(
            <div>
                <h4>Shelf B</h4>
                { shelves }
            </div>
        )
    }
}
export default ShelfB;