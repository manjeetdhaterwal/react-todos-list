import React from 'react'
import { ListItem } from './ListItem'

export const TodosList = (props) => {
  return (
  <div className='container'>
    <h4>TodosList</h4>
    {props.Todos.length === 0?<h4>No task Found</h4>:
     props.Todos.map((x, index)=>{
        return  <ListItem item = {x} key={x.Sno} Delete = {props.onDelete} no = {index} />
    })
    }
    
  </div>
  )
}
