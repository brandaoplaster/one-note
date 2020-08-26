import Http from './http';

export default {
  index() {
    return Http.get('/tags');
  },

  create(title) {
    return Http.post(`/tags`, {
      tag: {
        title: title
      }
    });
  },

  update(id, title) {
    return Http.put(`/tags/${id}`, {
      tags: {
        title: title
      }
    });
  },

  delete(id) {
    return Http.delete(`/tags/${id}`);
  },
};