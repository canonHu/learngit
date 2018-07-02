import { res } from '../../api';
import {
    LOADING_START,
    LOADING_END,
    DETAIL_REQUEST,
    DETAIL_SUCCESS,
    DETAIL_FAILED,
} from '../mutation-types';

const state = {
    tmplList: [],
    mainList: [],
    resData: '',
    dateType: 'month',
    yljgOrQy: '1',
    articleList: '',
    detailRes: null,
    pagination: null
};

const actions = {
    [DETAIL_REQUEST]({ commit }, payload) {
        commit(LOADING_START, {
            text: '',
            isBlocked: true,
        });
        commit(DETAIL_REQUEST);

        return res.detailData(
            payload,
            (res) => {
                commit(LOADING_END);
                commit(DETAIL_SUCCESS, { res });
            },
            (err) => {
                commit(DETAIL_FAILED);
            },
        );
    }
};

const mutations = {
    [DETAIL_REQUEST](state, num) {
        state.detailRes = null;
    },

    [DETAIL_SUCCESS](state, { res }) {
        if (res.success) {
            // state.detailRes = res.data;
        }
    },

    [DETAIL_FAILED](state) {
    }
};

export default {
    state,
    actions,
    mutations,
};
