import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Drawer from "@material-ui/core/Drawer";
import List from "@material-ui/core/List";
import Divider from "@material-ui/core/Divider";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import scrollToComponent from "react-scroll-to-component";
import NotesIcon from "@material-ui/icons/Notes";
import IconButton from "@material-ui/core/IconButton";
import { Grid } from "@material-ui/core";
import Fade from "react-reveal/Fade";
const useStyles = makeStyles({
  list: {
    width: 250,
    height: "100vh",
    backgroundColor: "#0e2238"
  }
});

export default function NavDrawer(props) {
  const classes = useStyles();
  const [state, setState] = React.useState({
    right: false
  });

  const toggleDrawer = (side, open) => event => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }

    setState({ ...state, [side]: open });
  };

  const sideList = side => (
    <Grid
      className={classes.list}
      role="presentation"
      onClick={toggleDrawer(side, false)}
      onKeyDown={toggleDrawer(side, false)}
    >
      <List
        style={{
          marginTop: "40vh"
        }}
      >
        <ListItem
          button
          onClick={() =>
            scrollToComponent(props.refs.About.current, {
              offset: 0,
              align: "top",
              duration: 0
            })
          }
        >
          <ListItemIcon>
            <p
              style={{
                color: "#e92eff",
                fontSize: "18px",
                fontFamily: "Roboto",
                margin: "0"
              }}
            >
              0x1:
            </p>
          </ListItemIcon>
          <ListItemText
            primary={
              <p
                style={{
                  color: "white",
                  fontSize: "18px",
                  fontFamily: "Roboto",
                  margin: "0"
                }}
              >
                About
              </p>
            }
          />
        </ListItem>
        <Divider />
        <ListItem
          button
          onClick={() =>
            scrollToComponent(props.refs.Experience.current, {
              offset: 0,
              align: "top",
              duration: 0
            })
          }
        >
          <ListItemIcon>
            <p
              style={{
                color: "#e92eff",
                fontSize: "18px",
                fontFamily: "Roboto",
                margin: "0"
              }}
            >
              0x2:
            </p>
          </ListItemIcon>
          <ListItemText
            primary={
              <p
                style={{
                  color: "white",
                  fontSize: "18px",
                  fontFamily: "Roboto",
                  margin: "0"
                }}
              >
                Experience
              </p>
            }
          />
        </ListItem>
        <Divider />
        <ListItem
          button
          onClick={() =>
            scrollToComponent(props.refs.SiteProjects.current, {
              offset: 0,
              align: "top",
              duration: 0
            })
          }
        >
          <ListItemIcon>
            <p
              style={{
                color: "#e92eff",
                fontSize: "18px",
                fontFamily: "Roboto",
                margin: "0"
              }}
            >
              0x3:
            </p>
          </ListItemIcon>
          <ListItemText
            primary={
              <p
                style={{
                  color: "white",
                  fontSize: "18px",
                  fontFamily: "Roboto",
                  margin: "0"
                }}
              >
                Projects
              </p>
            }
          />
        </ListItem>
        <Divider />
        <ListItem
          button
          onClick={() =>
            scrollToComponent(props.refs.Contact.current, {
              offset: 0,
              align: "top",
              duration: 0
            })
          }
        >
          <ListItemIcon>
            <p
              style={{
                color: "#e92eff",
                fontSize: "18px",
                fontFamily: "Roboto",
                margin: "0"
              }}
            >
              0x4:
            </p>
          </ListItemIcon>
          <ListItemText
            primary={
              <p
                style={{
                  color: "white",
                  fontSize: "18px",
                  fontFamily: "Roboto",
                  margin: "0"
                }}
              >
                Contact
              </p>
            }
          />
        </ListItem>
        <Divider />
      </List>
    </Grid>
  );

  return (
    <div>
      <Fade distance="10px" bottom>
        <IconButton
          onClick={toggleDrawer("right", true)}
          aria-label="account of current user"
          aria-controls="menu-appbar"
          aria-haspopup="true"
          color="inherit"
        >
          <NotesIcon />
        </IconButton>
      </Fade>
      <Drawer
        anchor="right"
        open={state.right}
        onClose={toggleDrawer("right", false)}
      >
        {sideList("right")}
      </Drawer>
    </div>
  );
}
