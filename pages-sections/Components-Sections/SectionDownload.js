/*eslint-disable*/
import React from "react";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
// @material-ui/icons
import GridContainer from "/components/Grid/GridContainer.js";
import GridItem from "/components/Grid/GridItem.js";
import Button from "/components/CustomButtons/Button.js";
// core components
import styles from "/styles/jss/nextjs-material-kit/pages/componentsSections/downloadStyle.js";

const useStyles = makeStyles(styles);

export default function SectionDownload() {
  const classes = useStyles();
  return (
    <div className={classes.section}>
      <div className={classes.container}>
  
        <br />
        <br />
        <GridContainer className={classes.textCenter} justify="center">
          <GridItem xs={12} sm={12} md={8}>
            <h2>Want to know more?</h2>
            <h4>
              Just reach out and {" "}
              <a href="#Contact" onClick={(e) => e.preventDefault()}>
                Contact Us{" "}
              </a>
            We are looking forward to hearing from you!
            </h4>
          </GridItem>
          <GridItem xs={12} sm={8} md={10}>
          
            <Button
              color="rose"
              size="lg"
              href="#Contact"
              target="_blank"
            >
              Contact Us
            </Button>
          </GridItem>
        </GridContainer>
        <div className={classes.textCenter + " " + classes.sharingArea}>
          <GridContainer justify="center">
            <h3>Thank you and have a nice day!</h3>
          </GridContainer>
          
          <Button color="facebook">
            <i className={classes.socials + " fab fa-facebook-square"} /> Facebook
          </Button>
          <Button color="facebook">
            <i className={classes.socials + " fab fa-Instagram"} /> Instagram
          </Button>
       
        </div>
      </div>
    </div>
  );
}
