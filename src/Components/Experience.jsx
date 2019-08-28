import React, { Component } from "react";

import Grid from "@material-ui/core/Grid";
import Fade from "react-reveal/Fade";
export default class Welcome extends Component {
  render() {
    return (
      <div style={{ marginTop: "400px" }}>
        <Fade bottom delay={200} distance="10px">
          <Grid container>
            <h1
              style={{
                fontFamily: "Roboto",
                color: "white"
              }}
            >
              <Fade bottom delay={50}>
                <p
                  style={{
                    color: "#e92eff",
                    fontSize: "19px",
                    margin: "0",
                    fontFamily: "Roboto"
                  }}
                >
                  0011:{"  "}
                  <em
                    style={{
                      fontStyle: "normal",
                      color: "white",
                      fontSize: "24px"
                    }}
                  >
                    Experience.
                  </em>
                </p>
              </Fade>
            </h1>
          </Grid>
          <Grid container>
            <h2
              style={{
                fontFamily: "Roboto",
                color: "white"
              }}
            >
              Boeing Intelligence & Analyitics
            </h2>
            <h2
              style={{
                fontFamily: "Roboto",
                color: "white",
                fontWeight: "300"
              }}
            >
              &nbsp; - &nbsp; Software Engineering Intern
            </h2>
          </Grid>

          <h4
            style={{
              fontFamily: "Roboto",
              width: "70%",
              fontWeight: "400",
              fontSize: "15px",
              margin: "0",
              color: "#e92eff"
            }}
          >
            June 2019 &nbsp; - &nbsp; August 2019
          </h4>
          <br />
          <Grid container style={{ margin: "0" }}>
            <h4
              style={{
                fontFamily: "Roboto",
                width: "70%",
                fontWeight: "400",
                fontSize: "20px",
                color: "white"
              }}
            >
              Overview:
              <br />
            </h4>
            <h4
              style={{
                fontFamily: "Roboto",
                color: "#d5d5d5",
                width: "70%",
                fontWeight: "300",
                fontSize: "18px",
                margin: "0"
              }}
            >
              At BI&A we engineered a facial recognition app applying AWS
              Rekognition to identify people, objects, and frequent associations
              between people. Given an image of someone, you can find all the
              images that person is in, the frequency of people that person is
              with, and the objects within those images. You can also search for
              objects in the datasets and find the matching images along with
              graphs to better visualize the results.
            </h4>
            <h4
              style={{
                fontFamily: "Roboto",
                width: "70%",
                fontWeight: "400",
                fontSize: "20px",
                color: "white"
              }}
            >
              Architecture:
            </h4>
            <h4
              style={{
                fontFamily: "Roboto",
                color: "#d5d5d5",
                width: "70%",
                fontWeight: "300",
                fontSize: "18px",
                margin: "0"
              }}
            >
              <Fade left delay={300} cascade distance="50px">
                <ul style={{ margin: "0" }}>
                  <li>
                    Hosted ReactJS frontend on AWS S3, ExpressJS REST APIs on
                    AWS EC2, and MySQL database in AWS RDS.
                  </li>{" "}
                  <li>
                    Improved reliability with multiple REST APIs in a
                    microservice architecture.
                  </li>{" "}
                  <li>
                    Maximized scalability by deploying through AWS Elastic
                    Beanstalk. Utilized AWS: ELB, ASG, Route 53, EC2, S3, and
                    CloudWatch.
                  </li>
                </ul>
              </Fade>
            </h4>
            <h4
              style={{
                fontFamily: "Roboto",
                width: "70%",
                fontWeight: "400",
                fontSize: "20px",

                color: "white"
              }}
            >
              Design:
            </h4>
            <h4
              style={{
                fontFamily: "Roboto",
                color: "#d5d5d5",
                width: "70%",
                fontWeight: "300",
                fontSize: "18px",
                margin: "0"
              }}
            >
              <Fade left delay={300} cascade distance="50px">
                <ul style={{ margin: "0" }}>
                  <li>
                    Introduced continuous integration through Git and Jenkins
                    running daily builds.
                  </li>{" "}
                  <li>
                    Worked in an Agile/SCRUM environment using Jira to monitor
                    weekly sprints.
                  </li>
                  <li>
                    Populated and visualized a Neo4J database to connect groups
                    of people.
                  </li>
                  <li>
                    Minimized duration of the analysis of 1800 images from 80
                    min to 2 min with multi-threading.
                  </li>
                </ul>
              </Fade>
            </h4>
          </Grid>

          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <hr color="#e92eff" />
          <br />
          <br />
          <br />
          <br />
          <br />
        </Fade>
        <Fade bottom delay={300} distance="10px">
          <Grid container>
            <h2
              style={{
                fontFamily: "Roboto",
                color: "white"
              }}
            >
              University of Maryland, College Park
            </h2>
            <h2
              style={{
                fontFamily: "Roboto",
                color: "white",
                fontWeight: "300"
              }}
            >
              &nbsp; - &nbsp; Teaching Assistant
            </h2>
          </Grid>

          <h4
            style={{
              fontFamily: "Roboto",
              width: "70%",
              fontWeight: "400",
              fontSize: "15px",
              margin: "0",
              color: "#e92eff"
            }}
          >
            August 2019 &nbsp; - &nbsp; December 2019
          </h4>
          <h4
            style={{
              fontFamily: "Roboto",
              width: "70%",
              fontWeight: "400",
              fontSize: "20px",
              color: "white"
            }}
          >
            Overview:
          </h4>
          <Grid container>
            <h4
              style={{
                fontFamily: "Roboto",
                color: "#d5d5d5",
                width: "70%",
                fontWeight: "300",
                fontSize: "18px",
                margin: "0"
              }}
            >
              In the class CMSC389N: Single Page Web Application Development, I
              taught ReactJS, ExpressJS, and MongoDB.
              {/* One of the most notable
              projects was making a simple Jira ticketing system. An ExpressJS
              REST API bridged the data between a MongoDB database and ReactJS
              frontend. From the front end you could create, delete, and modify
              tickets. */}
            </h4>
          </Grid>
        </Fade>
      </div>
    );
  }
}
