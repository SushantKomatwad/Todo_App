import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { addTodo } from '../features/todoSlice'


const AddTodo = () => {

    const [input, setInput] = useState('')
    const dispatch = useDispatch()

    const addTodoHandler = (e) => {
        e.preventDefault()
        dispatch(addTodo(input))
        setInput('')
    }

    return (
        <>
            <div className="flex justify-center items-center h-screen ">
                <form onSubmit={addTodoHandler} className="bg-gray-300 p-8 rounded shadow-md">
                    <div className="mb-4">
                        <label htmlFor="username" className="block text-gray-700 text-sm font-bold mb-2">
                            Text
                        </label>
                        <input
                            type="text"
                            value= {input}
                            className="border-2 border-gray-300 p-2 w-full rounded-md focus:outline-none focus:border-blue-500"
                            placeholder="Enter a todo..."
                            required
                            onChange={(e) => setInput(e.target.value)}
                        />
                    </div>

                    <div className="mb-6">
                        <button
                            type="submit"
                            className="w-full bg-blue-500 text-white p-3 rounded-md hover:bg-blue-700 focus:outline-none"
                        >
                            Add Todo
                        </button>
                    </div>
                </form>
            </div>

        </>
    )
}

export default AddTodo