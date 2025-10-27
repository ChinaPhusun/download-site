# GitHub下载站

这是一个基于GitHub Pages的简单下载站，用于分享各种资源文件。

## 功能特点

- 📁 美观的文件列表展示
- ⚡ 支持直接下载和Release下载
- 🌐 全球CDN加速
- 🔒 HTTPS安全连接
- 📱 响应式设计，支持移动设备

## 文件结构

```
/
├── index.html        # 主页面，展示文件列表
├── README.md         # 项目说明文档
├── files/            # 存储小型文件（<100MB）
│   ├── example1.zip
│   └── example2.pdf
└── .gitignore        # Git忽略文件配置
```

## 使用说明

### 1. 添加新文件

- **小型文件**（<100MB）：直接放入 `files/` 目录
- **大型文件**（>100MB）：使用GitHub Releases功能上传

### 2. 更新下载链接

编辑 `index.html` 文件，更新文件卡片中的下载链接：

- **直接下载链接格式**：
  ```
  https://github.com/[username]/[repo]/raw/main/files/[filename]
  ```

- **Release下载链接格式**：
  ```
  https://github.com/[username]/[repo]/releases/download/[tag]/[filename]
  ```

### 3. 启用GitHub Pages

1. 登录GitHub，创建新仓库
2. 上传所有文件
3. 进入仓库Settings → Pages
4. 选择main分支的根目录，点击Save
5. 访问生成的URL即可看到下载站

## 常见问题

### 文件大小限制
- 单个文件大小上限：100MB（直接存储）
- 超过100MB的文件请使用GitHub Releases
- 仓库总容量建议不超过1GB

### 下载速度优化
- 对于高并发下载，可以考虑使用jsDelivr CDN加速：
  ```
  https://cdn.jsdelivr.net/gh/[username]/[repo]@main/files/[filename]
  ```

## 许可证

MIT License