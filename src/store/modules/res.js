import { res } from '../../api';
import {
    LOADING_START,
    LOADING_END,
    GET_ZG_APP_DATA_REQUEST,
    GET_ZG_APP_DATA_SUCCESS,
    GET_ZG_APP_DATA_FAILED,
    GET_ZG_APP_DATA_REQUEST_DETAIL,
    GET_ZG_APP_DATA_SUCCESS_DETAIL,
    GET_ZG_APP_DATA_FAILED_DETAIL,
} from '../mutation-types';

const state = {
    tmplList: [],
    mainList: [],
    resData: '',
    dateType: 'month',
    yljgOrQy: '1'
};

const actions = {
    [GET_ZG_APP_DATA_REQUEST]({ commit }, payload) {
        commit(LOADING_START, {
            text: '',
            isBlocked: true,
        });
        commit(GET_ZG_APP_DATA_REQUEST);

        return res.getZgAppData(
            payload,
            (res) => {
                commit(LOADING_END);
                commit(GET_ZG_APP_DATA_SUCCESS, { res });
            },
            (err) => {
                commit(GET_ZG_APP_DATA_FAILED);
            },
        );
    },

    [GET_ZG_APP_DATA_REQUEST_DETAIL]({ commit }, payload) {
        commit(LOADING_START, {
            text: '',
            isBlocked: true,
        });
        commit(GET_ZG_APP_DATA_REQUEST_DETAIL);

        return res.getZgAppData(
            payload,
            (res) => {
                commit(LOADING_END);
                commit(GET_ZG_APP_DATA_SUCCESS_DETAIL, { res });
            },
            (err) => {
                commit(GET_ZG_APP_DATA_FAILED_DETAIL);
            },
        );
    },
};

const mutations = {
    [GET_ZG_APP_DATA_REQUEST](state, num) {
        state.mainList = [];
        state.resData = '';
    },

    [GET_ZG_APP_DATA_SUCCESS](state, { res }) {
        state.mainList = res.rspData;
        state.resData = res.rspData;
    },

    [GET_ZG_APP_DATA_FAILED](state, { err }) {
    },

    [GET_ZG_APP_DATA_REQUEST_DETAIL](state, num) {
    },

    [GET_ZG_APP_DATA_SUCCESS_DETAIL](state, { res }) {
    },

    [GET_ZG_APP_DATA_FAILED_DETAIL](state, { err }) {
    }
};

export default {
    state,
    actions,
    mutations,
};
