import React from 'react';
import {Profile, Skill, Create} from './index'

const MainContents = (props) => {
  return(
    <div className="main_contents">
      {
        (() => {
          if(props.currentId === 'profile'){
            return(
              <Profile />
              );
          }else if(props.currentId === 'skill'){
            return(
              <Skill />
              );
          }else if(props.currentId === 'create'){
            return(
              <Create />
              );
          }else{
            return(
              <></>
            );
          }
        })()
      } 
    </div>
  )    
}

export default MainContents;