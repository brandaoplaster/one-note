import Http from './http';

export default {

  index() {
    return Http.get('/favorites');
  },

  create(note_id) {
    return Http.post('/favorites', {
      favorite: {
        note_id: note_id,
      }
    });
  },
};