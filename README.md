# LaTeX Learn App

這是一個簡單的 LaTeX 學習前端 MVP（React + Vite），提供：

- 左側課程/範本選單
- 中間 LaTeX 編輯器（textarea）
- 右側 KaTeX 即時預覽（主要支援數學式子與簡單片段）

注意：KaTeX 主要用於數學渲染，不會完整處理整個 .tex 文件或所有 LaTeX 宏。若要支援完整 TeX 編譯，可在未來加入 WASM TeX（例如 tectonic）或 server-side 編譯。

## 在 Windows PowerShell 上啟動 (建議)

打開 PowerShell，cd 到專案資料夾：

```powershell
cd "c:\Users\USER\OneDrive\Desktop\LATEXAPP"
```

安裝依賴並啟動開發伺服器：

```powershell
npm install
npm run dev
```

預設會在 http://localhost:5173/ 開啟（或終端會顯示實際埠號）。

## 下一步（建議）

- 加入完整 TeX 編譯（Tectonic 或 LaTeX server）以支援文件級渲染
- 新增互動教學步驟與測驗
- 儲存使用者草稿（localStorage 或後端）
- 部署到靜態主機（Netlify / Vercel）或設定後端 API

---

如果你想，我可以：

- 幫你把 KaTeX 改為 client-side 動態載入或改用 CDN
- 加入「存檔」功能（localStorage）
- 連接後端以執行完整 LaTeX 編譯
