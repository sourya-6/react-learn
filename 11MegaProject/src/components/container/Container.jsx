import React from 'react'

function Container({children}) {
  return <div className='w-full max-w-7xl mx-auto px-4'>{children}</div>;
//   if we are going to return a single React Element no needs to have a () just can return normally for  saftety purpose we can use a ';' at end
}

export default Container