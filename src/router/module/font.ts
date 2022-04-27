import { RouteRecordRaw } from "vue-router";

const routes: RouteRecordRaw[] = [{
    path: '/',
    component: () => import('@/views/Front.vue')
}, {
    path: '/replaceStr',
    component: () => import('@/funny/replaceStr.vue')
}]

export default routes