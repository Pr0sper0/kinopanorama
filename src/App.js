import React from 'react';
import logo from './logo.svg';
//import './App.css';
import { BrowserRouter as Router, HashRouter, Switch, Route } from 'react-router-dom';
import Navigation from './components/Navigation';
import Home from './components/Home';
import Footer from './components/Footer';
import About from './components/About';
import Movies from './components/Movies';
import ArticleComponent from './components/ArticleComponent';

function App() {
  return (
    <Router>
      <React.Fragment>
        <Navigation />
        {
          //Routes here
        }
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/movies" component={Movies} />
          <Route exact path="/about" component={About} />
          <Route path="/article/:id" component={ArticleComponent} />
        </Switch>
      </React.Fragment>
      <Footer />
    </Router>


  );
}

export default App;
