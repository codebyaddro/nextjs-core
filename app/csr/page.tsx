"use client"
import React, { useState, useEffect } from 'react'

const CSRpage = () => {
    const [data, setData] = useState([]);
    useEffect(() => {
        ;(async ()=>{
            const response = await fetch('/api/blogs');
            const data = await response.json();
            setData(data);
        })()
    }, [])

    return (
        <div>
            <h1>CSR Page</h1>
            <pre>{JSON.stringify(data, null, 2)}</pre>
        </div>
    )
}

export default CSRpage