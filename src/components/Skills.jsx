import './Skills.css'

const skillGroups = [
  {
    title: 'Languages',
    icon: '💻',
    skills: ['Dart', 'Python', 'C++', 'C#', 'SQL'],
  },
  {
    title: 'Framework',
    icon: '📱',
    skills: ['Flutter'],
  },
  {
    title: 'Architecture',
    icon: '🏗️',
    skills: ['Clean Architecture', 'MVVM', 'BLoC Pattern'],
  },
  {
    title: 'State Management',
    icon: '⚡',
    skills: ['BLoC / Cubit', 'Riverpod', 'Provider', 'GetX'],
  },
  {
    title: 'Backend Integration',
    icon: '🔌',
    skills: ['REST APIs', 'GraphQL', 'WebSocket'],
  },
  {
    title: 'Databases',
    icon: '🗄️',
    skills: ['Firebase Auth', 'Firestore', 'Firebase Storage', 'SQLite', 'MS SQL Server'],
  },
  {
    title: 'Core Engineering',
    icon: '🧠',
    skills: ['Data Structures & Algorithms', 'OOP', 'SOLID Principles', 'Design Patterns', 'Clean Code'],
  },
  {
    title: 'Tools & CI/CD',
    icon: '🛠️',
    skills: ['Git', 'GitHub', 'GitLab', 'CI/CD', 'Agile'],
  },
]

const proficiencies = [
  { name: 'Flutter / Dart', level: 95, color: '#54C5F8' },
  { name: 'Clean Architecture', level: 90, color: '#02569B' },
  { name: 'BLoC / State Mgmt', level: 92, color: '#40C4FF' },
  { name: 'REST API Integration', level: 88, color: '#0288d1' },
  { name: 'Firebase', level: 85, color: '#FFA000' },
  { name: 'UI / UX Implementation', level: 87, color: '#26C6DA' },
]

export default function Skills() {
  return (
    <section id="skills" className="skills-section">
      <div className="container">
        <p className="section-label">What I know</p>
        <h2 className="section-title"><span>Skills</span></h2>
        <p className="section-subtitle">Technologies and tools I work with</p>

        <div className="skills-layout">
          <div className="skill-cards">
            {skillGroups.map((group) => (
              <div key={group.title} className="skill-card">
                <div className="skill-card-header">
                  <span className="skill-icon">{group.icon}</span>
                  <h3>{group.title}</h3>
                </div>
                <div className="skill-tags">
                  {group.skills.map((s) => (
                    <span key={s} className="tag">{s}</span>
                  ))}
                </div>
              </div>
            ))}
          </div>

          <div className="proficiency-bars">
            <h3 className="bars-title">Proficiency</h3>
            {proficiencies.map((p) => (
              <div key={p.name} className="bar-item">
                <div className="bar-header">
                  <span className="bar-name">{p.name}</span>
                  <span className="bar-pct">{p.level}%</span>
                </div>
                <div className="bar-track">
                  <div
                    className="bar-fill"
                    style={{ width: `${p.level}%`, background: `linear-gradient(90deg, ${p.color}88, ${p.color})` }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
