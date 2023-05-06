import { createRouter, createWebHashHistory } from 'vue-router'
import layout from '@/layout'
// 公开路由表 不需要权限
const publicRoutes = [
  {
    path: '/login',
    name: 'login',
    component: () => import('@/views/login/index.vue')
  },
  {
    path: '/',
    name: 'layout',
    redirect: "/profile",
    component: layout,
    children: [
      // 个人中心
      {
        path: "/profile",
        name: 'profile',
        component: () => import('@/views/profile'),
        meta: {
          title: 'profile',
          icon: 'el-icon-user'
        }
      },
      // 404页面
      {
        path: "/404",
        name: '404页面',
        component: () => import('@/views/error-page/404.vue')
      },
      // 401页面
      {
        path: "/401",
        name: '401页面',
        component: () => import('@/views/error-page/401.vue')
      },
    ],
  },
]
// 私有路由表，需要权限
const privateRouters = [
  // 个人中心
  {
    path: '/user',
    name: "user",
    redirect: '/userManage',
    component: layout,
    meta: {
      title: 'user',
      icon: 'personnel'
    },
    children: [
      // 角色管理
      {
        path: "/userManage",
        name: 'userManage',
        component: () => import('@/views/user-manage/index.vue'),
        meta: {
          title: "userManage",
          icon: 'personnel-manage'
        }
      },
      // 角色
      {
        path: "/userRole",
        name: 'userRole',
        component: () => import('@/views/role-list/index.vue'),
        meta: {
          title: "roleList",
          icon: 'role'
        }
      },
      // 权限列表
      {
        path: "/permission",
        name: 'permission',
        component: () => import('@/views/permission-list/index.vue'),
        meta: {
          title: "permissionList",
          icon: 'permission'
        }
      },
      // 用户信息
      {
        path: "/userInfo:id",
        name: 'userInfo',
        component: () => import('@/views/user-info/index.vue'),
        meta: {
          title: "userInfo",
        }
      },
      // 导入
      {
        path: "/import",
        name: 'import',
        component: () => import('@/views/import/index.vue'),
        meta: {
          title: "excelImport",
        }
      },
    ]
  },
  // 文章
  {
    path: '/article',
    component: layout,
    redirect: '/article/ranking',
    name: 'articleRanking',
    meta: {
      title: 'article',
      icon: 'article'
    },
    children: [
      {
        path: '/article/ranking',
        name: 'articleRanking',
        component: () => import('@/views/article-ranking/index'),
        meta: {
          title: 'articleRanking',
          icon: 'article-ranking'
        }
      },
      {
        path: '/article/:id',
        name: "articleDetail",
        component: () => import('@/views/article-detail/index'),
        meta: {
          title: 'articleDetail'
        }
      },
      {
        path: '/article/create',
        name: "articleCreate",
        component: () => import('@/views/article-create/index'),
        meta: {
          title: 'articleCreate',
          icon: 'article-create'
        }
      },
      {
        path: '/article/editor/:id',
        name: "articleEditor",
        component: () => import('@/views/article-create/index'),
        meta: {
          title: 'articleEditor'
        }
      }
    ]
  }
]
const router = createRouter({
  history: createWebHashHistory(),
  routes: [...publicRoutes, ...privateRouters]
})

export default router
