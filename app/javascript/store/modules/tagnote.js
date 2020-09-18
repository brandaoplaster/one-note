import Api from '../../api';

const TagNote = {
  namespaced: true,


  actions: {
    addTagNote(context, { tag_id, note_id }) {
      return new Promise((resolve, reject) => {
        Api.TagNote.addTagNote(tag_id, note_id).then(response => {
          console.log('tags', response.data);
          resolve();
        }).catch(error => reject(error.response));
      });
    },

    deleteTagNote(context, { tag_id, note_id }) {
      return new Promise((resolve, reject) => {
        Api.TagNote.deleteTagNote(tag_id, note_id).then(response => {
          console.log(response.data);
          resolve();
        }).catch(error => reject(error.response));
      });
    },
  },
};

export default TagNote;