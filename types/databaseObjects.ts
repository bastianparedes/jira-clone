type PostData = {
  id: number;
  name: string;
  status: 'toDo' | 'blocked' | 'done' | 'deleted';
  content: string;
};

export type { PostData };
