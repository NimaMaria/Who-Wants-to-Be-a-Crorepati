const PRIZES = [
  1000, 2000, 5000, 10000, 20000,
  50000, 100000, 250000, 500000, 1000000,
  2500000, 5000000
];

const SAFE_LEVELS = new Set([4, 9]);

// DOM
const qNumberEl = document.getElementById("qNumber");
const statusEl = document.getElementById("status");
const questionTextEl = document.getElementById("questionText");
const optionsEl = document.getElementById("options");

const safePrizeEl = document.getElementById("safePrize");
const currentPrizeEl = document.getElementById("currentPrize");
const bestPrizeEl = document.getElementById("bestPrize");

const ladderListEl = document.getElementById("ladderList");

const nextBtn = document.getElementById("nextBtn");
const quitBtn = document.getElementById("quitBtn");
const restartBtn = document.getElementById("restartBtn");
const shareBtn = document.getElementById("shareBtn");

const resultCard = document.getElementById("resultCard");
const resultTitle = document.getElementById("resultTitle");
const resultText = document.getElementById("resultText");

// Lifeline buttons (all disabled by design)
const life5050Btn = document.getElementById("life5050");
const lifeHintBtn = document.getElementById("lifeHint");
const lifeSkipBtn = document.getElementById("lifeSkip");
const lifeTimerBtn = document.getElementById("lifeTimer");
const lifeAudienceBtn = document.getElementById("lifeAudience");
const lifePhoneBtn = document.getElementById("lifePhone");

// Unused UI blocks (kept for future)
const hintBox = document.getElementById("hintBox");
const timerBox = document.getElementById("timerBox");

// State
let questions = [];
let qIndex = 0;

let locked = false;
let selectedIndex = null;

let safePrize = 0;
let bestPrize = Number(localStorage.getItem("wcbc_best") || 0);

function formatINR(num){
  return "₹" + Number(num).toLocaleString("en-IN");
}

