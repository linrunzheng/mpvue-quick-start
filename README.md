# demo

###原理分析：

维护一个 keepAliveList, 每次导航切换时，假如当前点击的nav不在keepAliveList中，则代表未点击过，往keepAliveList中push当前点击的nav数据。

``` javascript
methods: {
    toggleMenu(currentNav) {
        this.currentNav = currentNav
       
        let isKeepAlive = this.keepAliveList.find(item => {
            return item === currentNav.name
        })
        if (!isKeepAlive) {
            this.keepAliveList.push(currentNav)
        }
    }
},
```

同时，添加一个computed，通过keepAliveList来判断当前点击对应的组件是否需要渲染
``` javascript
computed: {
    isAlive() {
        let map = {}
        this.keepAliveList.forEach(item => {
            map[item.componentName] = true
        })
        return map
    }
},
```

在template中，首先,通过v-if来实现点击后才渲染点击的组件。点击过后当前点击对应的组件的v-if的条件则永久为true，不会重复渲染。
其次，通过v-show来控制菜单切换时组件的隐藏和显示

``` javascript
<template>
    <div>
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
</template>
```
其他：

* mpvue中v-if中无法传递函数以及参数，所以改用computed代替；
* 不支持组件支持v-show，所以外层再套一层div;
* 无法动态import组件，所以需要先把组件都import进来，通过v-if按需显示
