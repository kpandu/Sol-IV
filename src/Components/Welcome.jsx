import React, { Component } from "react";
import Grid from "@material-ui/core/Grid";
import Fade from "react-reveal/Fade";
import ReactResizeDetector from "react-resize-detector";

export default class Welcome extends Component {
  constructor(props) {
    super(props);
    this.state = { title: "Musician.", fontsize: "81px", rolesize: "50px" };
  }
  changeTitle = title => {
    this.setState({ title: title });
  };
  componentDidMount() {
    let mode = 0;
    setTimeout(() => {
      let x = setInterval(() => {
        if (mode === 0) {
          this.setState({ title: "Musician." });
          mode++;
        }
        if (mode === 1) {
          this.setState({ title: "Student." });
          mode++;
        } else if (mode === 2) {
          this.setState({ title: "Hacker." });
          mode++;
        } else if (mode === 3) {
          this.setState({ title: "Software Engineer." });
          mode++;
        } else if (mode === 4) {
          this.setState({ title: "Fullstack Developer." });
          clearInterval(x);
          mode = 0;
        }
      }, 1200);
    }, 735);
  }
  render() {
    return (
      <Grid
        container
        justify="center"
        alignItems="flex-start"
        direction="column"
        style={{ height: "100vh" }}
      >
        <ReactResizeDetector
          handleWidth
          handleHeight
          onResize={(width, height) => {
            if (width < 720) {
              this.setState({ fontsize: "60px", rolesize: "40px" });
            } else {
              this.setState({ fontsize: "81px", rolesize: "50px" });
            }
          }}
        />
        <h2
          style={{
            fontFamily: "Roboto",
            fontWeight: "400",
            color: "#b800ce",
            fontSize: "19px",
            marginBottom: "-60px"
          }}
        >
          <Fade bottom delay={200}>
            Welcome to...
          </Fade>
        </h2>
        <Fade bottom delay={100} onExited={() => alert("as3d")}>
          <h1
            style={{
              fontFamily: "Roboto",
              fontWeight: "700",
              fontSize: this.state.fontsize,
              color: "white",
              marginBottom: "15px"
            }}
          >
            Krishan Panduwawala.
          </h1>
        </Fade>

        <h2
          style={{
            fontFamily: "Roboto",
            fontWeight: "700",
            color: "#b800ce",
            fontSize: this.state.rolesize,
            margin: 0
          }}
        >
          <Fade bottom>{this.state.title}</Fade>
        </h2>
        <Fade bottom delay={500}>
          <h5
            style={{
              fontFamily: "Roboto",
              fontWeight: "300",
              color: "#d5d5d5",
              fontSize: "18px",
              marginTop: "15px",
              width: "75%"
            }}
          >
            Goal: To dive into Machine Learning as a Full Stack Developer. By
            leveraging the cloud, build highly scalable applications alongside
            modern & intuitive UIs.
          </h5>
        </Fade>
      </Grid>
    );
  }
}
