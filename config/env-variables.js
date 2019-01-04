const envVariables = {
    'mock': {
        'CUR_ENV': "mock",
        'apiUrl': "http://rap2api.taobao.org/app/mock/83621/"
    },
    'dev': {
        'CUR_ENV': 'development',
        'apiUrl': 'http://rap2api.taobao.org/app/mock/83621/'
    },
    'production': {
        'CUR_ENV': 'production',
        'apiUrl': 'http://rap2api.taobao.org/app/mock/83621/'
    }
};

module.exports = envVariables;