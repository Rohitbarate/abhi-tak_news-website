import './App.css';
import React, { Component } from 'react'
import Navbar from './components/Navbar';
import NewsContainer from './components/Newscontainer';
import { Routes, Route } from "react-router-dom";

export default class App extends Component {
  render() {
    return (
      <>
        <div>
          <Navbar />
          <Routes>
            <Route exact path="/" element={<NewsContainer key="General" pageSize="6" country="in"apiKey="7b30ea5fe8f34084b9fd2629997014b4" category="General" />} />
           
            <Route exact path='/science' element={<NewsContainer key="Science" pageSize="6" country="in"apiKey="7b30ea5fe8f34084b9fd2629997014b4" category="Science" />} />

            <Route exact path='/health' element={<NewsContainer key="Health" pageSize="6" country="in"apiKey="7b30ea5fe8f34084b9fd2629997014b4" category="Health" />} />

            <Route exact path='/sports' element={<NewsContainer key="Sports" pageSize="6" country="in"apiKey="7b30ea5fe8f34084b9fd2629997014b4" category="Sports" />} />

            <Route exact path='/entertainment' element={<NewsContainer key="Entertainment" pageSize="6"country="in" apiKey="7b30ea5fe8f34084b9fd2629997014b4" category="Entertainment" />} />

            <Route exact path='/business' element={<NewsContainer key="Business" pageSize="6" country="in"apiKey="7b30ea5fe8f34084b9fd2629997014b4" category="Business" />} />

            <Route exact path='/technology' element={<NewsContainer key="Technology" pageSize="6" country="in"apiKey="7b30ea5fe8f34084b9fd2629997014b4" category="Technology" />} />

          </Routes>
        </div>
      </>
    )
  }
}

