---
title: "🚀 URL 相关运算技巧"
---

---

### 简语

`URL` 可以看作一种符合特定模式或者格式的字符串。

同样，邮箱也是。

总会有各种情景，涉及相关的运算。

例如，

![](/image/post/170921/01.jpg)

### 心得

正则，可以说是一把万能钥匙。🔑

但我们，希望有更加优雅的解决思路。

让代码更加直观。

### &lt;a&gt;

其实，

`a` 标签也拥有，

浏览器 `location` 的绝大部分属性，

![](/image/post/170921/02.jpg)

### 方法

因此，

我们，可以把 `URL` 交给 `a` 标签去解析。

例如，

![](/image/post/170921/03.png)

```js
// 创建一个放在内存的a标签(不会影响页面其他元素)
var a = document.createElement('a');
// 把地址丢给它
a.href = 'http://news.sznews.com/content/2016-09/09/content_13839422.htm';
// 修改pathname 添加mb(不会影响domain或者其他)
a.pathname = '/mb' + a.pathname;
// 获取新的地址
var url = a.href;
console.log(url);
```

### 参数

除了解析地址，

经常处理的，

就是解析参数了，

很高兴，我们的 `Chrome`，

已经部署了 `URLSearchParams`，

结合这个新的 `API`，

我们可以这么用。

![](/image/post/170921/04.jpg)

```js
var a = document.createElement('a');

a.href = 'https://www.baidu.com/s?ie=utf-8&f=8&rsv_bp=1&tn=baidu&wd=lixinliang&oq=%25E6%259D%258E%25E6%2596%25B0%25E8%2589%25AF&rsv_pq=d595f0fa00898f81&rsv_t=e120TSQZQonoHR4QG99GkxSl%2Bds%2FQQW5%2Fd8sIWZAsnSzk%2BKqKlzCKS1HJgg&rqlang=cn&rsv_enter=0';

var search = new URLSearchParams(a.search);

search.get('wd');
```

这个 API，既不是继承 `Map` 也不是 继承 `Set`。

![](/image/post/170921/05.jpg)

与我们习惯将参数转换成 `JSON` 不同，

`URLSearchParams` 通过 `getAll` 方法，

可以返回一个 `key` 的多个结果。

![](/image/post/170921/06.jpg)

### 灵感

`URL` 解析，可以说是一个特例了。

毕竟，没有浏览器会部署针对邮箱的 `API` 吧。😟

* 传参与解析：`URL` 的 `search` 模式，也是一种传参约定格式，在原生 `API` 支持下，我们除了 `JSON` 还有其他选择。比如与 `native` 端的传参，通过 `post message` 与其他页面的传参等。
