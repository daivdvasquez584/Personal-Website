import React, { Component } from "react";
import "./App.css";
import './files/Resume.jpg';
import Navbar from "./components/Navbar";
import Section from "./components/Section";
import AboutMe from "./components/pages/AboutMe";
import Home from "./components/pages/Home";
import Projects from "./components/pages/Projects";
import Resume from "./components/pages/Resume";
import ContactInfo from "./components/pages/ContactInfo";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Navbar />
        <Home/>
        <Section
          title="About Me"
          subtitle={<AboutMe/>}
          dark={true}
          id="section1"
        />
        <Section
          title="Projects"
          subtitle={<Projects/>}
          dark={false}
          id="section2"
        />
        <Section
          title="Resume"
          subtitle={<Resume/>}
          dark={true}
          id="section3"
        />
        <Section
          title="Contact"
          subtitle={<ContactInfo/>}
          dark={false}
          id="section4"
        />
        
      </div>
    );
  }
}

export default App;