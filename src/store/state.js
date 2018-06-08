export default {
    number: 100,
    get token() {
        return wx.getStorageSync('token')
    },
    set token(value) {
        wx.setStorageSync('token', value)
    }
}
