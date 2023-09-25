import React from 'react';
import { useParams } from 'react-router-dom';

const StyledWordPage = () => {
  const { word, color1, color2 } = useParams();
  const style = {
    color: color1,
    backgroundColor: color2,
    padding: '10px',
  };

  return <h1 style={style}>{word}</h1>;
};

export default StyledWordPage;
