import { useState, useEffect } from "react";

const USERNAME = "Rumman963";

const STATIC = {
  name: "Mohd Rumman Khan",
  role: "Full Stack Developer | MERN Stack",
  location: "Lucknow, Uttar Pradesh 🇮🇳",
  email: "mohdrummankhan96@gmail.com",
  linkedin: "Rumman963",
  skills: {
    Languages: ["JavaScript", "Python", "Java"],
    Frontend: ["React", "HTML5", "CSS3", "TailwindCSS"],
    Backend: ["Node.js", "Express.js"],
    Databases: ["MongoDB", "SQL"],
    Tools: ["Git", "GitHub", "VS Code", "Vercel", "Netlify", "Render"],
  },
  experience: "MERN Intern @ Lunar Labs (May–July 2025)",
  achievements: [
    "♟️ Chess Rating 800+ — Strategic thinking & pattern recognition",
    "💡 50+ DSA Problems Solved — Arrays, Strings, Algorithms",
    "🪙 Crypto Education Contributor — CoinDCX Community",
    "📜 JavaScript Fundamentals Certified — GreatStack",
  ],
};

const badgeColor = {
  JavaScript: "F7DF1E", Python: "3776AB", Java: "ED8B00",
  React: "61DAFB", "HTML5": "E34F26", "CSS3": "1572B6", TailwindCSS: "38B2AC",
  "Node.js": "339933", "Express.js": "000000", MongoDB: "47A248", SQL: "4479A1",
  Git: "F05032", GitHub: "181717", "VS Code": "007ACC",
  Vercel: "000000", Netlify: "00C7B7", Render: "46E3B7",
};

function StatCard({ label, value, icon, color }) {
  return (
    <div style={{
      background: "rgba(255,255,255,0.04)",
      border: `1px solid ${color}33`,
      borderRadius: 14,
      padding: "18px 24px",
      display: "flex",
      alignItems: "center",
      gap: 14,
      minWidth: 160,
      flex: "1 1 150px",
      boxShadow: `0 0 18px ${color}18`,
      transition: "transform 0.2s",
      cursor: "default",
    }}
    onMouseEnter={e => e.currentTarget.style.transform = "translateY(-4px)"}
    onMouseLeave={e => e.currentTarget.style.transform = "translateY(0)"}
    >
      <span style={{ fontSize: 28 }}>{icon}</span>
      <div>
        <div style={{ fontSize: 22, fontWeight: 800, color, fontFamily: "'JetBrains Mono', monospace" }}>{value}</div>
        <div style={{ fontSize: 11, color: "#888", letterSpacing: 1, textTransform: "uppercase" }}>{label}</div>
      </div>
    </div>
  );
}

function RepoCard({ repo }) {
  const langColors = { JavaScript: "#f7df1e", Python: "#3572A5", HTML: "#e34c26", CSS: "#563d7c", TypeScript: "#2b7489" };
  return (
    <div style={{
      background: "rgba(255,255,255,0.03)",
      border: "1px solid #ffffff18",
      borderRadius: 12,
      padding: "16px 18px",
      display: "flex",
      flexDirection: "column",
      gap: 8,
      transition: "border-color 0.2s, transform 0.2s",
      cursor: "pointer",
    }}
    onMouseEnter={e => { e.currentTarget.style.borderColor = "#a78bfa88"; e.currentTarget.style.transform = "translateY(-3px)"; }}
    onMouseLeave={e => { e.currentTarget.style.borderColor = "#ffffff18"; e.currentTarget.style.transform = "translateY(0)"; }}
    onClick={() => window.open(repo.html_url, "_blank")}
    >
      <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
        <span style={{ fontSize: 16 }}>📁</span>
        <span style={{ color: "#a78bfa", fontWeight: 700, fontSize: 14, fontFamily: "'JetBrains Mono', monospace" }}>{repo.name}</span>
      </div>
      {repo.description && (
        <p style={{ color: "#aaa", fontSize: 12, margin: 0, lineHeight: 1.5 }}>{repo.description.slice(0, 80)}{repo.description.length > 80 ? "…" : ""}</p>
      )}
      <div style={{ display: "flex", gap: 14, marginTop: 4, fontSize: 12, color: "#666" }}>
        {repo.language && (
          <span style={{ display: "flex", alignItems: "center", gap: 5 }}>
            <span style={{ width: 10, height: 10, borderRadius: "50%", background: langColors[repo.language] || "#888", display: "inline-block" }} />
            {repo.language}
          </span>
        )}
        <span>⭐ {repo.stargazers_count}</span>
        <span>🍴 {repo.forks_count}</span>
        {repo.updated_at && <span>🕒 {new Date(repo.updated_at).toLocaleDateString("en-IN", { month: "short", day: "numeric" })}</span>}
      </div>
    </div>
  );
}

