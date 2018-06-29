// es6 polyfill
import 'core-js/fn/array/find-index';
import 'core-js/fn/object/assign';
import 'core-js/fn/string/starts-with';
import 'core-js/es6/promise';

import Vue from 'vue';
import store from '../store';
import router from '../router';
import { mapState, mapMutations } from 'vuex';
import FastClick from 'fastclick';

new Vue({
    el: '#wrapper',

    render() {
        return (
            <section id="app" ref="app">
                <section class="jkwy-view">
                    <router-view></router-view>
                </section>
            </section>
        );
    },

    methods: {
        setTitle(title) {
            // ps.在微信中不能动态修改title
            // 之前基于iframe的hack已经在后续的微信版本中失效
            // 只能期望微信解决该问题
            document.title = title;
        },
    },

    computed: { ...mapState(['error', 'routePath', 'title']) },

    watch: {
        title(newTitle) {
            this.setTitle(newTitle);
        },

        $route(to, from) {
            const paths = this.routePath.paths;
            const fromPath = from.matched[0].path;
            const toPath = to.matched[0].path;

            // first routing
            if (!paths.length) {
                this.addRoutePath({ path: fromPath });
                this.addRoutePath({ path: toPath });
            } else {
                if (paths.indexOf(toPath) === -1) {
                    this.addRoutePath({ path: toPath });
                }
            }
        },
    },

    mounted() {
        FastClick.attach(this.$refs.app);
    },

    router,
    store,
});