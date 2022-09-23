import React, { useEffect } from 'react';
import 'normalize.css';
import 'index.scss';

import { instance } from 'api/config';
import { Header } from 'components/header/Header';
import { ReturnComponentType } from 'types';

const App = (): ReturnComponentType => {
  useEffect(() => {
    instance.get('news').then(res => console.log(res));
  }, []);

  return (
    <div className="app">
      <Header />
    </div>
  );
};

export default App;
