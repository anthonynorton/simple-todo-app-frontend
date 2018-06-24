import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Todo from '../Todo/Todo'
import TodoAdd from '../TodoAdd/TodoAdd'
import Consumer from '../../services/TodosCtx'
import './TodoList.css'

class TodoList extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <Consumer>
        {ctx => {
          return (
            <section className="TodoList">
              <TodoAdd />
              <ul className="TodoList-ul">
                {ctx.todos.map(item => (
                  <Todo actions={ctx.todoActions} key={item._id} todo={item} />
                ))}
              </ul>
            </section>
          )
        }}
      </Consumer>
    )
  }
}

TodoList.propTypes = {
  list: PropTypes.arrayOf(PropTypes.object).isRequired,
}

export default TodoList
