import React from 'react'

export const ListItem = ({item, Delete, no}) => {
  return (
    <div className='container'>
    <h5>{no +1}. {item.title}</h5>
    <div>{item.desc}</div>
    <button className='btn btn-sm btn-danger' onClick={()=>{Delete(item)}}>Delete</button>
    <hr/>
    </div>
  )
}
