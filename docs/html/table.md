---
layout: doc
sidebar: true
outline: deep
title: 表格
---


# 📊 HTML Table

HTML 表格用于在网页中展示结构化的二维数据，是最古老也最基础的 Web 功能之一。尽管现代前端开发中表格布局已被 CSS Grid 和 Flexbox 取代，但对于展示统计报表、对比数据、价格清单等“表格数据”而言，`<table>` 元素依然不可替代。本文将从基础语法到高级特性，系统梳理 HTML 表格的方方面面。


## 一、表格基础：核心标签与简单结构

### 1. 什么是表格？

表格是由行和列组成的结构化数据集，允许用户快速查找不同类型数据之间的关联值，例如人与年龄、星期几对应的时间表等。HTML 的创造者专门设计了一套标签来在网页中呈现这种数据结构。

> **⚠️ 重要提醒**：HTML 表格只应用于展示**表格数据**（行与列有明确逻辑关联的信息），不应使用表格进行页面布局。过去浏览器对 CSS 支持有限时，表格布局曾是主流，但现代 Web 开发中这种做法会严重破坏可访问性——屏幕阅读器会按表格语义逐格读取，导致内容混乱。

### 2. 最简表格示例

一个最基本的 HTML 表格由以下三个标签构成：

| 标签 | 作用 | 备注 |
| :--- | :--- | :--- |
| `<table>` | 表格容器 | 所有表格内容的最外层包裹元素 |
| `<tr>` | 表格行（Table Row） | 每使用一个 `<tr>`，表格中就会新增一行 |
| `<td>` | 表格数据单元格（Table Data） | 每一行内部使用 `<td>` 定义实际的列内容 |

```html
<table>
  <tr>
    <td>张三</td>
    <td>28</td>
    <td>前端开发</td>
  </tr>
  <tr>
    <td>李四</td>
    <td>32</td>
    <td>产品经理</td>
  </tr>
  <tr>
    <td>王五</td>
    <td>25</td>
    <td>UI 设计师</td>
  </tr>
</table>
```

上面的代码会渲染出一个 3 行 3 列的表格，但这只是一个没有表头和语义结构的“裸表格”，在实际项目中我们还需要进一步优化。


## 二、表头与语义化标签

### 1. `<th>` —— 表头单元格

`<th>` 元素用于定义表格的表头单元格，与 `<td>` 的区别在于：
- 默认样式为**粗体居中**
- 被屏幕阅读器识别为“表头”，会自动与对应的数据单元格建立关联

```html
<table>
  <tr>
    <th>姓名</th>
    <th>年龄</th>
    <th>职位</th>
  </tr>
  <tr>
    <td>张三</td>
    <td>28</td>
    <td>前端开发</td>
  </tr>
  <tr>
    <td>李四</td>
    <td>32</td>
    <td>产品经理</td>
  </tr>
</table>
```

### 2. `<th>` 的 `scope` 属性（可访问性关键）

当表格同时包含行标题和列标题时，仅使用 `<th>` 不足以让屏幕阅读器准确判断标题与数据单元格的对应关系。此时需要使用 `scope` 属性明确指定表头的作用域：

| 值 | 含义 | 使用场景 |
| :--- | :--- | :--- |
| `scope="col"` | 当前 `<th>` 是该列所有单元格的标题 | 位于表格顶部的列标题 |
| `scope="row"` | 当前 `<th>` 是该行所有单元格的标题 | 位于每行第一列的行标题 |
| `scope="rowgroup"` | 表头关联一个行组中的所有单元格 | 多级表头场景 |
| `scope="colgroup"` | 表头关联一个列组中的所有单元格 | 多级表头场景 |

```html
<table>
  <tr>
    <th scope="col">姓名</th>
    <th scope="col">Q1 销售额</th>
    <th scope="col">Q2 销售额</th>
  </tr>
  <tr>
    <th scope="row">张三</th>
    <td>12,000</td>
    <td>15,500</td>
  </tr>
  <tr>
    <th scope="row">李四</th>
    <td>9,800</td>
    <td>11,200</td>
  </tr>
</table>
```

