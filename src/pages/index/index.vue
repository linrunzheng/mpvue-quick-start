<template>
    <div>
        <my-swiper :carouselList="carouselList"/>
        <div class="container">  
            <ul class="brand">
                <li class="brand__item" v-for="n in 8">
                    <div class="brand__item__logo"></div>
                    <div class="brand__item__name">华为</div>
                </li>
            </ul>
        </div>
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
.container {
    padding: 0 30rpx;
    .brand {
        display: flex;
        flex-wrap: wrap;
        align-items: center;
        justify-content: space-between;
        margin: 20rpx 0;
        padding: 15rpx 0;
        border-radius: 10rpx;
        background: #fff;
        &__item {
            flex-basis: 25%;
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
            padding: 18rpx 0;
            &__logo {
                width: 114rpx;
                height: 114rpx;
                border-radius: 50%;
                background: red;
                margin-bottom: 16rpx;
            }
            &__name {
                font-size: 30rpx;
            }
        }
    }
}
</style>