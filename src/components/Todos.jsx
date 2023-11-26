import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { removeTodo } from '../features/todoSlice'

const Todos = () => {

    const todos = useSelector(state => state.todos);
    const dispatch = useDispatch();

    return (
        <>
            <div className="max-w-md mx-auto mt-8 p-4 bg-white rounded-md shadow-md">
                <h2 className="text-2xl font-semibold mb-4">Todos</h2>

                <ul>
                    {todos.map(todo => (
                        <li
                            key={todo.id}
                            className="flex items-center justify-between p-2 border-b border-gray-300"
                        >
                            <span className="text-lg">{todo.text}</span>
                            <button
                                onClick={() => dispatch(removeTodo(todo.id))}
                                className="text-red-500 hover:text-red-700 focus:outline-none"
                            >
                                X
                            </button>
                        </li>
                    ))}
                </ul>
            </div>
        </>
    )
}

export default Todos