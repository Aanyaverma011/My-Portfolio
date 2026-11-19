import { useEffect, useRef } from 'react'

export default function Background() {
  const ref = useRef(null)
  useEffect(() => {
    const cv = ref.current, x = cv.getContext('2d')
    let P = [], W, H, raf
    const m = { x: -999, y: -999 }
    const resize = () => {
      W = cv.width = innerWidth; H = cv.height = innerHeight; P = []
      const n = Math.min(70, Math.floor((W * H) / 22000))
      for (let k = 0; k < n; k++) P.push({ x: Math.random() * W, y: Math.random() * H, vx: (Math.random() - 0.5) * 0.4, vy: (Math.random() - 0.5) * 0.4 })
    }
    const move = (e) => { m.x = e.clientX; m.y = e.clientY }
    const draw = () => {
      x.clearRect(0, 0, W, H)
      for (let a = 0; a < P.length; a++) {
        const p = P[a]
        p.x += p.vx; p.y += p.vy
        if (p.x < 0 || p.x > W) p.vx *= -1
        if (p.y < 0 || p.y > H) p.vy *= -1
        x.fillStyle = 'rgba(139,92,246,.7)'; x.beginPath(); x.arc(p.x, p.y, 1.8, 0, 6.3); x.fill()
        for (let b = a + 1; b < P.length; b++) {
          const q = P[b], d = Math.hypot(p.x - q.x, p.y - q.y)
          if (d < 120) { x.strokeStyle = 'rgba(34,211,238,' + 0.18 * (1 - d / 120) + ')'; x.beginPath(); x.moveTo(p.x, p.y); x.lineTo(q.x, q.y); x.stroke() }
        }
        const dm = Math.hypot(p.x - m.x, p.y - m.y)
        if (dm < 150) { x.strokeStyle = 'rgba(244,114,182,' + 0.35 * (1 - dm / 150) + ')'; x.beginPath(); x.moveTo(p.x, p.y); x.lineTo(m.x, m.y); x.stroke() }
      }
      raf = requestAnimationFrame(draw)
    }
    resize(); draw()
    addEventListener('resize', resize); addEventListener('mousemove', move)
    return () => { cancelAnimationFrame(raf); removeEventListener('resize', resize); removeEventListener('mousemove', move) }
  }, [])
  return <canvas id="bg" ref={ref} />
}
