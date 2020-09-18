import Http from './http';

export default {

  addTagNote(tag_id, note_id) {
    return Http.post(`/tag_notes`, {
      tag_notes: {
        tag_id: tag_id, 
        note_id: note_id,
      }
    });
  },

  deleteTagNote(tag_id, note_id) {
    return Http.delete(`/tag_notes`);
  },
};