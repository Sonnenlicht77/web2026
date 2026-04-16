---
layout: doc
sidebar: true
outline: deep
---

## 📬 HTML 表单构建完全指南

表单是用户与网站交互的核心渠道，从登录注册到订单提交，几乎所有的用户数据都通过表单流向服务器。对前端开发者而言，掌握表单不仅是写出能用的代码，更关乎用户体验、数据安全和可访问性。本文将从容器属性到控件细节，再到验证与无障碍实践，系统梳理 HTML 表单的方方面面。


### 一、`<form>` 容器属性

`<form>` 元素是表单的根基，所有交互控件都应嵌套其中。每次创建 HTML 表单，都必须从 `<form>` 开始，将所有内容包裹在内。许多辅助技术和浏览器插件都会识别 `<form>` 元素并实施特殊钩子以使其更易使用。⚠️ **注意：严禁在一个表单内嵌套另一个表单，嵌套会导致表单出现不可预测的行为**。

| 属性 | 说明 | 常见值 |
| :--- | :--- | :--- |
| `action` | 处理表单提交的 URL，数据将被发送到这个地址 | `/api/login`、`/search` 等 |
| `method` | HTTP 请求方法，决定数据如何发送到服务器 | `GET` 或 `POST` |
| `enctype` | 当 `method="POST"` 时，指定表单数据的编码格式 | `application/x-www-form-urlencoded`（默认）、`multipart/form-data`、`text/plain` |
| `name` | 表单的名称，在文档中必须唯一 | 如 `"loginForm"` |
| `autocomplete` | 控制浏览器是否可以自动填充表单字段 | `on`（默认）或 `off` |
| `novalidate` | 布尔属性，禁用浏览器的内置表单验证 | — |

> 💡 **最佳实践**：总是为每个 `<input>` 和 `<select>` 设置 `name` 属性，否则该字段的数据不会被提交。`name` 是键值对中的“键”，用户输入的内容是“值”。

**基础示例**：

```html
<form action="/api/submit" method="POST" enctype="application/x-www-form-urlencoded">
  <!-- 表单控件放在这里 -->
</form>
```


### 二、`GET` vs `POST` 详解

`method` 属性决定了表单数据的发送方式，二者有本质区别：

| 对比维度 | GET | POST |
| :--- | :--- | :--- |
| 数据位置 | 拼接在 URL 的查询字符串中（`?key=value`） | 放在 HTTP 请求体中，URL 不可见 |
| 长度限制 | 受 URL 长度限制（约 2048 字符） | 理论上无限制 |
| 安全性 | 数据暴露在 URL 中，不适合敏感信息 | 相对安全，但明文传输仍需 HTTPS 保护 |
| 缓存与书签 | 可以被缓存、保存为书签 | 不会被缓存，不能保存为书签 |
| 幂等性 | 多次相同请求应产生相同结果（幂等） | 通常会导致服务器状态变化（非幂等） |
| 适用场景 | 搜索、筛选、分页等查询操作 | 登录、注册、订单提交等数据写入操作 |

```html
<!-- GET 典型用法：搜索表单 -->
<form action="/search" method="GET">
  <input type="search" name="q" placeholder="搜索...">
  <button type="submit">搜索</button>
</form>
<!-- 提交后 URL：/search?q=关键词 -->

<!-- POST 典型用法：登录表单 -->
<form action="/login" method="POST">
  <input type="email" name="email" placeholder="邮箱">
  <input type="password" name="password" placeholder="密码">
  <button type="submit">登录</button>
</form>
<!-- 提交后 URL 不变，数据在请求体中 -->
```


### 三、`enctype` 详解

`enctype` 属性仅在 `method="POST"` 时有效，指定表单数据提交到服务器时采用的 MIME 类型。

