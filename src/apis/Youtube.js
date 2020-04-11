import React, { useState, useEffect }from 'react';
import { useAxios }from 'axios-hooks'

function DataFetching() {
    const [{ data, loading, error }, refetch] = useAxios(
        'https://www.googleapis.com/youtube/v3'
      )
     
    if (loading) return <p>Loading...</p>
    if (error) return <p>Error!</p>
    return (
        <>

        </>
    )
}

export default DataFetching