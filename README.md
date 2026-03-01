# Who Wants to Be a Crorepati?

A small browser game inspired by the popular quiz show. Built with plain HTML, CSS and JavaScript — no build step required.

<img width="1919" height="1079" alt="Screenshot 2026-03-01 130400" src="https://github.com/user-attachments/assets/224ed0c3-700c-40f8-b17b-322085b02d70" />


## Features

- Clean responsive UI (see `style.css`).
- Prize ladder with safe levels (Q5 and Q10).
- Local best score persisted in `localStorage`.
- Simple question format defined in `questions.js`.

## Quick Start — Run locally

Right click index.html - Open with Live Server

## Project structure

- `index.html` — main app shell and UI.
- `style.css` — all styles and layout.
- `questions.js` — question bank (edit to add/change questions).
- `script.js` — game logic, scoring, and UI wiring.
- `README.md`, `LICENSE` — project docs and license.

## Questions format

The game reads an array named `QUESTIONS` from `questions.js`. Each entry should look like:

```js
{
  question: "What is the capital of X?",
  options: ["A","B","C","D"],
  correctIndex: 1 // zero-based index (0..3)
}
```

When you modify `questions.js`, keep the same field names and array shape.

## Customization

- Prize values: edit the `PRIZES` array inside `script.js`.
- Safe levels: change `SAFE_LEVELS` in `script.js` (currently Q5 and Q10).
- Lifelines are present in the UI but disabled by default; you can implement their behavior in `script.js`.

## How the game works 

- A set of questions is shuffled and the top N (matching `PRIZES.length`) are used.
- Correct answer advances you; a wrong answer ends the game and you take the last safe prize.
- Best (local) prize is stored in `localStorage` under `wcbc_best`.

## License

This project is released under the MIT License. See `LICENSE` for details.
