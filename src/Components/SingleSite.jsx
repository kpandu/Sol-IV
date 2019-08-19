import React, { Component } from "react";

import Grid from "@material-ui/core/Grid";
import Fade from "react-reveal/Fade";
import Pulse from "react-reveal/Pulse";
import { Player, ControlBar, BigPlayButton } from "video-react";
import ReactResizeDetector from "react-resize-detector";

export default class SingleSite extends Component {
  constructor(props) {
    super(props);
    this.state = { isMobile: window.innerWidth < 720 };
  }
  render() {
    return (
      <Pulse>
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
        <Grid
          container
          alignItems={this.props.mode === "left" ? "flex-start" : "flex-end"}
          justify="flex-end"
          direction="column"
          style={{
            width: "100%",
            marginBottom: "300px"
          }}
        >
          <Player
            autoPlay
            muted
            videoWidth="10%"
            playsInline
            loop
            poster="/assets/poster.png"
            src={this.props.video}
          >
            <ControlBar disableCompletely className="my-class" />
            <BigPlayButton position="center" />
          </Player>
          <div
            style={{
              backgroundColor: "rgba(0,0,0,.7)",
              marginLeft: this.props.mode === "right" ? "1px" : "0px",
              width: this.state.isMobile ? "40%" : "30%",
              padding: "20px",
              borderTopRightRadius: this.props.mode === "left" ? "7px" : "0px",
              borderBottomRightRadius:
                this.props.mode === "left" ? "7px" : "0px",
              borderTopLeftRadius: this.props.mode === "right" ? "7px" : "0px",
              borderBottomLeftRadius:
                this.props.mode === "right" ? "7px" : "0px",

              position: "absolute"
            }}
          >
            <h2
              style={{
                fontFamily: "Roboto",
                fontWeight: "700",
                color: "#b800ce",
                fontSize: this.state.isMobile ? "19px" : "25px",
                margin: 0,
                padding: "0",
                width: "100%"
              }}
            >
              <Fade left delay={300} distance="20px">
                {this.props.title}
              </Fade>
            </h2>
            <h5
              style={{
                fontFamily: "Roboto",
                fontWeight: "300",
                color: "#d5d5d5",
                fontSize: this.state.isMobile ? "13px" : "18px",
                margin: "0",
                marginTop: "15px"
              }}
            >
              <Fade left delay={400} distance="20px">
                {this.props.body}
              </Fade>
            </h5>
          </div>
        </Grid>
      </Pulse>
    );
  }
}
