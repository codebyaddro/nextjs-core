import React from 'react'

const page = () => {
    const date = new Date().toDateString();
    return (
        <div>Date: {date}</div>
    )
}

export default page