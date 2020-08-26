import Vue from 'vue';
import Vuex from 'vuex';
import Note from './modules/note';
import Tag from './modules/tag';

Vue.use(Vuex);

const store = new Vuex.Store({
  modules: { 
    Note,
    Tag,
  }
});

export default store;