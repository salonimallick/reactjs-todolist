import React from 'react'
import TodoCard from './TodoCard'

export default function TodoList(props) {
  const { todos } = props


  return (
    <ul className='main'>
      {todos.map((todo, todoIndex) => {
        return (
          <TodoCard {...props} key={todoIndex}
          index={todoIndex}
          >  {/* {...props} passes all the props from app.jsx to todocard via todolist.jsx */}
            <p>{todo}</p>
          </TodoCard>
        )
      })}
    </ul>
  )
}
