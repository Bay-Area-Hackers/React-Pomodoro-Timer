import React, { useState } from 'react';
// @ts-ignore
import Select from "react-select";

type Props = {
  isTimer: boolean
  initNum: number
  setter: (num) => void
};

export const SelectBox: React.FC<Props> = ({ isTimer, initNum, setter }) => {
  const options: any[] = [];
  const upper: number = isTimer ? 61 : 11;

  for(let i = 1; i < upper; i++) {
    options.push({'label': i.toString(), 'value': i});
  };

   return (
    <>
      <Select
        className="w-32"
        maxMenuHeight={250}
        options={options}
        defaultValue={initNum}
        onChange={(value) => setter(value)}
        id="search-select"
      />
    </>
  );
};
