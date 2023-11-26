import React from 'react'
import AddTodo from './AddTodo'
import Todos from './Todos'

const TodoPage = () => {
  return (
    <div className="max-w-md mx-auto mb-8 p-4 bg-gray-500 rounded-md shadow-md">
    <h1 className="text-3xl font-bold mb-4">Todo App</h1>
    
    <AddTodo />
    <Todos />
  </div>

  )
}

export default TodoPage