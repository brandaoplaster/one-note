import Http from './http';

export default {

  index() {
    return Http.get('/notes');
  },

  show(id) {
    return Http.get(`/notes/${id}`);
  },

  destroy(id) {
    return Http.delete(`/notes/${id}`);
  },

  create(title, body) {
    return Http.post('/notes', {
      note: {
        title: title,
        body: body,
      }
    });
  },

  update(id, title, body) {
    return Http.put(`/notes/${id}`, {
      notes: {
        title: title,
        body: body,
      }
    });
  }
};