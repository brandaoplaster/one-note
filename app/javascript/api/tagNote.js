import Http from './http';

export default {

  addTagNote(tag_id, note_id) {
    return Http.post(`/note/${note_id}/tag/${tag_id}`);
  },

  delete(tag_id, note_id) {
    return Http.delete(`/note/${note_id}/tag/${tag_id}`);
  },
};