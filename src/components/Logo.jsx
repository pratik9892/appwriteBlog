import React from 'react'

function Logo({width = "100px"}) {
  return (
    <div className='flex items-center gap-4'>
      <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/1200px-React-icon.svg.png" alt="logo" width={width}/>
      <h1 className='font-mono'>REACT BLOG</h1>
    </div>
  )
}

export default Logo