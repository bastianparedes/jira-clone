import React from 'react';

import labels from '../../../../config/labels';
import type { PostData } from '../../../../types/databaseObjects';

interface Props {
  setPosts: (arg: (arg0: PostData[]) => PostData[]) => void;
  post: PostData;
}

const options = ['blocked', 'done', 'toDo'] as const;

const StatusSpan = ({ setPosts, post }: Props) => {
  const handleOnChange = (event: any) => {
    const newPost = {
      ...post,
      status: event.target.value
    };

    setPosts((posts) => {
      const newPosts = structuredClone(posts);
      newPosts[post.id] = newPost;
      return structuredClone(newPosts);
    });
  };

  return (
    <select defaultValue={post.status} onChange={handleOnChange}>
      {options.map((optionStatus) => (
        <option key={optionStatus} value={optionStatus}>
          {labels.status[optionStatus]}
        </option>
      ))}
    </select>
  );
};

export default StatusSpan;
