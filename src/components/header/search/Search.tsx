import React, { ChangeEvent, useEffect, useState } from 'react';

import { useLocation, useNavigate } from 'react-router-dom';

import s from './Search.module.scss';

import { Path } from 'enums';
import { useAppDispatch, useAppSelector } from 'hooks';
import { setRequestParamsKeywords } from 'store/reducers/NewsSlice';
import { selectSearchParamsKeywords } from 'store/selectors';
import { ReturnComponentType } from 'types';

export const Search = (): ReturnComponentType => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const location = useLocation();

  const keyWords = useAppSelector(selectSearchParamsKeywords);

  const [value, setValue] = useState(keyWords);
  const [errorMessage, setErrorMessage] = useState('');

  const handleChangeInputValue = (event: ChangeEvent<HTMLInputElement>): void => {
    setValue(event.target.value);
    setErrorMessage('');
  };

  const handleKeyPress = (event: React.KeyboardEvent<HTMLInputElement>): void => {
    const { key } = event;

    if (key === 'Enter') {
      if (value.trim().length > 1) {
        dispatch(setRequestParamsKeywords(value));

        navigate(Path.SearchNews);
      } else {
        setErrorMessage('It should be more then 1 symbol');
      }
    }
  };

  useEffect(() => {
    if (location.pathname !== '/searchNews') {
      setValue('');
    }
  }, [location.pathname]);

  return (
    <div className={s.search_wrapper}>
      <input
        className={s.search}
        onChange={handleChangeInputValue}
        onKeyPress={handleKeyPress}
        onFocus={() => setErrorMessage('')}
        onBlur={() => setErrorMessage('')}
        value={value}
        type="text"
        placeholder="search"
      />
      {errorMessage && (
        <div className={s.search_error}>
          <p>{errorMessage}</p>
          <span className={s.search_wrapper_triangle} />
        </div>
      )}
    </div>
  );
};
