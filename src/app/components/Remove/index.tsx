import React from 'react';

import { BsFillTrashFill } from 'react-icons/bs';

import type { PostData } from '../../../../types/databaseObjects';

interface Props {
  setPosts: (arg: (arg0: PostData[]) => PostData[]) => void;
  post: PostData;
}

const StatusSpan = ({ setPosts, post }: Props) => {
  const handleOnClick = () => {
    setPosts((posts) => {
      const newPosts = posts.filter((postInList) => postInList.id !== post.id);
      const orderedPosts = newPosts.map((postInList, index) => ({
        ...postInList,
        id: index
      }));
      return structuredClone(orderedPosts);
    });
  };

  return (
    <button onClick={handleOnClick}>
      <BsFillTrashFill />
    </button>
  );
};

export default StatusSpan;
