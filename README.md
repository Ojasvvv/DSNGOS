<div align="center">

# ⬛ SKILLSYNC

### *Your code doesn't lie.*

**Proof-Based Skill Intelligence Platform**

[![Next.js](https://img.shields.io/badge/Next.js_15-black?style=for-the-badge&logo=next.js&logoColor=white)](https://nextjs.org)
[![TypeScript](https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white)](https://www.typescriptlang.org)
[![Groq](https://img.shields.io/badge/Groq_LLaMA_70B-F54A00?style=for-the-badge&logo=groq&logoColor=white)](https://groq.com)
[![Recharts](https://img.shields.io/badge/Recharts-22C55E?style=for-the-badge)](https://recharts.org)

---

```
╔════════════════════════════════════════════════════════════════╗
║  SKILLSYNC  ·  SYSTEM ACTIVE                 ↑ ONLINE        ║
╠════════════════════════════════════════════════════════════════╣
║  Connecting GitHub API... ✓    LeetCode API... ✓    AI... ✓   ║
╚════════════════════════════════════════════════════════════════╝
```

</div>

---

## 🧠 What is SkillSync?

SkillSync is a **proof-based skill intelligence platform** that connects your real coding activity — not your résumé, not your claims — and compiles it into an undeniable technical portfolio backed by live data.

It extracts **real signal** from your GitHub repositories and LeetCode activity, maps it against 120K+ live job market listings, and uses **Groq's LLaMA-3.3-70B** to generate a personalized, ruthless improvement roadmap.

---

## ✨ Features

```
┌─────────────────────────────────────────────────────────────────┐
│                                                                 │
│   🔬  LIVE DATA INGESTION         Pull real GitHub & LC stats   │
│   📊  VISUAL ANALYTICS            Radar + Bar + Ring charts     │
│   🤖  AI ROADMAP GENERATION       Groq LLaMA 70B powered        │
│   🎯  MARKET INTELLIGENCE         Role-specific job gap analysis│
│   🔐  SECURE API KEY HANDLING     Keys never leave the server   │
│   🌐  CORS-FREE                   Native API calls, no proxies  │
│   ⚡  SELF-CONTAINED              Single Next.js deployment     │
│                                                                 │
└─────────────────────────────────────────────────────────────────┘
```

---

## 🏗️ Architecture

```
 Browser (React)                   Next.js Server              External APIs
 ──────────────                    ──────────────              ─────────────
 ┌──────────────┐                  ┌──────────────┐
 │  Input Panel │ ─── PAT Token ──▶│  GitHub API  │ ◀────────── api.github.com
 │              │ ─── LC Username ▶│  LC Wrapper  │ ◀── alfa-leetcode-api
 │              │                  │              │
 │  Dashboard   │ ◀── JSON Data ───│  /api/analyze│ ──▶ api.groq.com
 │  ├ CoreMetrics                  │  (secure)    │        │
 │  ├ SkillRings                   │              │    LLaMA-3.3-70B
 │  ├ StatsCharts                  │  GROQ_API_KEY│
 │  ├ Heatmap                      │  (.env.local)│
 │  ├ MarketIntel                  └──────────────┘
 │  └ AI Roadmap│
 └──────────────┘
```

---

## 📊 Dashboard Sections

| Section | Data Source | Visualisation |
|---|---|---|
| **Core Metrics** | GitHub + LeetCode + AI | Block progress bars |
| **Skill & Difficulty** | GitHub Languages + LeetCode | Language bars + SVG Rings |
| **Stats Charts** | GitHub + LeetCode | Radar · Bar · Horizontal Bar |
| **Commit Heatmap** | GitHub Activity | 52-week activity grid |
| **DSA Topics** | AI Analysis | Topic strength matrix |
| **Market Intelligence** | AI + Role | Demand table + score |
| **AI Roadmap** | Groq LLaMA 70B | 3-month timeline |
| **Micro Projects** | AI | Recommended project ideas |

---

## 🔌 API Layer

### 1 · GitHub REST API
```
GET https://api.github.com/users/:username          → Profile data
GET https://api.github.com/users/:username/repos    → Repositories & Languages
Authorization: Bearer <GITHUB_PAT>                  → 5,000 req/hr limit
```

### 2 · Alfa LeetCode API *(CORS-safe wrapper)*
```
GET https://alfa-leetcode-api.onrender.com/:user/solved   → Solved counts
GET https://alfa-leetcode-api.onrender.com/:user          → Rank & reputation
```

### 3 · Groq API *(Server-side only)*
```
POST https://api.groq.com/openai/v1/chat/completions
Model: llama-3.3-70b-versatile
Key: process.env.GROQ_API_KEY  ← Never exposed to the browser
```

---

## 🚀 Getting Started

### Prerequisites
- Node.js `>= 18`
- A [Groq API Key](https://console.groq.com/) *(free tier available)*
- A [GitHub Personal Access Token](https://github.com/settings/tokens) *(optional, for higher rate limits)*

### Installation

```bash
# 1. Clone the repository
git clone https://github.com/your-username/skillsync
cd skillsync

# 2. Install dependencies
npm install

# 3. Set up environment variables
cp .env.local.example .env.local
```

### Environment Variables

Create a `.env.local` file at the root:

```env
# Required — Groq LLM key (never exposed to browser)
GROQ_API_KEY=gsk_xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
```

### Run the Dev Server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) 🎉

---

## 🖥️ Usage

```
 Step 1 ──▶  Paste your GitHub Personal Access Token
 Step 2 ──▶  Enter your GitHub username
 Step 3 ──▶  Enter your LeetCode username
 Step 4 ──▶  Select your target role (SWE / ML ENG / DATA / DEVOPS)
 Step 5 ──▶  Hit RUN ANALYSIS →
 Step 6 ──▶  Watch your entire technical DNA render in real time
```

---

## 📁 Project Structure

```
skillsync/
├── src/
│   ├── app/
│   │   ├── api/
│   │   │   └── analyze/
│   │   │       └── route.ts        ← Groq backend route
│   │   ├── globals.css             ← Terminal design system
│   │   ├── layout.tsx              ← Font loading (next/font/google)
│   │   └── page.tsx                ← Main application shell
│   │
│   ├── components/
│   │   ├── dashboard/
│   │   │   ├── core-metrics.tsx    ← Top 4 KPI cards
│   │   │   ├── skill-difficulty.tsx← Language bars + LC rings
│   │   │   ├── stats-charts.tsx    ← Radar + Bar charts (Recharts)
│   │   │   ├── commit-heatmap.tsx  ← 52-week activity grid
│   │   │   ├── dsa-topics.tsx      ← AI topic breakdown
│   │   │   ├── market-intelligence.tsx ← Job market analysis
│   │   │   ├── ai-roadmap.tsx      ← AI 3-month roadmap
│   │   │   └── micro-projects.tsx  ← Project suggestions
│   │   ├── navbar.tsx
│   │   └── ticker.tsx              ← Scrolling status ticker
│   │
│   └── lib/
│       └── api.ts                  ← GitHub + LeetCode fetch utils
│
├── .env.local                      ← Secrets (gitignored)
└── package.json
```

---

## 🎨 Design System

The UI is inspired by a professional terminal / data-room aesthetic:

```css
--bg      : #0a0a0a  /* Near-black base */
--bg1     : #111111  /* Card background */
--gold    : #f5a623  /* Primary accent   */
--green   : #22c55e  /* Success / online */
--red     : #ef4444  /* Warning / danger */
--blue    : #3b82f6  /* Info accent      */
--purple  : #a78bfa  /* AI / roadmap     */

Font Stack:
  Syne        → Display headings (Extrabold 800)
  IBM Plex Mono → All monospace labels, values, code
  IBM Plex Sans → Body text
```

---

## 🛡️ Security

- `GROQ_API_KEY` lives **exclusively** in `.env.local` and is only read by the Next.js server runtime — it never reaches the browser bundle.
- GitHub PAT is submitted directly from the browser to `api.github.com` over HTTPS. It is never stored, logged, or forwarded to any server.
- `.env.local` is **gitignored** by default.

---

## 🗺️ Roadmap

- [ ] Real GitHub commit history via GraphQL
- [ ] Codeforces & CodeChef live API integration
- [ ] PDF report export
- [ ] User authentication & history persistence
- [ ] Embeddable portfolio card
- [ ] Vercel / Netlify one-click deploy button

---

## 📜 License

MIT © SkillSync · Built for judges, not recruiters.

---

<div align="center">

*"Your commit history doesn't lie. Your skill bars shouldn't either."*

**⬛ SKILLSYNC**

</div>
