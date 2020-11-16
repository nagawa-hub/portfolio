import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Avatar from '@material-ui/core/Avatar';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    '& > *': {
      margin: theme.spacing(5),
    },
  },
  size: {
    width: theme.spacing(18),
    height: theme.spacing(18),
  },
}));

const Profile = () => {
  const classes = useStyles();
  return(
    <div className={classes.root}>
      <Avatar alt="nagawa" src="/static/images/avatar/1.jpg" className={classes.size} />
      <div>
        中川裕　大阪出身/25歳<br/>
      </div>
    </div>
  )
}

export default Profile;