import './Education.css'

const education = [
  {
    degree: 'Bachelor of Engineering',
    major: 'Computers & Control Systems',
    school: 'Faculty of Engineering, Mansoura University',
    period: '2019 – 2024',
    grade: 'Very Good (83.91%)',
    icon: '🎓',
  },
]

const certificates = [
  {
    name: 'Flutter – Animations',
    date: 'Oct 2023',
    icon: '🎬',
  },
  {
    name: 'Flutter Clean Architecture with MVVM',
    date: 'Apr 2023',
    icon: '🏗️',
  },
  {
    name: 'The Complete Flutter & Dart Development',
    date: 'Feb 2022',
    icon: '📱',
  },
  {
    name: 'The Complete Dart Language Guide',
    date: 'Jul 2021',
    icon: '💙',
  },
]

export default function Education() {
  return (
    <section id="education" className="edu-section">
      <div className="container">
        <p className="section-label">My background</p>
        <h2 className="section-title"><span>Education & Certificates</span></h2>
        <p className="section-subtitle">Academic foundation and continuous learning</p>

        <div className="edu-grid">
          <div className="edu-block">
            <h3 className="block-title">
              <span className="block-icon">🏛️</span> Education
            </h3>
            {education.map((e, i) => (
              <div key={i} className="edu-card">
                <div className="edu-icon">{e.icon}</div>
                <div className="edu-info">
                  <h4 className="edu-degree">{e.degree}</h4>
                  <p className="edu-major">{e.major}</p>
                  <p className="edu-school">{e.school}</p>
                  <div className="edu-footer">
                    <span className="edu-period">{e.period}</span>
                    <span className="edu-grade">{e.grade}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="cert-block">
            <h3 className="block-title">
              <span className="block-icon">📜</span> Certificates
            </h3>
            <div className="cert-list">
              {certificates.map((c, i) => (
                <div key={i} className="cert-card">
                  <span className="cert-icon">{c.icon}</span>
                  <div className="cert-info">
                    <p className="cert-name">{c.name}</p>
                    <span className="cert-date">{c.date}</span>
                  </div>
                  <CheckIcon />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

function CheckIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#4ade80" strokeWidth="2.5">
      <polyline points="20 6 9 17 4 12" />
    </svg>
  )
}
