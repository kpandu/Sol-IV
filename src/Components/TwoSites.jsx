import React, { Component } from "react";
import Grid from "@material-ui/core/Grid";
import SingleSite from "./SingleSite";
import Fade from "react-reveal/Fade";
import sol2 from "../Assets/sol2video.mp4";
import sol3 from "../Assets/sol3video.mp4";
export default class TwoSites extends Component {
  render() {
    return (
      <div style={{ marginTop: "600px" }}>
        <Fade bottom delay={50}>
          <Grid container>
            <h1
              style={{
                fontFamily: "Roboto",
                color: "white"
              }}
            >
              <p
                style={{
                  color: "#e92eff",
                  fontSize: "19px",
                  margin: "0",
                  fontFamily: "Roboto"
                }}
              >
                0100:{"  "}
                <em
                  style={{
                    fontStyle: "normal",
                    color: "white",
                    fontSize: "24px"
                  }}
                >
                  The Journey To This Site.
                </em>
              </p>
            </h1>
          </Grid>
          <h3
            style={{
              fontFamily: "Roboto",
              color: "white",
              fontWeight: "300",
              margin: "0"
            }}
          >
            Sol is what I call my sites.
          </h3>
        </Fade>

        <br />
        <br />

        <SingleSite
          mode="right"
          title="SOL II"
          video={sol2}
          body="Improved ReactJS skills with Google Material UI and React Spring in a parallax themed site."
        />
        <SingleSite
          mode="left"
          title="SOL III"
          video={sol3}
          body="Crafted a real-time interactive 3D animation through BabylonJS."
        />
      </div>
    );
  }
}
