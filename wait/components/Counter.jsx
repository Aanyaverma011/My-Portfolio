import { useEffect, useRef, useState } from 'react'

export default function Counter({ n, s = '', cls = 'grad' }) {
  const ref = useRef(null)
  const [v, setV] = useState(0)
  useEffect(() => {
    const T = +n
    let id
    const io = new IntersectionObserver(([e]) => {
      if (!e.isIntersecting) return
      io.disconnect()
      let c = 0
      const step = Math.max(1, Math.ceil(T / 60))
      id = setInterval(() => { c = Math.min(T, c + step); setV(c); if (c >= T) clearInterval(id) }, 20)
    }, { threshold: 0.3 })
    io.observe(ref.current)
    return () => { io.disconnect(); clearInterval(id) }
  }, [n])
  return <b ref={ref} className={cls}>{v}{v >= +n ? s : ''}</b>
}
