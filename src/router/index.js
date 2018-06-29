import Vue from 'vue';
import VueRouter from 'vue-router';
import routes from './routes';
import { CHANGE_TITLE } from '../store/mutation-types'

Vue.use(VueRouter);

const router = new VueRouter({ routes });

router.beforeEach((to, from, next) => {
    next();
});

router.afterEach((to, from) => {
    if (to.meta.title) {
        Vue.nextTick(() => {
            router.app.$store.commit(CHANGE_TITLE, to.meta.title);
        });
    }
});

export default router;
