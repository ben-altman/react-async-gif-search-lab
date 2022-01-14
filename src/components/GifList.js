import React, { Component } from 'react'

export default class GifList extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             
        }
    }
    
    showGifs = (data) => {
        return data.map(gif => 
            <li key={gif.id}><img src={gif.images.original.url} alt='' /></li>
        )
    }

    render() {
        return (
            <div>
                <ul>
                    {this.showGifs(this.props.gifData)}
                </ul>
            </div>
        )
    }
}
