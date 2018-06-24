import React from 'react'
import './TodoAdd.css'
import { IconPlus } from '../Icons/Icons'

const TodoAdd = () => (
  <div className="Todo-add add">
    <div className="action-primary">
      <button className="Todo-add-btn Todo-btn btn">
        <IconPlus />
      </button>
    </div>
    <input className="Todo-text" type="text" placeholder="Add Todo here." />
  </div>
)

export default TodoAdd
