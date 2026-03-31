import './Experience.css'

const jobs = [
  {
    role: 'Flutter Developer',
    company: 'X Coders',
    period: 'Nov 2024 – Present',
    type: 'Full-time',
    current: true,
    points: [
      'Worked closely with back-end teams to integrate efficient data handling solutions.',
      'Assisted in code refactoring to enhance maintainability and optimize performance.',
      'Developed new features and fixed bugs, improving overall app functionality.',
    ],
  },
  {
    role: 'Flutter Developer',
    company: 'Freelancer',
    period: 'Jan 2024 – Present',
    type: 'Freelance',
    current: true,
    points: [
      'Develop and maintain cross-platform mobile applications.',
      'Implement state management solutions with BLoC.',
      'Integrate RESTful APIs and third-party services.',
    ],
  },
  {
    role: 'Flutter Developer (Part-time)',
    company: 'Codes Roots',
    period: 'Jul 2024 – Nov 2024',
    type: 'Part-time',
    current: false,
    points: [
      'Maintained scalable, clean architecture across projects.',
      'Optimized app performance for production releases.',
      'Implemented continuous integration (CI/CD) pipelines.',
    ],
  },
  {
    role: 'Flutter Development Intern',
    company: 'Codeption',
    period: 'Oct 2024 – Nov 2024',
    type: 'Internship',
    current: false,
    points: [
      'Developed web applications using Flutter Web.',
      'Structured Flutter projects using Clean Architecture.',
      'Documented development progress and bug fixes.',
    ],
  },
  {
    role: 'Flutter Development Intern',
    company: 'MYM',
    period: 'Sep 2023 – Oct 2023',
    type: 'Internship',
    current: false,
    points: [
      'Participated in Agile development processes.',
      'Contributed to UI/UX, creating responsive layouts.',
      'Collaborated with senior developers on feature delivery.',
    ],
  },
  {
    role: 'Flutter Development Intern',
    company: 'RoQay',
    period: 'Jul 2023 – Sep 2023',
    type: 'Internship',
    current: false,
    points: [
      'Served as Mobile Team Leader.',
      'Participated in code review processes.',
      'Gained experience in branching strategies and Git workflows.',
    ],
  },
]

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
