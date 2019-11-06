import React from "react";
import { Paper } from "@material-ui/core";

const Pane = props => {
  return <Paper style={props.styles.Paper}>{props.name}</Paper>;
};

export default Pane;
