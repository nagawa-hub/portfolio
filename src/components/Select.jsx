import React from 'react';
// import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';

// const useStyles = makeStyles((theme) => ({
//   root: {
//     '& > *': {
//       margin: theme.spacing(1),
//     },
//   },
// }));



const Select = (props) => {
  // const classes = useStyles();
  return(
    <Button variant="contained" color="primary" onClick={() => props.select(props.nextId)} >
        {props.text}
    </Button>

  )
}

export default Select;