在这个例子中，屏幕阅读器会在读取“12,000”时自动提示“张三，Q1 销售额”，视障用户无需猜测每个数字的含义。


## 三、跨行与跨列：`colspan` 和 `rowspan`

当表格中存在需要合并的单元格时，可以使用 `colspan`（跨列合并）和 `rowspan`（跨行合并）属性。

### 1. `colspan` —— 跨列合并

```html
<table border="1">
  <tr>
    <th colspan="2">个人信息</th>
    <th>职位</th>
  </tr>
  <tr>
    <td>张三</td>
    <td>28岁</td>
    <td>前端开发</td>
  </tr>
  <tr>
    <td>李四</td>
    <td>32岁</td>
    <td>产品经理</td>
  </tr>
</table>
```

效果：第一行的“个人信息”表头横跨两列，覆盖了“姓名”和“年龄”两列数据。

### 2. `rowspan` —— 跨行合并

```html
<table border="1">
  <tr>
    <th>部门</th>
    <th>姓名</th>
    <th>职位</th>
  </tr>
  <tr>
    <td rowspan="2">研发部</td>
    <td>张三</td>
    <td>前端</td>
  </tr>
  <tr>
    <td>李四</td>
    <td>后端</td>
  </tr>
  <tr>
    <td>产品部</td>
    <td>王五</td>
    <td>产品经理</td>
  </tr>
</table>
```

效果：“研发部”单元格纵跨两行，覆盖了张三和李四两条记录。

> **📌 注意事项**：使用跨行/跨列时，合并后**空出来的单元格必须删除**，否则表格结构会被破坏，导致列数对不齐。例如上面的例子中，研发部占了两行，第二行的第一个 `<td>` 就需要省略。


## 四、高级结构化标签：`<thead>`、`<tbody>`、`<tfoot>`

随着表格结构复杂化，使用语义分组标签可以将表格划分为表头、表体和表尾三个逻辑区域，这不仅能提升代码可读性，也为 CSS 样式和 JavaScript 操作提供了便利的钩子。

### 1. 三种结构化标签

| 标签 | 作用 | 在 `<table>` 中的顺序 |
| :--- | :--- | :--- |
| `<thead>` | 表格头部，通常包含列标题行 | 第一个（位于 `<caption>` 和 `<colgroup>` 之后） |
| `<tbody>` | 表格主体，包含主要数据行 | 中间（一个表格可以有多个 `<tbody>`） |
| `<tfoot>` | 表格尾部，通常包含汇总信息 | 在 `<thead>` 之后、`<tbody>` 之前（但渲染时仍显示在底部） |

### 2. 完整示例

```html
<table>
  <caption>2024 年各部门季度销售额统计（单位：万元）</caption>
  <thead>
    <tr>
      <th scope="col">部门</th>
      <th scope="col">Q1</th>
      <th scope="col">Q2</th>
      <th scope="col">Q3</th>
      <th scope="col">Q4</th>
    </tr>
  </thead>
  <tfoot>
    <tr>
      <th scope="row">合计</th>
      <td>245</td>
      <td>278</td>
      <td>312</td>
      <td>356</td>
    </tr>
  </tfoot>
  <tbody>
    <tr>
      <th scope="row">研发部</th>
      <td>85</td>
      <td>92</td>
      <td>108</td>
      <td>125</td>
    </tr>
    <tr>
      <th scope="row">市场部</th>
      <td>120</td>
      <td>135</td>
      <td>148</td>
      <td>162</td>
    </tr>
  </tbody>
</table>
```

### 3. `<tfoot>` 的特殊顺序

注意 `<tfoot>` 在源代码中出现在 `<tbody>` **之前**，但浏览器渲染时仍然会将其显示在表格底部。这样设计的好处是：当表格数据很长时，浏览器可以在数据完全加载之前就先渲染表头和表尾，提升用户体验。

