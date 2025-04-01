# 个人网站维护指南

## 文件结构

- `index.html` - 网站主要HTML结构
- `styles.css` - 所有样式设置
- `languages.js` - 多语言翻译数据
- `main.js` - 主要JavaScript功能

## 如何添加或修改内容

### 修改现有内容

如果需要修改现有内容的文本，只需编辑 `languages.js` 文件中相应的文本即可，不需要修改HTML文件。例如：

```javascript
// 修改"关于"页面的问候语
'zh': {
    'greeting': '您好，我是程昊楠，这是我的更新后的个人网站。',
},
'en': {
    'greeting': 'Hello, I am Haonan Cheng, and this is my updated personal website.',
}
```

### 添加新内容

如果要添加新的内容区块（如"项目"、"摄影作品"等），需要进行以下步骤：

1. 在 `index.html` 中添加新的HTML结构，并使用 `data-lang-key` 标记需要翻译的文本

```html
<!-- 添加导航链接 -->
<a href="#" id="projects-link" data-lang-key="projects"></a>

<!-- 添加内容区块 -->
<div class="projects-content" id="projects-content">
    <h2 class="projects-title" data-lang-key="projectsTitle"></h2>
    <div class="project-item">
        <h3 data-lang-key="project1Title"></h3>
        <p data-lang-key="project1Desc"></p>
    </div>
</div>
```

2. 在 `languages.js` 中添加相应