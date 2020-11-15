import React from 'react';
import './assets/styles/style.css';
import {Header, SelectArea, MainContents} from './components/index'

class App extends React.Component {
  constructor(props) {
    super(props);
  }

  render(){
      return (
        <div className="container">
          <Header />

          <SelectArea />
          
          <MainContents />
        </div>
      );
  }
}

export default App;
