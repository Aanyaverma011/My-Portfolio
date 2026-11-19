const LINKS = [
  ['about', 'About'], ['skills', 'Skills'], ['projects', 'Projects'],
  ['experience', 'Experience'], ['education', 'Education'],
  ['achievements', 'Achievements'], ['hobbies', 'Hobbies'], ['contact', 'Contact']
]

export default function Nav() {
  return (
    <nav>
      <b>AV.</b>
      <div className="l">
        {LINKS.map(([id, title]) => <a key={id} href={'#' + id}>{title}</a>)}
      </div>
    </nav>
  )
}
