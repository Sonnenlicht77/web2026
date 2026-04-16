---
layout: doc
sidebar: true

---


# HTML（HyperText Markup Language）超文本标记语言

> HTML 是一种用于创建网页的标准标记语言。


> 🔗 ： https://developer.mozilla.org/en-US/docs/Web/HTML





## 从入门标签到现代工程化实践，层层递进，夯实基础  



## 🧱 第一层 · 骨架与基础认知  
*核心目标：理解 HTML 是什么，能独立写出第一个完整页面。*

- **📄 文档基本结构**  
  - `<!DOCTYPE>` 声明与渲染模式  
  - `<html>`、`<head>`、`<body>` 三要素  
  - 字符编码 `<meta charset="UTF-8">`  
  - 视口设定 `<meta name="viewport">`（移动适配根基）  

- **📦 块级 vs 行内元素初识**  
  - ▸ 块级：`<div>`、`<p>`、`<h1>` ～ `<h6>`  
  - ▸ 行内：`<span>`、`<a>`、`<strong>`、`<em>`  

- **✏️ 注释与书写习惯**  
  - `<!-- 这是注释 -->` 的妙用  



## ✍️ 第二层 · 常用标签与内容组织  
*核心目标：独立完成一篇图文并茂、结构清晰的文章排版。*

- **📝 文本内容标签**  
  - 标题体系 `<h1>` ～ `<h6>`（层级意识与 SEO）  
  - 段落 `<p>`、换行 `<br>`、水平分割 `<hr>`  
  - 强调与引用：`<em>`、`<strong>`、`<blockquote>`、`<q>`、`<cite>`  

- **📋 列表结构**  
  - 无序列表 `<ul>` + `<li>`  
  - 有序列表 `<ol>` + `<li>`  
  - 定义列表 `<dl>`、`<dt>`、`<dd>`  

- **🔗 链接与路径**  
  - 绝对路径 · 相对路径 · 根相对路径  
  - 锚点链接 `#id`  
  - 功能链接：`mailto:`、`tel:`  
  - 安全属性：`target="_blank"` 与 `rel="noopener"`  

- **🖼️ 图像与多媒体基础**  
  - `<img>` 核心属性：`src`、`alt`、`width` / `height`  
  - 响应式图片概念：`srcset` + `sizes`  
  - 音频 `<audio>` 与视频 `<video>` 基础控制  



## 📊 第三层 · 表格与表单 — 数据交互核心  
*核心目标：掌握结构化数据展示与用户输入收集。*

- **📈 表格进阶**  
  - 完整语义结构：`<table>`、`<thead>`、`<tbody>`、`<tfoot>`  
  - 单元格合并：`colspan`、`rowspan`  
  - 表格标题 `<caption>` 与列分组 `<colgroup>`（扩展）  
  - 响应式表格处理：外层容器 `overflow-x: auto`  

- **📬 表单构建**  
  - 容器 `<form>` 属性：`action`、`method`（GET / POST）、`enctype`  
  - **输入控件**  
    - 文本类：`text`、`password`、`email`、`tel`、`url`、`number`、`search`  
    - 选择类：`radio`（`name` 分组）、`checkbox`、`<select>` + `<option>` / `<optgroup>`  
    - 多行文本 `<textarea>`  
    - 按钮：`submit`、`reset`、`button` 及 `<button>` 与 `<input type="button">` 区别  
  - **可访问性与体验**  
    - `<label>` 显式 / 隐式关联  
    - 占位提示 `placeholder`、必填 `required`、只读 `readonly`、禁用 `disabled`  
    - 字段分组 `<fieldset>` 与 `<legend>`  
    - 原生验证属性：`pattern`、`min`、`max`、`step`  



## 🧠 第四层 · 语义化与文档大纲  
*核心目标：写出对搜索引擎友好、辅助技术易读的页面结构。*

- **🏛️ HTML5 语义区块标签**  
  - `<header>`、`<nav>`、`<main>`、`<article>`、`<section>`、`<aside>`、`<footer>`  
  - 使用辨析：`<article>`（独立内容） vs `<section>`（章节划分）  
  - 行内语义补充：`<address>`、`<time>`  

