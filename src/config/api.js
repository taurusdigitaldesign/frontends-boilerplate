/**
 * API接口域名配置
 * 
 * 如果微服务架构，模块部署在不同服务器和域名下面，baseURL = { prod: XX, order: XX}
 * 没有微服务架构，就用字符串
 */
let apiUrl = ''

if (process.env.NODE_ENV == 'development') {
    if (process.env.CUR_ENV == 'mock') {
        apiUrl = 'http://rap2api.taobao.org/app/mock/83621/'
    } else {
        apiUrl = ''
    } 
} else if (process.env.NODE_ENV == 'production') {
    apiUrl = ''
}

export default apiUrl