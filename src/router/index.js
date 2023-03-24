import { createRouter, createWebHistory } from 'vue-router'
import { useUserStore } from '@/store/user'
import { getToken } from '@/utils/auth'
import DefaultLayout from '@/layouts/default'

const routes = [
  {
    path: '/login',
    name: 'Login',
    component: () => import('@/views/Login.vue')
  },
  {
    path: '/',
    component: DefaultLayout,
    children: [
      {
        path: '',
        name: 'Home',
        component: () => import('@/views/Home.vue')
      },
      {
        path: 'product',
        name: 'Product',
        component: () => import('@/views/Product.vue')
      }
    ]
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

// no redirect whitelist
const whiteList = ['/login']

router.beforeEach(async (to, from, next) => {
  const token = getToken()
  const userStore = useUserStore()

  if (token) {
    if (to.path === '/login') {
      // if is logged in, redirect to the home page
      next({ name: 'Home' })
    } else {
      // determine whether the user has obtained his permission roles through getInfo
      // TODO: uncommit when has roles
      const hasRoles = userStore.roles.length > 0

      if (hasRoles) {
        next()
      } else {
        try {
          // TODO: 權限頁面實作
          await userStore.getInfo()

          // hack method to ensure that addRoutes is complete
          // set the replace: true, so the navigation will not leave a history record
          next({ ...to, replace: true })
        } catch (error) {
          // remove token and go to login page to re-login
          await userStore.resetToken()
          next(`/login?redirect=${to.path}`)
        }
      }
    }
  } else {
    /* has no token*/

    if (whiteList.includes(to.path)) {
      // in the free login whitelist, go directly
      next()
    } else {
      // other pages that do not have permission to access are redirected to the login page.
      next(`/login?redirect=${to.path}`)
    }
  }
})

export default router
