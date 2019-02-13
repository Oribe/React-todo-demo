import React, { Component } from 'react'
import Header from './Header'
import Todolist from './Todolist'
import Footer from './Footer'


let todoList = [
  {
    index: 0,
    label: 'Taste JavaScript',
    checked: true,
  },
  {
    index: 1,
    label: 'Buy a unicorn',
    checked: false,
  }
]


class Index extends Component {
  constructor(props) {
    super(props);
    this.state = {
      todoList: todoList
    }
  }

  render() {
    let todeList = this.state.todoList
    return (
      <section className="todoapp">
        <Header></Header>
        <Todolist todeList={todeList}></Todolist>
        <Footer></Footer>
      </section>
    );
  }
}

export default Index