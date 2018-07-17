import axios from 'axios';
import Config from '../js/config';

const config = {
    headers: {
        'X-Requested-With': 'XMLHttpRequest'
        // 'Content-Type': 'application/x-www-form-urlencoded'
    },
    responseType: 'json',// default
    method: 'POST'
}

const request = (url, pContent) => {
    return axios.post(url, pContent, config)
}

const response = (response) => {
    if (response.status >= 400) {
        throw new Error(`error received from server: ${response.statusText}`);
    } else {
        return response.data;
    }
};

export const res = {
    detailData(payload, cb, errCb) {
        const params = payload;

        return request('/findData', {})
            .then(response)
            .then(jsonData => {
                try {
                    cb(jsonData);

                    return jsonData;
                } catch (e) {
                    throw e;
                }
            })
            .catch(err => errCb(err));
    }
};
