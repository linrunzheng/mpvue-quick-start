<template>
	<div class="page-container">
		<div class="search-container"><Search/></div>
        <div class="content-container">
            <div class="block">
                <div class="block__top">
                    <span class="block__title">热门搜索</span>
                    <span class="block__operate">换一批</span>
                </div>
                <div class="block__bottom">
                    <span class="search--hot__list" v-for="(v,i) in hostSearchList" :key="i">{{v}}</span>           
                </div>
            </div>

            <div class="block search--history">
                <div class="block__top">
                    <span class="block__title">搜索历史</span>
                    <span class="block__operate">清除历史</span>
                </div>

                <div class="block__bottom search--history__list">
                    <div v-for="(v,i) in historySearchList" :key="i">
                        <span>{{v.value}}</span>
                        <span class="iconfont icon-delete" @click="clearSearchHistory(v.id)"></span>
                    </div>                 
                </div>
            </div>
        </div>
	</div>
</template>

<script>
import Search from '@/components/search'
export default {
    data() {
        return {
            hostSearchList: ['沙发', '茶几', '书做啊'],
            historySearchList: [
                { value: '收索1', id: 1 },
                { value: '天猫2', id: 12 },
                { value: '天猫3', id: 123 },
                { value: '天猫4', id: 1234 }
            ]
        }
    },
    methods: {
        clearSearchHistory(id) {
            this.historySearchList = this.historySearchList.filter((v, i) => {
                return v.id !== id
            })
        }
    },
    components: {
        Search
    }
}
</script>

<style lang="scss" scoped>
.page-container {
    background: #fff;
}

.search-container {
    padding: 10rpx 50rpx 25rpx;
    box-shadow: 0 1rpx 5rpx #dedede;
}
.content-container {
    padding: 0 40rpx;
    .block {
        &__top {
            display: flex;
            justify-content: space-between;
            margin-top: 30rpx;
            font-size: 32rpx;
            color: #e65050;
        }
        &__title {
            color: #888;
        }

        .search--hot__list {
            display: inline-block;
            border: 1rpx solid #e65050;
            border-radius: 40rpx;
            padding: 6rpx 34rpx;
            font-size: 30rpx;
            margin-right: 30rpx;
            margin-top: 30rpx;
            color: #e65050;
        }
        .search--history__list {
            margin-top: 20rpx;
            > div {
                font-size: 32rpx;
                color: #444;
                border-bottom: 1rpx solid #eaeaea;
                padding: 15rpx 0;
                display: flex;
                justify-content: space-between;
                margin-bottom: 8rpx;
                .icon-delete {
                    color: #999;
                    font-size: 36rpx;
                    padding: 2rpx;
                }
            }
        }
    }

    .search--history {
        margin-top: 80rpx;
        padding-bottom: 20rpx;
    }
}
</style>
