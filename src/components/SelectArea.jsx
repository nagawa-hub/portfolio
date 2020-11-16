import React from 'react';
import {Select} from './index';

const SelectArea = (props) => {
  return(
    <div className="select_area">
      <Select text={"自己紹介"} />
      <Select text={"スキル"} />
      <Select text={"制作アプリ"} />
    </div>
  )
}

export default SelectArea;