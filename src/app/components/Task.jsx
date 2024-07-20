import React from 'react'

export default function Task(task) {
  let style = {};
  if(task.isDone === true){
    style = {"text-decoration":"line-through"};

  }
  
  
  
    return (
    <div className="d-flex p-3 gap-2 align-items-center border-bottom">
          <span style={styles} >{tasks.title}</span>
          <button className="btn btn-success">Done</button>
          <button className="btn btn-danger">Delete</button>
    </div>
  )
}
