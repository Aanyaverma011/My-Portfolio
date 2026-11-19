import photo from '../assets/profile.jpg'
import links from '../data/links'
import Typer from './Typer'

export default function Hero() {
  return (
    <header className="hero">
      <div className="wrap">
        <div>
          <span className="tag">● Open to opportunities</span>
          <h1>Hi, I'm <span className="grad">Aanya Verma</span></h1>
          <Typer />
          <p className="d">Final-year B.Tech CSE student at IET Lucknow. I design full-stack MERN applications, distributed systems and AI-powered tools, turning ideas into fast, reliable products.</p>
          <div className="cta"><a className="btn p" href="#projects">View Projects</a><a className="btn" href="#contact">Contact Me</a></div>
          <div className="soc">
            <a href="https://github.com/Aanyaverma011" target="_blank" rel="noopener noreferrer">GitHub</a>
            <a href="https://www.linkedin.com/in/aanya-verma-74a1872a3/" target="_blank" rel="noopener noreferrer">LinkedIn</a>
            <a href="https://leetcode.com/u/aanyathecoder1/" target="_blank" rel="noopener noreferrer" id="lc">LeetCode</a>
            <a href="https://codeforces.com/profile/_1_2_3_aanya" target="_blank" rel="noopener noreferrer" id="cf">Codeforces</a>
          </div>
        </div>
        <div className="pic"><div className="ring"><img src={photo} alt="Aanya Verma"/></div></div>
      </div>
    </header>
  )
}
