import React from 'react';
import {Profile} from './index'

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
              <></>
              );
          }else if(props.currentId === 'create'){
            return(
              <></>
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