import Api from '../../api';

const Favorite = {
  namespaced: true,

  state: {
    favorites: [],
  },

  mutations: {
    FAVORITES(state, notes) {
      state.notes = notes;
    },
    
    REMOVE_FAVORITES(state, id) {
      index = state.notes.findIndex(note => note.id === id);
      state.notes.splice(index, 1);
    }
  },

  actions: {
    getFavorites(context) {
      return new Promise((resolve, reject) => {
        Api.Favorite.index().then(response => {
          console.log(response.data);
          context.commit('FAVORITES', response.data);
          resolve();
        }).catch(error => reject(error.response));
      });
    },

    create(context, { note_id }) {
      return new Promise((resolve, reject) => {
        Api.Favorite.create(note_id).then(response => {
          console.log(response);
          // context.commit('', response.data);
          resolve();
        }).catch(error => reject(error.response));
      });
    },
  },
};

export default Favorite;