# Tasks

Work through these phases in order. Each phase builds on the last.

---

## Phase 1 — Setup & Orientation

**Goal:** Get your site live and start getting comfortable with Copilot.

- [ ] Fork the repo, clone it, open in VS Code
- [ ] Enable GitHub Pages (see README)
- [ ] Push a small change (e.g. update the page `<title>`) and confirm your site redeploys
- [ ] Open Copilot Chat, select all the code in `index.html`, and run `/explain`
  - Read through the explanation — does it match what you'd expect?
- [ ] **Warmup task:** Update the hero section (`index.html`) with your real name and a tagline
  - Try using inline chat (`Cmd+I` / `Ctrl+I`) on the hero text to get Copilot's help writing a bio or tagline

📓 **Log at least 1 prompt** in your `prompt-journal.md` from this phase.

---

## Phase 2 — Guided Tasks

**Goal:** Complete 4 concrete features using Copilot. For each one, you're given a *starter prompt* — but you're expected to refine it to get a result you're happy with.

---

### Task 2A — Personalize the About section

Update `index.html` and `style.css` to make the About section yours.

**Starter prompt to try:**
> "Write a short professional bio for a CS student interested in [your interests]. Keep it warm and approachable, 2–3 sentences."

- Replace the placeholder bio text with your real background
- Add or swap in a real photo (or a styled avatar/illustration)
- Adjust the layout or styling to your taste

📓 Log your refined prompt and what you changed.

---

### Task 2B — Add your real projects

Edit the `projects` array in `script.js` with your actual projects (class projects, side projects, research — anything counts).

**Starter prompt to try (in Copilot Chat with `script.js` attached via `#file`):**
> "Add a project entry for a [brief description of your project]. Include a title, 1-sentence description, and relevant tech tags."

- Add at least 2 real projects
- If a project has a GitHub repo or live demo, include the links

**Stretch:** Ask Copilot to modify the project card design in `style.css` — e.g. add a colored top border, an image thumbnail, or a hover animation.

📓 Log your prompts.

---

### Task 2C — Dark mode toggle

Add a dark mode button to the navbar and implement the toggle logic.

**Starter prompt to try (inline chat on the `toggleDarkMode` stub in `script.js`):**
> "Implement this dark mode toggle. It should switch a `data-theme='dark'` attribute on the `<body>` and save the preference to localStorage so it persists on reload."

Then in `style.css`, ask Copilot to generate the dark theme:
> "Add a `[data-theme='dark']` CSS block that overrides the custom properties in `:root` with a dark color scheme."

- Wire up the button in `index.html` (there's a `TODO` comment in the navbar)
- Test that the preference is remembered after a page refresh

📓 Log your prompts and note anything you had to fix manually.

---

### Task 2D — Improve mobile responsiveness

The starter site looks fine on desktop but needs work on smaller screens.

**Starter prompt to try (in Copilot Chat with `style.css` attached):**
> "Improve the responsive styles in this CSS file for screens under 600px. The nav links should stack or hide, the hero text should be smaller, and the projects grid should be single-column."

- Review what Copilot generates before accepting — does it make sense?
- Test by resizing your browser window or using DevTools device emulation

**Stretch:** Ask Copilot to add a hamburger menu for mobile nav.

📓 Log your prompts.

---

## Phase 3 — Your Independent Feature

**Goal:** Choose and build one feature entirely on your own, using Copilot as your collaborator. Write your own prompts from scratch.

Pick one (or propose your own):

| Feature | Hint |
|---|---|
| **GitHub repos section** | Fetch your real repos from the GitHub API and display them |
| **Animated hero** | Add a typing animation or fade-in effect to the hero heading |
| **Timeline / Experience** | Add a visual timeline of your education or experience |
| **Contact form with validation** | A form that validates inputs before "submitting" (can be static) |
| **Custom color theme picker** | Let visitors choose an accent color |
| **Scroll animations** | Elements fade/slide in as the user scrolls down |

**Before you code:** Consider sketching out your approach in plain language first. What HTML structure do you need? What CSS? What JS? You might even use the Copilot app (separate from VS Code) to talk through your plan before writing any code.

📓 Log **at least 3 prompts** from this phase — including at least one that didn't work well on the first try.

---

## Phase 4 — Reflect

Fill in `prompt-journal.md` completely (prompts from all phases).

Then write a short reflection (a few paragraphs, in your journal or as a conversation with your mentor) covering:

1. What feature are you most proud of? Why?
2. Describe a moment where Copilot gave you something wrong or unhelpful. What did you do?
3. What did you learn about writing better prompts?
4. What's one thing in the codebase that you now understand better than when you started?
5. Is there anything the site still needs that you'd want to tackle next?

---

## 📚 Reference Docs

You don't need to read any of these upfront — treat them as lookup references when you hit something unfamiliar.

**HTML & CSS**
- [MDN HTML reference](https://developer.mozilla.org/en-US/docs/Web/HTML/Reference) — every HTML element, what it does, and when to use it
- [MDN CSS reference](https://developer.mozilla.org/en-US/docs/Web/CSS/Reference) — every CSS property with examples
- [CSS-Tricks: A Complete Guide to Flexbox](https://css-tricks.com/snippets/css/a-guide-to-flexbox/) — visual reference for layout (the site uses flexbox throughout)
- [CSS-Tricks: A Complete Guide to Grid](https://css-tricks.com/snippets/css/complete-guide-grid/) — for the projects grid layout
- [Can I Use](https://caniuse.com/) — check if a CSS/JS feature works in modern browsers

**JavaScript**
- [MDN JavaScript reference](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference) — the authoritative JS reference
- [javascript.info](https://javascript.info/) — excellent beginner-to-intermediate JS guide; great for understanding concepts, not just syntax
- [MDN: Document.getElementById](https://developer.mozilla.org/en-US/docs/Web/API/Document/getElementById) and [querySelector](https://developer.mozilla.org/en-US/docs/Web/API/Document/querySelector) — how the JS in `script.js` interacts with the HTML
- [MDN: localStorage](https://developer.mozilla.org/en-US/docs/Web/API/Window/localStorage) — relevant for the dark mode task

**GitHub Pages & Actions**
- [GitHub Pages docs](https://docs.github.com/en/pages) — setup, custom domains, troubleshooting
- [GitHub Actions quickstart](https://docs.github.com/en/actions/writing-workflows/quickstart) — if you're curious how the auto-deploy workflow in `.github/workflows/deploy.yml` works

> 💡 **Tip:** Copilot is great at explaining unfamiliar code — but pairing it with MDN is even better. If Copilot gives you a CSS property or JS method you haven't seen, look it up on MDN to understand it properly before moving on.
