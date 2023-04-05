import React from "react";
// nodejs library that concatenates classes
import classNames from "classnames";
 
import { makeStyles } from "@material-ui/core/styles";
// @material-ui/icons
// core components
import Header from "/components/Header/Header.js";
import HeaderLinks from "/components/Header/HeaderLinks.js";
import Footer from "/components/Footer/Footer.js";
import GridContainer from "/components/Grid/GridContainer.js";
import GridItem from "/components/Grid/GridItem.js";
 
import Parallax from "/components/Parallax/Parallax.js";
// sections for this page
 
import SectionTabs from "/pages-sections/Components-Sections/SectionTabs.js";
import SectionPills from "/pages-sections/Components-Sections/SectionPills.js";
 
 
import SectionCarousel from "/pages-sections/Components-Sections/SectionCarousel.js";
import SectionCompletedExamples from "/pages-sections/Components-Sections/SectionCompletedExamples.js";
import SectionLogin from "/pages-sections/Components-Sections/SectionLogin.js";
 
import SectionDownload from "/pages-sections/Components-Sections/SectionDownload.js";

import styles from "/styles/jss/nextjs-material-kit/pages/components.js";

const useStyles = makeStyles(styles);

export default function Components(props) {
  const classes = useStyles();
  const { ...rest } = props;
  return (
    <div>
      <Header
        brand="Earl Brothers Masonry"
        rightLinks={<HeaderLinks />}
        fixed
        color="transparent"
        changeColorOnScroll={{
          height: 400,
          color: "white"
        }}
        {...rest}
      />
      <Parallax image="/img/nextjs_header.jpg">
        <div className={classes.container}>
          <GridContainer>
            <GridItem>
              <div className={classes.brand}>
                <h1 className={classes.title}>Earl Brothers Masonry</h1>
                <h3 className={classes.subtitle}>
                "From design to completion, our skilled masons are dedicated to creating beautiful, enduring structures that reflect your unique vision. With meticulous attention to detail and a commitment to using only the highest-quality materials, we are proud to offer our clients a superior masonry experience that stands the test of time."
                </h3>
              </div>
            </GridItem>
          </GridContainer>
        </div>
      </Parallax>

      <div className={classNames(classes.main, classes.mainRaised)}>
    
         
        <SectionTabs />
        <SectionPills />
     
        <SectionCarousel />
        <SectionCompletedExamples />
        <SectionLogin />
       
       
        <SectionDownload />
      </div>
      <Footer />
    </div>
  );
}
