import React from 'react';

import { useLocation } from 'react-router-dom';

import { ReturnComponentType } from 'types';

export const UserApiWarning = (): ReturnComponentType => {
  const location = useLocation();
  const { id } = location.state;

  console.log(location);

  return (
    <section>
      <h2>Warning!</h2>
      <p>This API does not allow us to search items by id</p>
      <p>We can not find items with id ${id}</p>
    </section>
  );
};
