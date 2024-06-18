import React from 'react'

const Greet = props => {
  const {name, secondName} = props
  return (
    <div>
      <h2>Hello {name} a.k.a {secondName}</h2>
    </div>
  )
}

export default Greet
