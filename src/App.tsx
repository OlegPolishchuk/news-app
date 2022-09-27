import React, { useLayoutEffect } from 'react';
import 'normalize.css';
import 'index.scss';

import { Footer } from 'components/footer/Footer';
import { Header } from 'components/header/Header';
import { Pages } from 'components/pages/Pages';
import { useAppDispatch } from 'hooks/useAppDispatch/useAppDispatch';
import { fetchNews } from 'store/reducers/actionCreator';
import { ReturnComponentType } from 'types';

const App = (): ReturnComponentType => {
  const dispatch = useAppDispatch();

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
    </>
  );
};

export default App;
