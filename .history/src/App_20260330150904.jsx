import './App.css'

const coreCompetencies = [
  'Project & Program Lifecycle Leadership (Initiation-Closeout)',
  'Strategic Planning & Execution Alignment',
  'Enterprise Scheduling & Baseline Governance (Primavera P6, Microsoft Project, Click Up)',
  'Project Controls, Cost Management & Performance Tracking',
  'Construction & EPC Project Coordination',
  'IT & Digital Transformation Project Delivery',
  'Risk Management & Mitigation Strategy',
  'PMO Governance, Reporting & Executive Dashboarding',
  'Vendor, Contract & Stakeholder Management',
  'Resource Planning & Portfolio Optimization',
  'Agile & Waterfall Methodologies',
]

const technicalExpertise = [
  {
    area: 'Project Planning & Scheduling',
    tools: 'Microsoft Project, Primavera P6, Click Up',
  },
  {
    area: 'Collaboration & Communication Platforms',
    tools: 'Microsoft Teams, Zoom, Google Workspace',
  },
  {
    area: 'Project Documentation & Knowledge Management',
    tools: 'Microsoft Office Suite, SharePoint, Confluence',
  },
  {
    area: 'Project Delivery Frameworks',
    tools: 'Agile, Kanban, Waterfall',
  },
]

const experience = [
  {
    role: 'Project Manager / Project Scheduler - Telecommunications (Fibre Optics Deployment)',
    company:
      'Kennyworks Limited (AKK Gas Pipeline) Fibre Optic Backbone Project',
    period: 'February 2025 - January 2026',
    highlights: [
      'Directed planning and execution oversight for fibre optic backbone deployment, developing and controlling integrated project schedules in Primavera P6 to improve on-time milestone delivery by 20%.',
      'Managed end-to-end fibre rollout activities including route survey, ROW coordination, trenching, HDD crossings, duct installation, cable blowing, splicing, OTDR testing, and network integration.',
      'Implemented schedule risk analysis and recovery planning, reducing potential delays by 20% and strengthening rollout predictability across multiple work fronts.',
      'Led resource forecasting and productivity monitoring for fibre crews, reducing idle time by 15% and accelerating deployment timelines.',
      'Supported commissioning, acceptance testing, and final handover documentation in compliance with regulatory, quality, and HSE standards.',
    ],
  },
  {
    role: 'Technical Project Manager - Project Controls (Electrical & Instrumentation)',
    company:
      'A.A. Rano Nigeria Limited (Lubricant Oil Blending Plant, Kano)',
    period: 'September 2024 - January 2025',
    highlights: [
      'Led planning, scheduling, and performance monitoring for Electrical & Instrumentation installation and commissioning works.',
      'Maintained detailed schedules and delivered 95% schedule adherence through proactive variance analysis and corrective action planning.',
      'Managed cost tracking and material control for electrical panels, field instruments, cabling, and bulk materials to align with budget and procurement timelines.',
      'Conducted schedule risk assessments, RCA, and FMEA to mitigate execution risks and minimize potential downtime.',
      'Ensured compliance with HSE, quality, and regulatory standards while maintaining scope control and change management discipline.',
    ],
  },
  {
    role: 'Project Manager / Project Scheduler - Quicksilver Website Project 2024',
    company: 'KSD Multicorp',
    period: 'July 2023 - August 2024',
    highlights: [
      'Led planning, scheduling, and execution for web design, hardware setup, software development, and communication infrastructure.',
      'Developed a complete WBS and integrated schedule in Microsoft Project and Primavera P6, defining tasks, dependencies, and key milestones.',
      'Coordinated cross-functional teams across design, procurement, software delivery, and network configuration.',
      'Implemented baseline management, progress tracking, and critical path analysis to improve schedule performance visibility.',
      'Delivered the project on time while maintaining scope, quality, and stakeholder satisfaction.',
    ],
  },
  {
    role: 'Project Manager / Project Scheduler - Residential Construction Project',
    company: 'KSD Multicorp',
    period: '2023',
    highlights: [
      'Managed end-to-end construction from foundation to finishing, ensuring delivery within scope, schedule, and budget.',
      'Developed and controlled integrated schedules across foundation, superstructure, and finishing phases.',
      'Directed sequencing for critical activities including clearing, digging, slab work, formwork, plastering, plumbing, electricals, painting, and decoration.',
      'Applied project controls with baseline creation, progress tracking, and critical path analysis to prevent schedule slippage.',
      'Delivered successfully on time with high workmanship standards and strong stakeholder satisfaction.',
    ],
  },
  {
    role: 'Project Manager - Furniture Production & Installation Projects',
    company: 'Kennyworks Limited',
    period: '2022',
    highlights: [
      'Managed execution from design approval through fabrication, procurement, delivery, and on-site installation.',
      'Maintained detailed schedules in Microsoft Project to track production and installation milestones.',
      'Implemented procurement planning and inventory tracking to reduce material wastage and improve cost efficiency.',
      'Coordinated carpenters, vendors, and logistics teams to maintain on-time delivery and installation.',
      'Improved client satisfaction with milestone-based reporting and quality control processes.',
    ],
  },
  {
    role: 'Project Coordinator - Fashion Retail & Product Launch Projects',
    company: 'Bubket Engineering',
    period: '2022',
    highlights: [
      'Managed seasonal production cycles from concept design through manufacturing, quality control, and market launch.',
      'Coordinated suppliers, manufacturers, and production timelines to ensure product availability before peak sales periods.',
      'Implemented inventory tracking and reporting to improve stock visibility and reduce high-demand shortages.',
      'Supported marketing, distribution planning, and release scheduling to align operations with business goals.',
      'Applied project controls through progress tracking, timeline monitoring, and cross-functional coordination.',
    ],
  },
]

