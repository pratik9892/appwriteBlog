import React from 'react'

function Logo({width = "100px"}) {
  return (
    <div>
      <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/1200px-React-icon.svg.png" alt="logo" width={width}/>
    </div>
  )
}

export default Logo