---
title: "⚡️ 性能优化指标与方案笔记"
---

---

### 简语

性能优化与用户体验息息相关，

减少白屏时间，降低首屏渲染时间🕐，

有助于减少用户跳出率，等等。

### 模型

建立合适的模型体系，才能明确目标与方向。

这里用 `Google` 的 `RAIL` 模型评估性能⚡️。

同时，也是大部分开发者采用的模型。

https://developers.google.com/web/fundamentals/performance/rail

![](/image/post/190131/01.png)

### 指标

这里参考 `Google` 的开发者文档，

`FP`，`first paint`，指页面首屏，

`FP` 与 `FCP` 会非常接近，

对于开发者来说，在文档靠前的节点会优先被渲染，

从而呈现给用户非白屏的内容，虽然未必是完整的框架。

`FCP`，`first contentful paint`，指包含页面的基本框架，但没有数据内容，

https://developers.google.com/web/tools/lighthouse/audits/first-contentful-paint

`FMP`，`first meaningful paint`，指包含页面所有元素及数据，

https://developers.google.com/web/tools/lighthouse/audits/first-meaningful-paint

`TTI`，`time to interactive`，指首次可交互时间，

https://developers.google.com/web/tools/lighthouse/audits/time-to-interactive


### 方案

以目前的主流 `MVVM` 框架，`React` 和 `Vue` 为例，

基于前端路由的 `SPA` 开发，

主要有以下两种模式，

`CSR`，`client side rendering`，传统网页渲染模式，

`SSR`，`server side rendering`，服务端渲染，

除此以外，

预渲染，《美团网页首帧优化实践》中提出的方案，

核心思路是，在`编译源码`跟`发布上线`中间，新增一个环节，`预编译`

遍历全部前端路由，并且生成对应的页面，

线下做更多，线上就做得少。

基于 `CSR` 的前提下，减少了每个客户端的首屏 `mounted` 开销，

区别于 `SSR` 的动态生成，脱离了 `node` 层依赖。

在 `预编译` 环节中，

利用无头浏览器 `phantom` 预渲染。

### 参考

更多优秀的参考文章：

https://segmentfault.com/a/1190000017040216

https://xiaoiver.github.io/coding/2017/06/09/%E4%BB%A5%E7%94%A8%E6%88%B7%E4%B8%BA%E4%B8%AD%E5%BF%83%E7%9A%84%E6%80%A7%E8%83%BD%E6%8C%87%E6%A0%87.html

### 灵感

* `Proxy`：关于代理对象，还会有很多应用场景，等待一一发掘。