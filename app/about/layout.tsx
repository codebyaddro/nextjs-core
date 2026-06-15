import React from 'react'

const layout = (
    {
        children,
        time,
        date
    }: Readonly<{
        children: React.ReactNode,
        time: React.ReactNode,
        date: React.ReactNode
    }>
) => {
  return (
    <div>
        <h1>About Layout</h1>
        {children}
        {time}
        {date}
    </div>
  )
}

export default layout