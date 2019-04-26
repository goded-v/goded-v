### 踩坑vue v-for操作DOM后不更新



### 前言

最近在看vue的风格指南时，发现了一个以前在学习，甚至开发时忽略的问题。

![Image text](https://goded-v.github.io/img/git/vuedom.png)

### 现象

看到上面的一段话，想到自己在刚开发的时候遇到过类似的问题。就是在强行修改DOM后（比如改变class）；将v-for 模板数组中，改变的这条删除掉，发现，该class还在。延伸到的场景就是先选择一个或者多个列表，改变了样式(表明该列表被选中)，再删除选中的类别。此时发现该样式还在。描述的不是很清楚，直接上图。

![Image text](https://goded-v.github.io/img/git/demo_list.png)

此时选中了第一条和第二条，点删除后如下图:

![Image text](https://goded-v.github.io/img/git/demo_list2.png)

这时就会发现，为啥标记的颜色会还在，而且出现在了这两条上面。

先看下整体的代码（为了阅读方便，后面只是关键代码，完整代码见https://github.com/goded-v/goded-v.github.io/blob/master/js/dom.html）

```

```

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Title</title>
</head>
<script src="https://cdn.jsdelivr.net/npm/vue/dist/vue.js"></script>
<style>
    .click{
        background: red;
    }
</style>
<body>
<div id="app">
    <div v-for="(item,index) in list">
        <p :class="{click:item.class}" @click="add($event,item)">{{item.name}}</p>
    </div>
    <div @click="deleteItem()">删除</div>
</div>
</body>
<script>
    var app = new Vue({
        el:"#app",
        data:{
            list:[
                {name:"0",id:"0"},
                {name:"1",id:"1"},
                {name:"2",id:"2"},
                {name:"3",id:"3"},
                {name:"4",id:"4"},
                {name:"5",id:"5"},
            ],
            deleteArr:[],
        },
        methods: {
            add(event,item){
                let me = this;
                let target = event.currentTarget;
                target.className = target.className=="click"?"":target.className="click";
                if(target.className==="click"){
                    me.deleteArr.push(item);
                }else{
                    let index = me.deleteArr.indexOf(item);
                    if (index > -1) {
                        me.deleteArr.splice(index, 1);
                    }
                }
            },
            deleteItem(){// 算法很low，请谅解
                let me = this;
                let newArr = [];
                for (var i=0;i<me.list.length;i++){
                    if(me.deleteArr.indexOf(me.list[i]) === -1){
                        newArr.push(me.list[i]);
                    }
                }
                me.list = newArr;
            }
        }
    });
</script>
</html>
```

### 方案一

这种效果肯定是不能接受的去，作为代码鬼才的我，想到了一个解决办法。

```javascript
deleteItem(){
    let me = this;
    let newArr = [];
    for (var i=0;i<me.list.length;i++){
        if(me.deleteArr.indexOf(me.list[i])===-1){
            newArr.push(me.list[i]);
        }
    }
    me.list = [];
    this.$nextTick(()=>{
        me.list = newArr;
    })

}
```

在渲染赋值的时候先将list数组赋值为空，在视图完成更新后，再赋值。这时就能实现想要的效果。

![Image text](https://goded-v.github.io/img/git/demo_list3.png)