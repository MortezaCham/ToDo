import React from "react";
import "./App.css";

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      newItem: "",
      list: []
    }
  }
  updateInput(key, value) {
    this.setState({
      [key]: value
    });
  }
  addItem(e) {
    e.preventDefault()
    const newItem = {
      id: 1 + Math.random(),
      value: this.state.newItem.slice(),
      checked: false
    };

    const list = [...this.state.list];

    list.push(newItem);

    this.setState({
      list,
      newItem: ""
    });
  }
  deleteItem(id) {
    const list = [...this.state.list];

    const updateList = list.filter(item => item.id !== id);
    this.setState({ list: updateList });
  }
  checkWork(id) {
    let list = [...this.state.list]
    const index = list.findIndex(item => id === item.id)
    list[index].checked = !list[index].checked
    this.setState({ list: [...list] })
  }
  render() {
    return (
      <div className="App">
        <div className="top">
        <h3 className="title">T O D O</h3>
        <div className="add">
          <form onSubmit={(e) => this.addItem(e)} className="input">
          <button className='add-btn' type="submit">+</button>
            <input
              className="ToDo"
              maxLength={45}
              type="text"
              placeholder='what should you do?'
              value={this.state.newItem}
              onChange={e => this.updateInput('newItem', e.target.value)}
            />
              
          </form>
        </div>
        </div>
        <div className="list-cont">
          <ul className="lists">
            {this.state.list.map((item, index) => {
              return (
                <li key={item.id}>
                  <input onChange={(e) => this.checkWork(item.id)} type="checkbox" checked={item.checked} className="check" >
                  </input>
                  {(index + 1) + " - " + item.value}
                  <div className="delete">
                  <button className='del-btn' onClick={() => this.deleteItem(item.id)}>
                      x
                    </button>
                    </div>
                </li>
              )
            })}
          </ul>
        </div>

      </div>
    );
  }
}

export default App;
