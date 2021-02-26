import { createRouter, createWebHashHistory } from 'vue-router'

const routes = [
  {
    path: '/',
    name: 'Home',
    // 使用异步组件component: () => 加载的时候不会立即加载，而是点击进去才加载
    component: () => import('../views/home/Home')
  },
  {
    path: '/cartList',
    name: 'CartList',
    // 使用异步组件component: () => 加载的时候不会立即加载，而是点击进去才加载
    component: () => import('../views/cartList/CartList')
  },
  {
    path: '/orderList',
    name: 'OrderList',
    // 使用异步组件component: () => 加载的时候不会立即加载，而是点击进去才加载
    component: () => import('../views/orderList/OrderList')
  },
  {
    path: '/orderConfirmation/:id',
    name: 'OrderConfirmation',
    // 使用异步组件component: () => 加载的时候不会立即加载，而是点击进去才加载
    component: () => import('../views/orderConfirmation/OrderConfirmation')
  },
  {
    path: '/shop/:id',
    name: 'Shop',
    component: () => import('../views/shop/Shop')
  },
  {
    path: '/login',
    name: 'Login',
    component: () => import('../views/login/Login'),
    beforeEnter (to, from, next) {
      const { isLogin } = localStorage
      isLogin ? next({ name: 'Home' }) : next()
    }
  },
  {
    path: '/register',
    name: 'Register',
    component: () => import('../views/register/Register'),
    beforeEnter (to, from, next) {
      const { isLogin } = localStorage
      isLogin ? next({ name: 'Home' }) : next()
    }
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

router.beforeEach((to,
  from,
  next) => {
  const { isLogin } = localStorage
  const isLoginOrRegister = (to.name === 'Login' || to.name === 'Register');
  (isLogin || isLoginOrRegister) ? next() : next({ name: 'Login' })
})

export default router