const certifications = [
  'Project Management Professional (PMP) - Project Management Institute (PMI)',
  'Microsoft Project & Primavera P6 Certification - Project Scheduling & Controls',
  'Agile Scrum Certification - International Association of Project Managers (IAPM)',
  'Cybersecurity Certification - International Association of Project Managers (IAPM)',
  'Project Management Certification - International Association of Project Managers (IAPM)',
]

const education = [
  'Postgraduate Diploma (Engineering) - Industrial Automation, 2020',
  'Graduate Diploma - Project Management, 2019',
  'Higher National Diploma (HND) - Mechanical & Fabrication Engineering, 2019',
  'National Youth Service Corps (NYSC) - 2021',
]

const impact = [
  'Improved schedule adherence across multi-disciplinary engineering and IT projects by up to 20% through proactive planning and project controls.',
  'Reduced risk exposure by implementing structured schedule monitoring, progress tracking, and mitigation strategies.',
  'Delivered IT systems and process improvements that enhanced operational efficiency by 30%.',
  'Successfully managed projects across Oil & Gas, Telecommunications, Construction, Furniture Production, and Fashion Retail.',
]

const trustMetrics = [
  '20% better milestone delivery in fibre deployment',
  '95% schedule adherence on E&I commissioning',
  '30% operational efficiency uplift in IT systems',
]

const featuredProjects = [
  {
    title: 'AKK Fibre Optic Backbone Rollout',
    sector: 'Telecommunications',
    outcome: 'Improved milestone delivery by 20% with integrated schedule controls and recovery planning.',
    image:
      'https://images.unsplash.com/photo-1563770660941-10a636076b4a?auto=format&fit=crop&w=1200&q=80',
  },
  {
    title: 'Lubricant Blending Plant E&I Delivery',
    sector: 'Industrial Engineering',
    outcome: 'Maintained 95% schedule adherence through variance analysis, RCA, and FMEA-based risk reduction.',
    image:
      'https://images.unsplash.com/photo-1581092919535-7146ff1a590d?auto=format&fit=crop&w=1200&q=80',
  },
  {
    title: 'Residential Construction Execution',
    sector: 'Construction',
    outcome: 'Delivered full-scope residential build on time with disciplined project controls and quality assurance.',
    image:
      'https://images.unsplash.com/photo-1460317442991-0ec209397118?auto=format&fit=crop&w=1200&q=80',
  },
  {
    title: 'Quicksilver Digital Transformation Project',
    sector: 'IT & Web Delivery',
    outcome: 'Coordinated design, software, and infrastructure teams to deliver on schedule and within scope.',
    image:
      'https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=1200&q=80',
  },
]

