import React from 'react';
import { makeStyles, createStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles(() => (
  createStyles({
    "gitButton":{
      borderColor: "#FF66FF",
      color: "#FF66FF",
      height: 50,
      width: 50,
      "&:hover":{
        backgroundColor:"#FF66FF",
        color: "#FFFFFF"
      }
    },
    "twitterButton":{
      borderColor: "#00BFFF",
      color: "#00BFFF",
      height: 50,
      width: 50,
      "&:hover":{
        backgroundColor:"#00BFFF",
        color: "#FFFFFF"
      }
    }
  })
))

const LinkButton = (props) => {
  const isGit = (props.style === 'gitButton')
  const classes = useStyles();
  return(
    <div>
    {isGit ? (
      <Button className={classes.gitButton}
              target="_blank" 
              href="https://github.com/nagawa-hub"
      >
        {props.icon}
      </Button>
    ) : (
      <Button className={classes.twitterButton}
              target="_blank" 
              href="https://twitter.com/NnN02223409"
      >
        {props.icon}
      </Button>
    )}
    </div>
  )
}

export default LinkButton;