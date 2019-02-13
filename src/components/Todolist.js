import React, { Component } from "react";

class Todolist extends Component {
  constructor(props) {
    super()
    // this.listChecked = this.listChecked.bind(this)
    // this.checkboxChange = this.checkboxChange.bind(this)
  }

  listChecked() {
    console.log(this.props);
    console.log('你点击了');
  }

  checkboxClick(e) {
    console.log(e)
    console.log('你点击了checkbox')
    
  }

  checkboxChange(event) {
    console.log(event)
    console.log('变化')
    console.log(this.props)
  }

  render() {
    let todolist = this.props.todeList
    return (
      <section className="main">
        <input id="toggle-all" className="toggle-all" type="checkbox" />
        <label htmlFor="toggle-all">Mark all as complete</label>
        <ul className="todo-list">
          {todolist.map(item => {
            return (
              <li className={item.checked ? 'completed' : ''} key={item.index}>
                <div className="view">
                  <input className="toggle" type="checkbox" defaultChecked={item.checked} onChange={(e)=>this.checkboxChange(e)} onClick={this.checkboxClick} />
                  <label>{item.label}</label>
                  <button className="destroy"></button>
                </div>
                <input className="edit" defaultValue={item.label} />
              </li>
            )
          })}
        </ul>
      </section>
    );
  }
}

export default Todolist;