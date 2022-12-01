import React from 'react'
import './TodoItem'
export default function TodoItem(props) {
  return (
    <div className='todoitem'> { props.name } </div>
  )
}
