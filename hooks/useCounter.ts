import { useState } from "react";

export default (initialValue = 0): [number, () => void] => {
  const [count, setCount] = useState<number>(initialValue);  
  let cnt = count;
  const incrementCount = (): void => {            
    setCount(++cnt);
  }
  return [count, incrementCount];
}
