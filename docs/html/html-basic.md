---
layout: doc

preview: true
aside: true
outline: deep
---

# HTML基础

## 1.文档基本结构

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Document</title>
  </head>
  <body>
    <h1>Hello World</h1>
  </body>
</html>
```

- `<!DOCTYPE html>` 声明与渲染模式
  - 声明文档类型为 HTML5
  - 指定文档语言为英文
  - [参考 🔗](https://hsivonen.fi/doctype/)
- `<html>`、`<head>`、`<body>` 三要素
  - `<html>` 根元素
    - 文档的根元素，包含其他所有元素
    - 每个 HTML 文档必须有一个且只有一个有一个 `<html>` 元素
    - 设置页面的语言
      - `lang="en"` 表示页面语言为英文
  - `<head>` 头部元素
    - 包含文档的元数据，如字符编码、视口设定、标题等
    - 每个 HTML 文档必须有一个且只有一个 `<head>` 元素
  - `<body>` 主体元素
    - 包含文档的主要内容，如文本、图像、链接等
    - 每个 HTML 文档必须有一个且只有一个 `<body>` 元素
    - 包含其他所有块级元素和行内元素
    - 包含其他所有行内元素
    - 包含其他所有注释
- 字符编码 `<meta charset="UTF-8">`
  该元素指明你的文档使用 UTF-8 字符编码，UTF-8 包括世界绝大多数书写语言的字符。它基本上可以处理任何文本内容。以它为编码还可以避免以后出现某些问题，没有理由再选用其他编码。
- 视口设定 `<meta name="viewport">`（移动适配根基）
  - 该元素确保页面以视口宽度进行渲染，避免移动端浏览器以比视口更宽的宽度渲染内容，导致内容缩小。
  - `width=device-width` 表示页面宽度与设备宽度相同
  - `initial-scale=1.0` 表示初始缩放比例为 1.0
  - [参考 🔗](https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/meta)
- 标题 `<title>Document</title>`
  - 该元素设置页面的标题
  - 每个 HTML 文档必须有一个且只有一个 `<title>` 元素
  - 标题在浏览器标签页、显示设备上显示
  - 标题长度建议在 60 个字符以下，避免过长导致截断
  - [参考 🔗](https://www.w3.org/2000/10/REC-html40/struct.html#h-1.2.1)

## 2.常用标签与内容组织

### 2.1 文本内容标签

- **标题体系** - `<h1>` ～ `<h6>`
  （层级意识与 SEO）
- **段落**
  - `<p>`
  - `<br>`
  - `<hr>`
- **强调与引用**
  - `em`
  - `<strong>`
  - `<blockquote>`
  - `<q>`
  - `<cite>`

### 2.2 列表结构

- **无序列表**
  - `<ul>` + `<li>`
  ```html
  <ul>
    <li>无序item</li>
    <li>无序item</li>
    <li>无序item</li>
    <li>无序item</li>
  </ul>
  ```
- **有序列表**
  - `<ol>` + `<li>`
  ```html
  <ol>
    <li>有序item</li>
    <li>有序item</li>
    <li>有序item</li>
    <li>有序item</li>
  </ol>
  ```
- **定义列表**
  - `<dl>`、`<dt>`、`<dd>`
  - HTML `<dl>` 元素 （或 `HTML` 描述列表元素）是一个包含术语定义以及描述的列表，通常用于**展示词汇表或者元数据 (键 - 值对列表)**。

  ```html
  <dl>
    <dt>定义项</dt>
    <dd>定义描述</dd>
  </dl>

  <!-- 多条术语、单条描述 -->
  <hr />
  <dl>
    <dt>Firefox</dt>
    <dt>Mozilla Firefox</dt>
    <dt>Fx</dt>
    <dd>
      A free, open source, cross-platform, graphical web browser developed by
      the Mozilla Corporation and hundreds of volunteers.
    </dd>

    <!-- Other terms and descriptions -->
  </dl>

  <!-- 单条术语、多条描述 -->
  <dl>
    <dt>Firefox</dt>
    <dd>
      A free, open source, cross-platform, graphical web browser developed by
      the Mozilla Corporation and hundreds of volunteers.
    </dd>
    <dd>
      The Red Panda also known as the Lesser Panda, Wah, Bear Cat or Firefox, is
      a mostly herbivorous mammal, slightly larger than a domestic cat (60 cm
      long).
    </dd>

    <!-- Other terms and descriptions -->
  </dl>
  <!-- 多条术语、多条描述 -->
  <dl>
    <dt>Name</dt>
    <dd>Godzilla</dd>
    <dt>Born</dt>
    <dd>1952</dd>
    <dt>Birthplace</dt>
    <dd>Japan</dd>
    <dt>Color</dt>
    <dd>Green</dd>
  </dl>
  ```

- **列表嵌套**
  ```html
  <ol>
    <li>first item</li>
    <li>
      second item
      <!-- closing </li> tag not here! -->
      <ul>
        <li>second item first subitem</li>
        <li>second item second subitem</li>
        <li>second item third subitem</li>
      </ul>
    </li>
    <!-- Here's the closing </li> tag -->
    <li>third item</li>
  </ol>
  ```

### 2.3 链接与路径

在 HTML 中，`<a>` 元素（锚元素）通过 `href` 属性创建超链接，可以指向网页、文件、邮箱地址、同一页面的某个位置，或者任何 `URL` 能够定位到的内容。掌握链接的写法，是构建“万维网”的基础。

- **绝对路径**
  - `/`
    绝对路径是指向资源的完整 `URL`，包含了协议（https:// 或 http://）、域名和完整的路径。无论当前页面位于何处，绝对路径都能准确找到目标资源。
  - 示例：`https://www.example.com/`

  ```html
  <!-- 指向外部网站的绝对路径 -->
  <a href="https://developer.mozilla.org/zh-CN/docs/Web/HTML">MDN HTML 文档</a>

  <!-- 指向同一站点内资源的绝对路径（通常也可以写成相对路径） -->

  <a href="https://mysite.com/images/logo.png">Logo 图片</a>
  ```

  **📋 使用场景**：链接到外部网站、CDN 资源、或任何跨域的内容。需要注意，不写协议头（如 `www.example.com`）会让浏览器将其误认为相对路径，从而在本地寻找同名文件，导致 404 错误。

