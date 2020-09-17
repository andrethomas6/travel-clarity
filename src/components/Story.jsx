import React, { useState, useEffect } from "react";
import axios from "axios";
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
import Button from "@material-ui/core/Button";
import { TextField } from "@material-ui/core";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";

// ***** STYLES SECTION *****
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
  container: {
    display: "flex",
    flexWrap: "wrap",
  },
  textField: {
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1),
    minWidth: 250,
  },
}));

// ***** COMPONENT SECTION *****
const Story = ({ location }) => {
  const classes = useStyles();

  const [open, setOpen] = useState(false);
  const [city, setCity] = useState("Santorini");
  const [country, setCountry] = useState("Greece");
  const [date, setDate] = useState("");
  const [username, setUsername] = useState("");
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  const [stories, setStories] = useState([]);

  const handleClickOpen = () => {
    setCity(location[0]);
    setCountry(location[1]);
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleClear = () => {
    setDate("");
    setUsername("");
    setTitle("");
    setBody("");
  };

  const getStories = () => {
    axios.get("/story", {
      params: {
        city: "Dubai",
        country: country
      },
    })
    .then((results) => {
      setStories(results.data)
    })
    .catch((error) => console.log(error))
  };

  // useEffect(() => {
  //   getStories();
  // });

  const handleSubmit = () => {
    axios({
      method: "post",
      url: "/story",
      data: {
        city: city,
        country: country,
        date: date,
        username: username,
        title: title,
        body: body,
        likes: 0
      },
    })
      .then((response) => {
        console.log('response', response);
        getStories();
        handleClose();
        handleClear();
      })
      .catch((error) => console.log(error));
  };

  let data = [1];

  let storiesTemplate = data.map((story, i) => {
    console.log('stories', stories);
    return (
      <Paper key={i} className={classes.paper} elevation={20}>
        <Grid container direction="column" spacing={2}>
          <Grid container item justify="space-between">
            <Grid item>
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
          <Fab
            variant="extended"
            onClick={handleClickOpen}
            className={classes.addButton}
            color="secondary"
          >
            <AddIcon className={classes.extendedIcon} color="primary" />
            Share Your Story
          </Fab>
        </Typography>
      </Grid>
      <Grid item className={classes.stories}>
        {storiesTemplate}
      </Grid>

      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="form-dialog-title"
      >
        <DialogTitle id="form-dialog-title">Share Your Story</DialogTitle>
        <DialogContent>
          <DialogContentText>
            Share your amazing travel story by filling in the details below!
          </DialogContentText>
          <TextField
            margin="dense"
            id="city"
            label="City"
            type="text"
            value={city}
            required
            // disabled
          />
          <TextField
            margin="dense"
            id="Country"
            label="Country"
            type="text"
            value={country}
            required
            // disabled
          />
          <TextField
            id="date"
            label="Travel Date"
            type="date"
            value={date}
            className={classes.textField}
            InputLabelProps={{
              shrink: true,
            }}
            onChange={(event) => setDate(event.target.value)}
            required
          />
          <TextField
            autoFocus
            margin="dense"
            id="username"
            label="Nickname"
            value={username}
            type="text"
            fullWidth
            required
            onChange={(event) => setUsername(event.target.value)}
          />
          <TextField
            margin="dense"
            id="title"
            label="Topic"
            value={title}
            type="text"
            fullWidth
            required
            onChange={(event) => setTitle(event.target.value)}
          />
          <TextField
            margin="dense"
            id="body"
            label="Your Story"
            value={body}
            multiline
            type="text"
            fullWidth
            required
            onChange={(event) => setBody(event.target.value)}
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary">
            Cancel
          </Button>
          <Button onClick={handleSubmit} color="primary">
            Share
          </Button>
        </DialogActions>
      </Dialog>
    </Grid>
  );
};

export default Story;
