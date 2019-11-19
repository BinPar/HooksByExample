import React from 'react';
import useCounterReducer from '../hooks/useCounterReducer';

interface CounterProps {
  initialValue?: number;
}

export default ({initialValue = 0}: CounterProps): JSX.Element => {
  const [count, incrementCount] = useCounterReducer(initialValue);
  return (  
    <button type="button" onClick={incrementCount}>{count}</button>
  );
}
