import React, { useLayoutEffect } from 'react';
import 'normalize.css';
import 'index.scss';

import { Footer } from 'components/footer/Footer';
import { Header } from 'components/header/Header';
import { Pages } from 'components/pages/Pages';
import { Preloader } from 'components/preloader/Preloader';
import { useAppDispatch } from 'hooks/useAppDispatch/useAppDispatch';
import { useAppSelector } from 'hooks/useAppSelector/useAppSelector';
import { fetchNews } from 'store/reducers/actionCreator';
import { ReturnComponentType } from 'types';

const App = (): ReturnComponentType => {
  const dispatch = useAppDispatch();

  const { isLoading } = useAppSelector(state => state.newsReducer);

  useLayoutEffect(() => {
    dispatch(fetchNews());
  }, []);

  return (
    <>
      <div className="app">
        <Header />
        <main>
          <Pages />
        </main>
      </div>
      <Footer />
      {isLoading && <Preloader />}
    </>
  );
};

export default App;
