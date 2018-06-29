import {
	LOADING_START,
	LOADING_END,
	ERROR_OCCURED,
	CHANGE_TITLE
} from './mutation-types';

// current loading requests number
let loadingRequestCount = 0;

export default {
	[LOADING_START](state, config = {}) {
		if (config.text) {
			state.loadingText = config.text;
		}

		if (config.isBlocked) {
			state.isLoadingBlocked = config.isBlocked;
		}

		loadingRequestCount += 1;
		state.showLoading = true;
	},

	[LOADING_END](state) {
		loadingRequestCount -= 1;

		// reset loading state
		if (loadingRequestCount === 0) {
			state.showLoading = false;
			state.loadingText = '加载中';
			state.isLoadingBlocked = false;
		}
	},

	[ERROR_OCCURED](state, err) {
		state.error = err;
	},

	[CHANGE_TITLE](state, title) {
		state.title = title;
	},
};
