import { useReducer } from 'react';

const reducer = (state: number, action: string): number => {
  switch (action) {
    case 'increment':
      return state + 1 ;
    case 'decrement':
      return state - 1;
    default:
      throw new Error(`Action [${action}] not found`);
  }
};

export default (initialValue = 0): [number, () => void] => {
  const [count, dispatch] = useReducer(    
    reducer,
    initialValue,
  );
  const incrementCount = (): void => {
    dispatch('increment');
  };
  return [count, incrementCount];
};
