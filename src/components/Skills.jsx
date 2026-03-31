import './Skills.css'
import { skillGroups, proficiencies } from '../data/portfolio'

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
