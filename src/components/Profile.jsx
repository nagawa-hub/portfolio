import React from 'react';
import {LinkButton} from './index'
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import TwitterIcon from '@material-ui/icons/Twitter';
import GitHubIcon from '@material-ui/icons/GitHub';
import ProfileImg from '../assets/img/ProfileImg.png'


const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    margin: 'auto',
    maxWidth: '80%',
  },
  img: {
    width: 150,
    height: 150,
    margin: 'auto',
    display: 'block',
    maxWidth: '100%',
    maxHeight: '100%',
  },
  content:{
    marginBottom: 20
  }
}));

const Profile = (props) => {
  const classes = useStyles();
  return(
    <div className={classes.root}>
      <Paper className={classes.paper}>
        <Grid container spacing={2}>
          <Grid item>
              <img className={classes.img} alt="profile" src={ProfileImg} />
          </Grid>
          <Grid item xs={12} sm container>
            <Grid item xs container direction="column" spacing={2}>
              <Grid item xs className={classes.content}>
                <Typography gutterBottom variant="subtitle1">
                  名前：ながわ / 25才
                </Typography>
                <Typography className="profile_title">
                  プロフィール
                </Typography>
                <Typography variant="body2" color="textSecondary">
                  同志社大学を卒業後、１年半個人宅への訪問営業と、１年間SIerでの法人営業を経験。<br/>
                  Webエンジニアになることを決意し、短期で集中して技術を学ぶために退職。<br/>
                  10月よりTechCamp87期として学習、転職活動中。<br/>
                  趣味：サウナ、野球観戦<br/>
                  資格：Excel １級、TOEIC 770点(2017年)
                </Typography>
              </Grid>
              <Grid item className={classes.content}>
                <Typography className="profile_title">
                  エンジニアを目指すきっかけ
                </Typography>
                <Typography variant="body2" color="textSecondary">
                  前職でエンジニアの方々と一緒に関わって営業をしていく中で、物づくりに携わることのやりがいや働き方に対し憧れを感じたことがきっかけ。<br/>
                  営業として顧客とやり取りを行う中でも専門的な知識は不可欠だと感じていたので、技術があることはもちろんですが、今まで経験した営業の考え方を生かして自ら顧客に提案していくことが可能な技術者になることを目標としています。  
                </Typography>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
        <div className="sns_link">
          <LinkButton icon={<GitHubIcon />} style={"gitButton"} />
          <LinkButton icon={<TwitterIcon />} style={"twitterButton"}/>
        </div>
      </Paper>
    </div>
  )
}

export default Profile;