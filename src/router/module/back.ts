import { RouteRecordRaw } from "vue-router";

const routes: RouteRecordRaw[] = [{
    path: '/admin',
    component: () => import('@/pages/Back.vue'),
}]

export default routes