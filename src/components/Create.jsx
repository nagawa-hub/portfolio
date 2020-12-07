import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Sarabred from '../assets/img/sarabred.png';
import Furima from '../assets/img/furima.png';
import Bookshelf from '../assets/img/bookshelf.png';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
  },
  content:{
    width: 330,
    margin: 30
  },
  media: {
    height: 0,
    paddingTop: '56.25%', // 16:9
  },
  mobile:{
    height: 130,
    paddingTop: '78%',
  }
}));

const Create = () => {
  const classes = useStyles();
  return(
    <Card className={classes.root}>
      <div className={classes.content}>
      <CardHeader
        title="Sarabred"
        subheader="顧客管理・活動記録アプリ"
      />
      <CardMedia
        className={classes.media}
        image={Sarabred}
      />
      <CardContent>
        <Typography variant="body2" color="textSecondary" component="p">
          法人向けの営業担当者が使えるように設計した顧客管理・活動記録アプリです。<br/> 
          ログインすることによって会社のデータを登録ができ、登録されている会社に対していつ、何を行ったかを記録することができます。<br/>
          また取引ステータスや見込みなども合わせて登録ができるので、優良顧客に対して効果的なアプローチができているかの指標にすることができます。<br/>
          言語：<span className="rails_tag">Ruby on Rails</span>
        </Typography>
      </CardContent>
      <Button 
        variant="outlined" 
        color="primary"
        target="_blank"
        href="http://54.238.18.138/"
      >
        アプリへはこちらから
      </Button>
      </div>

      <div className={classes.content}>
        <CardHeader
        title="フリマアプリ"
        subheader="商品出品・購入アプリ"
      />
      <CardMedia
        className={classes.media}
        image={Furima}
      />
      <CardContent>
        <Typography variant="body2" color="textSecondary" component="p">
          商品を出品したり購入ができるフリマアプリです。<br/>
          PAY.JPのAPIを使い、購入機能を実装しました。<br/>
          サーバーの都合上、当日出品されたアイテムの画像しか表示されません。<br/>
          言語：<span className="rails_tag">Ruby on Rails</span>
        </Typography>
      </CardContent>
        <Button 
          variant="outlined" 
          color="primary"
          target="_blank"
          href="https://furima-31652.herokuapp.com/"
        >
          アプリへはこちらから
        </Button>
      </div>

      <div className={classes.content}>
        <CardHeader
        title="本のレビューアプリ"
        subheader="本の共有・レビュー"
      />
      <CardMedia
        className={classes.mobile}
        image={Bookshelf}
      />
      <CardContent>
        <Typography variant="body2" color="textSecondary" component="p">
          読んだ本の共有、レビューができるモバイルアプリです。<br/>
          本の写真投稿と、投稿に対してコメントが可能です。<br/>
          またユーザー認証に関してはFirebaseの匿名ログインを使っています。<br/>
          言語：<span className="react_tag">React Native</span><br/>
          DB: <span className="firebase_tag">Firebase</span>
        </Typography>
      </CardContent>
        <Button 
          variant="outlined" 
          color="primary"
          target="_blank"
          href="https://github.com/nagawa-hub/bookshelf"
        >
          Githubへはこちらから
        </Button>
      </div>
    
    </Card>    
  )
}

export default Create;