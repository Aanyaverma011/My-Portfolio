const hobbies = [
  { icon: "✎", title: "Sketching", tag: "Creative Side", description: "I enjoy sketching and turning simple ideas into creative illustrations. It's a relaxing way to express my imagination and attention to detail." },
  { icon: "♫", title: "Singing", tag: "Music & Expression", description: "Music is one of my favorite ways to unwind. I enjoy singing and exploring different melodies whenever I get some free time." },
  { icon: "↗", title: "Traveling", tag: "Exploring Places", description: "I love exploring new places, experiencing different environments, and discovering the little things that make every journey memorable." },
  { icon: "◇", title: "DIY & Mini Crafts", tag: "Hands-on Creativity", description: "I enjoy making small creative things, especially miniature boxes, organizers, and simple handmade projects. I love bringing little ideas to life." },
  { icon: "⌘", title: "Exploring Technology", tag: "Curiosity & Learning", description: "I enjoy experimenting with new tools, exploring emerging technologies, and building small projects that turn interesting ideas into something useful." }
]

export default function Hobbies() {
  return (
    <section className="s" id="hobbies">
      <div className="wrap">
        <div className="rv">
          <h2><small>Beyond the Code</small>Hobbies &amp; Interests</h2>
          <p className="hobby-intro">A little glimpse into the things I enjoy beyond coding.</p>
        </div>
        <div className="hobby-grid">
          {hobbies.map((hobby, index) => (
            <div className="glass rv hobby-card" key={hobby.title} style={{ "--delay": `${index * 90}ms` }}>
              <div className="hobby-top"><div className="e hobby-icon">{hobby.icon}</div><span className="hobby-number">0{index + 1}</span></div>
              <span className="hobby-tag">{hobby.tag}</span>
              <h3>{hobby.title}</h3>
              <p>{hobby.description}</p>
              <div className="hobby-line"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
