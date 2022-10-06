import React, { ChangeEvent } from 'react';

import s from './ControlSelect.module.scss';

import iconArrowDown from 'assets/icons/icon_arrow_down.png';
import iconArrowUp from 'assets/icons/icon_arrow_up.png';
import { ReturnComponentType } from 'types';

interface Props {
  options: string[];
  onChangeOption: (value: string) => void;
  value: string;
  label?: string;
  isOpen: boolean;
  id: string;
}

export const ControlSelect = React.memo(
  ({ options, onChangeOption, value, label, isOpen, id }: Props): ReturnComponentType => {
    const arrayOfValues = value.split(',');
    const labelTitle =
      arrayOfValues.length === 1 ? arrayOfValues : `${arrayOfValues[0]}...`;

    const arrowBgStyle = {
      backgroundImage: `url(${isOpen ? iconArrowUp : iconArrowDown})`,
    };

    const handleChangeOption = (event: ChangeEvent<HTMLInputElement>): void => {
      let newCurrentValue;

      if (event.currentTarget.checked) {
        newCurrentValue = `${event.target.value},${value}`;
      } else {
        newCurrentValue = value
          .split(',')
          .filter(value => value !== event.target.value)
          .join(',');
      }
      console.log(`newCurrentValue => ${newCurrentValue}`);
      onChangeOption(newCurrentValue);
    };

    const handleShowOption = (): void => {};

    const handleClickOptionsList = (
      e: React.MouseEvent<HTMLUListElement, MouseEvent>,
    ): void => {
      e.stopPropagation();
    };

    return (
      <div className={s.select_wrapper} id={id}>
        <div className={s.select_label_wrapper}>
          <span className={s.select_label}>{label}</span>
          <button
            id={id}
            className={s.select_currentOption}
            type="button"
            style={arrowBgStyle}
            onClick={handleShowOption}
          >
            {labelTitle}
          </button>
        </div>
        <ul
          role="menu"
          onKeyPress={() => {}}
          onClick={handleClickOptionsList}
          className={`${s.select} ${isOpen ? s.select_visible : ''}`}
        >
          {options.map(option => (
            <div key={option.toString()} className={s.select_option}>
              <label>
                <input
                  type="checkbox"
                  value={option}
                  onChange={handleChangeOption}
                  checked={value.includes(option)}
                />
                <span>{option}</span>
              </label>
            </div>
          ))}
        </ul>
      </div>
    );
  },
);