- **📑 文档大纲与标题层级**  
  - 利用语义标签构建清晰的大纲树  
  - 禁止标题跳跃（h1 不可直接后接 h3）  

- **🔍 SEO 元信息补充**  
  - 描述标签 `<meta name="description">`  
  - 社交媒体优化：Open Graph 标签  
  - 结构化数据初识（JSON-LD 与 Schema.org）  


## ⚙️ 第五层 · 高级表单与交互扩展  
*核心目标：借助 HTML5 新特性提升表单体验，降低 JavaScript 依赖。*

- **📅 HTML5 输入类型与控件**  
  - 日期时间：`date`、`month`、`week`、`time`、`datetime-local`  
  - 界面控件：`color`、`range`  
  - 输入建议 `<datalist>`  
  - 进度指示：`<progress>` 与 `<meter>`  

- **🛡️ 表单性能与安全**  
  - 精细化自动填充 `autocomplete`  
  - 调试开关 `novalidate` 与防重复提交思路  
  - 文件上传：`<input type="file">` 的 `accept` 与 `multiple`  



## 🎬 第六层 · 多媒体与图形深化  
*核心目标：在网页中灵活嵌入音视频与矢量图形。*

- **🖼️ 响应式图片深入**  
  - 分辨率切换：`srcset` 搭配 `sizes`  
  - 艺术指导方案：`<picture>` 元素与 `media` 查询  
  - 现代格式回退（WebP / AVIF）  

- **🎥 视频与音频高级属性**  
  - 字幕支持：`<track>` 与 WebVTT 简介  
  - 预加载策略 `preload` 与移动端自动播放限制应对  
  - 媒介 API 基础控制思路  

- **🎨 矢量图形：SVG 与 Canvas 定位**  
  - **SVG**：内联用法、`viewBox` 概念、与 `<img>` 引用区别  
  - **Canvas**：元素尺寸、绘图上下文简介  
  - 选型指南：图标缩放用 SVG，像素动态用 Canvas  



## 🧩 第七层 · Web 组件与 API 基础关联  
*核心目标：理解 HTML 如何作为现代 Web 应用的骨架基石。*

- **🔗 HTML 与 JavaScript 交互约定**  
  - 自定义数据属性 `data-*`  
  - 命名设计模式：BEM 思想引入  

- **🧱 模板与复用**  
  - `<template>`：存储不可见片段  
  - `<slot>` 概念与 Web Components 入门  

- **📡 HTML5 内置 API 关联元素**  
  - 拖拽 API：`draggable` 属性  
  - 历史记录管理与单页应用路由的关系  
  - 原生对话框 `<dialog>` 与 `showModal()`  

- **📌 存储与可编辑属性**  
  - 内联编辑：`contenteditable`  
  - 语义隐藏：`hidden` vs `display: none`  



## 🚀 第八层 · 性能、可访问性与最佳实践  
*核心目标：写出健壮、高效、人人可用的 HTML。*

- **⚡ HTML 性能优化技巧**  
  - 资源预加载：`preload`、`prefetch`、`preconnect`  
  - 原生懒加载 `loading="lazy"`  
  - 脚本加载策略：`async` vs `defer`  

- **♿ 可访问性（A11y）深度实践**  
  - ARIA 初探：`role`、`aria-label`、`aria-hidden`  
  - 键盘导航与焦点管理：`tabindex` 的正确用法  
  - 跳过导航链接的实现模式  

- **✅ HTML 校验与规范**  
  - W3C 验证工具使用  
  - 常见嵌套雷区（如 `<p>` 内禁放 `<div>`）  
  - 书写风格指南：统一小写、属性引号  



## 🔮 第九层 · 前沿特性与未来展望  
*核心目标：保持技术敏锐，了解最新标准与提案。*

- **🆕 新标准元素 / 属性**  
  - 声明式弹出层：`popover` API  
  - 禁用交互区域：`inert` 属性  
  - CSS `:has()` 对 HTML 结构的影响  

- **📦 HTML 模块化趋势**  
  - 片段导入与 Web 组件中的 HTML 模块实验  

- **📱 PWA 关联 HTML**  
  - 应用清单 `<link rel="manifest">`  





