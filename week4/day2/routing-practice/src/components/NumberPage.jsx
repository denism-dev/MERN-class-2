import React from 'react';

const NumberPage = ({ match }) => {
  const number = match.params.number;
  return <h1>{number}</h1>;
};

export default NumberPage;
