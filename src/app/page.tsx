'use client';

import React, { useEffect, useState } from 'react';

import Loader from './common/Loader';
import IndexComponents from './components';
import { basePath } from '../../next.config';

const Index = () => {
  const [posts, setPosts] = useState([]);
  const [showLoader, setShowLoader] = useState(true);

  useEffect(() => {
    const fn = async () => {
      const response = await fetch(basePath + '/api');
      const json = await response.json();
      setPosts(json);
      setShowLoader(false);
    };

    fn();
  }, []);

  return (
    <>
      {showLoader && <Loader />}
      <IndexComponents posts={structuredClone(posts)} setPosts={setPosts} />
    </>
  );
};

export default Index;
