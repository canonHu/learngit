import Jkwy404 from '../components/jkwy-404.vue';
import TestHome from '../components/test-home.vue';

export default [
    {
        name: 'testHome',
        path: '/',
        component: TestHome,
        meta: { title: '首页' },
    },
    {
        name: '404',
        path: '*',
        component: Jkwy404,
        meta: { title: '404 当前页面不存在！' },
    }
]