| 值 | 说明 | 适用场景 |
| :--- | :--- | :--- |
| `application/x-www-form-urlencoded` | **默认值**。所有字符都会被编码（空格转为 `+`，特殊字符转为 ASCII 十六进制） | 绝大多数文本表单（登录、搜索等） |
| `multipart/form-data` | 不对字符编码。数据以多段形式发送，每个字段为独立的“部分” | **文件上传必须使用** |
| `text/plain` | 纯文本格式发送，主要用于调试 | 不推荐用于生产环境 |

```html
<!-- 文件上传表单必须使用 multipart/form-data -->
<form action="/upload" method="POST" enctype="multipart/form-data">
  <input type="file" name="avatar" accept="image/*">
  <button type="submit">上传头像</button>
</form>

<!-- 普通文本表单使用默认值，可省略 enctype -->
<form action="/api/comment" method="POST">
  <textarea name="content"></textarea>
  <button type="submit">提交评论</button>
</form>
```

> ⚠️ **注意**：如果表单中包含 `<input type="file">` 而忘记设置 `enctype="multipart/form-data"`，文件将无法正确上传，服务器只会收到文件名。


### 四、`<label>` 标签的两种关联方式

`<label>` 为表单控件提供可读的说明文本，是表单可访问性的**最核心基础**。点击标签文字会自动将焦点移至对应控件，这对精细运动障碍用户和移动端操作尤为重要。

#### 1. 显式关联（推荐）

使用 `for` 属性指向控件的 `id`：

```html
<label for="username">用户名</label>
<input type="text" id="username" name="username">
```

#### 2. 隐式关联

将控件直接嵌套在 `<label>` 内部：

```html
<label>
  用户名
  <input type="text" name="username">
</label>
```

#### 3. 选择建议

两种方式都有效，但各有侧重：
- **显式关联**：标签和控件可分离布局，灵活性更高，是大多数项目的主流选择。
- **隐式关联**：无需维护 `id` 和 `for` 的对应关系，在组件化开发中可减少 `id` 冲突。

> 💡 **最佳实践**：项目中统一选择一种方式并贯彻到底，避免混用造成混淆。无论采用哪种方式，**每个表单控件都必须有对应的 `<label>`**。


### 五、输入控件详解

#### 1. 文本输入类

`<input>` 是表单中最常用的元素，其行为随 `type` 属性变化。如果未指定 `type`，默认值为 `text`。

| type | 用途 | 移动端键盘 | 示例 |
| :--- | :--- | :--- | :--- |
| `text` | 普通单行文本（默认） | 标准键盘 | `<input type="text" name="nickname">` |
| `password` | 密码输入，字符被掩码 | 标准键盘 | `<input type="password" name="pwd">` |
| `email` | 邮箱地址，自动验证格式 | 带 `@` 的邮箱键盘 | `<input type="email" name="email">` |
| `tel` | 电话号码 | 数字拨号键盘 | `<input type="tel" name="phone">` |
| `url` | 网址，自动验证格式 | 带 `/` 和 `.com` 的 URL 键盘 | `<input type="url" name="website">` |
| `number` | 数字，带增减按钮 | 数字键盘 | `<input type="number" name="age" min="0" max="150">` |
| `search` | 搜索框，可能带清除按钮 | 带“搜索”确认键 | `<input type="search" name="q">` |

```html
<!-- 典型用户注册表单 -->
<form>
  <label for="reg-email">邮箱</label>
  <input type="email" id="reg-email" name="email" required>

  <label for="reg-phone">手机号</label>
  <input type="tel" id="reg-phone" name="phone" pattern="[0-9]{11}">

  <label for="reg-pwd">密码</label>
  <input type="password" id="reg-pwd" name="password" minlength="8" required>

  <label for="reg-age">年龄</label>
  <input type="number" id="reg-age" name="age" min="1" max="120">
</form>
```

HTML5 引入的语义化输入类型不仅提供了自动验证，还能在移动端触发针对性的虚拟键盘，显著提升移动端填表体验。

#### 2. 选择类控件

##### 单选按钮（`radio`）

