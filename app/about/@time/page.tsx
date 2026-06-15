import React from 'react'

const page = () => {
    const time = new Date().toTimeString();
    return (
        <div>Time: {time}</div>
    )
}

export default page