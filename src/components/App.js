import React, { Component } from 'react';
import CardList from "./CardList/CardList";
import Search from "./Search/Search";
import "./app.css";

export default class App extends Component {
  constructor(){
    super();
    this.state = {
       monosters: [],
       searchField: ""
     }
  }
  componentDidMount(){
    fetch("https://jsonplaceholder.typicode.com/users")
    .then(response=>response.json())
    .then(users=>this.setState({monosters: users}));
  }

  handleSearch = (e)=>{
    const searchField = e.target.value;
    this.setState({searchField});

  }
  render() {
    const {searchField} = this.state;
    const filterValues = this.state.monosters.filter(monoster=>
        monoster.name.toLowerCase().includes(searchField.toLowerCase())
      );
    return (
      <React.Fragment> 
        <h1 className="text-center">Rubel Monoster Reloaded</h1>
        <Search searchHandle={this.handleSearch}/> 
        <CardList monosters={filterValues}/>
      </React.Fragment>
    )
  }
}
