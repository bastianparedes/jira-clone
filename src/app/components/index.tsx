import React from 'react';

import labels from 'config/labels';

import Content from './Content';
import Header from './Header';
import Name from './Name';
import Status from './Status';
import styles from './styles.module.scss';
import constants from '../../../config/constants';
import type { PostData } from '../../../types/databaseObjects';
import Table from '../common/Table';
import Remove from './Remove';

interface Props {
  posts: PostData[];
  setPosts: (arg0: any) => void;
}

const IndexComponents = ({ posts, setPosts }: Props) => {
  const columns = [
    {
      id: constants.database.post.name,
      label: labels.post.name,
      width: 10
    },
    {
      id: constants.database.post.status,
      label: labels.post.status,
      width: 10
    },
    {
      id: constants.database.post.content,
      label: labels.post.content,
      width: 70
    },
    {
      id: 'remove',
      label: '',
      width: 10
    }
  ];

  const rows = posts.map((post) => ({
    id: Number(post.id),
    labels: [
      <Name key={post.id} setPosts={setPosts} post={post} />,
      <Status key={post.id} setPosts={setPosts} post={post} />,
      <Content key={post.id} setPosts={setPosts} post={post} />,
      <Remove key={post.id} setPosts={setPosts} post={post} />
    ]
  }));

  return (
    <>
      <Header posts={posts} setPosts={setPosts}/>
      <main className={styles.postsContainer}>
        <Table columns={columns} rows={rows} />
      </main>
    </>
  );
};

export default IndexComponents;
