---
title: "🎯 节点变化事件"
---

---

### 简语

我们非常习惯操作 `DOM` 元素。

但是，我们无法得知 `DOM` 元素是什么时候发生变化的。

一般地，`DOM` 元素的变化是同步操作的，

```js
document.body.appendChild(document.createElement('div'));
document.body.lastElementChild.tagName == 'DIV'; // true
```

所以，我们认为，每一次编辑 `DOM`，

浏览器，都会马上渲染视图，

例如，`appendChild`，`removeChild`，`innerHTML`，等等。

关于浏览触发重绘，查找 `reflow`，会有更多资料。

实际上，很多时候的 `DOM` 操作是由其他脚本操作的，

而我们，需要知道这些 `DOM` 元素是什么时候发生变化的。

就用到一个新的 `API` `Mutation`。

### 关于

关于 `Mutation`，

这篇文章，写得很详细：

[http://javascript.ruanyifeng.com/dom/mutationobserver.html](http://javascript.ruanyifeng.com/dom/mutationobserver.html)

### 安全

`Mutation` 可以帮助我们做一些有趣的事情。

例如，

关于安全，

如果，你的网站还是走 `http`,

那么，一定会遇到运营商劫持，或者各种各样的劫持。

虽然，一般地，他们只是插入一些广告，

但是，不排除会被植入恶意代码，甚至钓鱼行为等等，

而且，广告本身也很令人讨厌哈 🙃，

```js
if (node.tagName === 'SCRIPT' || node.tagName === 'IFRAME') {

    if (node.tagName === 'IFRAME' && node.srcdoc) {
        // !whiteList
        // remove
    } else if (node.src) {
        // !whiteList
        // remove
    }

}

if (node.tagName === 'IMG') {
    if (node.src) {
        // blackList
        // remove
    }

    if (node.onload || node.onerror) {
        // xss
        // remove
    }
}
```

通过，`Mutation`，

我们可以监听 `document.body` 以及它的 `childList`，

并且，或者每次发生变化的 `nodeList`，

如果，不是我们期望的脚本，比如，不是在白名单上的脚本，

那么就视作恶意脚本处理。

`iframe` 也享受等同待遇，

毕竟，你可是为 `xss` 攻击做了很多助攻呢。

至于，`img`，则宽容得多了，

毕竟外链的图片资源，比较难枚举以及约束。

不过，一般搞事情嘛，

都是在，`onload` 跟 `onerror` 身上，

所以，再额外做点身体检查呗 😏。

大概，也只有小白，才会用标签的属性去写事件了。。。

### 灵感

* `Mutation`：关于 `MutationObserver`，还会有很多应用场景，等待一一发掘。
