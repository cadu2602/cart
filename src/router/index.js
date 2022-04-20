import { createRouter, createWebHistory } from "vue-router";
import Home from '@/views/Home.vue'
import Cart from '@/views/cart.vue'

const routes = [
  { 
    path: '/', 
    name: 'Cart',
    component: Cart
  },
  { 
    path: '/home',
    name: 'Home',
    component: Home,
  },
  { 
    path: '/product/:id',
    name: 'Product',
    component: ()=>import('@/components/ProductPage.vue'),
    props: route=> ({id: parseInt(route.params.id)})
  }
  
]
const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router