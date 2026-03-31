import './Experience.css'
import { jobs } from '../data/portfolio'

const typeColors = {
  'Full-time': '#4ade80',
  'Freelance': '#facc15',
  'Part-time': '#60a5fa',
  'Internship': '#a78bfa',
}

export default function Experience() {
  return (
    <section id="experience" className="exp-section">
      <div className="container">
        <p className="section-label">Where I've worked</p>
        <h2 className="section-title"><span>Experience</span></h2>
        <p className="section-subtitle">My professional journey</p>

        <div className="timeline">
          {jobs.map((job, i) => (
            <div key={i} className={`timeline-item ${job.current ? 'current' : ''}`}>
              <div className="timeline-dot">
                {job.current && <div className="dot-pulse" />}
              </div>
              <div className="timeline-card">
                <div className="exp-header">
                  <div>
                    <h3 className="exp-role">{job.role}</h3>
                    <p className="exp-company">{job.company}</p>
                  </div>
                  <div className="exp-meta">
                    <span
                      className="exp-badge"
                      style={{ color: typeColors[job.type], borderColor: `${typeColors[job.type]}44`, background: `${typeColors[job.type]}11` }}
                    >
                      {job.type}
                    </span>
                    <span className="exp-period">{job.period}</span>
                  </div>
                </div>
                <ul className="exp-points">
                  {job.points.map((p, j) => (
                    <li key={j}>{p}</li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
