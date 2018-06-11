<template>
    <div>
        <div class="user-container">
            <div class="user">
                <img class="user__img" :src="userData.img">
                <div class="user__detail">
                    <span class="user__name">{{userData.name}}</span>                  
                </div>
                <span class="user__setting">
                    <span class="iconfont icon-setting"></span>
                    <span class="user__setting__text">设置</span>                
                </span>
            </div>
        </div>
        
        <CellBar 
            v-for="(item,index) in cellBlock"
            :key="index"
            :name="item.title" 
            :url="item.url" 
            :iconClass='item.icon'
        />   
    </div>
</template>

<script>
import CellBar from '@/components/cell.vue'
var imgUrl =
    'http://img2.imgtn.bdimg.com/it/u=3890913032,2577282484&fm=27&gp=0.jpg'
export default {
    data() {
        return {
            userData: {
                img: imgUrl,
                name: '陈小希'
            },
            cellBlock: [
                {
                    title: '测试切换页面',
                    icon: 'icon-agreement',
                    url: '/pages/search/search'
                }
            ]
        }
    },
    components: {
        CellBar
    },
    mounted() {
        console.log('user')
    }
}
</script>

<style lang="scss" scoped>
@import '~@/style/mixin';
.user-container {
    padding: 30rpx;
}
.user {
    @include flex-center;
    position: relative;
    background: linear-gradient(to right, #ed3f3e, #fe6f5f); /* 标准的语法 */
    height: 230rpx;
    border-radius: 6rpx;
    &__img {
        width: 140rpx;
        height: 140rpx;
        border-radius: 50%;
        margin: 0 35rpx;
    }
    &__detail {
        flex: 1;
        display: flex;
        justify-content: space-between;
        align-items: center;
    }
    &__name {
        font-size: 38rpx;
        color: #fff;
    }
    &__setting {
        position: absolute;
        right: 20rpx;
        top: 10rpx;
        color: #ededed;
        &__text {
            font-size: 30rpx;
            margin-left: 8rpx;
        }
    }
}
</style>


