// import cookie from 'common-libs/cookie';
import { ROUTE_PATH_ADD } from '../mutation-types';
import Config from '../../js/config';

const ROUTE_PATH_STORE_ID = `${Config.app}_${process.env.NODE_ENV}_route_paths`;

let storeSupport = !!window.sessionStorage;

// test if local storage is disabled by user
// (propably on IOS devices, in private mode)
try {
    sessionStorage.setItem(`test_${ROUTE_PATH_STORE_ID}`, '');
} catch (e) {
    storeSupport = false;
}

const getSavedPath = () => {
    if (storeSupport) {
        return sessionStorage.getItem(ROUTE_PATH_STORE_ID);
    } else {
        // return cookie.get(ROUTE_PATH_STORE_ID);
    }
};

const savePath = (path) => {
    if (storeSupport) {
        sessionStorage.setItem(ROUTE_PATH_STORE_ID, path);
    } else {
        // cookie.add(ROUTE_PATH_STORE_ID, path, { expires: 1 });
    }
};

const fetchPaths = () => {
    const paths = [];

    if (storeSupport) {
        const savedPaths = getSavedPath();

        if (savedPaths) {
            try {
                return JSON.parse(savedPaths);
            } catch (e) {
                throw e;
            }
        }
    }

    return paths;
};

const state = { paths: fetchPaths() };

const mutations = {
    [ROUTE_PATH_ADD](state, { path }) {
        state.paths.push(path);
        savePath(JSON.stringify(state.paths));
    },
};

export default {
    state,
    mutations,
};
