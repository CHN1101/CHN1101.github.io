/**
 * 背景切换功能
 * 用于随机切换网站背景图片及其对应水印
 */

document.addEventListener('DOMContentLoaded', function() {
    // 背景图片及其对应水印
    const backgrounds = [
        {
            file: 'DSC01624.jpg',
            watermark: 'The background photo was taken by CHN at Daikichiyama Observation Deck, Uji city.'
        },
        {
            file: 'DSC05718.JPG', // 替换为你实际的图片名称
            watermark: 'This background photo was taken by CHN at The Bund, Shanghai.' // 替换为实际水印
        },
        {
            file: 'DSC01167.JPG', // 替换为你实际的图片名称
            watermark: 'This background photo was taken by CHN at Tokyo Tower, Tokyo.' // 替换为实际水印
        },
        {
            file: 'DSC07487.JPG', // 替换为你实际的图片名称
            watermark: 'An eagle, taken by CHN on the Tibetan Plateau.' // 替换为实际水印
        }
        // 可以继续添加更多背景图片和水印
    ];
    
    // 创建背景切换按钮
    const bgSwitcherBtn = document.createElement('a');
    bgSwitcherBtn.href = '#';
    bgSwitcherBtn.className = 'social-icon';
    bgSwitcherBtn.id = 'bg-switcher';
    // 选项4: 相机图标
    bgSwitcherBtn.innerHTML = `
    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="custom-icon">
        <path d="M23 19a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h4l2-3h6l2 3h4a2 2 0 0 1 2 2z"></path>
        <circle cx="12" cy="13" r="4"></circle>
    </svg>
    `;
    
    // 获取社交图标容器
    const socialIcons = document.querySelector('.social-icons');
    // 获取邮件图标
    const emailIcon = document.querySelector('.social-icons a:first-child');
    
    // 插入背景切换按钮到邮件图标之前
    if (socialIcons && emailIcon) {
        socialIcons.insertBefore(bgSwitcherBtn, emailIcon);
    }
    
    // 添加按钮点击事件
    bgSwitcherBtn.addEventListener('click', function(e) {
        e.preventDefault();
        
        // 获取当前背景
        const hero = document.querySelector('.hero');
        const currentBgUrl = window.getComputedStyle(hero).backgroundImage;
        
        // 随机选择一个新背景（确保不是当前背景）
        let randomIndex;
        let currentIndex = -1;
        
        // 尝试找到当前背景的索引
        for (let i = 0; i < backgrounds.length; i++) {
            if (currentBgUrl.includes(backgrounds[i].file)) {
                currentIndex = i;
                break;
            }
        }
        
        // 如果只有一张背景图片，不执行切换
        if (backgrounds.length <= 1) return;
        
        // 随机选择一个不同的背景
        do {
            randomIndex = Math.floor(Math.random() * backgrounds.length);
        } while (randomIndex === currentIndex);
        
        // 获取新背景
        const newBackground = backgrounds[randomIndex];
        
        // 预加载新背景图片
        const img = new Image();
        img.src = 'images/' + newBackground.file;
        
        // 图片加载完成后更新背景和水印
        img.onload = function() {
            // 更新背景图片
            hero.style.backgroundImage = 'url("images/' + newBackground.file + '")';
            
            // 更新水印文本
            const watermarkSpan = document.querySelector('.watermark span');
            if (watermarkSpan) {
                watermarkSpan.textContent = newBackground.watermark;
            }
        };
    });
});