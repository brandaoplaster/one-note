import Api from '../../api';
import favorite from '../../api/favorite';

const Favorite = {
  namespaced: true,

  state: {
    favorites: [],
  },

  mutations: {
    FAVORITES(state, favorites) {
      state.favorites = favorites;
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
          let favorites = response.data.map((favorite) => 
            favorite.note
          );
          context.commit('FAVORITES', favorites);
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