import { createStore } from 'vuex';
import tab from './tab';
import user from './user';

const store = createStore({ modules: { tab, user } });

export default store;