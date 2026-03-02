# 翔哥DUFF - 饰品交易平台前端实现 🎮

[![GitHub stars](https://img.shields.io/github/stars/autopoet/RepositoryFirst?style=flat-square)](https://github.com/autopoet/RepositoryFirst/stargazers)
![Language](https://img.shields.io/badge/language-HTML5%20%2F%20CSS3%20%2F%20JS-orange)

本项目是一个高性能的饰品交易平台（仿 BUFF）静态原型系统。通过本项目，我实现了一套完整的前端电商页面架构，并手写了兼容多端的交互组件。

## 🌟 项目亮点

### 1. 响应式轮播图系统 (`carousel.js`)
* **多端适配**：原生支持 `Touch` 事件（触摸滑动）与鼠标拖拽，适配移动端浏览器。
* **智能交互**：支持键盘左右方向键切换，具备鼠标悬停暂停（Pause on Hover）功能。
* **动态渲染**：指示器（Indicators）与操作按钮由 JS 动态生成，具有极高的解耦性。

### 2. 标准电商架构布局
* **Header 模块**：实现了快捷导航、搜索栏与购物车交互区域。
* **Entry 模块**：核心展示区，结合了文本与图片的复合式轮播效果。
* **Footer 模块**：采用定义列表 (`dl/dt/dd`) 构建的多列信息展示区，逻辑结构清晰。

### 3. 工程化 CSS
* `base.css`: 统一样式底座。
* `common.css`: 沉淀了 `.w` (版心)、`.shortcut` 等高复用性组件样式。
* `index.css`: 专注处理首页复杂的业务样式。

## 🛠️ 技术栈
- **HTML5**: 使用语义化标签构建 SEO 友好的结构。
- **CSS3**: 应用了 Flexbox 布局方案、Transition 过渡动画、Object-fit 图片适配。
- **JavaScript**: 原生 ES6+，不依赖任何第三方库。
- **Iconfont**: 阿里巴巴矢量图标库。

## 📸 界面结构预览
![项目预览图](images/screenshot_1.png)
![项目预览图](images/screenshot_2.png)

## 🚀 运行项目
1. 克隆仓库：`git clone https://github.com/autopoet/RepositoryFirst.git`
2. 使用浏览器打开 `index.html`。

## 👤 关于作者
- **autopoet**
- 正在探索前端工程化的开发者。

---
*如果这个项目对你有启发，欢迎点个 Star 🌟！*
