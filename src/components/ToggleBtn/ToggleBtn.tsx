import s from 'components/ToggleBtn/ToggleBtn.module.scss';
import { ReturnComponentType } from 'types';

type ToggleBtnPropsType = {
  toggle: () => void;
  wrapped: boolean;
};

export const ToggleBtn = ({
  toggle,
  wrapped,
}: ToggleBtnPropsType): ReturnComponentType => {
  const transformedBtnLineClassName = wrapped ? s.change : '';
  const finalBtnClassName = wrapped ? `${s.menu_bar} ${s.fixed}` : s.menu_bar;

  const onClickHandler = (): void => {
    toggle();
  };

  return (
    // eslint-disable-next-line jsx-a11y/click-events-have-key-events,jsx-a11y/no-static-element-interactions
    <div className={finalBtnClassName} onClick={onClickHandler}>
      <div className={`${s.bar} ${s.bar1} ${transformedBtnLineClassName}`}> </div>
      <div className={`${s.bar} ${s.bar2} ${transformedBtnLineClassName}`}> </div>
      <div className={`${s.bar} ${s.bar3} ${transformedBtnLineClassName}`}> </div>
    </div>
  );
};
