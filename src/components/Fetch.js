import React, {useState, useEffect } from 'react';

export function useFetch(url, options) {
    const [response, setResponse] = useState(null)
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState(false)
   

    useEffect(() => {
        const fetchData = async () => {
            setLoading(true);
            try {
                const res = await fetch(url, options);
                const json = await res.json();
                setResponse(json);
                setLoading(false)
            } catch (error) {
                setHasError(error)
            }
        };
        fetchData();
    }, [ url ])
    return [ response, error, loading  ]
}