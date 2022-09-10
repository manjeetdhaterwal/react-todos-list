import React from 'react'


export const Footer = () => {
  const footerStyle = 
  {
    position:'absolute',
    top: '100vh',
    width: '100%'
  }
  return (
    <div className='bg-dark text-light py-3 my-3' style={footerStyle}>
      <p className='text-center'>
      Copyright &copy; @manjeetdhaterwal
      </p>
    </div>
  )
}
