import React, { Component } from "react";

class Todolist extends Component {

  // 修改状态(是否完成)
  checkboxChange(id) {
    this.props.changeCompletedStatus(id)
  }

  // 点击选择框 
  checkedboxClick(e) {
    e.stopPropagation();
    e.nativeEvent.stopImmediatePropagation();
  }

  // 删除一行
  destroyList(id) {
    this.props.removeList(id)
  }

  // 双击列表修改内容
  changeEditStatus(id, event) {
    event.persist(); // 为了支持异步回调后对event事件的继续引用
    this.props.handleListEditing(id)
  }

  // 修改完回车保存
  handleSave(id, event) {
    event.persist();
    if (event.keyCode === 13) {
      if (!event.target.value) return;
      this.props.handleSave(id, event.target.value)
    }
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
              <li className={`${item.checked ? 'completed' : ''} ${item.editing ? 'editing' : ''}`} onDoubleClick={(event) => this.changeEditStatus(item.id, event)} key={item.id} >
                <div className="view" ref='listView'>
                  <input className="toggle" type="checkbox" defaultChecked={item.checked} onChange={() => this.checkboxChange(item.id)} onDoubleClick={(e) => this.checkedboxClick(e)} />
                  <label>{item.label}</label>
                  <button className="destroy" onClick={() => this.destroyList(item.id)}></button>
                </div>
                <input className="edit" ref='listEidt' defaultValue={item.label} onKeyUp={this.handleSave.bind(this, item.id)} />
              </li>
            )
          })}
        </ul>
      </section>
    );
  }
}

export default Todolist;