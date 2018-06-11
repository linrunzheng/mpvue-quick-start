<template>
     <div>
        <a class="cell" :href="url">
            <div>
                <span class="cell__icon iconfont" :class="iconClass"></span>
                <span class="cell__text">{{name}}</span>
            </div>
            <span class="cell__arrow iconfont icon-arrow-right"></span>
        </a>     
    </div>
</template>

<script>
export default {
    props: {
        name: {
            type: String,
            default: ''
        },
        iconClass: {
            type: String,
            default: ''
        },
        url: {
            type: String,
            default: ''
        }
    }
}
</script>


<style lang="scss" scoped>
@import '~@/style/mixin.scss';

.cell {
    @include flex-center;
    justify-content: space-between;
    padding: 18rpx 40rpx;
    margin-bottom: 8rpx;
    background: #fff;
    &__icon {
        color: rgb(238, 77, 77);
        font-size: 40rpx;
        vertical-align: middle;
        margin-right: 20rpx;
    }
    &__text {
        color: #666;
        font-size: 28rpx;
        vertical-align: middle;
    }
    &__arrow {
        font-size: 40rpx;
        color: #bbb;
    }
}
</style>

