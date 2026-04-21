import React from 'react'
import { Navigate, useNavigate } from 'react-router'

const Sport = () => {
  const isAuthenticated = true

  if(!isAuthenticated){
    return <div>
      <Navigate to={'/new'}/>
    </div>
  }
  return (
    <div className='sport'>
      <h2>Sport page</h2>
      </div>
  )
}

export default Sport