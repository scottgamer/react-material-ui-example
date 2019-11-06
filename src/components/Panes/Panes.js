import React from "react";
import { Grid } from "@material-ui/core";
import Pane from "./Pane/Pane";

const Panes = props => {
  const styles = {
    Paper: {
      padding: 20,
      margin: 10
    }
  };

  return (
    <Grid container>
      <Grid item sm>
        <Pane styles={styles} name="Left Pane" />
      </Grid>
      <Grid item sm>
        <Pane styles={styles} name="Right Pane" />
      </Grid>
    </Grid>
  );
};

export default Panes;