用于从一组互斥选项中选择一个：

```html
<fieldset>
  <legend>请选择您的性别</legend>
  <input type="radio" id="gender-male" name="gender" value="male" checked>
  <label for="gender-male">男</label>

  <input type="radio" id="gender-female" name="gender" value="female">
  <label for="gender-female">女</label>

</fieldset>
```

> ⚠️ **关键**：同一组的单选按钮必须设置**相同的 `name` 属性值**，否则它们将互不影响，用户可以同时选中多个。

##### 复选框（`checkbox`）

用于独立选择多项（可多选）：

```html
<fieldset>
  <legend>您的兴趣爱好</legend>
  <input type="checkbox" id="hobby-reading" name="hobby" value="reading">
  <label for="hobby-reading">阅读</label>

  <input type="checkbox" id="hobby-sports" name="hobby" value="sports">
  <label for="hobby-sports">运动</label>

  <input type="checkbox" id="hobby-music" name="hobby" value="music" checked>
  <label for="hobby-music">音乐</label>
</fieldset>
```

##### 下拉菜单（`<select>`）

用于从较多选项中选择一项或多项：

```html
<label for="city">所在城市</label>
<select id="city" name="city">
  <option value="">-- 请选择 --</option>
  <optgroup label="华北地区">
    <option value="beijing">北京</option>
    <option value="tianjin">天津</option>
  </optgroup>
  <optgroup label="华东地区">
    <option value="shanghai" selected>上海</option>
    <option value="hangzhou">杭州</option>
  </optgroup>
</select>
```

- `<optgroup>` 元素用于将选项分组，使长列表更易于浏览。
- `selected` 属性设置默认选中项。
- 添加 `multiple` 属性可允许选择多项（按住 Ctrl/Cmd 点击）。
- 使用 `size` 属性可控制同时显示的选项数量。

##### 数据列表（`<datalist>`）

为文本输入框提供“自动补全建议”，用户既可以从中选择，也可以输入自定义值：

```html
<label for="browser">您常用的浏览器</label>
<input list="browsers" id="browser" name="browser" placeholder="输入或选择">
<datalist id="browsers">
  <option value="Chrome">
  <option value="Firefox">
  <option value="Safari">
  <option value="Edge">
  <option value="Opera">
</datalist>
```

`<datalist>` 通过 `id` 与 `<input>` 的 `list` 属性关联。它不同于 `<select>`——`<datalist>` 只是提供建议，用户可以输入不在列表中的值；而 `<select>` 强制用户从预设选项中选择。

#### 3. 多行文本（`<textarea>`）

用于输入较长的文本内容：

```html
<label for="bio">个人简介</label>
<textarea id="bio" name="bio" rows="5" cols="40" placeholder="介绍一下你自己..."></textarea>
```

| 属性 | 说明 |
| :--- | :--- |
| `rows` | 可见行数（高度） |
| `cols` | 可见列数（宽度） |
| `placeholder` | 占位提示文本 |
| `maxlength` | 最大字符数限制 |
| `wrap` | 控制换行行为（`soft` 或 `hard`） |

#### 4. 按钮类型

##### `<button>` vs `<input type="button">`

| 对比项 | `<button>` | `<input type="button">` |
| :--- | :--- | :--- |
| 内容能力 | 可包含 HTML 内容（图标、图片等） | 仅支持纯文本 |
| 样式灵活性 | 高，可任意嵌入其他元素 | 低，只能设置文本样式 |
| 默认类型 | 在不同浏览器中可能不同，**建议显式指定** | 明确为按钮 |
| 现代推荐 | ✅ 推荐，更灵活 | 仍然有效，但功能有限 |

##### `type` 属性的三种取值

| type 值 | 行为 | 使用场景 |
| :--- | :--- | :--- |
| `submit` | 触发表单提交（`<button>` 的默认类型） | 表单提交按钮 |
| `reset` | 将表单内所有字段重置为初始值 | 清空表单（谨慎使用） |
| `button` | 无默认行为，需绑定 JavaScript | 自定义交互按钮 |

