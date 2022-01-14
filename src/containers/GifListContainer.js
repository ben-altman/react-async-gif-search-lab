import React, { Component } from 'react'

import GifList from '../components/GifList'
import GifSearch from '../components/GifSearch'

class GifListContainer extends Component {
    state = {
        gifData: []
    }


    // https://api.giphy.com/v1/gifs/search?q=YOUR-QUERY-HERE&api_key=API-KEY&rating=g

    handleSubmit = (event, value) => {
        event.preventDefault()
        // console.log(value)
        const url = `https://api.giphy.com/v1/gifs/search?q=${value}&api_key=rnFEf3XHNwPWAntGftWW8MExKFgud4jr&rating=g`

        fetch(url)
        .then(res => res.json())
        .then(gifs => {
            this.setState({
                gifData: gifs.data.slice(0,3)
            });
        });
    };

    render() {
        return (
            <div>
                <GifSearch handleOnSubmit={this.handleSubmit} />
                <GifList gifData={this.state.gifData} />
            </div>
        )
    }

}

export default GifListContainer
