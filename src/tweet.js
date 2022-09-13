import React from 'react'

function tweet(props) {
  return (
    <div>
        <h1>Name : {props.firstname}</h1>
        <p>message : {props.message}</p>

    </div>
  )
}

export default tweet