```html
<form>
  <!-- 提交按钮 -->
  <button type="submit">提交注册</button>

  <!-- 自定义按钮（不提交表单） -->
  <button type="button" id="previewBtn">预览信息</button>

  <!-- 重置按钮（通常不推荐，容易误触） -->
  <button type="reset">清空表单</button>
</form>
```

> ⚠️ **注意事项**：如果使用 `<button>` 但未指定 `type` 属性，其默认类型在不同浏览器中可能为 `submit`，导致点击后意外提交表单。**始终显式指定 `type` 属性**是最安全的做法。

### 六、原生表单验证

客户端验证能即时反馈错误，避免无效数据被提交到服务器，是良好用户体验的重要组成部分。但需要注意：**客户端验证不能替代服务器端验证**，因为用户可以绕过浏览器验证（如通过开发者工具修改 HTML 或直接构造 HTTP 请求）。

#### 1. 内置验证属性

| 属性 | 作用 | 示例 |
| :--- | :--- | :--- |
| `required` | 字段必须填写，否则无法提交 | `<input type="text" required>` |
| `minlength` / `maxlength` | 最小/最大字符数 | `<input type="text" minlength="6" maxlength="20">` |
| `min` / `max` | 数字/日期的最小/最大值 | `<input type="number" min="1" max="100">` |
| `pattern` | 正则表达式验证 | `<input type="text" pattern="[A-Za-z]{3,}">` |
| `step` | 数字增减的步长 | `<input type="number" step="0.5">` |

#### 2. `pattern` 正则验证详解

`pattern` 属性使用 JavaScript 正则表达式验证输入值，必须完全匹配才能通过：

```html
<!-- 用户名：3-16 位字母、数字或下划线 -->
<input type="text" name="username"
       pattern="^[A-Za-z0-9_]{3,16}$"
       title="用户名须为 3-16 位字母、数字或下划线">

<!-- 中国大陆手机号：11 位数字 -->
<input type="tel" name="phone"
       pattern="^1[3-9][0-9]{9}$"
       title="请输入有效的 11 位手机号码">

<!-- 强密码：至少 8 位，含大小写字母和数字 -->
<input type="password" name="password"
       pattern="^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{8,}$"
       title="密码须至少 8 位，包含大小写字母和数字">
```

> 💡 **关键技巧**：始终配合 `title` 属性使用，用户悬停或验证失败时会看到你预设的提示文字，极大改善体验。

#### 3. 组合验证示例

```html
<form>
  <label for="signup-email">邮箱 *</label>
  <input type="email" id="signup-email" name="email" required>

  <label for="signup-pwd">密码 *</label>
  <input type="password" id="signup-pwd" name="password"
         required minlength="8"
         pattern="^(?=.*[A-Za-z])(?=.*\d).{8,}$"
         title="至少 8 位，同时包含字母和数字">

  <label for="signup-age">年龄</label>
  <input type="number" id="signup-age" name="age" min="18" max="100">

  <label for="signup-url">个人网站</label>
  <input type="url" id="signup-url" name="website" placeholder="https://example.com">

  <button type="submit">注册</button>
</form>
```

#### 4. 使用 CSS 伪类展示验证状态

```css
/* 有效输入 */
input:valid {
  border-color: #10b981;
}

/* 无效输入 */
input:invalid {
  border-color: #ef4444;
}

/* 必填字段 */
input:required {
  border-left-width: 4px;
}

/* 可选字段 */
input:optional {
  opacity: 0.8;
}
```

> ⚠️ **注意**：`:invalid` 会在页面加载时立即匹配空值的 `required` 字段，可能导致用户还没填写就看到红色边框。更好的做法是结合 `:user-invalid` 伪类（仅当用户与字段交互后显示无效状态），或通过 JavaScript 控制验证样式的触发时机。


