import React from 'react'

export default function Child({incrementCount}) {
  return (
    <>
    <button onClick={incrementCount}>Click me</button>
    </>
  )
}
