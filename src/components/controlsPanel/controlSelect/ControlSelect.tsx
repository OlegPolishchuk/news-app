import React, { ChangeEvent } from 'react';

import { ReturnComponentType } from 'types';

interface Props {
  options: string[];
  onChangeOption: (value: string) => void;
  value: string;
}

export const ControlSelect = ({
  options,
  onChangeOption,
  value,
}: Props): ReturnComponentType => {
  const handleChange = (event: ChangeEvent<HTMLSelectElement>): void => {
    onChangeOption(event.currentTarget.value);
  };

  return (
    <select defaultValue={value} onChange={handleChange}>
      {options.map(option => (
        <option key={option.toString()}>{option}</option>
      ))}
    </select>
  );
};
