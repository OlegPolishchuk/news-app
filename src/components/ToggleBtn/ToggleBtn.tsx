import s from 'components/ToggleBtn/ToggleBtn.module.scss';
import { ReturnComponentType } from 'types';

type ToggleBtnPropsType = {
  toggle: () => void;
  wrapped?: boolean;
};

export const ToggleBtn = ({
  toggle,
  ...props
}: ToggleBtnPropsType): ReturnComponentType => {
  const onClickHandler = (): void => {
    toggle();
  };

  return (
    // eslint-disable-next-line jsx-a11y/click-events-have-key-events,jsx-a11y/no-static-element-interactions
    <div className={s.menu_bar} onClick={onClickHandler}>
      <div className={`${s.bar} ${s.bar1} ${props.wrapped ? s.change : ''}`}> </div>
      <div className={`${s.bar} ${s.bar2} ${props.wrapped ? s.change : ''}`}> </div>
      <div className={`${s.bar} ${s.bar3} ${props.wrapped ? s.change : ''}`}> </div>
    </div>
  );
};
