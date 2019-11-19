import React from 'react';
import Head from 'next/head';
import Link from 'next/link';

interface HeaderProps {
  title: string;
}

export default ({title}: HeaderProps): JSX.Element => (
  <React.Fragment>
    <Head>
      <title>{title}</title>
    </Head>
    <h1>{title}</h1>
    <Link href="/index.tsx">Back</Link>    
  </React.Fragment>
);
