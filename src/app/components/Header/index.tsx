import React, { useState } from 'react';

import styles from './styles.module.scss';
import labels from '../../../../config/labels';
import { basePath } from '../../../../next.config';
import type { PostData } from '../../../../types/databaseObjects';
import Loader from '../../common/Loader';

interface Props {
  posts: PostData[];
  setPosts: (arg0: any) => void;
}

const Index = ({ posts, setPosts }: Props) => {
  const [showLoader, setShowLoader] = useState(false);

  const savePosts = async () => {
    setShowLoader(true);
    await fetch(basePath + '/api', {
      body: JSON.stringify(posts),
      method: 'POST'
    });

    setShowLoader(false);
  };

  const handleCreatePost = () => {
    const newPost = {
      content: 'CONTENIDO',
      id: posts.length,
      name: 'Nueva tarea',
      status: 'toDo' as const
    };

    posts = [...posts, newPost];
    posts = posts.map((post, index) => {
      return {
        ...post,
        id: index
      };
    });

    setPosts(structuredClone(posts));
  };

  return (
    <>
      {showLoader && <Loader />}
      <header className={styles.header}>
        <span className={styles.title}>{labels.post.header.title}</span>
        <button onClick={handleCreatePost}>
          <span>{labels.post.header.createPostButton}</span>
        </button>
        <button onClick={savePosts}>
          <span>{labels.post.header.savePosts}</span>
        </button>
      </header>
    </>
  );
};

export default Index;
