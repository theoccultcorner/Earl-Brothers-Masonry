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
          
            <Button style={{ 
    backgroundColor: 'black' 
    
  }}
              color="white"
              size="lg"
            
              target="_blank"
            
              href="mailto:Earlbrothersenterprize@gmail.com">
              Contact Us
            </Button>
          </GridItem>
        </GridContainer>
        <div className={classes.textCenter + " " + classes.sharingArea}>
          <GridContainer justify="center">
          <GridItem     xs={12} sm={12} md={8}>
            <h2>Want to see more?</h2>
            <h4>
              Check out our {" "}
              <a    href="https://www.instagram.com/earlbrothersmasonry" onClick={(e) => e.preventDefault()}>
                Instagram{" "}
              </a>
            Thank you!
            </h4>
          </GridItem>
          </GridContainer>
          
         
          <a href="https://www.instagram.com/earlbrothersmasonry">
  <Button style={{ backgroundColor: 'black' }}>
    <i className={classes.socials + "fa fa-instagram"} />Instagram
  </Button>
</a>
       
        </div>
      </div>
    </div>
  );
}
