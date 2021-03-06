import React from 'react';
import './assets/styles/style.css';
import {Header, SelectArea, MainContents} from './components/index'

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentId: "profile"
    }
    this.selectMain = this.selectMain.bind(this)
  }


  selectMain = (nextMainId) => {
    switch(true){
      case(nextMainId === "profile"):
        this.setState({
          currentId: 'profile'
        })
        break;
      case(nextMainId === "skill"):
        this.setState({
          currentId: 'skill'
        })
        break;
      case(nextMainId === "create"):
        this.setState({
          currentId: 'create'
        })
        break;
    }
  }

  componentDidMount(){
    this.selectMain(this.state.currentId)
  }

  render(){
      return (
        <div className="container">
          <Header currentId={this.state.currentId}/>

          <SelectArea select={this.selectMain}/>
          
          <MainContents currentId={this.state.currentId}/>
        </div>
      );
  }
}

export default App;
