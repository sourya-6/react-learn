import React from 'react'

function Button({
    children,
    type="button",
    bgColor = "bg-blue-600",
    textColor = "text-white",
    className ="",//in production level it will stay empty most of the time
    ...props
}) {
  return <button className={`px-4 py-2 rounded-lg ${bgColor} ${textColor} ${className}`}{...props} >{children}</button>
//   here the children means it might be tags like h1,p etc.. or the name of the button
}

export default Button