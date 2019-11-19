import React, { useEffect, useDebugValue } from 'react';
import useCounterReducer from '../hooks/useCounterReducer';

interface CounterProps {
  initialValue?: number;
}

export default ({initialValue = 0}: CounterProps): JSX.Element => {
  const [count, incrementCount] = useCounterReducer(initialValue);
  useDebugValue(count);
  useEffect(() => {
    const interval = setInterval(incrementCount,1000);
    return (): void => clearInterval(interval);
  },[]);
  return (  
    <span>{count}</span>
  );
}
