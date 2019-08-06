import React, { useState, useEffect, useRef } from 'react'
import useDataApi from '../hooks-utils/use-data-api'

export default function Tops() {
    const [query, setQuery] = useState('redux');

    const [{ data, isLoading, isError }, doFetch] = useDataApi(
        'http://hn.algolia.com/api/v1/search?query=redux',
        { hits: [] },
    );

    return (
        <div style={{ height: '100vh', padding: '30px' }}>
            <form
                onSubmit={event => {
                    doFetch(
                        `http://hn.algolia.com/api/v1/search?query=${query}`,
                    );
                    event.preventDefault();
                }}
            >
                <div>
                    <input
                        type="text"
                        value={query}
                        onChange={event => setQuery(event.target.value)}
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
