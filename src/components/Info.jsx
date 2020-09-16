
// ***** STYLES SECTION *****
// const useStyles = makeStyles((theme) => ({
//   info: {
//     height: "450px",
//     backgroundColor: "#142850"
//   },
// }));

import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import clsx from 'clsx';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Collapse from '@material-ui/core/Collapse';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import {Grid} from '@material-ui/core';
import ThumbUpAltRoundedIcon from '@material-ui/icons/ThumbUpAltRounded';
import PublicTwoToneIcon from '@material-ui/icons/PublicTwoTone';
import AirplaneIcon from '@material-ui/icons/AirplanemodeActiveRounded';
import FavoriteIcon from '@material-ui/icons/Favorite';
import ShareIcon from '@material-ui/icons/Share';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import MoreVertIcon from '@material-ui/icons/MoreVert';

// ***** STYLES SECTION *****
const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: 1200,
    margin: 'auto'
  },
  media: {
    height: 0,
    paddingTop: '56.25%', // 16:9
  },
  expand: {
    transform: 'rotate(0deg)',
    marginLeft: 'auto',
    transition: theme.transitions.create('transform', {
      duration: theme.transitions.duration.shortest,
    }),
  },
  expandOpen: {
    transform: 'rotate(180deg)',
  },
  avatar: {
    backgroundColor: '#00909e',
  },
}));

// ***** COMPONENT SECTION *****
const Info = ({info}) => {
  const classes = useStyles();
  const [expanded, setExpanded] = useState(false);
  const [city, setCity] = useState(["Santorini"]);
  const [country, setCountry] = useState(["Greece"]);
  const [image, setImage] = useState(["https://images.unsplash.com/photo-1507501336603-6e31db2be093?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1953&q=80"])
  const [description, setDescription] = useState("Known for lunch. Recommended places to visit are Akrotiri, Ancient Thera and Santorini cable car.")
  

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };
  // console.log('info', info);

  const locationCards = info.map(place => {
    // console.log('place', place);
    return (
      <Grid key={place.id} item xs={12} sm={6} md={3}>
            <Card >
      <CardHeader
        avatar={
          <Avatar aria-label="location" className={classes.avatar}>
            <PublicTwoToneIcon />
          </Avatar>
        }
        title={place.location_ids[0]}
        subheader={place.location_ids[1]}
      />
      <CardMedia
        className={classes.media}
        image={place.images[0].source_url}
        title={place.name}
      />
      <CardContent>
        <Typography>{place.name}</Typography>
        <Typography variant="body2" color="textSecondary" component="p">
          {place.snippet}
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        <IconButton aria-label="add to favorites">
          <ThumbUpAltRoundedIcon />
        </IconButton>
        <IconButton aria-label="share">
          <ShareIcon />
        </IconButton>
        <IconButton
          className={clsx(classes.expand, {
            [classes.expandOpen]: expanded,
          })}
          onClick={handleExpandClick}
          aria-expanded={expanded}
          aria-label="show more"
        >
          <ExpandMoreIcon />
        </IconButton>
      </CardActions>
      <Collapse in={expanded} timeout="auto" unmountOnExit>
        <CardContent>
          <Typography paragraph>
            {place.intro}
          </Typography>
        </CardContent>
      </Collapse>
    </Card>
      </Grid>
    )
  })

  return (
    <Grid container justify="center" spacing={3} className={classes.root}>
        {locationCards}
    </Grid>
  );
}

export default Info;