import React, { useEffect, useState } from 'react';

import { useLocation, useNavigate } from 'react-router-dom';

import s from './UserApiWarning.module.scss';

import { ReturnComponentType } from 'types';

const TIME_TO_REDIRECT = 10000;
const TIMER_STEP = 1000;

export const UserApiWarning = (): ReturnComponentType => {
  const location = useLocation();
  const { id } = location.state;

  const navigate = useNavigate();

  const [timeToRedirect, setTimeTORedirect] = useState(TIME_TO_REDIRECT);

  const handleRedirect = (): void => {
    navigate('/');
  };

  useEffect(() => {
    const intervalID = setInterval(() => {
      setTimeTORedirect(timeToRedirect - TIMER_STEP);
    }, TIMER_STEP);

    if (timeToRedirect / TIMER_STEP === -1) {
      clearInterval(intervalID);
      navigate('/');
    }

    return () => {
      clearInterval(intervalID);
    };
  }, [timeToRedirect, navigate]);

  return (
    <section className={s.warningSection}>
      <div className={s.warningSection_messageWrapper}>
        <h2>Warning!</h2>
        <p>This API does not allow us to search items by id</p>
        <p>
          We can not find items with id{' '}
          <span className={s.warningSection_items}>${id}</span>
        </p>

        <h4>You will be redirected to main page in {timeToRedirect / TIMER_STEP} s</h4>
        <button className={s.button_redirect} type="button" onClick={handleRedirect}>
          Redirect now
        </button>
      </div>
    </section>
  );
};
