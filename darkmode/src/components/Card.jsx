import React from 'react'

function Card() {
  return (
    <>
        <div className='w-full max-w-sm mx-auto rounded-2xl shadow-2xl '>
            <img className=' w-80 h-60 m-10 rounded-2xl'
             src="https://gratisography.com/wp-content/uploads/2024/11/gratisography-augmented-reality-800x525.jpg" alt="image" />
             <div className='pl-40 text-2xl bold text-pink-500'>Sourya</div>
             <br />
             <div className='pl-40 text-2xl bold text-gray-500'>6th Sem</div>
        </div>

    </>
  )
}

export default Card