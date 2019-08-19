import React, { Component } from "react";
import Icons from "./Icons";
import Grid from "@material-ui/core/Grid";
import Fade from "react-reveal/Fade";

export default class Contact extends Component {
  render() {
    return (
      <div style={{ marginTop: "300px" }}>
        <Fade bottom delay={50}>
          <Grid container alignItems="center">
            <h2
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
                0110:{"  "}
                <em
                  style={{
                    fontStyle: "normal",
                    color: "white",
                    fontSize: "24px"
                  }}
                >
                  Welcome To the Beginning.
                </em>
              </p>
            </h2>
          </Grid>
        </Fade>
        <Grid
          container
          style={{ margin: "0", height: "45%" }}
          direction="column"
          justify="flex-start"
        >
          <br />

          <h2
            style={{
              fontFamily: "Roboto",
              fontWeight: "700",
              color: "white",
              fontSize: "50px",
              margin: 0
            }}
          >
            Let's Make Something
            <Fade bottom delay={900}>
              <p
                style={{
                  color: "#b800ce"
                }}
              >
                Big
              </p>
            </Fade>
            Together.
          </h2>
        </Grid>
        <Grid
          container
          style={{
            margin: "0",
            height: "45%",

            backgroundColor: "#001220"
          }}
          direction="column"
          justify="flex-start"
        >
          <br />
          <br />
          <a
            href="mailto:kpandu@umd.edu"
            style={{ height: "50px", width: "150px", marginBottom: "150px" }}
          >
            <button className="genbtn">Send A Message</button>
          </a>
        </Grid>
        <Icons />
      </div>
    );
  }
}
