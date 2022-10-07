import React, { useCallback, useEffect, useState } from 'react';

import { useNavigate } from 'react-router-dom';

import s from './ControlsPanel.module.scss';

import { ControlSelect } from 'components/controlsPanel/controlSelect/ControlSelect';
import { Path } from 'enums';
import {
  CATEGORIES,
  DEFAULT_CATEGORIES,
  DEFAULT_LANGUAGE,
  DEFAULT_REGION,
  LANGUAGES,
  LANGUAGES_CODE,
  REGIONS,
  REGIONS_CODE,
} from 'globalConstants';
import { useAppDispatch } from 'hooks';
import { setRequestParams } from 'store/reducers/NewsSlice';
import { RequestParams, ReturnComponentType } from 'types';
import { getValuesCode, replaceSymbol } from 'utils';

const ID_FOR_CONTROL_SELECT_CATEGORY = 'ControlSelect_Category';
const ID_FOR_CONTROL_SELECT_REGIONS = 'ControlSelect_Regions';
const ID_FOR_CONTROL_SELECT_LANGUAGE = 'ControlSelect_Language';

export const ControlsPanel = React.memo((): ReturnComponentType => {
  const dispatch = useAppDispatch();

  const navigate = useNavigate();

  const [controlsState, setControlsState] = useState({
    category: DEFAULT_CATEGORIES,
    region: DEFAULT_REGION,
    language: DEFAULT_LANGUAGE,
  });

  const [isCategoryListOpen, setIsCategoryListOpen] = useState(false);
  const [isRegionsListOpen, setIsRegionsListOpen] = useState(false);
  const [isLanguageListOpen, setIsLanguageListOpen] = useState(false);

  const handleCategoryChange = useCallback(
    (value: string): void => {
      setControlsState(state => ({
        ...state,
        category: value === '' ? DEFAULT_CATEGORIES : value,
      }));
    },
    [controlsState.category],
  );

  const handleRegionChange = useCallback(
    (value: string): void => {
      setControlsState(state => ({
        ...state,
        region: value === '' ? DEFAULT_REGION : value,
      }));
    },
    [controlsState.region],
  );

  const handleLanguageChange = useCallback(
    (value: string): void => {
      setControlsState(state => ({
        ...state,
        language: value === '' ? DEFAULT_LANGUAGE : value,
      }));
    },
    [controlsState.language],
  );

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>): void => {
    event.preventDefault();

    const languages = controlsState.language.split(',');
    const languagesCode = getValuesCode(languages, LANGUAGES_CODE);

    const regions = controlsState.region.split(',');
    const regionsCode = getValuesCode(regions, REGIONS_CODE);

    const requestParams = {
      category: replaceSymbol(controlsState.category, ',', '%'),
      language: replaceSymbol(languagesCode.join(','), ',', '%'),
      country: replaceSymbol(regionsCode.join(','), ',', '%'),
    } as RequestParams;

    console.log(requestParams);
    dispatch(setRequestParams(requestParams));
    navigate(Path.SearchNews);
  };

  useEffect(() => {
    const toggleOptionsList = (e: MouseEvent): void => {
      const element = e.target as HTMLElement;

      if (element.id === ID_FOR_CONTROL_SELECT_CATEGORY) {
        setIsCategoryListOpen(isOpen => !isOpen);
      }
      if (element.id === ID_FOR_CONTROL_SELECT_REGIONS) {
        setIsRegionsListOpen(isOpen => !isOpen);
      }
      if (element.id === ID_FOR_CONTROL_SELECT_LANGUAGE) {
        setIsLanguageListOpen(isOpen => !isOpen);
      }

      if (
        element.id !== ID_FOR_CONTROL_SELECT_REGIONS &&
        element.id !== ID_FOR_CONTROL_SELECT_LANGUAGE &&
        element.id !== ID_FOR_CONTROL_SELECT_CATEGORY
      ) {
        setIsCategoryListOpen(false);
        setIsLanguageListOpen(false);
        setIsRegionsListOpen(false);
      }
    };

    window.addEventListener('click', toggleOptionsList);

    return () => window.removeEventListener('click', toggleOptionsList);
  }, [isCategoryListOpen]);

  return (
    <div className={s.controlPanel}>
      <form onSubmit={handleSubmit} className={s.controlPanel_form}>
        <ControlSelect
          label="Category:"
          options={CATEGORIES}
          onChangeOption={handleCategoryChange}
          value={controlsState.category}
          isOpen={isCategoryListOpen}
          id={ID_FOR_CONTROL_SELECT_CATEGORY}
          innerInputType="checkbox"
        />
        <ControlSelect
          label="Region:"
          options={REGIONS}
          onChangeOption={handleRegionChange}
          value={controlsState.region}
          isOpen={isRegionsListOpen}
          id={ID_FOR_CONTROL_SELECT_REGIONS}
          innerInputType="radio"
        />
        <ControlSelect
          label="Language:"
          options={LANGUAGES}
          onChangeOption={handleLanguageChange}
          value={controlsState.language}
          isOpen={isLanguageListOpen}
          id={ID_FOR_CONTROL_SELECT_LANGUAGE}
          innerInputType="radio"
        />
        <button type="submit">Save</button>
      </form>
    </div>
  );
});
