import { createApp } from 'vue'
import { createRouter, createWebHistory } from 'vue-router'
import App from './App.vue'

//View Components
import Courses from './views/Courses.vue'
import Modules from './views/Modules.vue'
import Classes from './views/Classes.vue'


const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: '/courses', name: 'Courses', component: Courses },
    { path: '/modules', name: 'Modules', component: Modules },
    { path: '/classes', name: 'Classes', component: Classes }

  ]
})


createApp(App).use(router).mount('#app')
