import { TOAST, TOAST_END } from '../mutation-types';

const state = {
    show: false,
    type: '',
    text: '',
    callback: null,
};

const defaultOptions = {
    type: 'info',
    text: '',
    callback: null,
};

const mutations = {
    [TOAST](state, options = {}) {
        let config = {};

        if (typeof options === 'string') {
            config = Object.assign({}, defaultOptions, { text: options });
        } else {
            config = Object.assign({}, defaultOptions, options);
        }

        state.text = config.text;
        state.type = config.type;
        state.callback = config.callback;
        state.show = true;
    },

    [TOAST_END](state) {
        state.show = false;
        state.callback && state.callback();
    },
};

export default {
    state,
    mutations,
};
