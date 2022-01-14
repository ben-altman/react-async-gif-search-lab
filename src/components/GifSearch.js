import React, { Component } from 'react'

export default class GifSearch extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             query: ''
        }
    }
    
    handleChange = (event) => {
        this.setState({
            query: event.target.value
        })
    }


    render() {
        return (
            <div>
                <form onSubmit={event => this.props.handleOnSubmit(event, this.state.query)}>
                    <h3>What do you want to find?</h3>
                    <input type="text"
                        onChange={this.handleChange}
                        value={this.state.query} />
                    <button type="submit" >Get Gifs</button>
                </form>
            </div>
        )
    }
}
