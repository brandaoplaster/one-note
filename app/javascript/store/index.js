import Vue from 'vue';
import Vuex from 'vuex';
import Note from './modules/note';
import Tag from './modules/tag';
import TagNote from './modules/tagnote';
import Favorite from './modules/favorite';

Vue.use(Vuex);

const store = new Vuex.Store({
  modules: { 
    Note,
    Tag,
    TagNote,
    Favorite,
  }
});

export default store;