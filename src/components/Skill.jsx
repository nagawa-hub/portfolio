import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import RubyIcon from '../assets/img/Ruby.png'
import ReactIcon from '../assets/img/react.png'
import VbaIcon from '../assets/img/VBA.png'

const useStyles = makeStyles({
  root: {
    height: 400,
    width: '100%',
    display: 'flex' 
  },
  media: {
    height: 180
  },
  context:{
    height: '100%'
  }
});

const Skill = () => {
  const classes = useStyles();
  return(
    <Card className={classes.root}>
      <CardActionArea>
        <CardMedia
          className={classes.media}
          image={RubyIcon}
        />
        <CardContent className={classes.context}>
          <Typography gutterBottom variant="h5" component="h2">
            Ruby on Rails
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            Rubyの基本的なコードやRailsを使ったサーバサイドの実装が可能です。<br/>
            Railsの7つのアクションを使ってWebアプリケーションの開発できます。
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActionArea>
        <CardMedia
          className={classes.media}
          image={ReactIcon}
        />
        <CardContent className={classes.context}>
          <Typography gutterBottom variant="h5" component="h2">
            React
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            このページはReactとMaterialUIを使って制作しています。<br/>
            スキル的にはまだまだ未熟ですが様々なアプリを作りながら経験を積んでいます。
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActionArea>
        <CardMedia
          className={classes.media}
          image={VbaIcon}
        />
        <CardContent className={classes.context}>
          <Typography gutterBottom variant="h5" component="h2">
            Excel VBA
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            資格としてExcelの1級を取得しています。関数の実行からピボットテーブル、グラフの作成等が可能です。<br/>
            またVBAも扱うことが可能で簡単なマクロであればVBAを記述して作れます。
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  )
}

export default Skill;