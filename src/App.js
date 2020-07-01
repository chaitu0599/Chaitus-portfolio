import React from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Container from 'react-bootstrap/Container';
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import './App.css';

import HomePage from './Pages/HomePage';
import AboutPage from './Pages/AboutPage';
import ContactPage from './Pages/ContactPage';
import Footer from './Components/Footer';

class App extends React.Component {
  constructor(props){
    super(props);
    this.state={
      title: "Munipalle Sai Chaitanya",
      headerLinks: [
        {title: 'Home',path:'/'},
        {title: 'About',path: '/about'},
        {title: 'Contact',path:'/contact'}
      ],
      home:{
        title:'#Never lose HOPE',
        subtitle: 'Do the right, whatever it takes.',
        text: 'Wanna know about my projects and interests?'
      },
      about:{
        title:'About Me!'
      },
      contact:{
        title:'Share a word with me??'
      }

    }

  }
  render(){
  return (
  <Router>
    <Container className="p-0" fluid={true}>
      <Navbar className="border-bottom" expand="lg" bg="transparent">
        <Navbar.Brand>Munipalle Sai Chaitanya</Navbar.Brand>
        <Navbar.Toggle className="border-0" aria-controls="navbar-toggle"/>
        <Navbar.Collapse id="navbar-toggle">
          <Nav className="ml-auto">
            <Link className="nav-link" to="/">Home</Link>
            <Link className="nav-link" to="/about">About</Link>
            <Link className="nav-link" to="/contact">Contact</Link>
          </Nav>
        </Navbar.Collapse>
        </Navbar>
        <Route path="/" exact render={() => <HomePage title={this.state.home.title} subtitle={this.state.home.subtitle} text={this.state.home.text}/>}/>
        <Route path="/about" exact render={() => <AboutPage title={this.state.about.title}/>}/>
        <Route path="/contact" exact render={() => <ContactPage title={this.state.contact.title}/>}/>
        
        <Footer></Footer>

        </Container>
  </Router>
  );
  }
}

export default App;
