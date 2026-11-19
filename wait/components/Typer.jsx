import { useEffect, useState } from 'react'

const WORDS = ['full-stack web apps', 'distributed systems', 'AI-powered tools', 'clean user experiences']

export default function Typer() {
  const [text, setText] = useState('')
  useEffect(() => {
    let i = 0, j = 0, del = false, id
    const tick = () => {
      const w = WORDS[i]
      setText(w.slice(0, j))
      if (!del && j < w.length) { j++; id = setTimeout(tick, 80) }
      else if (!del) { del = true; id = setTimeout(tick, 1400) }
      else if (j > 0) { j--; id = setTimeout(tick, 40) }
      else { del = false; i = (i + 1) % WORDS.length; id = setTimeout(tick, 300) }
    }
    tick()
    return () => clearTimeout(id)
  }, [])
  return <div className="role">I build <span>{text}</span><i className="cur"></i></div>
}
