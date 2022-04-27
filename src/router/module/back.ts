import { RouteRecordRaw } from "vue-router";

const routes: RouteRecordRaw[] = [{
    path: '/admin',
    component: () => import('@/views/Back.vue'),
}]

export default routes