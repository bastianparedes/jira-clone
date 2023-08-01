import React from 'react';

import styles from './styles.module.scss';
import type { PostData } from '../../../../types/databaseObjects';

interface Props {
  setPosts: (arg: (arg0: PostData[]) => PostData[]) => void;
  post: PostData;
}

const StatusSpan = ({ setPosts, post }: Props) => {
  const handleOnChange = (event: any) => {
    const newPost = {
      ...post,
      content: event.target.value
    };

    setPosts((posts) => {
      const newPosts = structuredClone(posts);
      newPosts[post.id] = newPost;
      return structuredClone(newPosts);
    });
  };

  return (
    <textarea
      className={styles.textarea}
      value={post.content}
      onChange={handleOnChange}
    />
  );
};

export default StatusSpan;
