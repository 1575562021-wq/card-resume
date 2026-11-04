# Zoey Resume26.11

邹敏婷 / Zoey 的纸质风格网页简历卡：开启仪式 → 展开卡片 → 职能 / 技能 / 平台作品链接。

## 本地运行

```bash
npm install
npm run dev
```

浏览器打开终端提示的地址（默认 `http://127.0.0.1:43126`）。

```bash
npm run build    # 产出 dist/
npm run preview  # 预览构建结果
```

## 部署到 GitHub Pages（公网域名）

1. 在 GitHub 新建仓库，把本项目推上去。
2. 仓库 **Settings → Pages**：
   - Source 选 **GitHub Actions**
3. 推送到 `main` 后，工作流 `.github/workflows/deploy-pages.yml` 会自动构建并发布。
4. 发布完成后，Pages 会给出类似：

   `https://<你的用户名>.github.io/<仓库名>/`

若使用 **用户主页仓库**（`<username>.github.io`），同样可用该工作流；站点根路径已用相对路径 `base: './'`，一般无需改配置。

## 内容结构

- 身份：照片、中英文名、电话
- 职能 · AI内容运营：知乎推文、微信公众号（含技能标签）
- 职能 · 产品经理：鹏程信达、originlinks
