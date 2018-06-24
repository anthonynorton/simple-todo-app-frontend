import React from 'react'
import PropTypes from 'prop-types'
import './Todo.css'
import { IconEdit, IconTrash } from '../Icons/Icons'

const Todo = ({ todo, actions }) => (
  <li className={`Todo-li${todo.deleting ? ' deleting' : ''}`}>
    <div className="action-primary">
      <input
        checked={todo.completed}
        onClick={e => actions.toggleCompleted(todo._id)}
        id={todo._id}
        name={todo._id}
        className="Todo-cb-input"
        type="checkbox"
      />
      <label className="Todo-cb-label clickable" htmlFor={todo._id} />
    </div>
    <input className="Todo-text" type="text" value={todo.title} />
    <div className="actions-sub">
      <button className="Todo-edit Todo-btn sub btn">
        <IconEdit />
      </button>
      <button
        className="Todo-delete Todo-btn sub btn"
        onClick={e => actions.postDelete(todo._id)}
      >
        <IconTrash />
      </button>
    </div>
  </li>
)

Todo.propTypes = {
  todo: PropTypes.object,
}

export default Todo
