import Vue from 'vue';
import Vuex from 'vuex';
import actions from './actions';
import mutations from './mutations';
import modules from './modules';

Vue.use(Vuex);

const state = {
    error: null,
    title: '',
    showLoading: false,
    loadingText: '加载中',
    isLoadingBlocked: false
};

const store = new Vuex.Store({
    state,
    modules,
    actions,
    mutations,
});

export default store;
