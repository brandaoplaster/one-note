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
  },
};

export default Note;