### 4. `<caption>` —— 表格标题

`<caption>` 元素用于为表格添加描述性标题，必须放在 `<table>` 开始标签的正下方（作为第一个子元素）。屏幕阅读器会优先读出标题，帮助视障用户快速判断表格内容是否对他们有用。

> **💡 最佳实践**：使用 `<caption>` 而不是已弃用的 `summary` 属性。`summary` 不会显示在页面上，只有屏幕阅读器能读取，而 `<caption>` 对所有人可见。

### 5. 列分组：`<colgroup>` 和 `<col>`

`<colgroup>` 和 `<col>` 用于对表格中的列进行分组，从而统一设置样式。这在不方便为每个单元格单独添加类名时非常有用：

```html
<table>
  <colgroup>
    <col span="2" style="background-color: #f0f0f0;">
    <col style="background-color: #ffffff;">
  </colgroup>
  <tr>
    <th>姓名</th>
    <th>年龄</th>
    <th>职位</th>
  </tr>
  <!-- 更多数据行 -->
</table>
```

上述代码将前两列（姓名和年龄）设置了统一的灰色背景，第三列保持白色背景。注意 `<colgroup>` 必须放在 `<caption>` 之后、`<thead>` 之前。


## 五、表格可访问性深度指南

构建一个对所有人——包括使用屏幕阅读器的视障用户——友好的表格，需要遵循以下原则。

### 1. 基础要求

| 要求 | 正确做法 | 错误做法 |
| :--- | :--- | :--- |
| 使用 `<th>` 而非加粗的 `<td>` | `<th>姓名</th>` | `<td><strong>姓名</strong></td>` |
| 为复杂表头添加 `scope` | `<th scope="col">销售额</th>` | 仅写 `<th>销售额</th>` |
| 添加 `<caption>` 描述表格内容 | `<caption>员工薪资表</caption>` | 依赖上下文文字说明 |
| 避免空单元格用于视觉对齐 | 使用 CSS 处理间距 | 插入空的 `<td></td>` |

屏幕阅读器在遇到 `<th>` 时会自动建立表头与数据单元格的关联，而普通加粗的 `<td>` 不会产生任何语义提示，这会导致视障用户完全无法理解数据含义。

### 2. 复杂表格的 `headers` 属性

当表格结构非常复杂（如多级嵌套表头）且 `scope` 属性不足以表达关联关系时，可以使用 `headers` 属性建立显式关联：

```html
<table>
  <tr>
    <th id="dept" rowspan="2">部门</th>
    <th id="name" rowspan="2">姓名</th>
    <th id="sales" colspan="2">销售业绩</th>
  </tr>
  <tr>
    <th id="sales-q1">Q1</th>
    <th id="sales-q2">Q2</th>
  </tr>
  <tr>
    <td headers="dept">研发部</td>
    <td headers="name">张三</td>
    <td headers="sales sales-q1">85,000</td>
    <td headers="sales sales-q2">92,000</td>
  </tr>
</table>
```

`headers` 属性的值是一个或多个表头单元格的 `id`（空格分隔），用于精确指定该数据单元格由哪些表头来定义。对于嵌套表头，应遵循从外到内的顺序列出所有相关 `id`。

### 3. 开发者自查清单

在发布包含表格的页面之前，建议完成以下检查：

- ✅ 使用 W3C 验证器检查 HTML 结构是否正确
- ✅ 使用 NVDA 或 JAWS 屏幕阅读器实际测试朗读效果
- ✅ 使用键盘（Tab、方向键、Home/End）测试导航体验
- ✅ 在高对比度模式下验证视觉效果


## 六、表格样式设计

表格默认样式通常比较朴素，通过 CSS 可以大幅提升可读性和美观度。

### 1. 核心 CSS 属性

