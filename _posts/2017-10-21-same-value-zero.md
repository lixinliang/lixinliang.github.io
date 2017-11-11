---
title: "⚖ 相等运算"
---

---

### 简语

应用离不开数据，

数据离不开运算。

在实际项目中，

数据来源于服务端，

也来源于用户操作，

等等。

个人非常喜欢使用 `lodash` 这个库来操作数据，

无论是数组，还是对象，

都是复杂类型，也是数据集合。

我们需要对它们，

过滤、映射、排序、等等，

`lodash` 可以满足我们大量的日常需求，

提高开发效率。

那么 `lodash` 是怎么判断两个值是相等还是不等呢？

### 相等运算

无论是过滤，还是排序，

都涉及判断，

判断两个值是相等还是不等。

我们都非常熟悉，

相等运算符 `==`

同时，

我们应该知道，

相等运算符，

会进行类型转换，

举个例子，

```js
'1' == 1 // true
true == 1 // true
```

毫无疑问，

类型转换，

在开发上，

带给我们巨大的便利。

`JavaScript` 不是强类型语言，

类似 `Java` 或者 `Swift`，

需要去给每个变量定义类型。

但类型转换也会隐藏陷阱，

类如，

```js
'0' == 0 // true
!!'0' == 0 // false
```

除了相等运算符，

当然还有，全等运算符 `===`，

全等运算符则需要类型相同的情况下，

才继续做比较。

并且 `JavaScript` 的全等运算符，

有以下两个例子，

```js
NaN === NaN // false
+0 === -0 // true
```

因此，

有其他人提出，

不一样的相等运算规则。

回到最初提及的 `lodash`，

`lodash` 内部大量的判断都是用 `SameValueZero` 规则做相等比较。

描述文档如下：

[http://ecma-international.org/ecma-262/6.0/#sec-samevaluezero](http://ecma-international.org/ecma-262/6.0/#sec-samevaluezero)

文档除了提及 `SameValueZero`，

还有 `SameValue`。

那我先说 `SameValue` 好了，

针对全等运算符，

提及的两个例子，

`SameValue` 则固定返回以下结果：

```js
SameValue(NaN, NaN); // true
SameValue(+0, -0); // false
```

而被 `lodash` 广泛是用的 `SameValueZero` 则是：

```js
SameValueZero(NaN, NaN); // true
SameValueZero(+0, -0); // true
```

其他情况下的判断结果，

与全等运算符的返回结果一致。

### 灵感

* 复杂类型比较：复杂类型只有引用相等才视为相等，不过可以把对象转为 `JSON` 字符串作一个 相似度比较。