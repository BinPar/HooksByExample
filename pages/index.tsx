import React from 'react';
import Head from 'next/head';
import Link from 'next/link';

export default (): JSX.Element => (
  <React.Fragment>
    <Head>
      <title>Hooks by Example</title>
    </Head>
    <h1>Hooks by Example</h1>
    <ul>
      <li>
        <Link href="/counter">Counter</Link>
      </li>
    </ul>
  </React.Fragment>
);
