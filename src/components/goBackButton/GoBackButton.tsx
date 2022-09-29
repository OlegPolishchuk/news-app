import React, { useState } from 'react';

import { useNavigate } from 'react-router-dom';

import { ReturnComponentType } from 'types';

export const GoBackButton = (): ReturnComponentType => {
  const navigate = useNavigate();

  const [isHovering, setIsHovering] = useState(false);

  const handleGoBack = (): void => navigate(-1);

  const style = {
    marginTop: '30px',
    outline: 'none',
    fontSize: '22px',
    background: 'transparent',
    border: 'none',
    cursor: 'pointer',
    textDecoration: isHovering ? 'underline' : 'none',
  };

  return (
    <button
      onClick={handleGoBack}
      onMouseEnter={() => setIsHovering(true)}
      onMouseLeave={() => setIsHovering(false)}
      type="button"
      style={style}
    >
      &#8656; go back
    </button>
  );
};
