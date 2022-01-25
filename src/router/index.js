import { createRouter, createWebHistory } from 'vue-router'


//View Components
import Courses from '../views/Courses.vue'
import Modules from '../views/Modules.vue'
import Classes from '../views/Classes.vue'

const routes = [

  { path: '/courses', name: 'Courses', component: Courses },
  { path: '/modules', name: 'Modules', component: Modules },
  { path: '/classes', name: 'Classes', component: Classes }

]

const router = createRouter ( {
  history: createWebHistory(),
  routes
})

export default router