import React, { useState } from 'react';
// @ts-ignore
import Select from "react-select";

type Props = {
  isTimer: boolean
  initNum: number
  setter: (num: number) => void
};

export const SelectBox: React.FC<Props> = ({ isTimer, initNum, setter }) => {
  const handleValueChange = (event) => {
    const inputValue = event.target.value
    setter(inputValue);
  };

  const options: any[] = [];
  const upper: number = isTimer ? 61 : 11;
  for(let i = 1; i < upper; i++) {
    let obj = {};
    obj['value'] = i;
    if (i == 1) {
      obj['label'] = isTimer ? `${i} minute` : `${i} pomo`;
    } else {
      obj['label'] = isTimer ? `${i} minutes` : `${i} pomos`;
    }
    options.push(obj);
  };

   return (
    <>
      <Select
        className="w-40"
        maxMenuHeight={250}
        options={options}
        defaultValue={initNum}
        onChange={handleValueChange}
        id="search-select"
      />
    </>
  );
};
