import React from 'react'
import { useNavigate } from 'react-router';

const New = () => {
  const navigate = useNavigate();

  let handleClick = () =>{
    navigate('/sport')
  }
  return (
    <div className='new'>
      <button className='btn' onClick={handleClick}>Click to visit Sport Page</button>
    </div>
  )
}

export default New