### 七、可访问性最佳实践

表单可访问性的核心是：确保所有用户——无论他们使用屏幕阅读器、纯键盘操作还是其他辅助技术——都能理解、填写并成功提交表单。这不仅仅是技术合规，更是用户体验的基石。

#### 1. 字段分组：`<fieldset>` 和 `<legend>`

`<fieldset>` 用于将逻辑相关的表单控件分组，`<legend>` 为该组提供标题。屏幕阅读器会在读出组内每个控件标签前先读出 `legend` 的内容。

```html
<form>
  <fieldset>
    <legend>账户信息</legend>
    <label for="acc-user">用户名</label>
    <input type="text" id="acc-user" name="username">
    <label for="acc-pwd">密码</label>
    <input type="password" id="acc-pwd" name="password">
  </fieldset>

  <fieldset>
    <legend>配送方式</legend>
    <input type="radio" id="shipping-standard" name="shipping" value="standard" checked>
    <label for="shipping-standard">标准配送（3-5 个工作日）</label>
    <input type="radio" id="shipping-express" name="shipping" value="express">
    <label for="shipping-express">特快配送（1-2 个工作日）</label>
  </fieldset>
</form>
```

`disabled` 属性可直接设置在 `<fieldset>` 上，一次性禁用组内所有控件。

#### 2. 其他属性

| 属性 | 作用 | 使用建议 |
| :--- | :--- | :--- |
| `placeholder` | 显示灰色提示文字 | **不能替代 `<label>`**，仅作辅助示例 |
| `readonly` | 只读，可选中但不能修改 | 用于展示不可编辑的预设值 |
| `disabled` | 完全禁用，不可交互且数据不提交 | 用于暂时不可用的选项 |
| `autocomplete` | 控制浏览器自动填充行为 | 使用语义值（如 `"email"`、`"tel"`）帮助用户快速填写 |
| `autofocus` | 页面加载后自动聚焦 | 每个页面最多一个元素使用，避免干扰屏幕阅读器用户 |
| `tabindex` | 控制 Tab 键导航顺序 | 通常设为 `0` 或 `-1`，避免使用大于 0 的值破坏自然顺序 |

#### 3. 可访问性检查清单

- ✅ 每个表单控件都有对应的 `<label>`（通过 `for` 或嵌套）
- ✅ 相关控件使用 `<fieldset>` + `<legend>` 分组
- ✅ `placeholder` 只作辅助，不替代 `<label>`
- ✅ 使用 `required` 和验证属性时配合 `title` 提供说明
- ✅ 键盘 Tab 导航顺序符合逻辑，不使用大于 0 的 `tabindex`
- ✅ 提交和重置按钮使用语义化 `<button>`，并显式指定 `type`


### 八、完整示例：用户注册表单

