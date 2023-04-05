import React from "react";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
// @material-ui/icons

// core components
import GridContainer from "/components/Grid/GridContainer.js";
import GridItem from "/components/Grid/GridItem.js";

import styles from "/styles/jss/nextjs-material-kit/pages/componentsSections/completedStyle.js";

const useStyles = makeStyles(styles);

export default function SectionCompletedExamples() {
  const classes = useStyles();
  return (
    <div className={classes.section}>
      <div className={classes.container}>
        <GridContainer justify="center">
          <GridItem xs={12} sm={12} md={8}>
            <h2>   We have experience in all phases of masonry that include brick, block, and stone...
</h2>
            <h4>
          
Earl Brothers Masonry was brought to you with 20 years of experience by three men born and built in Santa Maria, California. We may not be the largest company at the moment but our eyes are open to the bigger and greater futures of our customers and our company. Do you need retaining walls or perhaps a block wall? Maybe a stone fire pit or a stone barbecue to make your friends jealous? We'll throw in a free estimate for brick to show you we mean business! We guarantee the quality and integrity of our jobs well done. We'll have local competitors shaking in their boots work boots. We believe that our quality of work will lead to a successful masonry company honored to service the central coast for years to come!
            </h4>
          </GridItem>
        </GridContainer>
      </div>
    </div>
  );
}
