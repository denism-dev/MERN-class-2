import React from 'react';

const WordPage = ({ match }) => {
  const word = match.params.word;
  return <h1>{word}</h1>;
};

export default WordPage;
