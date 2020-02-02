import React, { Component } from 'react';
import './App.css';
import Header from './components/header';
import TodoItem from './components/toDoLists';
import TrafficLight from './components/trafficLight';


class App extends Component {
  constructor() {
    super();
    this.state = {
      TodoItems: [
        { title: 'Go to super market', isComplete: true },
        { title: 'Go to school', isComplete: true },
        { title: 'Come back Home', isComplete: true }
      ]
    };
  }
  onItemClicked(item) {
    return () => {
      this.setState({
        TodoItems: this.state.TodoItems.map(i => i !== item ? {...i} : {...i, isComplete: !item.isComplete})
      })
    }
  }
  render() {
    const { TodoItems } = this.state;
    return (
      <div>
        <Header />
        {TodoItems.length > 0 &&
          TodoItems.map((item, index) => (
            <TodoItem
              key={index}
              item={item}
              onClick={this.onItemClicked(item)}
            />
          ))}
        {TodoItems.length === 0 && 'Not Found'}
        <TrafficLight />
      </div>
    );
  }
}

export default App;
