const constants = Object.freeze({
  database: {
    order: {
      asc: 'asc',
      desc: 'desc'
    },
    post: {
      content: 'content',
      id: 'id',
      name: 'name',
      status: 'status'
    }
  },
  quantitiesAvailable: [5, 10, 15, 20, 25],
  statusTypes: {
    blocked: 'blocked',
    deleted: 'deleted',
    done: 'done',
    toDo: 'toDo'
  }
});

export default constants;
