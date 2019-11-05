import React, { Component } from "react";
import {
  Typography,
  TextField,
  Paper,
  Button,
  List,
  ListItem,
  ListItemText,
  ListItemSecondaryAction,
  IconButton
} from "@material-ui/core";
import { Delete } from "@material-ui/icons";
import { withStyles } from "@material-ui/core/styles";

class Exercises extends Component {
  state = {
    exercises: [
      { id: 1, title: "Bench Press" },
      { id: 2, title: "Deadlift" },
      { id: 3, title: "Squats" }
    ],
    title: ""
  };

  changeHandler = ({ target: { name, value } }) => this.setState({ [name]: value });

  createHandler = e => {
    e.preventDefault();
    if (this.state.title) {
      this.setState(({ exercises, title }) => ({
        exercises: [...exercises, { id: Date.now(), title }],
        title: ""
      }));
    }
  };

  deleteHandler = id =>
    this.setState(({ exercises }) => ({
      exercises: exercises.filter(exercise => exercise.id !== id)
    }));

  render() {
    const { title, exercises } = this.state;
    const { classes } = this.props;

    return (
      <Paper className={classes.root}>
        <Typography variant="h2" align="center" gutterBottom>
          Exercises
        </Typography>

        <form onSubmit={e => this.createHandler(e)} className={classes.form}>
          <TextField
            name="title"
            label="Exercise"
            value={title}
            onChange={this.changeHandler}
            margin="normal"
          />
          <Button type="submit" color="primary" variant="contained">
            Create
          </Button>
        </form>

        <List>
          {exercises.map(({ id, title }) => (
            <ListItem key={id}>
              <ListItemText primary={title} />
              <ListItemSecondaryAction>
                <IconButton color="primary" onClick={() => this.deleteHandler(id)}>
                  <Delete />
                </IconButton>
              </ListItemSecondaryAction>
            </ListItem>
          ))}
        </List>
      </Paper>
    );
  }
}

const styles = theme =>
  console.log(theme) || {
    root: {
      // margin: 20,
      margin: "auto",
      padding: 20,
      maxWidth: 400
    },
    form: {
      display: "flex",
      alignItems: "baseline",
      justifyContent: "space-evenly"
    }
  };

export default withStyles(styles)(Exercises);
