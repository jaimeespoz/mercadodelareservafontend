export const helpHttp = () => {
    const customFetch = (endpoint, options) => {
        const defaultHeader = {
            'Content-Type': 'application/json',
            // 'Access-Control-Allow-Origin': '*',
            Authorization: `${localStorage.getItem('accessToken')}`,
        };

        const controller = new AbortController();
        options.signal = controller.signal;

        options.referrerPolicy = 'no-referrer';
        options.credentials = 'omit';
        options.redirect = 'follow';
        options.cache = 'no-cache';
        options.mode = 'cors';
        options.method = options.method || 'GET';
        options.headers = options.headers
            ? { ...defaultHeader, ...options.headers }
            : defaultHeader;

        options.body = JSON.stringify(options.body) || false;
        if (!options.body) delete options.body;

        setTimeout(() => controller.abort(), 3000);

        // console.log('Options : ', options);

        return fetch(endpoint, options)
            .then((response) => {
                if (response.ok) {
                    console.log('Ok');
                    console.log('status:', response.status);
                    return response;
                } else {
                    console.log('Error');
                    console.log('status:', response.status);
                    console.log('retorno:', response.retorno);
                    return response;
                }
            })
            .then((res) => res.json())
            .then((res) => res.data)
            .catch((err) => {
                console.log('Error.', err);
                // console.log('status:', response.status);
                // console.log('retorno:', response.retorno);
                // console.log('response:', response);
            });
    };

    const get = (url, options = {}) => {
        // console.log('********** G E T *******************');
        // console.log('GET: url-options: ', JSON.stringify(url), options);
        options = { method: 'GET' };
        return customFetch(url, options);
    };

    const post = (url, options = {}) => {
        // console.log('********** P O S T. *******************');
        // console.log('options..: ', JSON.stringify(options));
        options.method = 'POST';
        // options.body = JSON.stringify(options);
        return customFetch(url, options);
    };

    const put = (url, options = {}) => {
        // console.log('********** P U T *******************');
        options.method = 'PUT';
        return customFetch(url, options);
    };

    const del = (url, options = {}) => {
        // console.log('********** D E L E T E *******************');
        options.method = 'DELETE';
        return customFetch(url, options);
    };

    return {
        get,
        post,
        put,
        del,
    };
};
