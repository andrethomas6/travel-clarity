import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import clsx from "clsx";
import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import CardMedia from "@material-ui/core/CardMedia";
import CardContent from "@material-ui/core/CardContent";
import CardActions from "@material-ui/core/CardActions";
import Collapse from "@material-ui/core/Collapse";
import Avatar from "@material-ui/core/Avatar";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import { Grid } from "@material-ui/core";
import ThumbUpAltRoundedIcon from "@material-ui/icons/ThumbUpAltRounded";
import PublicTwoToneIcon from "@material-ui/icons/PublicTwoTone";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import MoreVertIcon from "@material-ui/icons/MoreVert";
import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";

// ***** STYLES SECTION *****
const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: 1200,
    margin: "auto",
  },
  media: {
    height: 0,
    paddingTop: "56.25%", // 16:9
  },
  expand: {
    transform: "rotate(0deg)",
    marginLeft: "auto",
    transition: theme.transitions.create("transform", {
      duration: theme.transitions.duration.shortest,
    }),
  },
  expandOpen: {
    transform: "rotate(180deg)",
  },
  avatar: {
    backgroundColor: "#00909e",
  },
  cardStyle: {
    minHeight: "450px",
  },
  thumbs: {
    color: "#dae1e7",
  },
}));

// ***** COMPONENT SECTION *****
const Info = ({ info }) => {
  const classes = useStyles();
  const [expanded, setExpanded] = useState(false);

  const locationCards = info.map((place) => {
    const [open, setOpen] = React.useState(false);
    const [scroll, setScroll] = React.useState("paper");

    const handleClickOpen = (scrollType) => () => {
      setOpen(true);
      setScroll(scrollType);
    };

    const handleClose = () => {
      setOpen(false);
    };
    const descriptionElementRef = React.useRef(null);
    React.useEffect(() => {
      if (open) {
        const { current: descriptionElement } = descriptionElementRef;
        if (descriptionElement !== null) {
          descriptionElement.focus();
        }
      }
    }, [open]);

    return (
      <Grid key={place.id} item xs={12} sm={6} md={3}>
        <Card className={classes.cardStyle}>
          <CardHeader
            avatar={
              <Avatar aria-label="location" className={classes.avatar}>
                <PublicTwoToneIcon />
              </Avatar>
            }
            title={place.location_ids[0]}
            subheader={place.location_ids[1]}
            action={
              <IconButton aria-label="add to favorites">
                <ThumbUpAltRoundedIcon
                  fontSize="small"
                  className={classes.thumbs}
                />
              </IconButton>
            }
          />
          <CardMedia
            className={classes.media}
            image={place.images[0].source_url}
            title={place.name}
            onClick={handleClickOpen("paper")}
          />
          <CardContent>
            <CardActions disableSpacing className={classes.icons}>
              <Typography>{place.name}</Typography>
              <IconButton
                className={clsx(classes.expand, {
                  [classes.expandOpen]: expanded,
                })}
                onClick={handleClickOpen("paper")}
                aria-expanded={expanded}
                aria-label="show more"
              >
                <ExpandMoreIcon />
              </IconButton>
            </CardActions>
            <Typography variant="body2" color="textSecondary" component="p">
              {place.snippet}
            </Typography>
          </CardContent>
          <Collapse in={expanded} timeout="auto" unmountOnExit>
            <CardContent>
              <Typography paragraph>{place.intro}</Typography>
            </CardContent>
          </Collapse>
        </Card>

        <div>
          <Dialog
            open={open}
            onClose={handleClose}
            scroll={scroll}
            aria-labelledby="scroll-dialog-title"
            aria-describedby="scroll-dialog-description"
          >
            <DialogTitle id="scroll-dialog-title">{place.name}</DialogTitle>
            <DialogContent dividers={scroll === "paper"}>
              <DialogContentText
                id="scroll-dialog-description"
                ref={descriptionElementRef}
                tabIndex={-1}
              >
                {place.intro}
                <hr />
                <CardMedia
                  className={classes.media}
                  image={place.images[0].source_url}
                  title={place.name}
                />
              </DialogContentText>
            </DialogContent>
            <DialogActions>
              <Button onClick={handleClose} color="primary">
                Finish
              </Button>
            </DialogActions>
          </Dialog>
        </div>
      </Grid>
    );
  });

  return (
    <Grid container justify="center" spacing={3} className={classes.root}>
      {locationCards}
    </Grid>
  );
};

export default Info;
