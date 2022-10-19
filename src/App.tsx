import React from 'react';

import 'normalize.css';
import 'index.scss';
import { Footer } from 'components/footer/Footer';
import { Header } from 'components/header/Header';
import { Pages } from 'components/pages/Pages';
import { Preloader } from 'components/preloader/Preloader';
import { useAppSelector } from 'hooks/useAppSelector/useAppSelector';
import { selectIsLoading } from 'store/selectors';
import { ReturnComponentType } from 'types';

const App = (): ReturnComponentType => {
  const isLoading = useAppSelector(selectIsLoading);

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
