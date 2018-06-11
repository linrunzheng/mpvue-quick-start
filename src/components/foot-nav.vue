<template>
     <div class="footer-nav">
        <div 
            class="footer-nav__item"
            :class="{active:item.name==currentNav.name}"
            v-for="item in navList"
            :key="item.name"
            @click="navChange(item)"
            >
            <div class="iconfont" :class="item.icon"></div>
            <div class="nav-name">{{item.name}}</div>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            currentNav: {}
        }
    },
    props: {
        navList: {
            type: Array,
            required: true
        }
    },
    methods: {
        navChange(nav) {
            this.currentNav = nav
            this.$emit('nav-change', this.currentNav)
        }
    },
    watch: {
        navList(nav) {
            this.currentNav = nav ? nav[0] : {}
            this.$emit('nav-change', this.currentNav)
        }
    }
}
</script>

<style lang="scss" scoped>
@import '~@/style/mixin';
.footer-nav {
    position: fixed;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 100rpx;
    padding: 8rpx 0 4rpx;
    box-sizing: border-box;
    display: flex;
    align-content: center;
    box-shadow: 0 -1rpx 8rpx #ddd;
    background: #fff;
    &__item {
        flex: 1;
        @include flex-center;
        flex-direction: column;
        color: #888;
        &.active {
            color: rgb(238, 77, 77);
        }
        .iconfont {
            font-size: 44rpx;
            margin-bottom: 4rpx;
        }
        .nav-name {
            font-size: 28rpx;
        }
    }
}
</style>


