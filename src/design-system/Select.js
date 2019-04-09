import React from 'react';
import Select from 'react-select';

const SelectWrapper = ({ options, menuPlacement = 'auto', ...props }) => (
  <Select options={options} menuPlacement={menuPlacement} {...props} />
);

export default SelectWrapper;
