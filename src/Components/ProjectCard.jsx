import React, { Component } from "react";
import Card from "@material-ui/core/Card";
import LaunchOutlinedIcon from "@material-ui/icons/LaunchOutlined";
import Grid from "@material-ui/core/Grid";
import { IconButton } from "@material-ui/core";

export default class ProjectCard extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <Card
        style={{
          width: "340px",
          height: "400px",
          justify: "center",
          margin: "10px",
          background: "#0e2238"
        }}
      >
        <Grid container justify="center">
          <img
            src={this.props.src}
            style={{
              maxWidth: "340px",
              height: "200px",
              marginBottom: "10px",
              borderRadius: "2px"
            }}
          />
        </Grid>
        <Grid
          container
          direction="column"
          style={{ padding: "16px", height: "145px" }}
        >
          <Grid container item justify="space-between" alignItems="flex-start">
            <Grid item>
              <h2
                style={{
                  fontFamily: "Roboto",
                  fontWeight: "700",
                  color: "white",
                  fontSize: "20px",
                  margin: 0,
                  padding: "0",
                  marginBottom: "10px"
                }}
              >
                {this.props.title}
              </h2>
            </Grid>

            {this.props.href ? (
              <Grid item>
                <IconButton
                  onClick={() => window.open(this.props.href, "_blank")}
                  style={{ padding: "0" }}
                >
                  <LaunchOutlinedIcon className="icon" />
                </IconButton>
              </Grid>
            ) : (
              ""
            )}
          </Grid>
          <Grid item>
            <h5
              style={{
                fontFamily: "Roboto",
                fontWeight: "300",
                color: "#d5d5d5",
                fontSize: "13px",
                margin: "0",
                marginTop: "12px"
              }}
            >
              {this.props.body}
            </h5>
          </Grid>
        </Grid>
        <Grid
          container
          alignItems="flex-end"
          style={{ marginLeft: "16px", marginRight: "16px" }}
        >
          {this.props.skills.map(x => {
            return (
              <Grid item key={x} style={{ padding: "0" }}>
                <p
                  style={{
                    fontFamily: "Roboto",
                    fontWeight: "400",
                    color: "#d5d5d5",
                    fontSize: "11px",
                    border: "1px solid #abc9ea",
                    padding: "4px",
                    borderRadius: "4px",
                    margin: "0",
                    marginRight: "10px"
                  }}
                >
                  {x}
                </p>
              </Grid>
            );
          })}
        </Grid>
      </Card>
    );
  }
}
