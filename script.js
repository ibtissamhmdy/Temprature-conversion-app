* {
  box-sizing: border-box;
}

:root {
  --bg-dark: #0f172a;
  --bg-light: #1e293b;
  --card-bg: rgba(15, 23, 42, 0.7);
  --border: rgba(148, 163, 184, 0.25);
  --primary: #38bdf8;
  --primary-strong: #0ea5e9;
  --accent: #a78bfa;
  --text: #e2e8f0;
  --muted: #cbd5e1;
  --shadow: rgba(14, 165, 233, 0.25);
}

body {
  margin: 0;
  min-height: 100vh;
  display: grid;
  place-items: center;
  font-family: Arial, sans-serif;
  background: radial-gradient(circle at top, #1d4ed8 0%, var(--bg-dark) 40%, #020817 100%);
  color: var(--text);
}

.app-shell {
  width: min(100%, 780px);
  padding: 24px;
}

.app-card {
  background: rgba(15, 23, 42, 0.78);
  border: 1px solid var(--border);
  border-radius: 22px;
  box-shadow: 0 25px 70px var(--shadow);
  backdrop-filter: blur(10px);
  padding: 32px;
}

.eyebrow {
  margin: 0 0 12px;
  letter-spacing: 0.12em;
  text-transform: uppercase;
  color: var(--primary);
  font-weight: 700;
  font-size: 0.76rem;
}

h1 {
  margin: 0;
  font-size: clamp(2.2rem, 4vw, 3rem);
  line-height: 1.1;
}

.subtitle {
  margin: 14px 0 28px;
  color: var(--muted);
  font-size: 1.05rem;
}

.input-group {
  display: grid;
  gap: 10px;
  margin-bottom: 22px;
}

label {
  font-weight: 700;
}

input[type="number"] {
  width: 100%;
  padding: 14px 16px;
  border-radius: 12px;
  border: 1px solid rgba(148, 163, 184, 0.35);
  background: rgba(15, 23, 42, 0.9);
  color: var(--text);
  font-size: 1.1rem;
}

.unit-options {
  display: grid;
  gap: 14px;
  margin-bottom: 24px;
}

.option {
  display: flex;
  align-items: center;
  gap: 12px;
  background: rgba(30, 41, 59, 0.7);
  border: 1px solid rgba(148, 163, 184, 0.24);
  border-radius: 12px;
  padding: 12px 14px;
  cursor: pointer;
  transition: border-color 0.2s ease, transform 0.2s ease;
}

.option:hover {
  border-color: rgba(56, 189, 248, 0.8);
  transform: translateY(-1px);
}

.option input {
  accent-color: var(--primary);
  width: 18px;
  height: 18px;
}

button {
  width: 100%;
  border: none;
  border-radius: 12px;
  padding: 14px 18px;
  font-size: 1.05rem;
  font-weight: 700;
  background: linear-gradient(135deg, var(--primary), var(--accent));
  color: #05121b;
  cursor: pointer;
  transition: transform 0.2s ease, box-shadow 0.2s ease;
  box-shadow: 0 14px 30px rgba(56, 189, 248, 0.35);
}

button:hover {
  transform: translateY(-1px);
}

.result-box {
  margin-top: 28px;
  background: rgba(15, 118, 110, 0.22);
  border: 1px solid rgba(45, 212, 191, 0.35);
  border-radius: 14px;
  padding: 18px 16px;
  display: flex;
  justify-content: space-between;
  gap: 12px;
  flex-wrap: wrap;
  color: var(--muted);
}

.result-box strong {
  color: white;
  font-size: 1.1rem;
}

@media (max-width: 600px) {
  .app-card {
    padding: 24px 18px;
  }

  .result-box {
    flex-direction: column;
  }
}
