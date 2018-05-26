---
title: "🤔 ie8-broken-object-defineProperty"
---

---

### 简语

最近阅读源码，

https://github.com/getify/native-promise-only/blob/master/lib/npo.src.js?1527241410935#L24

看到一段优雅地判断 `IE8` 的代码

`Object.defineProperty({},"x",{})`

### `shim` 和 `polyfill`

在浏览器大环境工作下，

兼容是前端求生的必须技能，

为了应对复杂的战场，

`shim` 和 `polyfill` 都是衍生的解决方案，

随便搜了点文章，

都讲得挺好的。

http://www.css88.com/archives/8339

https://www.zhihu.com/question/22129715

我就不重复赘述了。

### Object.defineProperty

细心实践的我，

发现 `IE8` 果然是部署了这个 `API`，

看上去没有问题。

但是一调用就报错。

并且抛出非常糟糕的错误原因，

让人毫无头绪。

问题的原因，

还是浏览器实现了这个 `API`，

但又不是完全按照标准去实现。

坑的就是开发者~

引用一篇阿里巴巴国际部 `UED` 团队的文章

http://www.aliued.com/?p=3240#5

```
IE8 中有自己实现的 Object.defineProperty，它的行为和标准不同，且只能接受 DOM 对象。
```

### 灵感

* Houdini：未来 CSS 的渐进增强的解决方案。