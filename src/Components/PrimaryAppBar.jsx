import React, { Fragment } from "react";
import { makeStyles } from "@material-ui/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import IconButton from "@material-ui/core/IconButton";
import Logo from "../Assets/logo.png";
import NavDrawer from "./NavDrawer";
import CollapseOnScroll from "./CollapseOnScroll";
import { Grid } from "@material-ui/core";
import Fade from "react-reveal/Fade";
import ReactResizeDetector from "react-resize-detector";
const useStyles = makeStyles(theme => ({
  menuButton: {
    marginLeft: -12,
    marginRight: 20
  }
}));

function PrimaryAppBar(props) {
  const classes = useStyles();
  const [isMobile, setisMobile] = React.useState(window.innerWidth < 720);
  return (
    <div className={classes.root}>
      <ReactResizeDetector
        handleWidth
        handleHeight
        onResize={(width, height) => {
          if (width < 720) {
            setisMobile(true);
          } else {
            setisMobile(false);
          }
        }}
      />
      <CollapseOnScroll
        component={AppBar}
        threshold={200}
        style={{ backgroundColor: "rgb(0,18,32,.9)", height: "70px" }}
      >
        <Toolbar>
          <Grid
            container
            justify="space-between"
            alignItems="center"
            style={{ height: "70px" }}
          >
            <Grid
              item
              onClick={() =>
                props.refs.Welcome.current.scrollIntoView({
                  behavior: "smooth",
                  block: "start"
                })
              }
            >
              <Fade delay={900} bottom>
                <IconButton
                  edge="start"
                  className={classes.menuButton}
                  color="inherit"
                  aria-label="Open drawer"
                  style={{ width: "70px", height: "70px" }}
                >
                  <img src={Logo} style={{ width: "100%", height: "100%" }} />
                </IconButton>
              </Fade>
            </Grid>
            {!isMobile ? (
              <Fragment>
                <Grid item>
                  <button
                    className="navbtn"
                    onClick={() =>
                      props.refs.About.current.scrollIntoView({
                        behavior: "smooth",
                        block: "start"
                      })
                    }
                  >
                    <Fade
                      bottom
                      delay={1100}
                      style={{ whiteSpace: "nowrap", overflow: "scroll" }}
                    >
                      <p
                        style={{
                          color: "#e92eff",
                          fontSize: "14px",
                          margin: "0"
                        }}
                      >
                        0x1:{" "}
                        <em style={{ color: "#bdbdbd", fontStyle: "normal" }}>
                          About
                        </em>
                      </p>
                    </Fade>
                  </button>
                  <button
                    className="navbtn"
                    onClick={() =>
                      props.refs.Experience.current.scrollIntoView({
                        behavior: "smooth",
                        block: "start"
                      })
                    }
                  >
                    <Fade bottom delay={1300}>
                      <p
                        style={{
                          color: "#e92eff",
                          fontSize: "14px",
                          margin: "0"
                        }}
                      >
                        0x2:{" "}
                        <em style={{ color: "#bdbdbd", fontStyle: "normal" }}>
                          Experience
                        </em>
                      </p>
                    </Fade>
                  </button>
                  <button
                    className="navbtn"
                    onClick={() =>
                      props.refs.SiteProjects.current.scrollIntoView({
                        behavior: "smooth",
                        block: "start"
                      })
                    }
                  >
                    <Fade bottom delay={1500}>
                      <p
                        style={{
                          color: "#e92eff",
                          fontSize: "14px",
                          margin: "0"
                        }}
                      >
                        0x3:{" "}
                        <em style={{ color: "#bdbdbd", fontStyle: "normal" }}>
                          Projects
                        </em>
                      </p>
                    </Fade>
                  </button>
                  <button
                    className="navbtn"
                    onClick={() =>
                      props.refs.Contact.current.scrollIntoView({
                        behavior: "smooth",
                        block: "start"
                      })
                    }
                  >
                    <Fade bottom delay={1700}>
                      <p
                        style={{
                          color: "#e92eff",
                          fontSize: "14px",
                          margin: "0"
                        }}
                      >
                        0x4:{" "}
                        <em style={{ color: "#bdbdbd", fontStyle: "normal" }}>
                          Contact
                        </em>
                      </p>
                    </Fade>
                  </button>
                </Grid>
              </Fragment>
            ) : (
              <NavDrawer refs={props.refs} />
            )}
          </Grid>
        </Toolbar>
      </CollapseOnScroll>
    </div>
  );
}

export default PrimaryAppBar;
