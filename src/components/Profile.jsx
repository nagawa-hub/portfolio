import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import Avatar from '@material-ui/core/Avatar';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles((theme) => ({
  root: {
    height: 400, 
    width: '100%'
  },
  avatar: {
    height: theme.spacing(18),
    width: theme.spacing(18),
    marginRight: 30
  }
}));

const Profile = () => {
  const classes = useStyles();
  return(
    <List className={classes.root}>
      <ListItem>
        <ListItemAvatar>
          <Avatar className={classes.avatar} alt="nagawa" src="/static/images/avatar/1.jpg" />
        </ListItemAvatar>
        <ListItemText>
          <Typography variant="h6" component="h2">
            名前：ながわ　25才<br/>
            前職では個人向け営業を1年半、Sierの営業を1年間経験しました
          </Typography>
        </ListItemText>
      </ListItem>
      <ListItem>
        エンジニアを目指すきっかけ
      </ListItem>
    </List>
  )
}

export default Profile;