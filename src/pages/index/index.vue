<template>
    <div>
        <div class="content-container">
            <div v-if="isAlive.home">
                <div v-show="currentNav.componentName=='home'"><home /></div>           
            </div>
            <div v-if="isAlive.user">
                <div v-show="currentNav.componentName=='user'"><user /></div>           
            </div>
            <div v-if="isAlive.test1">
                <div v-show="currentNav.componentName=='test1'"><test1 /></div>           
            </div>
            <div v-if="isAlive.test2">
                <div v-show="currentNav.componentName=='test2'"><test2 /></div>           
            </div>

        </div>
        <footer-tabar :navList="footerNav" @nav-change="toggleMenu" />
    </div>
</template>

<script>
import FooterTabar from '@/components/foot-nav'

import Home from '@/components/index-page/home'
import User from '@/components/index-page/user'
import Test1 from '@/components/index-page/test1'
import Test2 from '@/components/index-page/test2'

export default {
    data() {
        return {
            currentNav: {},
            keepAliveList: [],
            footerNav: []
        }
    },
    computed: {
        isAlive() {
            let map = {}
            this.keepAliveList.forEach(item => {
                map[item.componentName] = true
            })
            return map
        }
    },
    components: {
        FooterTabar,
        Home,
        User,
        Test1,
        Test2
    },
    methods: {
        toggleMenu(currentNav) {
            this.currentNav = currentNav
            wx.setNavigationBarTitle({
                title: currentNav.name
            })
            let isKeepAlive = this.keepAliveList.find(item => {
                return item === currentNav.name
            })
            if (!isKeepAlive) {
                this.keepAliveList.push(currentNav)
            }
        }
    },
    onShow() {},
    mounted() {
        this.footerNav = [
            {
                name: '首页',
                componentName: 'home',
                icon: 'icon-home'
            },
            {
                name: '测试1',
                componentName: 'test1',
                icon: 'icon-share'
            },
            {
                name: '测试2',
                componentName: 'test2',
                icon: 'icon-order'
            },
            {
                name: '我的',
                componentName: 'user',
                icon: 'icon-person'
            }
        ]
    }
}
</script>

<style scoped lang="scss">
.content-container {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 100rpx;
    overflow-y: scroll;
}
</style>