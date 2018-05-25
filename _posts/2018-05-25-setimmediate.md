---
title: "🕑 setImmediate"
---

---

### 简语

归根究底，还是因为浏览器运行 `JavaScript` 是单线程。

并且，渲染视图的时候也会阻塞 `JavaScript` 的运算。

### setTimeout(fn, 0)

为了解决线程阻塞的问题，

充满大智慧的人类就发明了 `setTimeout(fn, 0)` 这个东西，

甚至还有这么个段子：

```
没有什么 bug 用 setTimeout(fn, 0) 解决不了的，
如果有就 setTimeout(fn, 500)。
```

### setImmediate

我们都知道 `setTimeout(fn, 0)` 是个 `hack`。

因为微软终于在 `IE10` 部署了一个新的 `API` 来专门负责这样的场景。

就是 `setImmediate` 啦。

`MDN` 文档看这里：https://developer.mozilla.org/zh-CN/docs/Web/API/Window/setImmediate

并且还不是 `w3c` 标准。🙃

`setImmediate` 用法上跟 `setTimeout` 非常接近。

返回定时器 `id` 的 `immediateID`。

清除定时器的 `clearImmediate`。

### process.nextTick

并且，

习惯了 `nodejs` 开发后，

我们也会使用 nextTick 来解决类似的问题。

文档看这里：http://nodejs.cn/api/all.html#process_process_nexttick_callback_args

对比浏览器，

`nodejs` 会有更多长时间运行的操作，

操作文件读写等等，

数据库入库出库等等。

### 对比

相对比 `setTimeout` 的不可控，

`setImmediate` 跟 `nextTick`，

更有针对性，

扒一条知乎的回答：https://www.zhihu.com/question/23028843

图片很形象。

### Vue.nextTick

另外，

再单独说一下 `Vue.nextTick`，

源码请看这里：https://github.com/vuejs/vue/blob/v2.5.16/src/core/util/next-tick.js?1527237250909#L90

本质上的实现还是 `setTimeout`，

但是，

还有渐进增强的 `MessageChannel`。

### 灵感

* 浏览器的 `event-loop`：深入了解浏览器的异步调度机制，引用 阮一峰 的文章 http://www.ruanyifeng.com/blog/2013/10/event_loop.html。