- **相对路径**  
相对路径是基于当前页面所在位置来定位目标资源，不需要写完整的域名和协议。相对路径有三种常用的导航方式：
    |写法|含义|示例|
    |---|---|---|
    |`文件名` 或 `./文件名` | 当前目录 | about.html 或 ./about.html|
    |`../` | 上一级目录 |../images/photo.jpg|
    |`文件夹/文件名` | 进入子目录|pages/contact.html|

```html
<!-- 假设当前页面 URL 为：https://mysite.com/blog/2024/post.html -->

<!-- 同一文件夹下的文件（直接写文件名） -->
<a href="related-article.html">相关文章</a>
<!-- 实际指向：https://mysite.com/blog/2024/related-article.html -->

<!-- 子文件夹中的文件 -->
<a href="images/cover.jpg">封面图</a>
<!-- 实际指向：https://mysite.com/blog/2024/images/cover.jpg -->

<!-- 返回上一级目录（回到 blog 文件夹） -->
<a href="../index.html">博客首页</a>
<!-- 实际指向：https://mysite.com/blog/index.html -->

<!-- 连续向上两级（回到站点根目录） -->
<a href="../../index.html">网站首页</a>
<!-- 实际指向：https://mysite.com/index.html -->
```

解析规则：浏览器会将相对路径与当前页面的“基础`URL`”结合。当前目录指的是 `URL` 字符串中最后一个正斜杠之前的部分。例如，基础 `URL` 为 `https://test.example.org/api/v1/`，相对路径 `article` 会被解析为 `https://test.example.org/api/v1/article`。每出现一次`../`，就会从当前目录中移除一层文件夹，然后将其后的内容附加到剩余路径上
- **根相对路径**  
根相对路径以 `/` 开头，表示从当前网站的根目录开始查找，而不管当前页面处于哪一层文件夹。
```html
<!-- 无论当前页面在哪个子目录下，都指向网站根目录下的 about.html -->
<a href="/about.html">关于我们</a>

<!-- 指向根目录下 images 文件夹中的 logo.png -->
<img src="/images/logo.png" alt="Logo">
```

