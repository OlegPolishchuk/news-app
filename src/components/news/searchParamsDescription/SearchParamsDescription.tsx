import React from 'react';

import s from './SearchParamsDescription.module.scss';

import { LANGUAGES_CODE, REGIONS_CODE } from 'globalConstants';
import { ReturnComponentType } from 'types';
import { getValueByCode, replaceSymbol } from 'utils';

interface Props {
  category: string;
  country: string;
  language: string;
}

export const SearchParamsDescription = ({
  country,
  language,
  category,
}: Props): ReturnComponentType => {
  return (
    <div className={s.searchParamsDescription}>
      <h3>Searching params:</h3>
      <p>
        <span className={s.searchParamsDescription_title}>Categories:</span>{' '}
        {replaceSymbol(category, '%', ', ')}
      </p>
      <p>
        <span className={s.searchParamsDescription_title}>Region:</span>{' '}
        {getValueByCode(country, REGIONS_CODE)}
      </p>
      <p>
        <span className={s.searchParamsDescription_title}>Language:</span>{' '}
        {getValueByCode(language, LANGUAGES_CODE)}
      </p>
    </div>
  );
};
