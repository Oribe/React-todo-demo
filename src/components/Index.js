import React, { Component } from 'react'
import Header from './Header'
import Todolist from './Todolist'
import Footer from './Footer'

// const ALL = 'all',
//   ACTIVE = 'Active',
//   COMPLETED = 'completed';

let todoList = [
  {
    id: +new Date(),
    label: 'Taste JavaScript',
    checked: true,
    editing: false,
  },
  {
    id: +new Date() + 1,
    label: 'Buy a unicorn',
    checked: false,
    editing: false
  }
]


class Index extends Component {
  constructor(props) {
    super(props);
    this.state = {
      todoList: todoList
    }
  }

  // 改变列表的完成状态
  changeCompletedStatus(id) {
    todoList.some(item => {
      if (item.id === id) {
        item.checked = !item.checked
        this.setState({
          todeList: todoList
        })
        return true
      } else {
        return false
      }
    })
  }

  // 列表改为可编辑状态
  handleListEditing(id) {
    todoList.some(item => {
      if (item.id === id) {
        item.editing = true
        this.setState({
          todeList: todoList
        })
        return true
      } else {
        return false
      }
    })
  }

  // 删除列表
  removeList(id) {
    todoList.some((item, index) => {
      if (item.id === id) {
        todoList.splice(index, 1);
        this.setState({
          todoList: todoList
        })
        return true
      } else {
        return false
      }
    })
  }

  // 保存修改
  handleSave(id, newValue) {
    todoList.some((item, index) => {
      if (item.id === id) {
        item.label = newValue;
        item.editing = false
        this.setState({
          todoList: todoList
        })
        return true
      } else {
        return false
      }
    })
  }

  // 添加新的事项
  handleAdd(newTodolist) {
    todoList.unshift(newTodolist)
    this.setState({
      todeList: todoList
    })
  }

  render() {
    let todeList = this.state.todoList
    return (
      <section className="todoapp">
        <Header handleAdd={this.handleAdd.bind(this)} />
        <Todolist
          todeList={todeList}
          changeCompletedStatus={(id) => this.changeCompletedStatus(id)}
          removeList={(id) => this.removeList(id)}
          handleListEditing={this.handleListEditing.bind(this)}
          handleSave={this.handleSave.bind(this)}
        />
        <Footer />
      </section>
    );
  }
}

export default Index