假设当前页面 `URL` 为 `https://mysite.com/blog/2024/post.html`，那么：

`href="/about.html"` → 指向 `https://mysite.com/about.html`
`href="/images/banner.jpg"` → 指向 `https://mysite.com/images/banner.jpg`

适用场景：在大型网站中，**根相对路径**能让资源引用保持一致，避免因页面层级不同而写错路径。

- **锚点链接**
    - `#id`
    - 锚点链接用于在同一页面内快速滚动到指定位置，也可以跳转到其他页面的某个特定章节。
    - 它的核心机制是：目标元素拥有唯一 `ID`，链接通过 `# + ID` 来定位它。
        - 示例：`#section1` → 跳转到 `section1` 位置  
    
    **a. 同一页面内的锚点跳转**
    ```html
        <!-- 步骤 1：在目标位置设置 id -->
        <h2 id="comments">读者评论区</h2>
        <p>这里是评论内容……</p>

        <!-- 步骤 2：在链接中使用 # + id -->
        <a href="#comments">跳转到评论区</a>
    ```
    **b. 跨页面跳转**

    ```html
        <!-- 跳转到另一个页面的某个章节 -->
        <a href="about.html#team">关于我们——团队成员</a>

        <!-- 跳转到外部网站的某个 ID -->
        <a href="https://developer.mozilla.org/zh-CN/docs/Web/HTML/Element/a#try_it">
        MDN：在线尝试示例
        </a>
    ```

    当目标文档加载完成后，浏览器会自动滚动到对应 `ID` 的元素位置。如果目标页面中不存在指定的 `ID`，浏览器只会加载该页面，但不会执行滚动定位，这在设计上属于优雅降级。

    **c.. 补充知识：文本片段（Text Fragments）[🔗](https://developer.mozilla.org/zh-CN/docs/Web/URI/Reference/Fragment/Text_fragments)**

    除了传统的 `ID` 锚标点，现代浏览器还支持一种 “文本片段”（Text Fragments） 的新特性。
       **它允许你直接链接到页面中的任意一段文本，即使该文本没有任何 ID 标记**。

    语法格式为在 `URL` 后追加` #:~:text=要定位的文本`：

    示例：`https://mysite.com/blog/2024/post.html#:~:text=这是一个段落` → 跳转到包含 "这是一个段落" 文本的位置

    ```html
    <a href="https://example.com/page#:~:text=核心概念">
    直接定位到“核心概念”这段文字
    </a>
    <a href="https://developer.mozilla.org/zh-CN/docs/Web/URI/Reference/Fragment/Text_fragments#:~:text=示例">
        示例：直接链接到“示例”这段文字
    </a>
    ```

    支持此特性的浏览器会自动滚动到目标文字并高亮显示。这对于链接到他人维护的页面（你没有权限添加 ID）非常有价值。

- **功能链接**

`href` 不仅限于 HTTP/HTTPS 协议，还可以使用` mailto:` 和 `tel:` 前缀来触发系统的默认邮件客户端或拨号功能。
  - 邮件链接：`mailto:`
    - 示例：`mailto:contact@example.com`
    - 会打开默认邮件客户端，预设收件人邮箱为 `contact@example.com`
  - 电话链接：`tel:`  
    - 示例：`tel:+1234567890`
    - 会打开默认拨号客户端，预设号码为 `+1234567890`
  
  ```html
    <!-- 基础用法：打开邮件客户端，收件人预填 -->
    <a href="mailto:admin@example.com">联系管理员</a>

    <!-- 基础用法 -->
    <a href="tel:+8613812345678">拨打电话：138-1234-5678</a>

    <!-- 在 <address> 元素中组合使用邮箱和电话链接 -->
    <address>
      联系作者：<br />
      <a href="mailto:jim@example.com">jim@example.com</a><br />
      <a href="tel:+14155550132">+1 (415) 555‑0132</a>
    </address>
    <!-- 参考自 MDN <address> 元素文档[reference:13] -->
  ```

- **安全属性**
  - `target="_blank"` 
    默认情况下，点击链接会在当前标签页中打开目标页面。添加 target="_blank" 属性后，浏览器会新建一个标签页或窗口来打开链接，不会打断用户在当前页面的浏览。
    - 示例：`<a href="https://www.example.com">Example Link</a>`
  - `window.opener` 安全漏洞  
    如果不加任何防护措施，通过 `target="_blank"` 打开的外部页面可以通过 `window.opener` 对象部分地访问原页面，甚至将原页面重定向到钓鱼网站——这种攻击手法被称为 `Reverse Tabnabbing`（反向标签页劫持）

    ```js
    // 恶意页面中的代码（被打开的第三方页面）
    if (window.opener) {
      // 将打开它的原页面偷偷重定向到钓鱼网站
      window.opener.location = 'https://fake-login-page.com';
    }
    ```

    用户返回原标签页时，看到的可能是一个高度仿真的登录页，在不知情的情况下输入账号密码，从而导致信息泄露。

  - `rel="noopener" 防护`    
    添加 `rel="noopener"` 属性可以切断新页面与原页面之间的 window.opener 连接，使新页面无法访问或操控原页面。
    
    ```html
    <!-- 安全的写法 -->
    <a href="https://external-site.com" target="_blank" rel="noopener">
      安全的外部链接
    </a>
    ```
  
  💎 在现代浏览器中，仅设置 `target="_blank"` 就已经隐式地提供了与 `rel="noopener"` 等效的保护行为。也就是说：**在较新版本的 Chrome、Firefox、Safari、Edge 中，`<a target="_blank">` 默认就是安全的**。

  - `rel="noopener"` 与 `rel="noreferrer"` 的区别

  | 属性 | 作用 | 对 Referer 头的影响 |
  |---|---|---|
  |`rel="noopener"`|阻断 window.opener，防止页面被篡改	| 仍然发送 Referer 信息（目标网站知道流量来源）|
  |`rel="noreferrer"`|同样阻断 window.opener	| 不发送 Referer 信息（目标网站看不到流量来源）|

  ```html
      <!-- 同时使用两者：既保证安全，又隐藏来源信息 -->
    <a href="https://external-site.com" target="_blank" rel="noopener noreferrer">
      安全且不暴露来源的外部链接
    </a>
  ```
    

### 2.4 图像与多媒体基础  

在网页中嵌入图像、音频和视频，是现代 Web 开发的基本功。理解这些元素的属性、响应式机制与使用场景，不仅能提升页面性能，也能显著改善用户体验。

- **图像**

  ```html
    <img src="image.jpg" alt="这是一张图片">

    <!-- 好的写法：描述图片内容 -->
    <img src="logo.png" alt="公司名称 Logo——一只展翅的蓝色飞鸟">

    <!-- 纯装饰性图片可以留空，但不能省略属性 -->
    <img src="decorative-line.png" alt="">
  ```
  - `src`: 图像 URL，指向图像文件的路径。
  - `alt`: 属性保存图像的文本描述。
    - 可访问性：屏幕阅读器会将 `alt` 文本读给用户，帮助视障人士理解图像内容
    - 容错展示：当图片因网络错误、链接失效或被屏蔽而无法加载时，`alt` 文本会直接显示在页面上
  - 如果同时使用了 `srcset` 属性，`src` 会作为不支持响应式图片的浏览器的后备方案。

  - `width` 和 `height` 属性：指定图像的宽度和高度。
    - 同时设置 width 和 height 属性可以定义图像的固有尺寸，让浏览器在图片加载完成前就预留出对应空间，有效防止内容布局偏移（CLS）
    - 示例：`<img src="logo.png" alt="公司名称 Logo" width="100" height="50">`
  - `loading="lazy"` 属性：指定图像的加载策略。
    - 延迟加载：当图像进入视口时才加载，减少初始页面加载时间。
    ```html
    <!-- 对非首屏图片启用懒加载 -->
    <img src="article-image.jpg" alt="文章配图" loading="lazy" width="800" height="600">
    ```

    - 需要注意，`loading="lazy"` 对首屏核心图片（Hero Image）不应使用，否则反而会延迟首屏渲染，拖累 `LCP`（最大内容绘制）指标。建议首屏图片显式设置 `fetchpriority="high"` 来优先加载。

  - `decoding="async"` —— 异步解码
    - 异步解码：在图像进入视口时才解码，减少初始页面加载时间。
    - 在页面包含大量图片时尤其有用，能避免图片解码阻塞页面的其他渲染任务。
    - 示例：`<img src="logo.png" alt="公司名称 Logo" decoding="async">`

- **响应式图片`srcset`+ `sizes`属性**  

  随着设备屏幕尺寸和分辨率越来越多样化，为所有设备都加载同一张大图既不经济，也影响性能。响应式图片技术可以让浏览器根据设备特性自动选择最合适的图片资源

  - **a. 分辨率切换：使用 x 描述符**
    - 当只需要为不同像素密度的屏幕提供不同分辨率的同一张图时，可以使用像素密度描述符（x）来指定不同分辨率的图片。

    ```html
    <img src="photo-1x.jpg"
     srcset="photo-1x.jpg 1x,
             photo-2x.jpg 2x,
             photo-3x.jpg 3x"
     alt="响应式图片示例">
    ```
    - 1x：标准屏幕
    - 2x：Retina 等高分屏
    - 3x：超高分屏

    - 浏览器会根据设备的 devicePixelRatio 自动选择对应的图片。

  - **b. 宽度切换：使用 w 描述符 + sizes**  
    - 常见的场景是根据视口宽度提供不同尺寸的图片，这需要使用宽度描述符（w）配合 `sizes` 属性。
    ```html
    <img src="hero-640.jpg"
     srcset="hero-640.jpg 640w,
             hero-960.jpg 960w,
             hero-1280.jpg 1280w"
     sizes="(max-width: 600px) 100vw,
            (max-width: 1000px) 50vw,
            33vw"
     alt="响应式横幅图片"
     width="1280" height="400">
    ```

    **工作原理**：  

    - `srcset` 中的 `640w`、`960w` 告诉浏览器每张候选图片的固有宽度

    - `sizes` 告诉浏览器图片在当前布局下的实际显示宽度：  
      - 视口 ≤ `600px` 时，图片占 `100%` 视口宽度（`100vw`）
      - 视口 ≤ `1000px` 时，图片占 `50%`视口宽度（`50vw`）
      - 其他情况占 `33%` 视口宽度（`33vw`）
    - **浏览器计算后选择最合适的图片，避免下载过大的资源**   
    ::: warning
    ⚠️ 重要：如果 `srcset` 中使用了 `w` 描述符，则 `sizes` 属性必须同时存在，否则 `srcset` 会被忽略
    :::
  

 
  - **c. `picture` 属性**
    
    当不同屏幕尺寸需要显示不同比例或裁剪方式的图片时（例如移动端用竖版，桌面端用横版），可以使用 `<picture>` 元素来实现。

    ```html
    <picture>
      <!-- 移动端：竖版裁剪 -->
      <source media="(max-width: 600px)" srcset="hero-mobile.jpg">
      <!-- 平板：中等比例 -->
      <source media="(max-width: 1000px)" srcset="hero-tablet.jpg">
      <!-- 桌面：宽版 -->
      <img src="hero-desktop.jpg" alt="响应式横幅">
    </picture>
    ```
    - `<picture>` 内部的 `<source>` 按顺序检查 `media` 条件，第一个匹配的会被选中；
    - 最后的 `<img>` 作为后备。
  

- **视频 `video` 元素**
  - 示例：`<video src="video.mp4" controls></video>`




