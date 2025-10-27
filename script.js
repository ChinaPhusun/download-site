// 分类数据
const categories = [
    {
        id: 1,
        name: "系统工具"
    },
    {
        id: 2,
        name: "开发工具"
    },
    {
        id: 3,
        name: "办公软件"
    }
];

// 软件数据
const software = [
    {
        id: 1,
        categoryId: 1,
        name: "系统优化大师",
        version: "v5.6.2",
        size: "12.8MB",
        url: "files/system_optimizer.zip"
    },
    {
        id: 2,
        categoryId: 1,
        name: "驱动管理器",
        version: "v3.2.1",
        size: "8.5MB",
        url: "files/driver_manager.exe"
    },
    {
        id: 3,
        categoryId: 1,
        name: "安全卫士",
        version: "v8.9.5",
        size: "23.4MB",
        url: "files/security_guard.msi"
    },
    {
        id: 4,
        categoryId: 2,
        name: "代码编辑器",
        version: "v2.7.3",
        size: "45.1MB",
        url: "files/code_editor_setup.exe"
    },
    {
        id: 5,
        categoryId: 2,
        name: "数据库管理工具",
        version: "v4.1.0",
        size: "36.7MB",
        url: "files/db_manager.zip"
    },
    {
        id: 6,
        categoryId: 2,
        name: "版本控制系统",
        version: "v2.34.1",
        size: "28.3MB",
        url: "files/vcs_client.exe"
    },
    {
        id: 7,
        categoryId: 3,
        name: "文档处理套件",
        version: "v2023.1",
        size: "89.2MB",
        url: "files/office_suite_installer.exe"
    },
    {
        id: 8,
        categoryId: 3,
        name: "电子表格软件",
        version: "v7.8.5",
        size: "67.4MB",
        url: "files/spreadsheet_app.msi"
    },
    {
        id: 9,
        categoryId: 3,
        name: "演示文稿工具",
        version: "v6.2.3",
        size: "52.1MB",
        url: "files/presentation_tool.zip"
    }
];

// 根据分类ID获取分类下的软件
function getSoftwareByCategory(categoryId) {
    return software.filter(item => item.categoryId === categoryId);
}

// 渲染分类和软件
function renderCategories() {
    const container = document.getElementById('categories-container');
    
    categories.forEach(category => {
        const categoryElement = document.createElement('div');
        categoryElement.className = 'category';
        
        // 分类标题
        const header = document.createElement('div');
        header.className = 'category-header';
        header.innerHTML = `
            ${category.name}
            <span class="toggle-icon">▼</span>
        `;
        
        // 分类内容
        const content = document.createElement('div');
        content.className = 'category-content';
        
        // 添加表头
        const headerRow = document.createElement('div');
        headerRow.className = 'header-row';
        headerRow.innerHTML = `
            <span class="software-index">序号</span>
            <div class="header-info">
                <span class="header-title">软件名称</span>
                <span class="header-version">版本</span>
                <span class="header-size">大小</span>
            </div>
            <span>下载</span>
        `;
        content.appendChild(headerRow);
        
        // 添加软件列表
        const categorySoftware = getSoftwareByCategory(category.id);
        categorySoftware.forEach((item, index) => {
            const softwareItem = document.createElement('div');
            softwareItem.className = 'software-item';
            softwareItem.innerHTML = `
                <span class="software-index">${index + 1}</span>
                <div class="software-info">
                    <span class="software-title">${item.name}</span>
                    <span class="software-version">${item.version}</span>
                    <span class="software-size">${item.size}</span>
                </div>
                <a href="${item.url}" class="download-btn">下载</a>
            `;
            content.appendChild(softwareItem);
        });
        
        // 添加点击事件
        header.addEventListener('click', () => {
            categoryElement.classList.toggle('expanded');
        });
        
        // 组装分类元素
        categoryElement.appendChild(header);
        categoryElement.appendChild(content);
        
        container.appendChild(categoryElement);
    });
}

// 页面加载完成后渲染
window.addEventListener('DOMContentLoaded', renderCategories);