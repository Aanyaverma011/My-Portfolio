
const LINKS = [
  ['about', 'About'],
  ['skills', 'Skills'],
  ['projects', 'Projects'],
  ['experience', 'Experience'],
  ['education', 'Education'],
  ['achievements', 'Achievements'],
  ['hobbies', 'Hobbies'],
  ['contact', 'Contact']
];

export default function Nav({ onToggle }) {
  return (
    <nav>
      <b>AV.</b>

      <div className="l">
        {LINKS.map(([id, t]) => (
          <a key={id} href={'#' + id}>{t}</a>
        ))}

      </div>
    </nav>
  );
}
