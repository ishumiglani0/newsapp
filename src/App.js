import './App.css';
import React, { Component } from 'react'
import Navbar from './components/Navbar';
import News from './components/News';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';


export default class App extends Component {
  constructor(){
    super();
    this.state = {
      searchquery:"",
      mode:'light'
    };
  }
  handleSearch = (query)=>{
    this.setState({
      searchquery : query
    });
  }
  toggleMode=()=>{
    this.state.mode==='light'?this.setState({mode:'dark'}):this.setState({mode:'light'});
  }
  
  render() {
    return (
      <div>
        <Router>
          <Navbar onSearch={this.handleSearch} mode={this.state.mode} toggle={this.toggleMode}/>
          <Routes>
            <Route exact path='/' element={<News key="general" pageSize={9} country="in" category='general' searchquery={this.state.searchquery} mode={this.state.mode} />}/>
            <Route exact path='/business' element={<News key="business" pageSize={9} country="in" category='business' title="business" searchquery={this.state.searchquery} mode={this.state.mode}/>}/>
            <Route exact path='/entertainment' element={<News key="entertainment" pageSize={9} country="in" category='entertainment' title="entertainment" searchquery={this.state.searchquery} mode={this.state.mode}/>}/>
            <Route exact path='/health' element={<News key="health" pageSize={9} country="in" category='health' title="health" searchquery={this.state.searchquery} mode={this.state.mode}/>}/>
            <Route exact path='/science' element={<News key="science" pageSize={9} country="in" category='science' title="science" searchquery={this.state.searchquery} mode={this.state.mode}/>}/>
            <Route exact path='/sports' element={<News key="sports" pageSize={9} country="in" category='sports' title="sports" searchquery={this.state.searchquery} mode={this.state.mode}/>}/>
            <Route exact path='/technology' element={<News key="technology" pageSize={9} country="in" category='technology' title="technology" searchquery={this.state.searchquery} mode={this.state.mode}/>}/>
          </Routes>
        </Router>
      </div>
    )
  }
}
