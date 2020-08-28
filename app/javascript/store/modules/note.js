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
    }
  },
};

export default Note;