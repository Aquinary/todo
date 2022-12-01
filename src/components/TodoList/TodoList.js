import React from 'react'
import TodoItem from './TodoItem/TodoItem'
import './TodoList.css'

export default function TodoList() {
  return (
    <div className='todolist'>
      <TodoItem name="Лист 1"></TodoItem>
      <TodoItem></TodoItem>
      <TodoItem></TodoItem>
      <TodoItem></TodoItem>
    </div>
  )
}