| 属性 | 作用 | 推荐值 |
| :--- | :--- | :--- |
| `border-collapse` | 控制相邻单元格边框是否合并 | `collapse`（边框合并，更整洁） |
| `padding` | 单元格内边距 | 至少 `8px` 12px，避免文字拥挤 |
| `text-align` | 文字对齐方式 | 数字列右对齐，文本列左对齐 |
| `border` | 边框样式 | 浅灰色细边框 `1px solid #e2e8f0` |
| `background-color` | 背景色 | 表头用浅灰色，数据行交替变色 |

### 2. 斑马纹表格（交替行背景）

```css
table {
  border-collapse: collapse;
  width: 100%;
}

th, td {
  padding: 12px 16px;
  text-align: left;
  border-bottom: 1px solid #e2e8f0;
}

th {
  background-color: #f8fafc;
  font-weight: 600;
}

/* 斑马纹效果 */
tbody tr:nth-child(even) {
  background-color: #f9fafb;
}

/* 悬停高亮 */
tbody tr:hover {
  background-color: #f1f5f9;
}
```

### 3. Tailwind CSS 中的表格样式

如果你使用 Tailwind CSS，可以通过工具类快速构建美观的表格：

```html
<table class="min-w-full border-collapse border border-gray-300">
  <thead class="bg-gray-100">
    <tr>
      <th class="border border-gray-300 px-4 py-2 text-left">姓名</th>
      <th class="border border-gray-300 px-4 py-2 text-left">职位</th>
    </tr>
  </thead>
  <tbody>
    <tr class="hover:bg-gray-50">
      <td class="border border-gray-300 px-4 py-2">张三</td>
      <td class="border border-gray-300 px-4 py-2">前端开发</td>
    </tr>
  </tbody>
</table>
```

Tailwind 还提供了 `table-auto`（根据内容自动调整列宽）和 `table-fixed`（固定列宽，内容自动换行）等表格专用的布局类。


## 七、响应式表格处理

表格在小屏幕设备上往往面临挑战——列数过多时，内容会被挤压或截断。以下是几种常见的解决方案。

### 1. 水平滚动（最简单）

将表格包裹在设置了 `overflow-x: auto` 的容器中，小屏幕下出现水平滚动条：

```html
<div style="overflow-x: auto;">
  <table>
    <!-- 表格内容 -->
  </table>
</div>
```

这种方法的优点是实现简单、不破坏表格语义，缺点是需要用户主动滚动才能看到全部内容。

### 2. 固定表头 + 双向滚动

对于行数和列数都很多的数据表格，可以让表头固定，内容区域同时支持横向和纵向滚动：

```html
<div style="max-height: 400px; overflow: auto;">
  <table>
    <thead>
      <tr>
        <th style="position: sticky; top: 0; background: white;">姓名</th>
        <th style="position: sticky; top: 0; background: white;">职位</th>
        <!-- 更多表头 -->
      </tr>
    </thead>
    <tbody>
      <!-- 数据行 -->
    </tbody>
  </table>
</div>
```

> **⚠️ 注意**：`position: sticky` 只在父容器的 `overflow` 为 `visible` 时生效。如果表头的 sticky 失效，检查父容器是否设置了 `overflow: hidden` 或 `overflow: auto`。

### 3. 响应式重构（移动端最佳）

在小屏幕上将表格转换为类似卡片或列表的布局，每个 `<td>` 显示为块级元素并标注对应的表头：

```html
<!-- 在移动端通过 CSS 将 td 转为块级元素 -->
<style>
  @media (max-width: 640px) {
    table, thead, tbody, tr, td {
      display: block;
    }
    thead {
      display: none; /* 隐藏原有表头 */
    }
    td {
      padding-left: 50%;
      position: relative;
    }
    td::before {
      content: attr(data-label); /* 使用 data-label 属性显示字段名 */
      position: absolute;
      left: 12px;
      font-weight: bold;
    }
  }
</style>

<table>
  <tr>
    <td data-label="姓名">张三</td>
    <td data-label="年龄">28</td>
    <td data-label="职位">前端开发</td>
  </tr>
</table>
```