function SkillBadge({ skill }) {
  const color = badgeColor[skill] || "555555";
  const textColor = ["F7DF1E", "38B2AC", "00C7B7", "46E3B7"].includes(color) ? "000000" : "ffffff";
  return (
    <span style={{
      background: `#${color}22`,
      border: `1px solid #${color}66`,
      color: `#${color}`,
      borderRadius: 20,
      padding: "4px 12px",
      fontSize: 12,
      fontWeight: 600,
      fontFamily: "'JetBrains Mono', monospace",
      letterSpacing: 0.5,
    }}>{skill}</span>
  );
}

function generateReadme(ghData) {
  const repos = ghData.repos || [];
  const topRepos = repos.slice(0, 3).map(r =>
    `| [${r.name}](${r.html_url}) | ${r.description || "—"} | ${r.language || "—"} | ⭐ ${r.stargazers_count} |`
  ).join("\n");

  const skillLines = Object.entries(STATIC.skills).map(([cat, skills]) =>
    `**${cat}:** ${skills.map(s => `\`${s}\``).join(" ")}`
  ).join("\n\n");

  return `<div align="center">

<img src="https://capsule-render.vercel.app/api?type=waving&color=0:0f0c29,50:302b63,100:24243e&height=200&section=header&text=Mohd%20Rumman%20Khan&fontSize=50&fontColor=ffffff&animation=fadeIn&fontAlignY=38&desc=Full%20Stack%20Developer%20%7C%20MERN%20Stack%20%7C%20Building%20Cool%20Stuff%20🚀&descAlignY=60&descSize=18" />

<a href="https://github.com/${USERNAME}">
  <img src="https://readme-typing-svg.demolab.com?font=Fira+Code&weight=600&size=22&pause=1000&color=A78BFA&center=true&vCenter=true&width=600&lines=Hey+there!+I'm+Rumman+👋;MERN+Stack+Developer;${encodeURIComponent(ghData.public_repos || 0)}+Public+Repos+%26+Counting+🚀;Open+to+Opportunities!" alt="Typing SVG" />
</a>

