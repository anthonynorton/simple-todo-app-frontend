import React, { Component, createContext } from 'react'
// import PropTypes from 'prop-types'

const { Provider, Consumer } = React.createContext({ todos: [] })

class TodosProvider extends Component {
  constructor(props) {
    super(props)
    this.state = {
      todos: [],
    }
  }

  async componentDidMount() {
    const response = await fetch('/todos/')
    const data = await response.json()
    this.setState({ todos: [...data] })
  }

  // Toggle Complete <-
  toggleTodoCompleted = id => {
    const updatedList = this.state.todos.map(todo => {
      if (todo._id === id) {
        console.log(todo._id)
        return Object.assign({}, todo, { completed: !todo.completed })
      }
      return todo
    })
    this.setState({ todos: updatedList })
  }

  // Delete
  postDelete = id => {
    const updatedList = this.state.todos.map(todo => {
      if (todo._id === id) {
        console.log(todo._id)
        fetch(`/todos/${id}`, { method: 'DELETE' })
          .then(res => {
            return res.json()
          })
          .then(data => {
            this.deleteTodo(id)
          })
          .catch(err => {
            debugger
          })
        return Object.assign({}, todo, { deleting: true })
      }
      return todo
    })
    this.setState({ todos: updatedList })
    console.log(id)
  }

  // Delete
  deleteTodo = id => {
    const updatedList = this.state.todos.filter(todo => {
      return todo._id !== id
    })
    this.setState({ todos: updatedList })
    console.log(id)
  }
  // Edit
  // Update

  render() {
    return (
      <Provider
        value={{
          todos: this.state.todos,
          todoActions: {
            toggleCompleted: this.toggleTodoCompleted,
            postDelete: this.postDelete,
          },
        }}
      >
        {this.props.children}
      </Provider>
    )
  }
}

// TodosProvider.propTypes = {
//   url: PropTypes.string,
// }

export default Consumer
export { TodosProvider }
