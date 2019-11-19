import React, { useEffect, useDebugValue, useRef, useLayoutEffect, useState } from 'react';
import useCounterReducer from '../hooks/useCounterReducer';

interface CounterProps {
  initialValue?: number;
}

export default ({initialValue = 0}: CounterProps): JSX.Element => {
  const [count, incrementCount] = useCounterReducer(initialValue);
  const [width, setWidth] = useState<number>(0);
  const spanRef = useRef<HTMLSpanElement>();
  useDebugValue(count);
  useEffect(() => {
    const interval = setInterval(incrementCount,1000);
    return (): void => clearInterval(interval);
  },[]);
  useLayoutEffect(() => {
    setWidth(spanRef.current.offsetWidth);
  }, [spanRef.current, count]);
  return (  
    <div>
      <span ref={spanRef}>{count}</span>
      <span>{`Width: ${width}`}</span>
    </div>
  );
}
