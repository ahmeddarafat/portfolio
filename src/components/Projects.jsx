import { useState } from 'react'
import './Projects.css'

const projects = [
  {
    name: 'SaaS Education Platform',
    category: 'EdTech',
    platforms: ['iOS', 'Android'],
    description:
      'A customizable SaaS educational platform for schools and learning centers. Each instance supports different color schemes and features per client. Students can watch courses, take exams, subscribe, and manage settings through a control panel.',
    tags: ['Flutter', 'SaaS', 'Multi-tenant', 'BLoC', 'REST API'],
    storeLinks: { appStore: '#', playStore: '#' },
  },
  {
    name: 'AZ Courses',
    category: 'EdTech',
    platforms: ['iOS', 'Android'],
    description:
      'Educational platform with over 10,000 downloads covering all educational stages. Users can purchase courses, earn in-app points, watch video tutorials, take exams, and read study notes. Managed through a robust control panel.',
    tags: ['Flutter', 'Video Streaming', 'Payment', 'BLoC', '10K+ Downloads'],
    storeLinks: { appStore: '#', playStore: '#' },
    highlight: true,
  },
  {
    name: 'Orbit — Engineering & Real Estate',
    category: 'PropTech',
    platforms: ['Android'],
    description:
      'Comprehensive platform connecting users with professional engineers and real estate experts for construction, design, and investment decisions. Integrated consulting and real estate services in one solution.',
    tags: ['Flutter', 'Consulting', 'Real Estate', 'Clean Architecture'],
    storeLinks: { playStore: '#' },
  },
  {
    name: 'Sanadk & Sanadk Lawyer',
    category: 'LegalTech',
    platforms: ['iOS', 'Android'],
    description:
      'Dual-application legal ecosystem. Client app offers instant legal advice, document reviews. Lawyer app provides a professional dashboard to manage requests (Accept/Reject), work schedules, and client appointments.',
    tags: ['Flutter', 'Dual-app', 'Legal', 'Scheduling', 'BLoC'],
    storeLinks: { appStore: '#', playStore: '#' },
  },
  {
    name: 'Sakni Way',
    category: 'PropTech',
    platforms: ['iOS', 'Android'],
    description:
      'Mobile app connecting property owners and renters, enabling users to browse and manage rental listings for homes and rooms, simplifying the property rental process.',
    tags: ['Flutter', 'Real Estate', 'Listings', 'REST API'],
    storeLinks: { appStore: '#', playStore: '#' },
  },
  {
    name: 'Caro P.O',
    category: 'E-commerce',
    platforms: ['iOS', 'Android'],
    description:
      'Specialized e-commerce app for medical products. Offers reliable shopping with wide range of trusted medical devices and supplies, secure purchasing, and fast delivery.',
    tags: ['Flutter', 'E-commerce', 'Medical', 'Payment Gateway'],
    storeLinks: { appStore: '#', playStore: '#' },
  },
  {
    name: 'Tyyli',
    category: 'Marketplace',
    platforms: ['iOS'],
    description:
      'Full-featured multi-vendor marketplace enabling vendors to manage products and customers to browse, purchase, and track orders. Integrated secure payment gateways, vendor dashboards, and real-time order management.',
    tags: ['Flutter', 'Multi-vendor', 'Payments', 'Real-time', 'Dashboard'],
    storeLinks: { appStore: '#' },
  },
  {
    name: "Jamaal.",
    category: 'E-commerce',
    platforms: ['iOS'],
    description:
      "Customized e-commerce platform for Jamaal Store focused on kids' products (toys, tools, accessories). Built with Flutter and integrated with WooCommerce and Tap payment gateway for seamless checkout.",
    tags: ['Flutter', 'WooCommerce', 'Tap Payment', 'Kids', 'E-commerce'],
    storeLinks: { appStore: '#' },
  },
]

const categories = ['All', 'EdTech', 'E-commerce', 'LegalTech', 'PropTech', 'Marketplace']

const platformIcons = {
  iOS: (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
      <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.8-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z" />
    </svg>
  ),
  Android: (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
      <path d="M16.61 15.15c-.46 0-.84-.37-.84-.83s.38-.84.84-.84.83.38.83.84-.37.83-.83.83m-9.22 0c-.46 0-.84-.37-.84-.83s.38-.84.84-.84.83.38.83.84-.37.83-.83.83m9.42-5.89l1.67-2.89c.09-.17.03-.38-.14-.47s-.38-.03-.47.14L16.2 8.97C15.14 8.5 13.9 8.23 12.5 8.23s-2.64.28-3.7.74L7.13 6.04c-.09-.17-.3-.23-.47-.14s-.23.3-.14.47l1.67 2.89C6.26 10.6 5.19 12.38 5 14.4h14c-.19-2.02-1.26-3.8-3.19-5.14z" />
    </svg>
  ),
}

export default function Projects() {
  const [activeFilter, setActiveFilter] = useState('All')

  const filtered =
    activeFilter === 'All'
      ? projects
      : projects.filter((p) => p.category === activeFilter)

  return (
    <section id="projects" className="projects-section">
      <div className="container">
        <p className="section-label">What I've built</p>
        <h2 className="section-title"><span>Projects</span></h2>
        <p className="section-subtitle">Apps published on App Store & Google Play</p>

        <div className="filter-tabs">
          {categories.map((c) => (
            <button
              key={c}
              className={`filter-btn ${activeFilter === c ? 'active' : ''}`}
              onClick={() => setActiveFilter(c)}
            >
              {c}
            </button>
          ))}
        </div>

        <div className="projects-grid">
          {filtered.map((project) => (
            <div key={project.name} className={`project-card ${project.highlight ? 'highlight' : ''}`}>
              {project.highlight && <div className="highlight-badge">⭐ Featured</div>}
              <div className="project-header">
                <div>
                  <span className="project-category">{project.category}</span>
                  <h3 className="project-name">{project.name}</h3>
                </div>
                <div className="platform-chips">
                  {project.platforms.map((p) => (
                    <span key={p} className="platform-chip">
                      {platformIcons[p]}
                      {p}
                    </span>
                  ))}
                </div>
              </div>
              <p className="project-desc">{project.description}</p>
              <div className="project-tags">
                {project.tags.map((t) => (
                  <span key={t} className="tag">{t}</span>
                ))}
              </div>
              <div className="project-footer">
                {project.storeLinks.playStore && (
                  <span className="store-link">
                    <PlayStoreIcon /> Google Play
                  </span>
                )}
                {project.storeLinks.appStore && (
                  <span className="store-link">
                    <AppStoreIcon /> App Store
                  </span>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

function PlayStoreIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
      <path d="M3 20.5v-17c0-.83.94-1.3 1.6-.8l14 8.5c.6.36.6 1.24 0 1.6l-14 8.5c-.66.5-1.6.03-1.6-.8z" />
    </svg>
  )
}
function AppStoreIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
      <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.8-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z" />
    </svg>
  )
}
