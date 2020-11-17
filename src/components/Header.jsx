import React from 'react';

const Header = (props) => {
  return(
    <div className="header">
     {
        (() => {
          if(props.currentId === 'profile'){
            return(
              <>Profile</>
              );
          }else if(props.currentId === 'skill'){
            return(
              <>Skills</>
              );
          }else if(props.currentId === 'create'){
            return(
              <>PortFolio</>
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

export default Header;