这种方案可以让移动端用户像阅读卡片一样从上到下浏览每条记录，每条记录的各个字段都有明确的标签。


## 八、大数据表格性能优化

当表格数据量达到上千行时，一次性渲染所有 DOM 节点会导致页面严重卡顿甚至崩溃。此时需要引入性能优化技术。

### 1. 虚拟滚动（Virtual Scrolling）

虚拟滚动的核心思想是：**只渲染当前可视区域内的数据**，而非一次性渲染整个数据集。当用户滚动时，动态更新可视区域内的内容，从而大幅减少 DOM 节点数量和内存占用。

```javascript
// 伪代码示例：虚拟滚动的基本原理
class VirtualTable {
  constructor(container, data, rowHeight) {
    this.container = container;
    this.data = data;              // 全部数据（可能有 10000 条）
    this.rowHeight = rowHeight;    // 每行高度（像素）
    this.visibleCount = Math.ceil(container.clientHeight / rowHeight) + 2; // 可见行数 + 缓冲
    this.startIndex = 0;
  }

  render() {
    // 根据滚动位置计算当前应该显示哪些行
    const scrollTop = this.container.scrollTop;
    this.startIndex = Math.floor(scrollTop / this.rowHeight);
    const visibleData = this.data.slice(this.startIndex, this.startIndex + this.visibleCount);

    // 只渲染 visibleData 中的行，同时用一个占位元素撑开滚动条高度
    // ...
  }
}
```

### 2. 常用虚拟滚动库

| 框架 | 推荐库 | 特点 |
| :--- | :--- | :--- |
| React | `react-window`、`react-virtualized` | 轻量、API 简洁、性能优秀 |
| Vue | `vue-virtual-scroller` | 官方推荐，支持动态高度 |
| Angular | `@angular/cdk/scrolling` | 官方 CDK 提供，集成度高 |
| 原生 JS | `clusterize.js` | 轻量、无框架依赖 |

### 3. 分页与懒加载的取舍

| 方案 | 优点 | 缺点 |
| :--- | :--- | :--- |
| 分页 | 实现简单，SEO 友好 | 用户需要点击翻页，打断浏览流 |
| 懒加载（无限滚动） | 滚动连续，体验流畅 | 数据总量过大时内存仍会累积 |
| 虚拟滚动 | 性能最优，适合超大表格 | 实现复杂，需要处理动态高度等边界情况 |

对于超过 1000 行的表格，虚拟滚动是当前工业界公认的最佳方案；对于中小型表格（几百行以内），标准渲染配合 CSS 优化已足够。


## 九、表格 vs CSS Grid：布局方案对比

| 对比维度 | HTML `<table>` | CSS Grid |
| :--- | :--- | :--- |
| **使用场景** | 展示真正的表格数据（对比、统计、清单） | 页面布局、组件排列、任何二维布局 |
| **语义化** | 强（`<th>` 自带表头语义，屏幕阅读器原生支持） | 弱（需要 ARIA 角色补充） |
| **可访问性** | 内置支持（配合 `scope` 属性即可） | 需要手动添加 ARIA 属性（`role="grid"` 等） |
| **响应式适配** | 复杂（需要额外 CSS 处理） | 灵活（通过 `grid-template-columns` 轻松调整） |
| **性能** | 大量数据时较重 | 布局计算更高效 |

**结论**：
- 展示对比数据、财务报表、产品清单 → 使用 `<table>`
- 页面整体布局、卡片式排列、瀑布流 → 使用 CSS Grid
- 永远不要为了“布局方便”而使用 `<table>`，这会严重损害可访问性和 SEO


## 十、总结与最佳实践

### ✅ 推荐做法

