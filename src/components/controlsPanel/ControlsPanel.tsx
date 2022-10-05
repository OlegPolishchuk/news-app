import React, { useState } from 'react';

import s from './ControlsPanel.module.scss';

import { ControlSelect } from 'components/controlsPanel/controlSelect/ControlSelect';
import {
  CATEGORIES,
  DEFAULT_CATEGORIES,
  DEFAULT_LANGUAGE,
  DEFAULT_REGION,
  LANGUAGES,
  REGIONS,
} from 'globalConstants';
import { ReturnComponentType } from 'types';

export const ControlsPanel = (): ReturnComponentType => {
  const [controlsState, setControlsState] = useState({
    category: DEFAULT_CATEGORIES,
    region: DEFAULT_REGION,
    language: DEFAULT_LANGUAGE,
  });

  const handleCategoryChange = (value: string): void => {
    setControlsState({ ...controlsState, category: value });
  };

  const handleRegionChange = (value: string): void => {
    setControlsState({ ...controlsState, region: value });
  };

  const handleLanguageChange = (value: string): void => {
    setControlsState({ ...controlsState, language: value });
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>): void => {
    event.preventDefault();

    console.log(controlsState);
  };

  return (
    <div className={s.controlPanel}>
      <form onSubmit={handleSubmit}>
        <ControlSelect
          options={CATEGORIES}
          onChangeOption={handleCategoryChange}
          value={controlsState.category}
        />
        <ControlSelect
          options={REGIONS}
          onChangeOption={handleRegionChange}
          value={controlsState.region}
        />
        <ControlSelect
          options={LANGUAGES}
          onChangeOption={handleLanguageChange}
          value={controlsState.language}
        />
        <button type="submit">Save</button>
      </form>
    </div>
  );
};
