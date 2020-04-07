import React, { Component } from "react";
import AddItem from "./AddItem";
import ListItems from "./ListItems";

let items = [
  { value: "learn react", done: false },
  { value: "Go shopping", done: true },
  { value: "buy flowers", done: true }
];

class App extends Component {
  state = { items };

  updateList = newItem => {
    items.push({
      value: newItem,
      done: false
    });
    this.setState(items);
  };

  removeItem = removedItem => {
    for (const [index, item] of items.entries()) {
      if (item.value === removedItem) {
        items.splice(index, 1);
        break;
      }
    }
    this.setState(items);
  };

  finishItem = finishedItem => {
    for (const item of items) {
      if (item.value === finishedItem) {
        item.done = !item.done;
        break;
      }
    }
    this.setState(items);
  };

  render() {
    const { items } = this.state;
    return (
      <div className="page">
        <div className="container">
          <AddItem updateList={this.updateList} />
          <ListItems
            items={items}
            removeItem={this.removeItem}
            finishItem={this.finishItem}
          />
        </div>
      </div>
    );
  }
}

export default App;
