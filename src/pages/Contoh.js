import React, { useState, useEffect } from 'react';
import { useParams } from  "react-router-dom";


export default function Contoh() {
    let { id } =  useParams()
    // Initialize the "data" state variable with an empty array
    const [data, setData] = useState([]);

    useEffect(() => {
        // Make the API request
        fetch('https://random-data-api.com/api/v2/users?size='+id)
        .then(response => response.json())
        .then(json => {
            // Update the "data" state variable with the API response
            setData(json);
        });
    }, [])
  

  return (
    <div>
        <h3>test</h3>
    <table>
      <thead>
        <tr>
          <th>ID</th>
          <th>Name</th>
          <th>Email</th>
        </tr>
      </thead>
      <tbody>
        {data?.map(row => (
          <tr key={row.id}>
            <td>{row.id}</td>
            <td>{row.username}</td>
            <td>{row.email}</td>
          </tr>
        ))}
      </tbody>
    </table>
    </div>
  );
}
