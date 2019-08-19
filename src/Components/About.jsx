import React, { Component } from "react";

import Grid from "@material-ui/core/Grid";
import Me from "../Assets/kp.jpg";
import Fade from "react-reveal/Fade";
import ReactResizeDetector from "react-resize-detector";

export default class Welcome extends Component {
  constructor(props) {
    super(props);
    this.state = { isMobile: window.innerWidth < 720 };
  }
  render() {
    return (
      <div style={{ height: "100%" }}>
        <ReactResizeDetector
          handleWidth
          handleHeight
          onResize={(width, height) => {
            if (width < 720) {
              this.setState({ isMobile: true });
            } else {
              this.setState({ isMobile: false });
            }
          }}
        />
        <Grid container>
          <h1
            style={{
              fontFamily: "Roboto",
              color: "white"
            }}
          >
            <Fade bottom delay={100}>
              <p
                style={{
                  color: "#e92eff",
                  fontSize: "19px",
                  margin: "0",
                  fontFamily: "Roboto"
                }}
              >
                0001:{"  "}
                <em
                  style={{
                    fontStyle: "normal",
                    color: "white",
                    fontSize: "24px"
                  }}
                >
                  About Me.
                </em>
              </p>
            </Fade>
          </h1>
        </Grid>
        <Grid container spacing={3}>
          <Grid item xs={8}>
            <h4
              style={{
                fontFamily: "Roboto",
                width: "70%",
                fontWeight: "400",
                fontSize: "20px",
                margin: "0",
                color: "white"
              }}
            >
              <Fade bottom delay={400}>
                Summary:
              </Fade>
            </h4>
            <h3
              style={{
                fontFamily: "Roboto",
                fontWeight: "300",
                color: "#d5d5d5",
                fontSize: "18px",
                width: "90%"
              }}
            >
              <Fade bottom delay={700} distance="10px">
                Hi, I'm Krishan. Currently I am a student at the University of
                Maryland, College Park. I am a Junior majoring in Computer
                Science with an upper level concentration in Mathematics.
                <br />
                I have just completed a summer long internship at Boeing
                Intelligence & Analytics, where I developed a strong interest
                and skill set for Fullstack Development.
                <br />
                I was able to experience the entire design process from the
                bottom up. I learned from my mistakes and have a strong idea of
                what a reliable and scalable architecture is like. Combining
                that with my knowledge of AWS is a huge step forward for my
                future applications. I expect to make many more cloud based
                applications.
                <br />
                In my free time I either code up small games such as Pong or
                build more websites. This site is my fourth version and there
                are much more to come!
              </Fade>
            </h3>
            <br />

            <h4
              style={{
                fontFamily: "Roboto",
                width: "70%",
                fontWeight: "400",
                fontSize: "20px",
                margin: "0",
                color: "white"
              }}
            >
              <Fade bottom delay={400}>
                Education / Achievements:
              </Fade>
            </h4>
            <h4
              style={{
                fontFamily: "Roboto",
                color: "#d5d5d5",
                width: "70%",
                fontWeight: "300",
                fontSize: "18px"
              }}
            >
              <Fade left delay={650} cascade distance="50px">
                <ul>
                  <li>GPA: 3.67</li>
                  <li>AWS Developer Certificate &nbsp; - &nbsp; Udemy</li>
                  <li>Vice President of Advanced Computing Machinery</li>
                  <li>Consectutive member of Dean's List</li>
                </ul>
              </Fade>
            </h4>
          </Grid>
          {!this.state.isMobile ? (
            <Grid item xs={4}>
              <Fade bottom delay={200} distance="20px">
                <img
                  src={Me}
                  style={{
                    width: "295px",
                    height: "295px",
                    padding: "10px",
                    borderRadius: "50%"
                  }}
                />
              </Fade>
            </Grid>
          ) : (
            ""
          )}
        </Grid>
        {this.state.isMobile ? (
          <Fade bottom delay={200} distance="20px">
            <img
              src={Me}
              style={{
                width: "295px",
                height: "295px",
                padding: "10px",
                borderRadius: "50%"
              }}
            />
          </Fade>
        ) : (
          ""
        )}
      </div>
    );
  }
}
