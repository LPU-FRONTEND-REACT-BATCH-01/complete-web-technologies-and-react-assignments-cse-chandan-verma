import React from 'react'

const Card = ({data}) => {
  return (
    <div>
        <h3>{data.title}</h3>
        <p>{data.description}</p>
    </div>
  )
}

export default Card