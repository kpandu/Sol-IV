import React, { Component } from "react";

import Grid from "@material-ui/core/Grid";
import Fade from "react-reveal/Fade";
import ProjectCard from "./ProjectCard";
import Planet from "../Assets/planet.PNG";
import Sol1 from "../Assets/SOL1.PNG";
import Sol2 from "../Assets/SOL2.PNG";
import Sol4 from "../Assets/SOL4.jpg";
import texting from "../Assets/texting.jpg";
import pong from "../Assets/pong.png";
import brute from "../Assets/brute.png";
import compression from "../Assets/compression.PNG";
export default class Sites extends Component {
  render() {
    return (
      <div style={{ width: "100%" }}>
        <Grid container justify="flex-start">
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
              0101:{"  "}
              <em
                style={{
                  fontStyle: "normal",
                  color: "white",
                  fontSize: "24px"
                }}
              >
                Projects.
              </em>
            </p>
          </h1>
        </Grid>
        <br />
        <Grid container justify="center" style={{ width: "100%" }}>
          <Fade delay={100}>
            <ProjectCard
              src={Sol1}
              title="Sol I"
              body="Built my foundation of HTML/CSS/JS through a website made from scratch (excl. images). Incorperated an interactive particle effect."
              skills={["HTML", "CSS", "JS"]}
            />
          </Fade>
          <Fade delay={200}>
            <ProjectCard
              src={Sol2}
              title="Sol II"
              body="Taught the fundamentals of ReactJS which were then vastly expanded on during my internship at BI&A."
              skills={["ReactJS", "CSS"]}
            />
          </Fade>
          <Fade delay={200}>
            <ProjectCard
              src={Planet}
              title="Sol III"
              body="Despite what you think, the above image is one of many versions of Sol III. It taught 3-D programming along with the math involved."
              skills={["BabylonJS"]}
              href="http://sol3.s3-website-us-east-1.amazonaws.com/"
            />
          </Fade>
          <Fade delay={300}>
            <ProjectCard
              src={Sol4}
              title="Sol IV (Current)"
              body="Of course this site is a project as well! With an emphasis on simplicity I present my latest ReactJS ability. This entire site took me 3 days to make! It is also fully mobile friendly."
              skills={["ReactJS"]}
            />
          </Fade>
          <Fade delay={400}>
            <ProjectCard
              src={texting}
              title="Texting App"
              body="This is the texting app that I developed in CMSC131A. It connects to a server which sends messages between users. The text editor was also made from scratch."
              skills={["Racket"]}
            />
          </Fade>
          <Fade delay={500}>
            <ProjectCard
              src={pong}
              title="Pong"
              body="My first personal project in Python was the game Pong made with Pygame. It includes a 2-player mode or single-player against an AI mode."
              skills={["Pygame"]}
            />
          </Fade>
          <Fade delay={200}>
            <ProjectCard
              src={brute}
              title="Brute Force Attack"
              body="Tries many passwords on an unsecured port of a site and attempting to get access into the file system. Multithreaded to handle enormous password lists."
              skills={["Python", "Sockets", "Kali Linux"]}
            />
          </Fade>
          <Fade delay={250}>
            <ProjectCard
              src={compression}
              title="Image Compression"
              body="The 4 images above were generated through Matlab using Singular Value Decomposition. 100%, 25%, 5%, 2%, and 1% are percentage of the singular values kept in each image starting from the left."
              skills={["Matlab", "Linear Algebra"]}
            />
          </Fade>
        </Grid>
      </div>
    );
  }
}
