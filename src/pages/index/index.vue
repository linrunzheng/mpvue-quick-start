<template>
    <div class="container">
        <my-swiper :carouselList="carouselList"/>
    </div>
</template>

<script>
import WXP from 'minapp-api-promise'
import MySwiper from '@/components/my-swiper'
import imgUrl from 'static/assets/image/swiper1.png'
export default {
    data() {
        return {
            carouselList: [
                {
                    imgUrl,
                    link: 'http:baidu.com'
                },
                {
                    imgUrl,
                    link: 'http:baidu.com'
                },
                {
                    imgUrl,
                    link: 'http:baidu.com'
                }
            ]
        }
    },
    components: {
        MySwiper
    },
    onShow() {
        console.log(456)
    },
    async mounted() {
        try {
            let resp = await WXP.getUserInfo()
            console.log('success信息:', resp)
        } catch (errorMesg) {
            console.log('fail信息:', errorMesg)
        }
    },

    onShareAppMessage(res) {
        wx.showShareMenu({
            withShareTicket: true,
            success(aa) {
                console.log(aa)
            }
        })
        return {
            title: '转发',
            path: '/pages/index/index'
        }
    }
}
</script>

<style scoped lang="scss">
.swiper {
    height: 350rpx;
    width: 100%;
    &__img {
        width: 100%;
        height: 100%;
    }
}
</style>