import axios from 'axios';
import Config from '../js/config';

const request = (url, pContent) => {
    return axios({
        method: 'GET',
        headers: {
            "Content-Type": "text/plain;charset=UTF-8"
        },
        url: url,
        data: JSON.stringify(pContent)
    })
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

        return request('/123', params)
            .then(response)
            .then((jsonData) => {
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
