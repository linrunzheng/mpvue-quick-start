<template>
    <div>
        <div class="search-container">
            <span class="iconfont icon-scan"></span>
            <search/>
            <span class="iconfont icon-classify"></span>
        </div>    

        <my-swiper :carouselList="carouselList"/>

        <div class="title__new">
            <span class="common-title">新品上市</span>
        </div>

        <div class="container">
            <div class="new">
                <div class="new__item">
                    <img class="new__item__img" :src="imgUrl2" />
                    <h3 class="new__item__name">盯盯拍X2Pro</h3>
                    <p class="new__item__brief">1440P齐纳后双录Dsave存储</p>
                </div>
                <div class="new__item">
                    <img class="new__item__img" :src="imgUrl2" />
                    <h3 class="new__item__name">盯盯拍X2Pro</h3>
                    <p class="new__item__brief">1440P齐纳后双录Dsave存储</p>
                </div>
            </div>

            <div class="title__hot">
                <span class="common-title">热销商品</span>
                <span class="more">更多></span>
            </div>

            <ul class="hot">
                <li class="hot__list">
                    <img :src="imgUrl2" class="hot__list__img"/>
                    <div class="hot__list__detail">
                        <h3 class="hot__list__title">高姿气垫BB霜</h3>
                        <div class="hot__list__others">
                            <div class="hot__list__specific">
                                <p>
                                    <span class="hot__list__limit">10件拼</span>
                                    <span class="hot__list__price">￥99.00</span>
                                </p>
                                <p class="hot__list__status">已拼8件</p>
                            </div>
                        </div>
                    </div>
                </li>
                <li class="hot__list">
                    <img :src="imgUrl2" class="hot__list__img"/>
                    <div class="hot__list__detail">
                        <h3 class="hot__list__title">高姿气垫BB霜高姿气垫BB霜高姿气高姿气垫BB霜高姿气垫BB霜高姿气垫BB霜高姿气垫BB垫BB霜高姿气垫BB</h3>
                        <div class="hot__list__others">
                            <div class="hot__list__specific">
                                <p>
                                    <span class="hot__list__limit">10件拼</span>
                                    <span class="hot__list__price">￥99.00</span>
                                </p>
                                <p class="hot__list__status">已拼8件</p>
                            </div>
                        </div>
                    </div>
                </li>
            </ul>
        </div>
    </div>
</template>

<script>
import MySwiper from '@/components/my-swiper'
import Search from '@/components/search'
import bg from 'static/assets/image/new_bg.png'

var imgUrl =
    'http://img2.imgtn.bdimg.com/it/u=3890913032,2577282484&fm=27&gp=0.jpg'
var imgUrl2 =
    'https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=43823315,2998195981&fm=27&gp=0.jpg'
export default {
    data() {
        return {
            imgUrl,
            imgUrl2,
            bg,
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
            ],
            brand: [
                {
                    name: '华为',
                    logo: imgUrl,
                    id: 1
                },
                {
                    name: '美的',
                    logo: imgUrl,
                    id: 2
                },
                {
                    name: '小米',
                    logo: imgUrl,
                    id: 3
                },
                {
                    name: '诺基亚',
                    logo: imgUrl,
                    id: 4
                },
                {
                    name: '飞利浦',
                    logo: imgUrl,
                    id: 5
                },
                {
                    name: '联想',
                    logo: imgUrl,
                    id: 6
                },
                {
                    name: '惠普',
                    logo: imgUrl,
                    id: 7
                },
                {
                    name: '更多品牌',
                    logo: imgUrl,
                    id: 8
                }
            ]
        }
    },
    components: {
        MySwiper,
        Search
    },
    mounted() {
        console.log('home')
    }
}
</script>

<style scoped lang="scss">
@import '~@/style/mixin';
.search-container {
    @include flex-center;
    background: #fff;
    padding: 10rpx 0 16rpx;
    border-bottom: 1rpx solid #eee;
    .iconfont {
        color: #f32120;
        font-size: 50rpx;
    }
    .icon-scan {
        padding-left: 30rpx;
        padding-right: 50rpx;
    }
    .icon-classify {
        padding-left: 50rpx;
        padding-right: 30rpx;
    }
}

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
    margin-top: 20rpx;
    .new {
        padding: 30rpx;
        margin-bottom: 50rpx;
        background: #fff;
        display: flex;
        justify-content: space-between;
        &__item {
            flex-basis: 48.5%;
            display: flex;
            flex-direction: column;
            &__img {
                width: 100%;
                height: 200rpx;
                border-radius: 6rpx;
            }
            &__name {
                font-size: 32rpx;
                color: #333;
                margin: 25rpx 0 12rpx;
            }
            &__brief {
                font-size: 26rpx;
                color: #999;
            }
        }
    }
    .hot {
        &__list {
            @include flex-center;
            margin-bottom: 20rpx;
            border: 1px solid #eee;
            border-radius: 6rpx;
            background: #fff;
            padding: 20rpx;
            &__img {
                width: 200rpx;
                height: 140rpx;
                border-radius: 6rpx;
                margin-right: 25rpx;
            }
            &__detail {
                flex: 1;
                display: flex;
                flex-direction: column;
                justify-content: space-between;
            }
            &__title {
                @include t-overflow(2);
                font-size: 30rpx;
                color: #333;
                margin-bottom: 6rpx;
            }
            &__others {
                display: flex;
                justify-content: space-between;
                align-items: center;
            }

            &__limit {
                font-size: 28rpx;
                color: #f14c4a;
                margin-right: 30rpx;
            }
            &__price {
                font-size: 28rpx;
                color: #f14c4a;
            }
            &__status {
                font-size: 24rpx;
                color: #aaa;
            }
            &__share {
                display: inline-block;
                width: 124rpx;
                height: 50rpx;
                line-height: 50rpx;
                text-align: center;
                color: #fff;
                background: #f46a68;
                border-radius: 30rpx;
                font-size: 24rpx;
            }
        }
    }
}

.common-title {
    font-weight: bold;
    font-size: 36rpx;
    background: linear-gradient(to right, #f32320, #feba2b);
    -webkit-background-clip: text;
    color: transparent;
}
.title__new {
    line-height: 120rpx;
    text-align: center;
    background: no-repeat center/cover;
    z-index: -1;
}
.title__hot {
    text-align: center;
    position: relative;
    margin-bottom: 30rpx;
    .more {
        position: absolute;
        right: 0;
        top: 50%;
        transform: translateY(-50%);
        font-size: 26rpx;
        color: #aaa;
    }
}
</style>