import React from 'react';
import {Select} from './index';

const SelectArea = (props) => {
  return(
    <div className="select_area">
      <Select text={"プロフィール"} nextId={"profile"} select={props.select} />
      <Select text={"スキル"} nextId={"skill"} select={props.select} />
      <Select text={"制作アプリ"} nextId={"create"} select={props.select}/>
    </div>
  )
}

export default SelectArea;