import React from "react";
import {
  Grid,
  Paper,
  Typography,
  Avatar,
  IconButton,
  Fab,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import AddIcon from "@material-ui/icons/Add";
import FavoriteTwoToneIcon from "@material-ui/icons/FavoriteTwoTone";

const useStyles = makeStyles((theme) => ({
  title: {
    textAlign: "center",
  },
  stories: {
    margin: "auto",
  },
  paper: {
    minWidth: "500px",
    maxWidth: "1000px",
    padding: "20px",
  },
  avatar: {
    width: theme.spacing(7),
    height: theme.spacing(7),
  },
  addButton: {
    margin: "15px",
  },
  extendedIcon: {
    marginRight: theme.spacing(1),
  },
}));

const Reviews = () => {
  const classes = useStyles();

  let data = [1];

  let stories = data.map((story) => {
    return (
      <Paper className={classes.paper} elevation={20}>
        <Grid container direction="column" spacing={2}>
          <Grid container item justify="space-between">
            <Grid item spacing={2}>
              <Typography variant="subtitle1">Santorini</Typography>
              <Typography variant="subtitle2">Greece</Typography>
            </Grid>
            <Grid item>
              <Avatar
                alt="Remy Sharp"
                src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80"
                className={classes.avatar}
              />
              <Typography variant="caption">grace123</Typography>
            </Grid>
          </Grid>
          <Grid container item>
            <Grid item>
              <Typography variant="h6">
                Island hopping |{" "}
                <Typography variant="caption">
                  Travel Date: January 2019
                </Typography>
              </Typography>
            </Grid>
            <Grid item>
              <Typography variant="body1">
                "We had private catamaran sunset cruise for 6 people. From start
                to finish, it was fantastic with Gianna looking after us. Great
                food and drink. We were on Atlantis and the sunset was
                incredible. A lovely way to see islands."
              </Typography>
            </Grid>
          </Grid>
          <Grid container item>
            <IconButton aria-label="add to favorites">
              <FavoriteTwoToneIcon fontSize="large" color="secondary" />
            </IconButton>
          </Grid>
        </Grid>
      </Paper>
    );
  });

  return (
    <Grid container>
      <Grid item xs={12}>
        <Typography variant="h4" className={classes.title}>
          Travel Stories
          <Fab variant="extended" className={classes.addButton} color="secondary">
            <AddIcon className={classes.extendedIcon} color="primary"/>
            Tell Your Story
          </Fab>
        </Typography>
      </Grid>
      <Grid item className={classes.stories}>
        {stories}
      </Grid>
    </Grid>
  );
};

export default Reviews;
