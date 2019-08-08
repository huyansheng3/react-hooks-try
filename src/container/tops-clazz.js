import React, { Component } from 'react'
import PropTypes from 'prop-types'
import axios from 'axios'

export default class TopsClazz extends Component {

    state = {
        isError: false,
        isLoading: false,
        data: { hits: [] },
        query: 'redux'
    }

    doFetch = (url) => {
        axios(url).then(res => {
            this.setState({ data: res.data })
        })
    }

    setQuery = query => {
        this.setState({ query })
    }

    componentDidMount() {
    }

    render() {
        const { isError, isLoading, data, query } = this.state
        return (
            <div style={{ height: '100vh', padding: '30px' }}>
                <form
                    onSubmit={event => {
                        this.doFetch(
                            `http://hn.algolia.com/api/v1/search?query=${query}`,
                        );
                        event.preventDefault();
                    }}
                >
                    <div>
                        <input
                            type="text"
                            value={query}
                            onChange={event => this.setQuery(event.target.value)}
                        />
                        <button type="submit">Search</button>

                    </div>

                </form>

                {isError && <div>Something went wrong ...</div>}

                {isLoading ? (
                    <div data-testid="loading">Loading ...</div>
                ) : (
                        <ul data-testid="list" style={{ maxHeight: '300px', overflowY: 'scroll' }}>
                            {data.hits.map(item => (
                                <li key={item.objectID}>
                                    <a href={item.url}>{item.title}</a>
                                </li>
                            ))}
                        </ul>
                    )}
            </div>
        );
    }
}
