import { useEffect, useState } from 'react'
import Background from './components/Background'
import Nav from './components/Nav'
import Hero from './components/Hero'
import About from './components/About'
import Skills from './components/Skills'
import Projects from './components/Projects'
import Experience from './components/Experience'
import Education from './components/Education'
import Achievements from './components/Achievements'
import Contact from './components/Contact'
import Footer from './components/Footer'
import Hobbies from "./components/Hobbies";

export default function App() {
  const [theme, setTheme] = useState(null)

  useEffect(() => {
    if (theme) document.documentElement.setAttribute('data-theme', theme)
  }, [theme])

  const toggle = () =>
    setTheme((t) => {
      const cur = t || (matchMedia('(prefers-color-scheme:light)').matches ? 'light' : 'dark')
      return cur === 'dark' ? 'light' : 'dark'
    })

  useEffect(() => {
    const io = new IntersectionObserver(
      (es) => es.forEach((e) => { if (e.isIntersecting) { e.target.classList.add('in'); io.unobserve(e.target) } }),
      { threshold: 0.12 }
    )
    document.querySelectorAll('.rv').forEach((n, k) => { n.style.transitionDelay = (k % 4) * 70 + 'ms'; io.observe(n) })
    return () => io.disconnect()
  }, [])

  return (
    <>
      <Background />
      <Nav onToggle={toggle} />
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Experience />
      <Education />
      <Achievements />
      <Hobbies />
      <Contact />
      <Footer />
    </>
  )
}
