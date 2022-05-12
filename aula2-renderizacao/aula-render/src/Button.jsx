import React from 'react'

export default function Button(props) {

  const { name, onClick } = props
  return (
    <>
      <button onClick={onClick}>{name}</button>
    </>
  )
}