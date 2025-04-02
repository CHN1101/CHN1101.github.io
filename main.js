/**
 * 网站主要脚本文件
 * 包含导航切换、语言切换和页面初始化功能
 */

// 当文档加载完成后执行
document.addEventListener('DOMContentLoaded', function() {
    // 获取DOM元素
    const aboutLink = document.getElementById('about-link');
    const educationLink = document.getElementById('education-link');
    const homeContent = document.getElementById('home-content');
    const aboutContent = document.getElementById('about-content');
    const educationContent = document.getElementById('education-content');
    const langSwitch = document.getElementById('lang-switch');
    
    // 获取保存的语言设置或设置默认语言
    let currentLang = localStorage.getItem('userLanguage') || 'zh';
    document.documentElement.setAttribute('lang', currentLang);
    
    // 初始化页面文本
    updatePageContent(currentLang);
    
    // 添加About点击事件监听器
    aboutLink.addEventListener('click', function(e) {
        e.preventDefault();
        
        // 切换内容显示
        if (aboutContent.classList.contains('active')) {
            // 如果About内容已经显示，切换回主页内容
            homeContent.classList.remove('hidden');
            aboutContent.classList.remove('active');
            // 确保Education内容也被隐藏
            educationContent.classList.remove('active');
        } else {
            // 如果About内容未显示，显示About内容
            homeContent.classList.add('hidden');
            aboutContent.classList.add('active');
            // 确保Education内容被隐藏
            educationContent.classList.remove('active');
        }
    });
    
    // 添加Education点击事件监听器
    educationLink.addEventListener('click', function(e) {
        e.preventDefault();
        
        // 切换内容显示
        if (educationContent.classList.contains('active')) {
            // 如果Education内容已经显示，切换回主页内容
            homeContent.classList.remove('hidden');
            educationContent.classList.remove('active');
            // 确保About内容也被隐藏
            aboutContent.classList.remove('active');
        } else {
            // 如果Education内容未显示，显示Education内容
            homeContent.classList.add('hidden');
            educationContent.classList.add('active');
            // 确保About内容被隐藏
            aboutContent.classList.remove('active');
        }
    });
    
    // 添加语言切换事件监听器
    langSwitch.addEventListener('click', function(e) {
        e.preventDefault();
        
        // 切换语言
        currentLang = currentLang === 'zh' ? 'en' : 'zh';
        
        // 更新HTML语言属性
        document.documentElement.setAttribute('lang', currentLang);
        
        // 更新页面内容
        updatePageContent(currentLang);
        
        // 保存用户语言选择
        localStorage.setItem('userLanguage', currentLang);
    });

});

/**
 * 更新页面所有可翻译内容
 * @param {string} lang - 当前语言代码 ('zh' 或 'en')
 */
function updatePageContent(lang) {
    // 更新所有带data-lang-key属性的元素
    document.querySelectorAll('[data-lang-key]').forEach(element => {
        const key = element.getAttribute('data-lang-key');
        if (langData[lang][key]) {
            // 特殊处理水印元素
            if (element.classList.contains('watermark')) {
                element.innerHTML = `<i>${langData[lang][key]}</i>`;
            } else if (key === 'updated') {
                // 对于需要支持HTML的元素，使用innerHTML
                element.innerHTML = langData[lang][key];
            } else {
                element.textContent = langData[lang][key];
            }
        }
    });
}

// 改进的滚动管理 - 保持原始位置
document.addEventListener('DOMContentLoaded', function() {
    // 监听内容显示
    const aboutLink = document.getElementById('about-link');
    const educationLink = document.getElementById('education-link');
    
    // 添加点击事件监听
    if (aboutLink) {
        aboutLink.addEventListener('click', function() {
            setTimeout(function() {
                setupScrollIfNeeded('about-content');
            }, 300);
        });
    }
    
    if (educationLink) {
        educationLink.addEventListener('click', function() {
            setTimeout(function() {
                setupScrollIfNeeded('education-content');
            }, 300);
        });
    }
    
    // 监听语言切换
    const langSwitch = document.getElementById('lang-switch');
    if (langSwitch) {
        langSwitch.addEventListener('click', function() {
            setTimeout(function() {
                // 检查当前显示的内容
                const aboutContent = document.getElementById('about-content');
                const educationContent = document.getElementById('education-content');
                
                if (aboutContent && aboutContent.classList.contains('active')) {
                    setupScrollIfNeeded('about-content');
                }
                
                if (educationContent && educationContent.classList.contains('active')) {
                    setupScrollIfNeeded('education-content');
                }
            }, 300);
        });
    }
    
    // 监听窗口大小变化
    window.addEventListener('resize', function() {
        // 检查当前显示的内容
        const aboutContent = document.getElementById('about-content');
        const educationContent = document.getElementById('education-content');
        
        if (aboutContent && aboutContent.classList.contains('active')) {
            setupScrollIfNeeded('about-content');
        }
        
        if (educationContent && educationContent.classList.contains('active')) {
            setupScrollIfNeeded('education-content');
        }
    });
});

