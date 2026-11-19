import links from '../data/links'

const ITEMS = [
  { e: '✉️', label: 'Email', value: links.emailPersonal, href: 'mailto:' + links.emailPersonal },
  { e: '🎓', label: 'College Email', value: links.emailCollege, href: 'mailto:' + links.emailCollege },
  { e: '📞', label: 'Phone', value: links.phone, href: 'tel:' + links.phone.replace(/\s/g, '') },
  { e: '💼', label: 'LinkedIn', value: 'aanya-verma', href: links.linkedin, ext: true },
  { e: '🐙', label: 'GitHub', value: 'Aanyaverma011', href: links.github, ext: true },
  { e: '📍', label: 'Location', value: 'Lucknow, India' },
]

export default function Contact() {
  return (
    <section className="s" id="contact">
      <div className="wrap rv">
        <h2><small>Contact</small>Let’s Work Together</h2>
        <p className="sub">Have a project, an opportunity, or just want to say hi? Reach out directly, I’d love to hear from you 🚀</p>
        <div className="cgrid">
          {ITEMS.map((it) => {
            const body = (<><div className="e">{it.e}</div><small>{it.label}</small><b>{it.value}</b></>)
            return it.href
              ? <a key={it.label} className="glass cc" href={it.href} {...(it.ext ? { target: '_blank', rel: 'noopener noreferrer' } : {})}>{body}</a>
              : <div key={it.label} className="glass cc">{body}</div>
          })}
        </div>
        <p className="thanks">Let’s make something amazing together ✨</p>

        
      </div>
    </section>
  )
}
