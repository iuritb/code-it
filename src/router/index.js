import { createRouter, createWebHistory } from 'vue-router'


//View Components
import Courses from '../views/Courses.vue'
import Course from '../views/Course.vue'
import Modules from '../views/Modules.vue'
import Classes from '../views/Classes.vue'

const routes = [
  {
    path: '/',
    name: 'Courses',
    component: Courses
  },
  {
    path: '/course/:id',
    name: 'Course',
    component: Course
  },
  {
    path: '/modules/:id',
    name: 'Modules',
    component: Modules
  },
  {
    path: '/classes/:id',
    name: 'Classes',
    component: Classes
  }

]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router