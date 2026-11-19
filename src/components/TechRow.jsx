const A = ['React','Node.js','Express','MongoDB','Redis','BullMQ','Socket.IO','Docker','AWS EC2','Vercel','Git']
const B = ['LangChain','Groq','Tavily','Python','Java','C++','TypeScript','Tailwind','PostgreSQL','MySQL','Angular','Streamlit']
const COLORS = ['#657653','#b87352','#a6a18f','#8c987d','#c28a6c']

export default function TechRow({ k, rev }) {
  const list = k === '1' ? A : B
  const items = [...list, ...list]
  return (
    <div className={'mqr' + (rev ? ' rev' : '')}>
      {items.map((item, index) => <span key={index} style={{ '--d': COLORS[index % COLORS.length] }}>{item}</span>)}
    </div>
  )
}
