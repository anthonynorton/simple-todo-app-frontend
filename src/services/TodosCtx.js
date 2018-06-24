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
  // Edit
  // Update

  render() {
    return (
      <Provider
        value={{
          todos: this.state.todos,
          todoActions: {
            toggleCompleted: this.toggleTodoCompleted,
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
