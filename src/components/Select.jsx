import React from 'react';
import { makeStyles, createStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles(() => (
  createStyles({
    "button":{
      borderColor: "#3399FF",
      color: "#3399FF",
      fontWeight: 600,
      height: 50,
      width: 150,
      "&:hover":{
        backgroundColor:"#3399FF",
        color: "#FFFFFF"
      }
    }
  })
))


const Select = (props) => {
  const classes = useStyles();
  return(
    <Button
      className={classes.button}
      variant="outlined" onClick={() => props.select(props.nextId)} >
      {props.text}
    </Button>

  )
}

export default Select;