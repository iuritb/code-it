import { createStore } from 'vuex'
import createPersistedState from "vuex-persistedstate";

import course from './modules/course'
import modules from './modules/modules'
import classes from './modules/classes'
 

export default createStore({
  modules: {course, modules, classes},
  plugins: [createPersistedState({
    paths: [course, modules, classes]
  })]
})