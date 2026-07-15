# TIPA 旅遊匯聚 — 網站重建（Phase 3）

Static site: plain HTML + one shared CSS file + one small JS file. No build step. Host on any static hosting (Netlify, Cloudflare Pages, GitHub Pages) or existing web space.

## Structure

```
tipa/
├── index.html          主頁
├── courses.html        課程總覽（含 #funding 資助計劃）
├── course-detail.html  課程詳情範本（以領隊試前訓練課程示範）
├── about.html          關於本會
├── contact.html        聯絡及查詢
├── css/tipa.css        設計代碼（design tokens）+ 全部元件樣式
└── js/main.js          流動選單 + 課程篩選
```

## Conventions

- Design tokens live in `:root` of `css/tipa.css` (colours, spacing `--s-1…--s-9`, radius, shadow). Change a token once, it applies everywhere.
- Component classes use block__element / block--modifier naming (`.card__title`, `.btn--primary`).
- To add a course: copy a `.card` block in `courses.html` (set `data-category`), and duplicate `course-detail.html` as a new page.
- Schedule tables collapse to cards below 768px automatically — every `<td>` needs a `data-label` attribute (or class `no-label`).
- All headings/labels are Traditional Chinese; Noto Sans TC loaded from Google Fonts.

## Before going live — content to replace

Search the HTML for `[` to find every placeholder:

1. 課程日期、費用、名額、時數、課程編號（CPD 及文化課程）
2. 關於本會：成立年份、宗旨、委員會、歷程
3. 地址確認：網站現用 廣東道982號富誠商業中心1804室；舊申請表為觀塘地址；上課地點另為佐敦 — 請確認何者現行
4. 辦公時間
5. 報名步驟（course-detail.html 報名方法一節）
6. 查詢表格 endpoint：`contact.html` 內 `action="[FORM_ENDPOINT]"` — 建議註冊 Formspree（免費）並貼上網址，表格即會電郵至指定信箱
7. 收集個人資料聲明全文（由本會核實）
8. 會標（logo）圖檔 — 現以文字標誌代替；提供後可換入 `.brand`
9. 活動相片（about.html 會員活動）

## Accessibility notes

- WCAG 2.1 AA contrast throughout; visible focus rings; skip link; 44px tap targets; tables carry proper `scope`/`caption`; form fields all have visible labels; reduced-motion respected.