/**
 * 为内容区域设置滚动（如果需要）
 * @param {string} contentId - 内容区域ID
 */
function setupScrollIfNeeded(contentId) {
    const contentElement = document.getElementById(contentId);
    if (!contentElement || !contentElement.classList.contains('active')) return;
    
    // 清除现有的滚动结构（如果有）
    if (contentElement.classList.contains('content-scrollable')) {
        resetContent(contentElement);
    }
    
    // 计算视口高度的40%作为阈值
    const threshold = window.innerHeight * 0.4;
    
    // 获取内容高度
    const contentRect = contentElement.getBoundingClientRect();
    
    // 如果内容高度超过视口高度的60%，应用滚动
    if (contentRect.height > window.innerHeight * 0.6) {
        applyScrolling(contentElement);
    }
}

/**
 * 应用滚动结构
 * @param {HTMLElement} element - 内容元素
 */
function applyScrolling(element) {
    // 获取标题元素
    const title = element.querySelector('h2');
    if (!title) return;
    
    // 计算原始标题边距
    const titleStyle = window.getComputedStyle(title);
    const originalMarginBottom = titleStyle.marginBottom;
    
    // 标记为可滚动
    element.classList.add('content-scrollable');
    
    // 保存原始内容
    const originalContent = element.innerHTML;
    
    // 创建标题容器
    const titleContainer = document.createElement('div');
    titleContainer.className = 'content-title';
    
    // 复制标题并保留其样式
    const titleClone = title.cloneNode(true);
    titleContainer.appendChild(titleClone);
    
    // 创建内容容器
    const contentBody = document.createElement('div');
    contentBody.className = 'content-body';
    
    // 创建临时容器以提取内容
    const tempDiv = document.createElement('div');
    tempDiv.innerHTML = originalContent;
    tempDiv.querySelector('h2').remove(); // 移除标题
    contentBody.innerHTML = tempDiv.innerHTML;
    
    // 清空原始内容
    element.innerHTML = '';
    
    // 添加新结构
    element.appendChild(titleContainer);
    element.appendChild(contentBody);
}

/**
 * 重置内容结构
 * @param {HTMLElement} element - 内容元素
 */
function resetContent(element) {
    // 保存内容以恢复原始结构
    const title = element.querySelector('.content-title h2');
    const body = element.querySelector('.content-body');
    
    if (title && body) {
        // 移除滚动标记
        element.classList.remove('content-scrollable');
        
        // 恢复原始内容
        const originalHTML = title.outerHTML + body.innerHTML;
        element.innerHTML = originalHTML;
    }
}

/**
 * 添加新内容指南:
 * 
 * 1. 在HTML中添加新的结构元素，并添加 data-lang-key 属性
 * 2. 在 languages.js 文件中为新元素添加中英文翻译
 * 3. 如果需要添加新的页面或区域:
 *    - 在HTML中添加新的内容区块
 *    - 在导航中添加新的链接
 *    - 在此文件中添加新的事件监听器，参照已有的监听器模式
 * 
 * 例如，添加"摄影作品"区域:
 * 
 * // HTML中添加新链接和内容区块
 * // <a href="#" id="photography-link" data-lang-key="photography"></a>
 * // <div class="photography-content" id="photography-content">...</div>
 * 
 * // languages.js中添加翻译
 * // 'photography': '摄影作品', // 中文
 * // 'photography': 'Photography', // 英文
 * 
 * // 在此文件中添加事件监听
 * const photographyLink = document.getElementById('photography-link');
 * const photographyContent = document.getElementById('photography-content');
 * 
 * photographyLink.addEventListener('click', function(e) {
 *     e.preventDefault();
 *     
 *     if (photographyContent.classList.contains('active')) {
 *         homeContent.classList.remove('hidden');
 *         photographyContent.classList.remove('active');
 *         // 确保其他内容被隐藏
 *         aboutContent.classList.remove('active');
 *         educationContent.classList.remove('active');
 *     } else {
 *         homeContent.classList.add('hidden');
 *         photographyContent.classList.add('active');
 *         // 确保其他内容被隐藏
 *         aboutContent.classList.remove('active');
 *         educationContent.classList.remove('active');
 *     }
 * });
 */