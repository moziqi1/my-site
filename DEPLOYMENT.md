# Cloudflare Pages 部署指南

## 前置条件
- GitHub 仓库已创建并同步（已完成）
- Cloudflare 账户（https://dash.cloudflare.com/sign-up）

## 部署步骤

### 1. 登录 Cloudflare 控制台
1. 访问 https://dash.cloudflare.com
2. 使用您的 Cloudflare 账户登录

### 2. 创建 Pages 项目
1. 在左侧菜单中点击 **Workers & Pages**
2. 点击 **Create application** 按钮
3. 选择 **Pages** 标签页
4. 点击 **Connect to Git**

### 3. 连接 GitHub 仓库
1. 选择 **GitHub** 作为 Git 提供商
2. 授权 Cloudflare 访问您的 GitHub 账户
3. 选择仓库：`moziqi1/my-site`
4. 点击 **Begin setup**

### 4. 配置构建设置
在 **Build settings** 部分配置以下内容：

**Project name**（项目名称）：
- 输入：`my-site`（或您喜欢的名称）

**Production branch**（生产分支）：
- 选择：`main`

**Framework preset**（框架预设）：
- 选择：`Vite`

**Build command**（构建命令）：
- 自动填充为：`npm run build`

**Build output directory**（构建输出目录）：
- 自动填充为：`dist`

### 5. 环境变量（可选）
本项目不需要额外的环境变量，可以跳过此步骤。

### 6. 开始部署
1. 点击 **Save and Deploy** 按钮
2. 等待部署完成（通常需要 1-3 分钟）

### 7. 查看部署结果
1. 部署成功后，您会看到一个 `.pages.dev` 域名
2. 点击链接即可访问您的网站！

## 自定义域名（可选）

### 添加自定义域名
1. 在项目页面点击 **Custom domains** 标签
2. 点击 **Set up a custom domain**
3. 输入您的域名
4. 按照提示完成 DNS 配置

## 后续部署

### 自动部署
- 每次您将代码推送到 `main` 分支时，Cloudflare Pages 会自动重新部署
- 您可以在项目的 **Deployments** 标签页查看部署历史

### 预览部署
- 您可以创建 Pull Request 来生成预览部署
- 预览部署会有独立的预览链接

## 常见问题

### 路由问题
如果刷新页面出现 404 错误，我们已经在 `public/_redirects` 文件中配置了重定向规则，Cloudflare Pages 会自动处理这个问题。

### 构建失败
- 确保 `package.json` 中的 `build` 脚本正确
- 检查 TypeScript 编译是否通过（运行 `npm run check`）

### 需要帮助？
访问 Cloudflare Pages 文档：https://developers.cloudflare.com/pages/
