import { useEffect, useRef, useState } from 'react'

export default function Counter({ n, s = '', cls }) {
  const ref = useRef(null)
  const [v, setV] = useState(0)
  useEffect(() => {
    const target = +n
    let id
    const observer = new IntersectionObserver(([entry]) => {
      if (!entry.isIntersecting) return
      observer.disconnect()
      let current = 0
      const step = Math.max(1, Math.ceil(target / 60))
      id = setInterval(() => {
        current = Math.min(target, current + step)
        setV(current)
        if (current >= target) clearInterval(id)
      }, 20)
    }, { threshold: 0.3 })
    if (ref.current) observer.observe(ref.current)
    return () => { observer.disconnect(); clearInterval(id) }
  }, [n])
  return <b ref={ref} className={cls}>{v}{v >= +n ? s : ''}</b>
}
