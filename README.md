# Portfolio Site — Starter Kit

> **Assignment:** Build and deploy your personal portfolio website using GitHub Copilot.

You'll use AI-assisted coding to customize this template into a real portfolio you can share with employers, internships, and graduate schools. Along the way you'll practice writing effective prompts, using different Copilot features in VS Code, and working with GitHub Pages.

**No framework required.** This starter uses plain HTML, CSS, and JavaScript — no React, no npm, no build step. That's intentional: it keeps the focus on Copilot and the fundamentals, and means you can open `index.html` directly in a browser. If you're curious about frameworks, Phase 3 is a good place to experiment with one — but you definitely don't need to.

---

## 🚀 Getting Started

### 1. Fork this repo

Click **Fork** (top right on GitHub) to create your own copy under your account.

### 2. Clone it locally

```bash
git clone https://github.com/YOUR-USERNAME/portfolio-starter.git
cd portfolio-starter
```

Open the folder in VS Code:

```bash
code .
```

### 3. Enable GitHub Pages

1. Go to your forked repo on GitHub → **Settings → Pages**
2. Under **Source**, select **GitHub Actions**
3. That's it — every push to `main` will auto-deploy your site

Your site will be live at: `https://YOUR-USERNAME.github.io/portfolio-starter/`

### ⚙️ What happens when you push?

Every time you push to `main`, a **CI/CD pipeline** runs automatically. Here's what that means:

- **CI (Continuous Integration):** your code is picked up by GitHub's servers the moment it lands on `main`
- **CD (Continuous Deployment):** GitHub Actions runs the workflow in `.github/workflows/deploy.yml`, which packages your files and publishes them to GitHub Pages

You can watch it happen in real time: go to your repo on GitHub → **Actions** tab. You'll see a workflow run appear within seconds of pushing. It usually takes about 1 minute to complete — that's the delay between pushing code and seeing your live site update.

This is the same pipeline pattern used in real production software, just much simpler. In a professional codebase, CI/CD might also run tests, lint code, and deploy to multiple environments — but the core idea is the same: *push code, automation takes it the rest of the way.*

> ✅ **Verify it works**: After your first push, check the Actions tab, wait for the green checkmark, then visit your URL.

---

## 🤖 Using Copilot in VS Code

This assignment is designed to give you hands-on experience with several Copilot features. Here's a quick reference:

| Feature | How to use it | Best for |
| --- | --- | --- |
| **Inline completion** | Just start typing — accept with `Tab` | Writing code fast |
| **Inline chat** | `Cmd+I` / `Ctrl+I` on selected code | Editing a specific block |
| **Copilot Chat (Ask)** | Open Chat panel → Ask mode | Questions, explanations |
| **Copilot Chat (Edit)** | Chat panel → Edit mode | Making changes across files |
| **Copilot Chat (Agent)** | Chat panel → Agent mode | Larger multi-step tasks |
| **`/explain`** | Type `/explain` in chat | Understanding unfamiliar code |
| **`/fix`** | Type `/fix` in chat | Debugging errors |
| **`#file` references** | Type `#` in chat to attach a file | Giving Copilot more context |

### Tips for writing better prompts

- **Be specific about what you want and where**: `"In the hero section of index.html, add a subtitle that animates in on page load using CSS"` is much better than `"add animation"`
- **Give context about your constraints**: `"without using any external libraries"`, `"following the existing CSS variable naming style"`
- **Iterate**: If the first result isn't right, don't just accept it. Tell Copilot what to change: `"Make the animation slower and start from the left instead"`
- **Ask for explanations**: After Copilot generates code, ask `"Can you explain what this does?"` — understanding what you accept is part of the job
- **Use `#file` to give Copilot context**: Attach `style.css` when asking about styles, `script.js` when asking about data

---

## 📁 Project Structure

```javascript
portfolio-starter/
├── index.html              # Main page — all sections are here
├── style.css               # All styles, using CSS custom properties
├── script.js               # Data arrays and rendering logic
├── prompt-journal.md       # Your prompt log (fill this in as you work!)
├── .github/
│   ├── copilot-instructions.md   # Helps Copilot understand this project
│   └── workflows/
│       └── deploy.yml      # Auto-deploys to GitHub Pages on push
└── TASKS.md                # Step-by-step task guide
```

---

## 📝 Your Deliverables

1. **Deployed portfolio site** — your live GitHub Pages URL
2. **Completed `prompt-journal.md`** — your log of prompts, results, and reflections
3. **Brief walkthrough** — a short conversation (or written summary) sharing what you built, what worked, and what surprised you

See `TASKS.md` for the full task breakdown.