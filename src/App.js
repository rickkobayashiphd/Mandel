import React, { Component } from 'react';
import CardList from './CardList';
import SearchBox from './SearchBox';
import Scroll from './Scroll';
import './App.css';
//allows the manual input of robots.js file
import { robots } from './robots';

class App extends Component {
  constructor() {
    super()
    this.state = {
    // allows to manually input in robots.js file
      robots: robots,
      searchfield: ''
    }
  }

//   to use this API- change the following and uncomment componentDidMount 
//      this.state = {
//      robots: [],
//      searchfield: ''

//   componentDidMount() {
//     fetch('https://jsonplaceholder.typicode.com/users')
//       .then(response=> response.json())
//       .then(users => {this.setState({ robots: users})});
//   }

  onSearchChange = (event) => {
    this.setState({ searchfield: event.target.value })
  }

  render() {
    const { robots, searchfield } = this.state;
    const filteredRobots = robots.filter(robot =>{
      return robot.name.toLowerCase().includes(searchfield.toLowerCase());
    })
    return !robots.length ?
      <h1>Loading</h1> :
      (
        <div className='tc'>
          <h1 className='f1'>Professor Mandels Machine Learning Lab</h1>
          <SearchBox searchChange={this.onSearchChange}/>
          <Scroll>
            <CardList robots={filteredRobots} />
          </Scroll>
        </div>
      );
  }
}

export default App;