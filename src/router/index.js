import { createRouter, createWebHistory } from 'vue-router'


//View Components
import Courses from '../views/Courses.vue'
import Course from '../views/Course.vue'

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

]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router