function shuffle(arr){
  const a = [...arr];
  for(let i = a.length - 1; i > 0; i--){
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

function setStatus(text, type=""){
  statusEl.textContent = text;
  statusEl.style.color =
    type === "good" ? "var(--good)" :
    type === "bad" ? "var(--bad)" :
    type === "warn" ? "var(--warn)" :
    "var(--muted)";
}

function updateMeta(){
  safePrizeEl.textContent = formatINR(safePrize);
  const cur = PRIZES[qIndex] ?? 0;
  currentPrizeEl.textContent = cur ? formatINR(cur) : "—";
  bestPrizeEl.textContent = formatINR(bestPrize);
}

function buildLadder(){
  ladderListEl.innerHTML = "";
  for(let i = 0; i < PRIZES.length; i++){
    const li = document.createElement("li");
    li.className = "ladder-item";
    li.dataset.index = String(i);

    if(SAFE_LEVELS.has(i)) li.classList.add("safe");

    li.innerHTML = `
      <div class="q">Q${i+1}</div>
      <div class="p">${formatINR(PRIZES[i])}</div>
    `;
    ladderListEl.appendChild(li);
  }
}

function highlightLadder(){
  ladderListEl.querySelectorAll(".ladder-item").forEach((el) => {
    el.classList.remove("active");
    if(Number(el.dataset.index) === qIndex) el.classList.add("active");
  });
}

function disableAllLifelines(){
  life5050Btn.disabled = true;
  lifeHintBtn.disabled = true;
  lifeSkipBtn.disabled = true;
  lifeTimerBtn.disabled = true;
  lifeAudienceBtn.disabled = true;
  lifePhoneBtn.disabled = true;

  // Hide unused blocks
  hintBox.classList.add("hidden");
  timerBox.classList.add("hidden");
}

function renderQuestion(){
  if(qIndex >= questions.length || qIndex >= PRIZES.length){
    endGame(true);
    return;
  }

  locked = false;
  selectedIndex = null;
  nextBtn.disabled = true;

  const q = questions[qIndex];

  qNumberEl.textContent = `Q${qIndex + 1}`;
  questionTextEl.textContent = q.question;

  optionsEl.innerHTML = "";
  const letters = ["A","B","C","D"];

  q.options.forEach((opt, idx) => {
    const btn = document.createElement("button");
    btn.className = "option";
    btn.type = "button";
    btn.dataset.idx = String(idx);
    btn.innerHTML = `
      <div class="opt-letter">${letters[idx]}</div>
      <div class="opt-text">${opt}</div>
    `;
    btn.addEventListener("click", () => onSelect(idx));
    optionsEl.appendChild(btn);
  });

  setStatus("Pick an option");
  highlightLadder();
  updateMeta();
  disableAllLifelines();
}

function lockOptions(){
  optionsEl.querySelectorAll(".option").forEach((b) => b.classList.add("locked"));
}

function markCorrectWrong(correctIdx){
  optionsEl.querySelectorAll(".option").forEach((b) => {
    const idx = Number(b.dataset.idx);
    if(idx === correctIdx) b.classList.add("correct");
    if(selectedIndex !== null && idx === selectedIndex && selectedIndex !== correctIdx){
      b.classList.add("wrong");
    }
  });
}

function onSelect(idx){
  if(locked) return;

  selectedIndex = idx;
  locked = true;
  lockOptions();

  const q = questions[qIndex];
  const correctIdx = q.correctIndex;

  setStatus("Checking...", "warn");

  setTimeout(() => {
    if(idx === correctIdx){
      if(SAFE_LEVELS.has(qIndex)) safePrize = PRIZES[qIndex];

      markCorrectWrong(correctIdx);
      setStatus("Correct! Click Next ✅", "good");
      nextBtn.disabled = false;

      const reached = PRIZES[qIndex];
      if(reached > bestPrize){
        bestPrize = reached;
        localStorage.setItem("wcbc_best", String(bestPrize));
      }
      updateMeta();
    } else {
      markCorrectWrong(correctIdx);
      setStatus("Wrong answer ❌", "bad");
      setTimeout(() => endGame(false), 900);
    }
  }, 450);
}

function goNext(){
  if(!locked) return;
  qIndex += 1;
  renderQuestion();
}

function endGame(wonAll){
  const finalPrize = wonAll
    ? (PRIZES[Math.min(PRIZES.length - 1, qIndex - 1)] ?? 0)
    : safePrize;

  resultCard.classList.remove("hidden");

  if(wonAll){
    resultTitle.textContent = "You Won! 🏆";
    resultText.textContent = `Champion! You won ${formatINR(finalPrize)}.`;
    setStatus("Champion!", "good");
  } else {
    resultTitle.textContent = "Game Over";
    resultText.textContent = `You take home ${formatINR(finalPrize)} (safe prize).`;
    setStatus("Try again!", "warn");
  }

  nextBtn.disabled = true;
  lockOptions();
}

function quitGame(){
  resultCard.classList.remove("hidden");
  resultTitle.textContent = "You Quit";
  resultText.textContent = `You quit and take home ${formatINR(safePrize)}.`;
  nextBtn.disabled = true;
  lockOptions();
  setStatus("You quit the game.");
}

function copyResult(){
  const text = `${resultTitle.textContent}: ${resultText.textContent}`;
  navigator.clipboard?.writeText(text).then(() => {
    shareBtn.textContent = "Copied!";
    setTimeout(() => (shareBtn.textContent = "Copy Result"), 900);
  }).catch(() => alert(text));
}

function init(){
  const needed = PRIZES.length;
  questions = shuffle(QUESTIONS).slice(0, Math.min(needed, QUESTIONS.length));

  qIndex = 0;
  locked = false;
  selectedIndex = null;

  safePrize = 0;

  resultCard.classList.add("hidden");

  buildLadder();
  renderQuestion();
  updateMeta();
}

// Wire core controls only
nextBtn.addEventListener("click", goNext);
quitBtn.addEventListener("click", quitGame);
restartBtn.addEventListener("click", init);
shareBtn.addEventListener("click", copyResult);

init();