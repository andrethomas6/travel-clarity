import React from "react";
import { makeStyles } from '@material-ui/core/styles';
import { Grid, Card, CardMedia} from "@material-ui/core";


const useStyles = makeStyles((theme) => ({
  media: {
    height: "500px"
  }
}))

const Jumbotron = () => {
  const classes = useStyles();
  return (
    <Card >
      <CardMedia
       className={classes.media}
        image={'https://images.unsplash.com/photo-1545556124-1e664bc6da2f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2090&q=80'}
        title="sunset"
      />
    </Card>
  )
};

export default Jumbotron;