function App() {
  return (
    <main className="site-shell">
      <header className="hero">
        <div className="hero-grid">
          <div className="hero-copy">
            <p className="eyebrow">Project Management Professional</p>
            <h1>Iheanacho Victor Ugochukwu, PMP</h1>
            <p className="location">
              Abuja, Nigeria | Open to Remote & International Roles
            </p>

            <div className="contact-strip">
              <a href="mailto:iheanachofederals8@gmail.com">
                iheanachofederals8@gmail.com
              </a>
              <a href="tel:+2348093726082">+2348093726082</a>
              <a
                href="https://linkedin.com/in/victor-Iheanacho"
                target="_blank"
                rel="noreferrer"
              >
                LinkedIn Profile
              </a>
              <a className="cv-download" href="/Assets/My%20CV.pdf" download>
                Download CV
              </a>
            </div>

            <ul className="trust-metrics">
              {trustMetrics.map((metric) => (
                <li key={metric}>{metric}</li>
              ))}
            </ul>
          </div>

          <aside className="hero-visual">
            <img
              src="https://images.unsplash.com/photo-1521790797524-b2497295b8a0?auto=format&fit=crop&w=900&q=80"
              alt="Professional leadership planning session"
            />
            <div className="floating-note">Multi-Sector Delivery Expert</div>
            <div className="floating-note accent">Agile + Waterfall Governance</div>
          </aside>
        </div>
      </header>

      <section className="panel">
        <h2>Professional Summary</h2>
        <p>
          Project Management Professional (PMP) with extensive experience
          leading complex, multi-sector projects across Engineering,
          Construction, IT, Furniture Manufacturing, and Retail Operations.
          Demonstrated expertise in strategic planning, enterprise scheduling,
          cost governance, and risk management using Microsoft Project,
          Primavera P6, and Click Up.
        </p>
        <p>
          Proven ability to lead cross-functional and geographically distributed
          teams, strengthen governance frameworks, and implement structured
          methodologies across Agile and Waterfall environments. Recognized for
          building scalable project controls systems, improving schedule
          predictability, and delivering measurable gains in cost efficiency,
          timeline adherence, and organizational performance.
        </p>
      </section>

      <section className="panel split">
        <div>
          <h2>Core Competencies</h2>
          <ul className="pill-list">
            {coreCompetencies.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </div>

        <div>
          <h2>Technical Expertise</h2>
          <ul className="detail-list">
            {technicalExpertise.map((item) => (
              <li key={item.area}>
                <h3>{item.area}</h3>
                <p>{item.tools}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="panel gallery-panel">
        <div className="section-heading">
          <h2>Featured Projects</h2>
          <p>
            Selected delivery snapshots across telecom, engineering,
            construction, and digital transformation.
          </p>
        </div>

        <div className="project-grid">
          {featuredProjects.map((project) => (
            <article className="project-card" key={project.title}>
              <img src={project.image} alt={project.title} loading="lazy" />
              <div className="project-card-body">
                <p className="project-sector">{project.sector}</p>
                <h3>{project.title}</h3>
                <p>{project.outcome}</p>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="panel">
        <h2>Professional Experience</h2>
        <div className="timeline">
          {experience.map((job) => (
            <article className="timeline-card" key={`${job.role}-${job.period}`}>
              <p className="period">{job.period}</p>
              <h3>{job.role}</h3>
              <p className="company">{job.company}</p>
              <ul>
                {job.highlights.map((point) => (
                  <li key={point}>{point}</li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </section>

      <section className="panel split stack-on-mobile">
        <div>
          <h2>Professional Certifications</h2>
          <ul className="plain-list">
            {certifications.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </div>

        <div>
          <h2>Education</h2>
          <ul className="plain-list">
            {education.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </div>
      </section>

      <section className="panel impact-panel">
        <h2>Selected Project Management Impact</h2>
        <ul className="impact-list">
          {impact.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      </section>

      <section className="panel cta-panel">
        <h2>Let&apos;s Build Your Next Successful Project</h2>
        <p>
          Available for project management leadership, scheduling strategy,
          PMO governance, and turnaround support for complex delivery programs.
        </p>
        <div className="cta-actions">
          <a href="mailto:iheanachofederals8@gmail.com">Email for Engagement</a>
          <a href="https://linkedin.com/in/victor-Iheanacho" target="_blank" rel="noreferrer">
            Connect on LinkedIn
          </a>
        </div>
      </section>
    </main>
  )
}

export default App
