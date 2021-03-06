import React, { useState, useEffect } from "react";
import axios from "axios";
import moment from "moment";
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
import RemoveIcon from "@material-ui/icons/Remove";
import SyncIcon from "@material-ui/icons/Sync";
import FavoriteTwoToneIcon from "@material-ui/icons/FavoriteTwoTone";
import Button from "@material-ui/core/Button";
import { TextField } from "@material-ui/core";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";
import Snackbar from "@material-ui/core/Snackbar";
import MuiAlert from "@material-ui/lab/Alert";

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
    margin: "15px",
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
  refresh: {
    margin: "0 25px",
  },
}));

function Alert(props) {
  return <MuiAlert elevation={6} variant="filled" {...props} />;
}

// ***** COMPONENT SECTION *****
const Story = ({ stories, location, getStories }) => {
  const classes = useStyles();

  const [open, setOpen] = useState(false);
  const [city, setCity] = useState(location[0]);
  const [country, setCountry] = useState(location[1]);
  const [date, setDate] = useState("");
  const [username, setUsername] = useState("");
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  const [displayed, setDisplayed] = useState(2);
  const [openSnack, setOpenSnack] = useState(false);
  // ** FUTURE ENHANCEMENT ** const [avatar, setAvatar] = useState("");

  // ***** ACTION HANDLERS *****
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

  const handleClickSnack = () => {
    setOpenSnack(true);
  };

  const handleCloseSnack = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }
    setOpenSnack(false);
  };

  // ***** STORY SUBMISSION FUNCTIONALITY  *****
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
        likes: 0,
      },
    })
      .then((response) => {
        console.log("response", response);
        handleClickSnack();
        handleClose();
        handleClear();
      })
      .catch((error) => console.log(error));
  };

  // ***** DISPLAY FUNCTIONALITY *****
  const handleDisplayed = (action) => {
    if (action === "add" && displayed < stories.length) {
      setDisplayed(displayed + 2);
    } else if (action === "sub" && displayed > 0) {
      setDisplayed(displayed - 2);
    }
  };

  let storiesTemplate = stories.slice(0, displayed).map((story, i) => {
    return (
      <Paper key={i} className={classes.paper} elevation={20}>
        <Grid container direction="column" spacing={2}>
          <Grid container item justify="space-between">
            <Grid item>
              <Typography variant="subtitle1">{story.city}</Typography>
              <Typography variant="subtitle2">{story.country}</Typography>
            </Grid>
            <Grid item>
              <Avatar
                alt="avatar"
                src={story.avatar}
                className={classes.avatar}
              />
              <Typography variant="caption">{story.username}</Typography>
            </Grid>
          </Grid>
          <Grid container item>
            <Grid item xs={12}>
              <Typography variant="h6">
                {story.title} |{" "}
                <Typography variant="caption" color="secondary">
                  Travel Date: {moment(story.date).format("MMMM YYYY")}
                </Typography>
              </Typography>
            </Grid>
            <Grid item xs={12}>
              <Typography variant="body1">{story.body}</Typography>
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
      <Grid container item xs={12} justify="center">
        <Fab
          variant="extended"
          color="secondary"
          onClick={() => handleDisplayed("add")}
        >
          <AddIcon color="primary" />
          View More Stories
        </Fab>
        <Fab
          color="secondary"
          className={classes.refresh}
          onClick={getStories()}
        >
          <SyncIcon color="primary" />
        </Fab>
        <Fab
          variant="extended"
          color="secondary"
          onClick={() => handleDisplayed("sub")}
        >
          <RemoveIcon color="primary" />
          View Less Stories
        </Fab>
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
            onChange={(event) => setCity(event.target.value)}
          />
          <TextField
            margin="dense"
            id="Country"
            label="Country"
            type="text"
            value={country}
            required
            onChange={(event) => setCountry(event.target.value)}
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

      <Snackbar
        open={openSnack}
        autoHideDuration={6000}
        onClose={handleCloseSnack}
      >
        <Alert onClose={handleCloseSnack} severity="success">
          You story saved successfully. Thanks for Sharing!
        </Alert>
      </Snackbar>
    </Grid>
  );
};

export default Story;
