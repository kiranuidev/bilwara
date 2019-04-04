import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Search from './components/search';
import MovieList from './components/movies/movieList';
import Toggler from './components/movies/toggler';
import Register from './components/register/Register';
class App extends Component {
  constructor(props){
  super();
    this.state={
      searchQuery:''
    };
    this.handleSearchClick = this.handleSearchClick.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }
  handleSearchClick(data){
    console.log(data);
    let currentState = this.state;
    currentState.counter++;
    this.setState(currentState);
  }
  handleChange(data){
    console.log(data);
    let currentState = this.state;
    currentState.searchQuery = data;
    this.setState(currentState);
  }
  render() {
    return (
      <div className="container">
      <Register/>
          {/* <Search
          searchText={this.handleChange}
          search={this.handleSearchClick}/>
          <label className="badge">{this.state.counter}</label>
          <MovieList search={this.state.searchQuery}/> */}
          {/* <Toggler search={''}/> */}
      </div>
    );
  }

}

export default App;





