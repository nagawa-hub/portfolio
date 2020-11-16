import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import ThumbUpIcon from '@material-ui/icons/ThumbUp';
import Sarabred from '../assets/img/sarabred.png';
import Furima from '../assets/img/furima.png';

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
}));

const Create = () => {
  const classes = useStyles();
  return(
    <Card className={classes.root}>
      <div className={classes.content}>
      <CardHeader
        title="Sarabred"
        subheader="顧客管理＋活動記録アプリケーション"
      />
      <CardMedia
        className={classes.media}
        image={Sarabred}
      />
      <CardContent>
        <Typography variant="body2" color="textSecondary" component="p">
          法人向けの営業担当者が使えるように設計した顧客管理・活動記録アプリです。<br/> 
          ログインすることによって会社のデータを登録ができ、登録されている会社に対していつ、何を行ったかを記録することができます。<br/>
          また取引ステータスや見込みなども合わせて登録ができるので、優良顧客に対して効果的なアプローチができているかの指標にすることができます。
        </Typography>
      </CardContent>
        <IconButton>
          <ThumbUpIcon />
        </IconButton>
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
          サーバーの都合上、当日出品されたアイテムの画像しか表示されません。
        </Typography>
      </CardContent>
        <IconButton>
          <ThumbUpIcon />
        </IconButton>
      </div>
    </Card>    
  )
}

export default Create;