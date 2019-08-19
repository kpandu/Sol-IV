import React, { Component } from "react";
import GitHub from "../Assets/github.png";
import LinkedIn from "../Assets/linkedin.png";
import Grid from "@material-ui/core/Grid";
import Fade from "react-reveal/Fade";
export default class Icons extends Component {
  render() {
    return (
      <Grid container justify="flex-start" style={{ height: "180px" }}>
        <Fade bottom delay={1800}>
          <img
            src={GitHub}
            className="icon"
            style={{ marginLeft: "0", marginRight: "30px", cursor: "pointer" }}
            onClick={() => {
              window.location.href = "https://github.com/kpandu";
            }}
          />
        </Fade>
        <Fade bottom delay={2000}>
          <img
            src={LinkedIn}
            className="icon"
            style={{ cursor: "pointer" }}
            onClick={() => {
              window.location.href =
                "https://www.linkedin.com/in/krishan-panduwawala-ba9749185/";
            }}
          />
        </Fade>
      </Grid>
    );
  }
}
