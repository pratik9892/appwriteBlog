import React from 'react'

function Button({
    children,
    type="button",
    bgColor="bg-blue-600",
    textColor="white",
    className="",
    ...props
}) {
  return (
    <button className={`px-6 p-2 rounde-lg ${className} ${bgColor} ${textColor}`} type={type} {...props}>{children}</button>
  )
}

export default Button