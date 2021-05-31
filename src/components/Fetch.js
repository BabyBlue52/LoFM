import React from 'react';

const fetchDashboard = (videos) => {
    fetch(videos)
    .then(function(response) {
        // The response is a Response instance.
        // You parse the data into a useable format using `.json()`
        return response.json();
    }).then(function(data){
        // `data` is the parsed version of the JSON returned from the above endpoint.

        setUploads(data.data.items)
    }).then(() => {
        // console.log(uploads)
        // uploads.data.forEach((data) => {
        //     vids.push(data)
        // })
        // console.log(vids)
    })
    
}
