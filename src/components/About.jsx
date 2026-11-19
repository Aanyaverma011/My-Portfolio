import Counter from './Counter'

export default function About() {
  return (
    <section className="s" id="about">
      <div className="wrap rv">
        <h2><small>About</small>A little about me</h2>
        <div className="glass" style={{ marginBottom: '6px' }}>
          <p style={{ color: 'var(--mu)', marginBottom: '14px' }}>I’m a passionate <b style={{ color: 'var(--tx)' }}>Full-Stack Developer</b> who loves building dynamic, responsive and user-friendly web applications. During my internship at HashedBit Innovations I shipped MERN features for a real product, gaining hands-on exposure to everyday development practices.</p>
          <p style={{ color: 'var(--mu)', marginBottom: '14px' }}>Beyond the MERN stack, I work with Redis, BullMQ, Socket.IO, Docker and AWS EC2 to build scalable systems, and I’m exploring Generative AI with LangChain, LLMs and multi-agent workflows. I enjoy clean, intuitive interfaces built with React, Tailwind CSS and Bootstrap.</p>
          <p style={{ color: 'var(--mu)' }}>With a strong foundation in Data Structures &amp; Algorithms, 400+ LeetCode problems and a Codeforces Pupil rank, I bring sharp problem-solving to everything I build. I enjoy turning ideas into impactful applications that balance functionality with a great user experience 🚀</p>
          <div className="chips"><i>MERN Stack</i><i>System Design</i><i>GenAI &amp; Agents</i><i>DSA</i><i>Open Source</i></div>
        </div>
        <div className="stats">
          <div className="glass stat"><Counter n="400" s="+"/><span>LeetCode problems</span></div>
          <div className="glass stat"><Counter n="1602" s=""/><span>Max LeetCode rating</span></div>
          <div className="glass stat"><Counter n="1275" s=""/><span>Codeforces max (Pupil)</span></div>
          <div className="glass stat"><Counter n="250" s="+"/><span>Teams beaten at HackX</span></div>
        </div>
      </div>
    </section>
  )
}