```html
<!DOCTYPE html>
<html lang="zh-CN">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>用户注册 - HTML 表单示例</title>
  <style>
    * { box-sizing: border-box; margin: 0; padding: 0; }
    body {
      font-family: system-ui, -apple-system, sans-serif;
      background: #f5f7fa;
      display: flex;
      justify-content: center;
      align-items: center;
      min-height: 100vh;
      padding: 20px;
    }
    .form-container {
      max-width: 560px;
      width: 100%;
      background: white;
      padding: 32px;
      border-radius: 16px;
      box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1);
    }
    h2 { margin-bottom: 24px; color: #1e293b; text-align: center; }
    fieldset {
      border: 1px solid #e2e8f0;
      border-radius: 8px;
      padding: 16px 20px;
      margin-bottom: 20px;
    }
    legend {
      padding: 0 8px;
      font-weight: 600;
      color: #334155;
    }
    .form-group { margin-bottom: 18px; }
    label {
      display: block;
      margin-bottom: 6px;
      font-weight: 500;
      color: #1e293b;
    }
    .required::after {
      content: " *";
      color: #dc2626;
    }
    input, select, textarea {
      width: 100%;
      padding: 10px 12px;
      border: 1px solid #cbd5e1;
      border-radius: 6px;
      font-size: 16px;
      transition: border-color 0.2s;
    }
    input:focus, select:focus, textarea:focus {
      outline: none;
      border-color: #3b82f6;
      box-shadow: 0 0 0 3px rgba(59, 130, 246, 0.1);
    }
    input:user-invalid { border-color: #dc2626; }
    input:valid { border-color: #10b981; }
    .radio-group, .checkbox-group {
      display: flex;
      gap: 20px;
      flex-wrap: wrap;
    }
    .radio-group label, .checkbox-group label {
      display: flex;
      align-items: center;
      gap: 6px;
      font-weight: normal;
      margin-bottom: 0;
    }
    .radio-group input, .checkbox-group input {
      width: auto;
    }
    .hint {
      font-size: 12px;
      color: #64748b;
      margin-top: 4px;
    }
    .form-actions {
      display: flex;
      gap: 12px;
      margin-top: 24px;
    }
    .btn {
      padding: 12px 24px;
      border-radius: 6px;
      font-size: 16px;
      font-weight: 500;
      cursor: pointer;
      border: none;
      transition: background 0.2s;
    }
    .btn-primary {
      background: #3b82f6;
      color: white;
      flex: 2;
    }
    .btn-primary:hover { background: #2563eb; }
    .btn-secondary {
      background: #e2e8f0;
      color: #334155;
      flex: 1;
    }
    .btn-secondary:hover { background: #cbd5e1; }
  </style>
</head>
<body>
<div class="form-container">
  <h2>📝 创建新账户</h2>

  <form action="/api/register" method="POST">
    <!-- 账户信息组 -->
    <fieldset>
      <legend>🔐 账户信息</legend>

      <div class="form-group">
        <label for="reg-username" class="required">用户名</label>
        <input type="text" id="reg-username" name="username"
               required minlength="3" maxlength="16"
               pattern="^[A-Za-z0-9_]{3,16}$"
               title="3-16 位字母、数字或下划线"
               autocomplete="username">
        <div class="hint">3-16 位字符，支持字母、数字、下划线</div>
      </div>

      <div class="form-group">
        <label for="reg-email" class="required">邮箱</label>
        <input type="email" id="reg-email" name="email"
               required autocomplete="email">
      </div>

      <div class="form-group">
        <label for="reg-password" class="required">密码</label>
        <input type="password" id="reg-password" name="password"
               required minlength="8"
               pattern="^(?=.*[A-Za-z])(?=.*\d).{8,}$"
               title="至少 8 位，同时包含字母和数字"
               autocomplete="new-password">
        <div class="hint">至少 8 位，须同时包含字母和数字</div>
      </div>
    </fieldset>

    <!-- 个人信息组 -->
    <fieldset>
      <legend>👤 个人信息</legend>

      <div class="form-group">
        <label for="reg-phone">手机号码</label>
        <input type="tel" id="reg-phone" name="phone"
               pattern="^1[3-9][0-9]{9}$"
               title="请输入 11 位中国大陆手机号"
               autocomplete="tel">
      </div>

      <div class="form-group">
        <label for="reg-age">年龄</label>
        <input type="number" id="reg-age" name="age"
               min="1" max="120">
      </div>

      <div class="form-group">
        <label>性别</label>
        <div class="radio-group">
          <input type="radio" id="gender-male" name="gender" value="male" checked>
          <label for="gender-male">男</label>
          <input type="radio" id="gender-female" name="gender" value="female">
          <label for="gender-female">女</label>
          <input type="radio" id="gender-other" name="gender" value="other">
          <label for="gender-other">其他</label>
        </div>
      </div>

      <div class="form-group">
        <label for="reg-city">所在城市</label>
        <select id="reg-city" name="city">
          <option value="">-- 请选择 --</option>
          <optgroup label="华北地区">
            <option value="beijing">北京</option>
            <option value="tianjin">天津</option>
          </optgroup>
          <optgroup label="华东地区">
            <option value="shanghai">上海</option>
            <option value="hangzhou">杭州</option>
            <option value="nanjing">南京</option>
          </optgroup>
          <optgroup label="华南地区">
            <option value="guangzhou">广州</option>
            <option value="shenzhen">深圳</option>
          </optgroup>
        </select>
      </div>

      <div class="form-group">
        <label>兴趣爱好（可多选）</label>
        <div class="checkbox-group">
          <input type="checkbox" id="hobby-reading" name="hobby" value="reading">
          <label for="hobby-reading">阅读</label>
          <input type="checkbox" id="hobby-sports" name="hobby" value="sports">
          <label for="hobby-sports">运动</label>
          <input type="checkbox" id="hobby-music" name="hobby" value="music">
          <label for="hobby-music">音乐</label>
          <input type="checkbox" id="hobby-travel" name="hobby" value="travel">
          <label for="hobby-travel">旅行</label>
        </div>
      </div>

      <div class="form-group">
        <label for="reg-bio">个人简介</label>
        <textarea id="reg-bio" name="bio" rows="3"
                  placeholder="简单介绍一下你自己..."></textarea>
      </div>
    </fieldset>

    <!-- 协议确认 -->
    <div class="form-group">
      <input type="checkbox" id="agree-terms" name="agree" value="yes" required>
      <label for="agree-terms" style="display: inline;">
        我已阅读并同意 <a href="/terms" target="_blank">服务条款</a> 和 <a href="/privacy" target="_blank">隐私政策</a>
      </label>
    </div>

    <!-- 操作按钮 -->
    <div class="form-actions">
      <button type="submit" class="btn btn-primary">注册账户</button>
      <button type="reset" class="btn btn-secondary">重新填写</button>
    </div>
  </form>
</div>
</body>
</html>
```


