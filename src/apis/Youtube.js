import React, { useState, useEffect }from 'react';
import { makeUseAxios }from 'axios-hooks';
import axios from 'axios';

const useAxios = makeUseAxios({
    axios: axios.create({ baseURL: 'https://www.googleapis.com/youtube/v3/' })
  })

function DataFetching() {
    const [{ data, loading, error }, refetch] = useAxios('/channel/UC0fiLCwTmAukotCXYnqfj0A')

    if (loading) return <p>Loading...</p>
    if (error) return <p>Error!</p>
  
    return (
      <div>
        <button onClick={refetch}>refetch</button>
        <pre>{JSON.stringify(data, null, 2)}</pre>
      </div>
    )
}

export default DataFetching