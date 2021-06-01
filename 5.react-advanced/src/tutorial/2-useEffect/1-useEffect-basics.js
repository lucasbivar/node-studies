import React, { useState, useEffect } from 'react';
// useEffect by default runs after every re-render
// cleanup function
// second parameter -> if we only wants that the useEffects render on the 
// inicial render, we have to pass a empty array in the second parameter
// or if we want that the useEffect runs when some variable change, we have to pass
// the variable inside the array of second parameter
const UseEffectBasics = () => {
  const [value, setValue] = useState(0);
  useEffect(() => {
    console.log('call useEffect');
    if (value > 0) {
      document.title = `New Messages(${value})`;
    }
  });

  console.log('render component');
  return (
    <React.Fragment>
      <h1>{value}</h1>
      <button className='btn' onClick={() => setValue(value + 1)}>
        click me
      </button>
    </React.Fragment>
  );
};

export default UseEffectBasics;
