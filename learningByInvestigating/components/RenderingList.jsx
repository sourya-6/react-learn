import React, { useEffect } from 'react'

function RenderingList() {
    const todos =[
        {
            id:0,
            title:'Taare Zameen Par'
        },
        {
            id:1,
            title:'Chhichhore'
        },
        {
            id:2,
            title:'3 Idiots'
        }
    ]

  return (
    <ul>
        {
            todos.map((todo)=>(
                <li className='text-amber-50 ' key ={todo.id}>{todo.title}</li>
            ))
        }
    </ul>
  )
}

export default RenderingList