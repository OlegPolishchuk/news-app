import React, { ChangeEvent, useState } from 'react';

import { useNavigate } from 'react-router-dom';

import s from './Search.module.scss';

import { Path } from 'enums';
import { useAppDispatch, useAppSelector } from 'hooks';
import { setRequestParamsKeywords } from 'store/reducers/NewsSlice';
import { selectSearchParamsKeywords } from 'store/selectors';
import { ReturnComponentType } from 'types';

export const Search = (): ReturnComponentType => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const keyWords = useAppSelector(selectSearchParamsKeywords);

  const [value, setValue] = useState(keyWords);

  const handleChangeInputValue = (event: ChangeEvent<HTMLInputElement>): void => {
    setValue(event.target.value);
  };

  const handleKeyPress = (event: React.KeyboardEvent<HTMLInputElement>): void => {
    const { key } = event;

    if (key === 'Enter') {
      dispatch(setRequestParamsKeywords(value));

      navigate(Path.SearchNews);
    }
  };

  return (
    <input
      className={s.search}
      onChange={handleChangeInputValue}
      onKeyPress={handleKeyPress}
      value={value}
      type="text"
      placeholder="search"
    />
  );
};
