import Fly from 'flyio'
import store from '@/store/index'
var fly = new Fly()
var log = console.log

// 配置基地址
fly.config.baseURL = 'https://192.168.1.101.com/'

// 添加请求拦截器
fly.interceptors.request.use(function(request) {
    wx.showLoading({
        title: '加载中...',
        mask: true
    })
    let token = store.state.token
    if (!token) {
        log('没有token，先请求token...')

        return this.await(
            Promise.resolve()
                .then(() => {
                    store.commit('setToken', Math.random())
                })
                .then(() => {
                    request.headers['token'] = store.state.token
                    return request
                })
        )
    } else {
        log(`当前token:${token}`)
        request.headers['token'] = token
    }
})

// 设置响应拦截器
fly.interceptors.response.use(
    function(response) {
        wx.hideLoading()
        return response.data.data
    },
    function(err) {
        wx.hideLoading()
        log('error-interceptor', err)
    }
)

export default fly