1. **始终使用 `<th>` 定义表头**，并配合 `scope` 属性提升可访问性
2. **为每个表格添加 `<caption>`**，让所有用户都能快速了解表格内容
3. **使用 `<thead>`、`<tbody>`、`<tfoot>`** 构建语义清晰的结构
4. **小屏幕使用 `overflow-x: auto` 包裹**，保证内容可访问
5. **大数据表格引入虚拟滚动**，避免性能问题
6. **所有样式通过 CSS 控制**，不使用已弃用的 HTML 表格属性（如 `border`、`cellpadding`、`bgcolor` 等）

### ❌ 避免事项

1. **不要用表格做页面布局**——这是 20 年前的做法，如今应使用 Flexbox 或 Grid
2. **不要使用空 `<td></td>` 做视觉占位**——用 CSS 处理间距
3. **不要省略 `alt` 式的替代文本**——表格中的图片和复杂内容也需要描述
4. **不要忽视可访问性测试**——至少在发布前用一次屏幕阅读器走查表格

### 📝 核心知识点速查表

| 知识点 | 核心写法 | 一句话说明 |
| :--- | :--- | :--- |
| 基础表格 | `<table>` + `<tr>` + `<td>` | 行与列的基本构成 |
| 表头单元格 | `<th scope="col\|row">` | 定义列标题或行标题，提升语义 |
| 跨列合并 | `colspan="N"` | 一个单元格横跨 N 列 |
| 跨行合并 | `rowspan="N"` | 一个单元格纵跨 N 行 |
| 表格标题 | `<caption>` | 描述表格内容，放在 `<table>` 第一个子元素位置 |
| 结构化分组 | `<thead>`、`<tbody>`、`<tfoot>` | 将表格划分为头部、主体、尾部 |
| 列分组 | `<colgroup>` + `<col>` | 按列统一设置样式 |
| 复杂表头关联 | `headers` 属性 + `id` | 显式指定数据单元格由哪些表头定义 |
| 响应式滚动 | 父容器 `overflow-x: auto` | 小屏幕下出现横向滚动条 |
| 固定表头 | `position: sticky; top: 0` | 滚动时表头保持可见 |

---

## 🔗 参考资源

- [MDN：`<table>` 元素](https://developer.mozilla.org/zh-CN/docs/Web/HTML/Element/table)
- [MDN：HTML 表格基础](https://developer.mozilla.org/zh-CN/docs/Learn/HTML/Tables/Basics)
- [MDN：HTML 表格高级功能与可访问性](https://developer.mozilla.org/zh-CN/docs/Learn/HTML/Tables/Advanced)
- [MDN：`<th>` 表头元素](https://developer.mozilla.org/zh-CN/docs/Web/HTML/Element/th)
- [DataTables - jQuery 表格增强插件](https://datatables.net/)


## 📅  具体案例
- [智能课程表 🏫](https://www.qingqiqifu.com/kcb/)
- [员工薪资表 🏫](https://www.qingqiqifu.com/xz/)   
- [数据服务表 📫](https://www.qingqiqifu.com/ys/)
- [会议议程 📫](https://www.qingqiqifu.com/ys/)
- [值班表 📫](https://www.qingqiqifu.com/ys/)
  
- [销售数据汇总 📫](https://www.qingqiqifu.com/ys/)
- [SaaS 服务价格对比 📫](https://www.qingqiqifu.com/ys/)
- [产品规格比较 📫](https://www.qingqiqifu.com/ys/)
- [复杂的 BI 报表 📫](https://www.qingqiqifu.com/ys/)
- [财务报表 📫](https://www.qingqiqifu.com/ys/)
- [销售业绩看板 📫](https://www.qingqiqifu.com/ys/)
  
- [交互式表格 📫](https://www.qingqiqifu.com/ys/)
- [移动端友好的卡片式表格 📫](https://www.qingqiqifu.com/ys/)
- [数据排行榜 📫](https://www.qingqiqifu.com/ys/)
- [营养信息表（垂直表头） 📫](https://www.qingqiqifu.com/ys/)


