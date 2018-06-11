<script>
export default {
    created() {
        // 调用API从本地缓存中获取数据
        const logs = wx.getStorageSync('logs') || []
        logs.unshift(Date.now())
        wx.setStorageSync('logs', logs)

        // eslint-disable-next-line
        console.log('app created and cache logs by setStorageSync')
    }
}
</script>

<style lang="scss">
@import url('./style/iconfont.scss');
page {
    background: #f6f8f7;
    height: 100%;
    > div {
        min-height: 100%;
    }
}
</style>
