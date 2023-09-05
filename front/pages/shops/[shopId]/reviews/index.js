import React from 'react';
import { useRouter } from 'next/router';

const index = () => {
  const router = useRouter();
  const { shopId } = router.query;
  console.log({shopId});

  return <h1>Hello World/{shopId}</h1>;
};

export default index;
