// 静态分类数据
const categories = [
    { id: 1, name: '1. 开发工具', order: 1 },
    { id: 2, name: '2. 设计软件', order: 2 },
    { id: 3, name: '3. 办公软件', order: 3 },
    { id: 4, name: '4. 系统工具', order: 4 }
];

// 静态软件数据
const software = [
    { id: 1, name: 'Visual Studio Code', categoryId: 1, version: '1.85.0', size: '150 MB', url: 'files/vscode.zip' },
    { id: 2, name: 'Git', categoryId: 1, version: '2.43.0', size: '50 MB', url: 'files/git.zip' },
    { id: 3, name: 'Node.js', categoryId: 1, version: '20.10.0', size: '80 MB', url: 'files/nodejs.zip' },
    { id: 4, name: 'Figma', categoryId: 2, version: '118.0.0', size: '90 MB', url: 'files/figma.zip' },
    { id: 5, name: 'Inkscape', categoryId: 2, version: '1.3.2', size: '120 MB', url: 'files/inkscape.zip' },
    { id: 6, name: 'GIMP', categoryId: 2, version: '2.10.34', size: '140 MB', url: 'files/gimp.zip' },
    { id: 7, name: 'LibreOffice', categoryId: 3, version: '7.5.8', size: '250 MB', url: 'files/libreoffice.zip' },
    { id: 8, name: 'WPS Office', categoryId: 3, version: '11.1.0', size: '180 MB', url: 'files/wps.zip' },
    { id: 9, name: 'OnlyOffice', categoryId: 3, version: '7.4.1', size: '200 MB', url: 'files/onlyoffice.zip' },
    { id: 10, name: '7-Zip', categoryId: 4, version: '23.01', size: '2 MB', url: 'files/7zip.zip' },
    { id: 11, name: 'CCleaner', categoryId: 4, version: '6.18', size: '14 MB', url: 'files/ccleaner.zip' },
    { id: 12, name: 'PotPlayer', categoryId: 4, version: '220818', size: '28 MB', url: 'files/potplayer.zip' }
];

// 渲染分类和软件列表
function renderCategories() {
    const container = document.getElementById('categories-container');
    container.innerHTML = '';
    
    // 按顺序排序分类
    const sortedCategories = [...categories].sort((a, b) => a.order - b.order);
    
    sortedCategories.forEach((category, index) => {
        // 获取该分类下的软件
        const categorySoftware = software.filter(soft => soft.categoryId === category.id);
        
        // 创建分类元素
        const categoryDiv = document.createElement('div');
        categoryDiv.className = `category ${index === 0 ? 'expanded' : ''}`; // 默认展开第一个分类
        categoryDiv.id = `category-${category.id}`;
        
        categoryDiv.innerHTML = `
            <div class="category-header" onclick="toggleCategory('category-${category.id}')">
                <span>${category.name}</span>
                <span class="toggle-icon">▼</span>
            </div>
            <div class="category-content">
                <div class="header-row">
                    <div class="software-index"></div>
                    <div class="header-info">
                        <div class="header-title">软件标题</div>
                        <div class="header-version">版本</div>
                        <div class="header-size">大小</div>
                        <div>下载</div>
                    </div>
                </div>
                <div id="category-${category.id}-software">
                </div>
            </div>
        `;
        
        container.appendChild(categoryDiv);
        
        // 渲染该分类下的软件
        const softwareContainer = document.getElementById(`category-${category.id}-software`);
        
        if (categorySoftware.length > 0) {
            categorySoftware.forEach((soft, index) => {
                const item = document.createElement('div');
                item.className = 'software-item';
                item.innerHTML = `
                    <div class="software-index">${index + 1}.</div>
                    <div class="software-info">
                        <div class="software-title">${soft.name}</div>
                        <div class="software-version">${soft.version}</div>
                        <div class="software-size">${soft.size}</div>
                        <a href="${soft.url}" class="download-btn">下载</a>
                    </div>
                `;
                softwareContainer.appendChild(item);
            });
        } else {
            const emptyItem = document.createElement('div');
            emptyItem.style.textAlign = 'center';
            emptyItem.style.color = '#999';
            emptyItem.style.padding = '20px';
            emptyItem.textContent = '该分类下暂无软件';
            softwareContainer.appendChild(emptyItem);
        }
    });
}

// 切换分类的展开/折叠状态，同时折叠其他分类
function toggleCategory(categoryId) {
    // 先折叠所有分类
    document.querySelectorAll('.category').forEach(cat => {
        cat.classList.remove('expanded');
    });
    
    // 然后展开当前分类
    const currentCategory = document.getElementById(categoryId);
    currentCategory.classList.add('expanded');
}

// 初始化页面
document.addEventListener('DOMContentLoaded', function() {
    renderCategories();
});