const A = ['React','Node.js','Express','MongoDB','Redis','BullMQ','Socket.IO','Docker','AWS EC2','Vercel','Git']
const B = ['LangChain','Groq','Tavily','Python','Java','C++','TypeScript','Tailwind','PostgreSQL','MySQL','Angular','Streamlit']
const COLORS = ['#8b5cf6','#22d3ee','#f472b6','#facc15','#4ade80']

export default function TechRow({ k, rev }) {
  const list = k === '1' ? A : B
  const items = [...list, ...list]
  return (
    <div className={'mqr' + (rev ? ' rev' : '')}>
      {items.map((x, i) => <span key={i} style={{ '--d': COLORS[(i % list.length) % 5] }}>{x}</span>)}
    </div>
  )
}
