import React, { Component } from 'react'

class Header extends Component {

  handleAdd(e) {
    e.persist();
    if (e.keyCode === 13) {
      const newTodolist = {
        id: +new Date(),
        label: e.target.value,
        checked: false,
        editing: false
      }
      this.props.handleAdd(newTodolist)
      e.target.value = ''
    }
  }

  render() {
    return (
      <header className="header">
        <h1>todos</h1>
        <input className="new-todo" placeholder="What needs to be done?" autoFocus onKeyUp={(e) => this.handleAdd(e)} />
      </header>
    );
  }
}

export default Header