### 九、总结与最佳实践速查

#### ✅ 推荐做法
1. **每个控件都有关联的 `<label>`**，使用 `for` 属性或嵌套方式
2. **`<button>` 始终显式指定 `type`**，避免意外提交
3. **相关控件用 `<fieldset>` + `<legend>` 分组**，提升语义和可访问性
4. **文件上传表单必须设置 `enctype="multipart/form-data"`**
5. **敏感数据使用 `POST`**，查询类数据使用 `GET`
6. **原生验证属性配合 `title` 使用**，为用户提供清晰的错误说明
7. **使用语义化输入类型**（`email`、`tel`、`number` 等），触发正确的移动端键盘

#### ❌ 避免事项
1. **不要用 `placeholder` 替代 `<label>`**，占位符消失后用户无从参考
2. **不要在一个 `<form>` 内嵌套另一个 `<form>`**
3. **不要忘记为表单控件设置 `name` 属性**，否则数据不会提交
4. **不要忽略服务器端验证**，客户端验证可被绕过
5. **不要在单选按钮组中使用不同的 `name`**，否则互斥失效
6. **不要使用大于 0 的 `tabindex` 值**，这会破坏自然的键盘导航顺序

#### 📝 核心属性速查

| 类别 | 属性 | 关键说明 |
| :--- | :--- | :--- |
| 容器 | `action`, `method`, `enctype` | 决定数据去向、发送方式和编码格式 |
| 文本输入 | `type`, `required`, `pattern`, `placeholder` | `type` 决定键盘与验证行为 |
| 选择控件 | `name`, `value`, `selected`, `checked` | `name` 决定分组，`value` 决定提交的值 |
| 验证 | `required`, `min`, `max`, `minlength`, `pattern` | 配合 `title` 提供错误提示 |
| 状态 | `disabled`, `readonly`, `autofocus` | 控制可交互性与焦点行为 |
| 可访问性 | `for` / `id`, `fieldset`, `legend`, `tabindex` | 确保所有用户都能理解和使用表单 |
