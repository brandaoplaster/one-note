import Api from '../../api';

const Tag = {
  namespaced: true,

  state: {
    tags: [],
  },

  mutations: {
    TAGS(state, tags) {
      state.tags = tags;
    }
  },

  actions: {
    getTags(context) {
      return new Promise((resolve, reject) => {
        Api.Tag.index().then(response => {
          console.log('tags', response.data);
          context.commit('TAGS', response.data);
          resolve();
        }).catch(error => reject(error.response));
      });
    },

    create(context, { title }) {
      return new Promise((resolve, reject) => {
        Api.Tag.create(title).then(response => {
          resolve();
        }).catch(error => reject(error.response));
      });
    },
  },
};

export default Tag;