
import React from 'react'

const ToDoLists = (probs)  => {
    return (
        <div>
            <div className = 'todo_style'>
                <i className="fa fa-times" aria-hidden="true"
                 onClick = { () =>  {probs.onSelect(probs.id)}}
                />
                <li> {probs.text} </li>
        </div>
        </div>
    )
};

export default ToDoLists;
