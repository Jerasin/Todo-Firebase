import { createRouter, createWebHistory } from 'vue-router'
import Form from '../components/Form.vue'
import Edit from '../components/Edit.vue'

const routes = [
  {
    path: '/',
    name: 'Form',
    component: Form
  },
  {
    path: '/edit/:id',
    name: 'Edit',
    component: Edit
  },
 
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
