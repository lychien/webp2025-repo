import React from 'react';

const styleArgument = {
  color: 'red',
  cursor: 'pointer',
  fontSize: '64px',
  textAlign: 'center',
  margin: '50px 0',
};

const changeText = (event) => {
  event.target.innerText += ' 被點了';
};

const HelloCGU = () => {
  return (
    <h1 style={styleArgument} onClick={changeText}>
      hello CGU!!
    </h1>
  );
};

export default HelloCGU;
