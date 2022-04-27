import { createRouter, createWebHashHistory, RouteRecordRaw } from "vue-router"
import generaterRoutes from 'pages-generated'       //pages目录中生成的路由页面

const routes: RouteRecordRaw[] = []

const modules = import.meta.globEager('./module/*.ts')
for (const path in modules) {
    routes.push(...modules[path].default)
}

//将pages目录中静态页面添加到routes
routes.push(...generaterRoutes)

const router = createRouter({
    history: createWebHashHistory(),
    routes
})

export default router