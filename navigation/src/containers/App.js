import React, {Component} from 'react';
import '../stylesheets/App.css';
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';
import Navigation from '../components/Navigation';
import Service from '../components/Services';
import Contact from '../components/Contact';

class App extends Component {


  render(){
    return (
      <Router>
         <ul>
                <li><Link to = "/home">HOME</Link></li>
                <li><Link to = "/projects">PROJECTS</Link></li>
                <li><Link to = "/services">SERVICES</Link></li>
                <li><Link to = "/contacts">CONTACTS</Link></li>

          </ul>
          <Switch>
            <Route exact path = "/services" component = {Service}></Route>
            <Route exact path = "/contacts" component = {Contact}></Route>
          </Switch>
      </Router>
    );
  }
  
}

export default App;