[![GitHub followers](https://img.shields.io/github/followers/${USERNAME}?style=for-the-badge&logo=github&color=a78bfa)](https://github.com/${USERNAME})
[![GitHub stars](https://img.shields.io/github/stars/${USERNAME}?style=for-the-badge&logo=github&color=ff6e96)](https://github.com/${USERNAME})
[![Email](https://img.shields.io/badge/Email-mohdrummankhan96@gmail.com-D14836?style=for-the-badge&logo=gmail)](mailto:${STATIC.email})

</div>

---

## 🧠 About Me

\`\`\`javascript
const rumman = {
  name:        "Mohd Rumman Khan",
  role:        "Full Stack Developer (MERN)",
  education:   "B.Tech @ Galgotias College of Engineering (2022–2026)",
  location:    "Lucknow, Uttar Pradesh 🇮🇳",
  repos:       ${ghData.public_repos || 0},
  followers:   ${ghData.followers || 0},
  following:   ${ghData.following || 0},
  experience:  "MERN Intern @ Lunar Labs",
  hobbies:     ["Coding 💻", "Chess ♟️", "Crypto & Web3 🪙"],
};
\`\`\`

---

## 🛠️ Tech Stack

${skillLines}

---

## 🚀 Latest Repositories

| Repo | Description | Language | Stars |
|------|-------------|----------|-------|
${topRepos || "| No public repos yet | — | — | — |"}

---

## 📊 GitHub Stats

<div align="center">

![GitHub Stats](https://github-readme-stats.vercel.app/api?username=${USERNAME}&show_icons=true&theme=tokyonight&hide_border=true&bg_color=0d1117&title_color=a78bfa&icon_color=a78bfa&text_color=ffffff)
![Top Langs](https://github-readme-stats.vercel.app/api/top-langs/?username=${USERNAME}&layout=compact&theme=tokyonight&hide_border=true&bg_color=0d1117&title_color=a78bfa&text_color=ffffff)
![Streak](https://github-readme-streak-stats.herokuapp.com/?user=${USERNAME}&theme=tokyonight&hide_border=true&background=0d1117&ring=a78bfa&fire=ff6e96&currStreakLabel=a78bfa)

</div>

---

## 🏆 Achievements

${STATIC.achievements.map(a => `- ${a}`).join("\n")}

---

<div align="center">

![Profile Views](https://komarev.com/ghpvc/?username=${USERNAME}&color=a78bfa&style=for-the-badge&label=PROFILE+VIEWS)

<img src="https://capsule-render.vercel.app/api?type=waving&color=0:24243e,50:302b63,100:0f0c29&height=120&section=footer" />

*Last auto-updated: ${new Date().toLocaleString("en-IN", { dateStyle: "medium", timeStyle: "short" })}*

</div>`;
}

export default function App() {
  const [ghData, setGhData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [tab, setTab] = useState("dashboard");
  const [copied, setCopied] = useState(false);
  const [lastUpdated, setLastUpdated] = useState(null);

  const fetchGitHub = async () => {
    setLoading(true);
    setError(null);
    try {
      const [profileRes, reposRes] = await Promise.all([
        fetch(`https://api.github.com/users/${USERNAME}`),
        fetch(`https://api.github.com/users/${USERNAME}/repos?sort=updated&per_page=6`),
      ]);
      if (!profileRes.ok) throw new Error("GitHub user not found");
      const profile = await profileRes.json();
      const repos = await reposRes.json();
      setGhData({ ...profile, repos: Array.isArray(repos) ? repos : [] });
      setLastUpdated(new Date());
    } catch (e) {
      setError(e.message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => { fetchGitHub(); }, []);

  const handleCopy = () => {
    if (!ghData) return;
    navigator.clipboard.writeText(generateReadme(ghData));
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  const styles = {
    app: {
      minHeight: "100vh",
      background: "#0d1117",
      color: "#e6edf3",
      fontFamily: "'JetBrains Mono', 'Courier New', monospace",
      padding: "0 0 60px",
    },
    header: {
      background: "linear-gradient(135deg, #0f0c29 0%, #302b63 50%, #24243e 100%)",
      padding: "40px 32px 32px",
      borderBottom: "1px solid #ffffff10",
      position: "relative",
      overflow: "hidden",
    },
    headerGlow: {
      position: "absolute", top: -60, right: -60,
      width: 300, height: 300,
      background: "radial-gradient(circle, #a78bfa22 0%, transparent 70%)",
      borderRadius: "50%",
    },
    avatar: {
      width: 72, height: 72, borderRadius: "50%",
      border: "3px solid #a78bfa",
      boxShadow: "0 0 24px #a78bfa44",
    },
    name: {
      fontSize: 26, fontWeight: 800,
      background: "linear-gradient(90deg, #a78bfa, #ff6e96)",
      WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent",
      margin: 0,
    },
    tabs: {
      display: "flex", gap: 4, padding: "0 32px",
      borderBottom: "1px solid #ffffff10",
      background: "#0d1117",
    },
    tab: (active) => ({
      padding: "14px 20px",
      background: "none", border: "none",
      color: active ? "#a78bfa" : "#666",
      borderBottom: active ? "2px solid #a78bfa" : "2px solid transparent",
      cursor: "pointer", fontSize: 13, fontWeight: 600,
      fontFamily: "inherit", letterSpacing: 0.5,
      transition: "color 0.2s",
    }),
    content: { padding: "28px 32px", maxWidth: 960, margin: "0 auto" },
    sectionTitle: {
      fontSize: 13, letterSpacing: 2, color: "#a78bfa",
      textTransform: "uppercase", marginBottom: 16, fontWeight: 700,
    },
    refreshBtn: {
      background: "linear-gradient(135deg, #302b63, #24243e)",
      border: "1px solid #a78bfa44", color: "#a78bfa",
      padding: "8px 18px", borderRadius: 8,
      cursor: "pointer", fontSize: 12, fontFamily: "inherit",
      fontWeight: 600, letterSpacing: 0.5,
      transition: "all 0.2s",
    },
    copyBtn: {
      background: copied
        ? "linear-gradient(135deg, #22c55e, #16a34a)"
        : "linear-gradient(135deg, #a78bfa, #7c3aed)",
      border: "none", color: "#fff",
      padding: "12px 28px", borderRadius: 10,
      cursor: "pointer", fontSize: 13, fontFamily: "inherit",
      fontWeight: 700, letterSpacing: 0.5,
      transition: "all 0.3s",
      boxShadow: copied ? "0 0 20px #22c55e44" : "0 0 20px #a78bfa44",
    },
    codeBlock: {
      background: "#010409",
      border: "1px solid #ffffff10",
      borderRadius: 12,
      padding: "20px 24px",
      fontSize: 11,
      lineHeight: 1.7,
      color: "#c9d1d9",
      overflowX: "auto",
      whiteSpace: "pre-wrap",
      wordBreak: "break-word",
      maxHeight: 420,
      overflowY: "auto",
    },
  };

  return (
    <div style={styles.app}>
      {/* Header */}
      <div style={styles.header}>
        <div style={styles.headerGlow} />
        <div style={{ display: "flex", alignItems: "center", gap: 18, position: "relative" }}>
          {ghData?.avatar_url
            ? <img src={ghData.avatar_url} alt="avatar" style={styles.avatar} />
            : <div style={{ ...styles.avatar, background: "#302b63", display: "flex", alignItems: "center", justifyContent: "center", fontSize: 28 }}>🧑‍💻</div>
          }
          <div>
            <h1 style={styles.name}>Mohd Rumman Khan</h1>
            <div style={{ color: "#888", fontSize: 13, marginTop: 4 }}>
              @{USERNAME} · Full Stack Developer · Lucknow 🇮🇳
            </div>
            {lastUpdated && (
              <div style={{ color: "#444", fontSize: 11, marginTop: 6 }}>
                ⏱ Last synced: {lastUpdated.toLocaleTimeString()}
              </div>
            )}
          </div>
          <button
            style={{ ...styles.refreshBtn, marginLeft: "auto" }}
            onClick={fetchGitHub}
            onMouseEnter={e => e.currentTarget.style.background = "#a78bfa22"}
            onMouseLeave={e => e.currentTarget.style.background = "linear-gradient(135deg, #302b63, #24243e)"}
          >
            {loading ? "⏳ Syncing…" : "🔄 Refresh"}
          </button>
        </div>
      </div>

      {/* Tabs */}
      <div style={styles.tabs}>
        {["dashboard", "repos", "readme"].map(t => (
          <button key={t} style={styles.tab(tab === t)} onClick={() => setTab(t)}>
            {t === "dashboard" ? "📊 Dashboard" : t === "repos" ? "📁 Repositories" : "📄 README Preview"}
          </button>
        ))}
      </div>

      <div style={styles.content}>
        {loading && (
          <div style={{ textAlign: "center", padding: "60px 0", color: "#a78bfa" }}>
            <div style={{ fontSize: 40, marginBottom: 16 }}>⚡</div>
            <div style={{ fontSize: 14, letterSpacing: 2 }}>FETCHING LIVE GITHUB DATA…</div>
          </div>
        )}

        {error && (
          <div style={{ background: "#ff6e9622", border: "1px solid #ff6e9644", borderRadius: 12, padding: 20, color: "#ff6e96" }}>
            ❌ {error} — Check your internet connection or try refreshing.
          </div>
        )}

        {!loading && !error && ghData && (
          <>
            {/* DASHBOARD TAB */}
            {tab === "dashboard" && (
              <div style={{ display: "flex", flexDirection: "column", gap: 28 }}>
                <div>
                  <div style={styles.sectionTitle}>Live GitHub Stats</div>
                  <div style={{ display: "flex", flexWrap: "wrap", gap: 14 }}>
                    <StatCard label="Public Repos" value={ghData.public_repos} icon="📁" color="#a78bfa" />
                    <StatCard label="Followers" value={ghData.followers} icon="👥" color="#ff6e96" />
                    <StatCard label="Following" value={ghData.following} icon="➕" color="#38bdf8" />
                    <StatCard label="Gists" value={ghData.public_gists} icon="📝" color="#4ade80" />
                  </div>
                </div>

                <div>
                  <div style={styles.sectionTitle}>Tech Stack</div>
                  <div style={{ display: "flex", flexDirection: "column", gap: 14 }}>
                    {Object.entries(STATIC.skills).map(([cat, skills]) => (
                      <div key={cat}>
                        <div style={{ fontSize: 11, color: "#555", marginBottom: 8, letterSpacing: 1 }}>{cat.toUpperCase()}</div>
                        <div style={{ display: "flex", flexWrap: "wrap", gap: 8 }}>
                          {skills.map(s => <SkillBadge key={s} skill={s} />)}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                <div>
                  <div style={styles.sectionTitle}>Achievements</div>
                  <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
                    {STATIC.achievements.map((a, i) => (
                      <div key={i} style={{
                        background: "rgba(167,139,250,0.05)",
                        border: "1px solid #a78bfa22",
                        borderRadius: 10, padding: "12px 16px",
                        fontSize: 13, color: "#ccc",
                      }}>{a}</div>
                    ))}
                  </div>
                </div>

                {ghData.bio && (
                  <div>
                    <div style={styles.sectionTitle}>GitHub Bio</div>
                    <div style={{ background: "rgba(255,255,255,0.03)", border: "1px solid #ffffff10", borderRadius: 10, padding: "14px 18px", color: "#aaa", fontSize: 13 }}>
                      "{ghData.bio}"
                    </div>
                  </div>
                )}
              </div>
            )}

            {/* REPOS TAB */}
            {tab === "repos" && (
              <div>
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 20 }}>
                  <div style={styles.sectionTitle}>Latest Repositories ({ghData.repos?.length || 0})</div>
                  <a href={`https://github.com/${USERNAME}?tab=repositories`} target="_blank" rel="noreferrer"
                    style={{ color: "#a78bfa", fontSize: 12, textDecoration: "none" }}>View all on GitHub →</a>
                </div>
                {ghData.repos?.length === 0
                  ? <div style={{ color: "#555", textAlign: "center", padding: 40 }}>No public repositories yet.</div>
                  : <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(280px, 1fr))", gap: 14 }}>
                      {ghData.repos.map(r => <RepoCard key={r.id} repo={r} />)}
                    </div>
                }
              </div>
            )}

            {/* README TAB */}
            {tab === "readme" && (
              <div>
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 20 }}>
                  <div style={styles.sectionTitle}>Generated README.md</div>
                  <button style={styles.copyBtn} onClick={handleCopy}>
                    {copied ? "✅ Copied!" : "📋 Copy README"}
                  </button>
                </div>
                <div style={styles.codeBlock}>{generateReadme(ghData)}</div>
                <div style={{
                  marginTop: 16, background: "rgba(167,139,250,0.08)",
                  border: "1px solid #a78bfa33", borderRadius: 10,
                  padding: "14px 18px", fontSize: 12, color: "#a78bfa", lineHeight: 1.8,
                }}>
                  💡 <strong>How to use:</strong> Copy the README → Go to <strong>github.com/{USERNAME}/{USERNAME}</strong> → Replace README.md content → Commit. Your profile updates instantly!
                </div>
              </div>
            )}
          </>
        )}
      </div>
    </div>
  );
}
