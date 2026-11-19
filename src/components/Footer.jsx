import links from '../data/links'

const a = { color: 'var(--mu)' }

export default function Footer() {
  return (
    <footer>
      <div style={{ display: 'flex', gap: 18, justifyContent: 'center', flexWrap: 'wrap', marginBottom: 12 }}>
        <a style={a} href="#about">About</a>
        <a style={a} href="#skills">Skills</a>
        <a style={a} href="#projects">Projects</a>
        <a style={a} href="#contact">Contact</a>
        <a style={a} href={links.linkedin} target="_blank" rel="noopener noreferrer">LinkedIn</a>
        <a style={a} href={links.github} target="_blank" rel="noopener noreferrer">GitHub</a>
      </div>
      © 2026 Aanya Verma · Designed &amp; built with ♥
    </footer>
  )
}
