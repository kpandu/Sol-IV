import React, { Component } from "react";
import Welcome from "./Welcome";
import About from "./About";
import Experience from "./Experience";
import Sites from "./Projects";
import PrimaryAppBar from "./PrimaryAppBar";
import SiteProjects from "./TwoSites";
import Contact from "./Contact";
import Container from "@material-ui/core/Container";
class App extends Component {
  constructor(props) {
    super(props);

    this.Welcome = React.createRef();
    this.About = React.createRef();
    this.Experience = React.createRef();
    this.SiteProjects = React.createRef();
    this.Sites = React.createRef();
    this.Contact = React.createRef();
  }
  render() {
    return (
      <div>
        <PrimaryAppBar />

        <Container maxWidth="lg">
          <section ref={this.Welcome}>
            <Welcome />
          </section>
          <section ref={this.About}>
            <About />
          </section>
          <section ref={this.Experience}>
            <Experience />
          </section>
          <section ref={this.SiteProjects}>
            <SiteProjects />
          </section>
          <section ref={this.Sites}>
            <Sites />
          </section>
          <section ref={this.Contact}>
            <Contact />
          </section>
        </Container>
        <PrimaryAppBar
          refs={{
            Contact: this.Contact,
            About: this.About,
            Sites: this.Sites,
            Welcome: this.Welcome,
            Experience: this.Experience,
            SiteProjects: this.SiteProjects
          }}
        />
      </div>
    );
  }
}

export default App;
