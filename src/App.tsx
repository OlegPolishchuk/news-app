import React, { useEffect } from 'react';
import 'normalize.css';
import 'index.scss';

import { Header } from 'components/header/Header';
import { Title } from 'components/title/Title';
import { useAppDispatch } from 'hooks/useAppDispatch/useAppDispatch';
import { useAppSelector } from 'hooks/useAppSelector/useAppSelector';
import { fetchNews } from 'store/reducers/actionCreator';
import { ReturnComponentType } from 'types';

const App = (): ReturnComponentType => {
  const dispatch = useAppDispatch();

  const { articles } = useAppSelector(state => state.newsReducer);

  useEffect(() => {
    dispatch(fetchNews());
  }, []);

  return (
    <div className="app">
      <Header />
      <main>
        <Title title="Hot news" />
        {articles.map(article => (
          <>
            <h3>{article.title}</h3>
            <img src={article.image} alt={article.title} />
            <p>{article.description}</p>
          </>
        ))}
      </main>
    </div>
  );
};

export default App;
