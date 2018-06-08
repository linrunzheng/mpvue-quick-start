<template>
    <swiper class="swiper" 
        indicator-active-color="#e0127c" 
        :indicator-dots="carouselConfig.indicatorDots" 
        :autoplay="carouselConfig.autoplay" 
        :interval="carouselConfig.interval" 				
        :duration="carouselConfig.duration">
        <swiper-item v-for="(item,index) in carouselList" :key="index">
            <image :src="item.imgUrl" class="swiper__img"/>
        </swiper-item>
    </swiper>
</template>

<script>
export default {
    props: {
        carouselList: {
            type: Array,
            default: []
        },
        carouselConfig: {
            type: Object,
            default: {
                indicatorDots: true,
                autoplay: true,
                interval: 3000,
                duration: 1000
            }
        }
    }
}
</script>

<style lang="scss" scoped>
.swiper {
    height: 350rpx;
    width: 100%;
    &__img {
        width: 100%;
        height: 100%;
    }
}
</style>
