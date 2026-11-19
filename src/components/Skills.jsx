import TechRow from './TechRow'

export default function Skills() {
  return (
    <>
<section className="s" id="skills"><div className="wrap">
<div className="rv"><h2><small>Skills</small>Tech stack</h2><p className="sub">The tools I reach for to build, ship and scale.</p></div>
<div className="mqw rv"><TechRow k="1"></TechRow><TechRow k="2" rev="1"></TechRow></div>
<div className="rv" style={{"margin": "6px 0 18px"}}><h4 style={{"fontSize": "1.25rem"}}>Specializations</h4></div>
<div className="sk" style={{"marginBottom": "40px"}}>
<div className="glass rv"><h4>🧮 Data Structures &amp; Algorithms</h4><p style={{"color": "var(--mu)", "fontSize": ".9rem", "marginTop": "6px"}}>A solid base in arrays, trees, graphs and dynamic programming, applied to 400+ LeetCode problems and Codeforces contests.</p></div>
<div className="glass rv"><h4>⚙️ Backend &amp; Distributed Systems</h4><p style={{"color": "var(--mu)", "fontSize": ".9rem", "marginTop": "6px"}}>Queue-based workers, retries, idempotency, real-time updates and Docker deployments on AWS EC2.</p></div>
<div className="glass rv"><h4>🌐 Web Development</h4><p style={{"color": "var(--mu)", "fontSize": ".9rem", "marginTop": "6px"}}>Responsive, interactive apps with the MERN stack, Tailwind CSS, Bootstrap and REST APIs.</p></div>
<div className="glass rv"><h4>🤖 Generative AI</h4><p style={{"color": "var(--mu)", "fontSize": ".9rem", "marginTop": "6px"}}>LLM apps, RAG and multi-agent systems built with LangChain, Groq and Tavily.</p></div>
</div>
<div className="rv" style={{"margin": "6px 0 18px"}}><h4 style={{"fontSize": "1.25rem"}}>Tech Stack, Tools &amp; Languages</h4></div>
<div className="sk" style={{"marginTop": "34px"}}>
<div className="glass rv"><h4>💻 Languages</h4><div className="chips"><i>C</i><i>C++</i><i>Java</i><i>JavaScript (ES6+)</i><i>Python</i><i>SQL</i></div></div>
<div className="glass rv"><h4>🎨 Frontend</h4><div className="chips"><i>React.js</i><i>Angular</i><i>TypeScript</i><i>HTML5</i><i>CSS3</i><i>Tailwind CSS</i><i>Bootstrap</i></div></div>
<div className="glass rv"><h4>🛠 Backend &amp; APIs</h4><div className="chips"><i>Node.js</i><i>Express.js</i><i>REST APIs</i><i>Socket.IO</i><i>JWT Auth</i><i>Microservices</i></div></div>
<div className="glass rv"><h4>🗄 Data &amp; DevOps</h4><div className="chips"><i>MongoDB</i><i>MySQL</i><i>PostgreSQL</i><i>Redis</i><i>Docker</i><i>AWS EC2</i><i>Git</i><i>GitHub</i><i>Postman</i><i>Vercel</i></div></div>
<div className="glass rv"><h4>🤖 Generative AI</h4><div className="chips"><i>LangChain</i><i>LLMs</i><i>RAG</i><i>AI Agents</i><i>Multi-Agent Systems</i><i>Prompt Engineering</i><i>Groq</i><i>Tavily</i><i>Streamlit</i></div></div>
<div className="glass rv"><h4>📚 Core CS</h4><div className="chips"><i>DSA</i><i>OOP</i><i>DBMS</i><i>Operating Systems</i><i>Computer Networks</i><i>System Design</i></div></div>
</div></div></section>


    </>
  )
}
