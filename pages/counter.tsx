import React from 'react';
import Header from '../components/Header';
import Counter from '../components/Counter';
import Timer from '../components/TimerSize';

export default (): JSX.Element => (
  <React.Fragment>
    <Header title="Hooks by Example: Counter" />    
    <br />
    <Counter />
    <br />
    <Counter initialValue={1} />
    <br />
    <Timer />
    <br />
    <Timer initialValue={10} />
  </React.Fragment>
);
