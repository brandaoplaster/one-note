import Api from '../../api';

const Note = {
  namespaced: true,

  state: {
    notes: [],
  },

  mutations: {
    NOTES(state, notes) {
      state.notes = notes;
    },
    
    REMOVE_NOTE(state, id) {
      index = state.notes.findIndex(note => note.id === id);
      state.notes.splice(index, 1);
    }
  },

  actions: {
    getNotes(context) {
      return new Promise((resolve, reject) => {
        Api.Note.index().then(response => {
          console.log(response.data);
          context.commit('NOTES', response.data);
          resolve();
        }).catch(error => reject(error.response));
      });
    },

    create(context, { title, body }) {
      return new Promise((resolve, reject) => {
        Api.Note.create(title, body).then(response => {
          console.log(response);
          // context.commit('', response.data);
          resolve();
        }).catch(error => reject(error.response));
      });
    },

    remove(context, { id }) {
      return new Promise((resolve, reject) => {
        Api.Note.destroy(id).then(response => {
          console.log(response);
          context.commit('REMOVE_NOTE', id);
          resolve();
        }).catch(error => reject(error.response));
      });
    }
  },
};

export default Note;