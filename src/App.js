import React, { Component } from 'react'
import './App.css'
import Header from './components/Header/Header'
import TodoList from './components/TodoList/TodoList'
import { TodosProvider } from './services/TodosCtx'

class App extends Component {
  render() {
    return (
      <div className="App wrapper">
        <Header />
        <main className="App-main">
          <TodosProvider>
            <TodoList
              list={[
                { _id: 203, title: 'Get milk.' },
                { _id: 921, title: 'Fix the kitchen sink.' },
                { _id: 424, title: 'Get popcorn for movie night.' },
              ]}
            />
          </TodosProvider>
        </main>
      </div>
    )
  }
}

export default App
