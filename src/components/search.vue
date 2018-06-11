<template>
     <div class="search">      
        <span class="iconfont icon-search"></span>
        <input                   
            placeholder-style="color:#999;font-size:24rpx" 
            placeholder="请输入商品或者品牌" 
            confirm-type="search"
            v-model="searchKeyword"
            @input="searchChange"
            />   
        <span class="iconfont icon-delete" @click="clear" v-show="searchKeyword"></span>
    </div>  
</template>

<script>
export default {
    data() {
        return {
            searchKeyword: ''
        }
    },
    methods: {
        clear() {
            this.searchKeyword = ''
        },
        searchChange() {
            this.$emit('on-change', this.searchKeyword)
        }
    }
}
</script>

<style lang="scss" scoped>
.search {
    display: flex;
    flex: 1;
    align-items: center;
    border: 1rpx solid #ccc;
    border-radius: 60rpx;
    position: relative;
    background: #fafafa;
    input {
        flex: 1;
        height: 65rpx;
        line-height: 65rpx;
        padding-left: 30rpx;
        color: #787878;
        font-size: 26rpx;
    }
    .icon-search {
        font-size: 40rpx;
        margin-left: 20rpx;
        color: #999;
    }
    .icon-delete {
        font-size: 40rpx;
        color: #aaa;
        margin: 0 20rpx;
    }
}
</style>
