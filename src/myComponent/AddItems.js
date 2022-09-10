import React, { useState } from 'react';

export const AddItems = ({AddItem}) => {
    const [title, setTitle] = useState("");
    const [desc, setDesc] = useState("");

    const submit = (e)=>{
        e.preventDefault();
        if(!title || !desc) alert("Either Title or Description cant be empty !!")
        
        else {
            AddItem(title, desc);
            setTitle("");
            setDesc("");
        }

    }
  return (
    <div className='container'>
        <h4>Add Items Here !!</h4>
    <form>
    <div className="form-group my-3">
    <label htmlFor="exampleInputEmail1">Write Title Here</label>
    <input type="text" value = {title} onChange ={(e)=>{setTitle(e.target.value)}} className="form-control"  placeholder="Enter Title"/>
  </div>
  <div className="form-group my-3">
    <label htmlFor="exampleInputPassword1">Write Description Here</label>
    <input type="text" value = {desc} onChange={(e)=>(setDesc(e.target.value))} className="form-control"  placeholder="Enter Description"/>
  </div>


    <button type="submit" className="btn btn-primary my-3" onClick={submit}>Submit</button>
    </form>
    </div>
  )
}
