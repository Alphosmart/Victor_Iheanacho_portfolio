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
    challenge:
      'Multi-location rollout with high dependency on civil works, approvals, and testing windows.',
    action:
      'Built integrated Primavera P6 schedules, coordinated fibre and civil interfaces, and introduced recovery triggers.',
    outcome:
      'Improved milestone delivery by 20% and reduced delay exposure by 20% across active work fronts.',
    image: 'Projects/Building schedule.png',
  },
  {
    title: 'Lubricant Blending Plant E&I Delivery',
    sector: 'Industrial Engineering',
    challenge:
      'Commissioning-critical instrumentation and electrical scope with strict HSE and quality controls.',
    action:
      'Implemented baseline monitoring, RCA/FMEA risk workflows, and disciplined weekly variance governance.',
    outcome:
      'Maintained 95% schedule adherence and improved commissioning readiness before plant startup.',
    image: 'Projects/WhatsApp Image 2026-03-30 at 3.22.53 PM.jpeg',
  },
  {
    title: 'Residential Construction Execution',
    sector: 'Construction',
    challenge:
      'Sequencing multiple trades across foundation, superstructure, and finishing phases.',
    action:
      'Developed detailed WBS sequencing and applied critical path controls with active resource coordination.',
    outcome:
      'Delivered full-scope residential build on time while maintaining quality and HSE compliance.',
    image: 'Projects/WhatsApp Image 2026-03-30 at 3.38.12 PM.jpeg',
  },
  {
    title: 'Quicksilver Digital Transformation Project',
    sector: 'IT & Web Delivery',
    challenge:
      'Aligning digital, hardware, and communication infrastructure deliverables in one timeline.',
    action:
      'Created integrated WBS dependencies and orchestrated cross-functional delivery checkpoints.',
    outcome:
      'Delivered on schedule while protecting scope quality and stakeholder confidence.',
    image: 'Projects/WhatsApp Image 2026-03-30 at 3.40.47 PM.jpeg',
  },
]

const projectGalleryImages = [
  'Projects/Building schedule.png',
  'Projects/WhatsApp Image 2026-03-30 at 3.22.53 PM.jpeg',
  'Projects/WhatsApp Image 2026-03-30 at 3.22.55 PM (1).jpeg',
  'Projects/WhatsApp Image 2026-03-30 at 3.22.55 PM (2).jpeg',
  'Projects/WhatsApp Image 2026-03-30 at 3.22.55 PM.jpeg',
  'Projects/WhatsApp Image 2026-03-30 at 3.36.28 PM.jpeg',
  'Projects/WhatsApp Image 2026-03-30 at 3.38.11 PM.jpeg',
  'Projects/WhatsApp Image 2026-03-30 at 3.38.12 PM (1).jpeg',
  'Projects/WhatsApp Image 2026-03-30 at 3.38.12 PM.jpeg',
  'Projects/WhatsApp Image 2026-03-30 at 3.38.13 PM (1).jpeg',
  'Projects/WhatsApp Image 2026-03-30 at 3.38.13 PM.jpeg',
  'Projects/WhatsApp Image 2026-03-30 at 3.38.14 PM.jpeg',
  'Projects/WhatsApp Image 2026-03-30 at 3.38.15 PM (1).jpeg',
  'Projects/WhatsApp Image 2026-03-30 at 3.38.15 PM.jpeg',
  'Projects/WhatsApp Image 2026-03-30 at 3.38.16 PM.jpeg',
  'Projects/WhatsApp Image 2026-03-30 at 3.38.17 PM (1).jpeg',
  'Projects/WhatsApp Image 2026-03-30 at 3.38.17 PM.jpeg',
  'Projects/WhatsApp Image 2026-03-30 at 3.38.18 PM (1).jpeg',
  'Projects/WhatsApp Image 2026-03-30 at 3.38.18 PM.jpeg',
  'Projects/WhatsApp Image 2026-03-30 at 3.38.19 PM.jpeg',
  'Projects/WhatsApp Image 2026-03-30 at 3.38.20 PM.jpeg',
  'Projects/WhatsApp Image 2026-03-30 at 3.38.21 PM (1).jpeg',
  'Projects/WhatsApp Image 2026-03-30 at 3.38.21 PM.jpeg',
  'Projects/WhatsApp Image 2026-03-30 at 3.38.22 PM (1).jpeg',
  'Projects/WhatsApp Image 2026-03-30 at 3.38.22 PM.jpeg',
  'Projects/WhatsApp Image 2026-03-30 at 3.38.23 PM.jpeg',
  'Projects/WhatsApp Image 2026-03-30 at 3.40.46 PM (1).jpeg',
  'Projects/WhatsApp Image 2026-03-30 at 3.40.46 PM (2).jpeg',
  'Projects/WhatsApp Image 2026-03-30 at 3.40.46 PM.jpeg',
  'Projects/WhatsApp Image 2026-03-30 at 3.40.47 PM (1).jpeg',
  'Projects/WhatsApp Image 2026-03-30 at 3.40.47 PM (2).jpeg',
  'Projects/WhatsApp Image 2026-03-30 at 3.40.47 PM (3).jpeg',
  'Projects/WhatsApp Image 2026-03-30 at 3.40.47 PM (4).jpeg',
  'Projects/WhatsApp Image 2026-03-30 at 3.40.47 PM (5).jpeg',
  'Projects/WhatsApp Image 2026-03-30 at 3.40.47 PM (6).jpeg',
  'Projects/WhatsApp Image 2026-03-30 at 3.40.47 PM (7).jpeg',
  'Projects/WhatsApp Image 2026-03-30 at 3.40.47 PM.jpeg',
]

const services = [
  {
    title: 'Project Rescue & Recovery',
    detail:
      'Stabilize delayed projects through schedule recovery plans, risk triage, and execution reset governance.',
  },
  {
    title: 'Enterprise Scheduling & Controls',
    detail:
      'Design baseline schedules, critical path visibility, and progress control systems in Primavera P6 and Microsoft Project.',
  },
  {
    title: 'PMO Reporting & Executive Dashboards',
    detail:
      'Translate project complexity into concise executive insight for faster decisions and portfolio alignment.',
  },
  {
    title: 'Multi-Sector Delivery Leadership',
    detail:
      'Coordinate teams across telecom, construction, engineering, and IT with high accountability and stakeholder clarity.',
  },
]

const processSteps = [
  {
    name: '01 Discovery',
    text: 'Clarify scope, success metrics, constraints, and delivery risk profile.',
  },
  {
    name: '02 Blueprint',
    text: 'Build schedule architecture, governance cadence, and resource strategy.',
  },
  {
    name: '03 Execution Control',
    text: 'Track progress vs baseline, resolve blockers quickly, and keep stakeholders aligned.',
  },
  {
    name: '04 Delivery Assurance',
    text: 'Close out with quality, compliance, and handover discipline.',
  },
]

function App() {
  const cvUrl = `${import.meta.env.BASE_URL}Assets/My%20CV.pdf`
  const profileImageUrl = `${import.meta.env.BASE_URL}Assets/Victor%20pix.jpg`

  return (
    <main className="site-shell">
      <nav className="top-nav">
        <p className="brand">Victor I. PMP</p>
        <div>
          <a href="#projects">Projects</a>
          <a href="#gallery">Gallery</a>
          <a href="#experience">Experience</a>
          <a href="#contact">Contact</a>
        </div>
      </nav>

      <header className="hero">
        <div className="hero-grid">
          <div className="hero-copy">
            <p className="eyebrow">Project Management Professional</p>
            <h1>Iheanacho Victor Ugochukwu, PMP</h1>
            <p className="location">
              Abuja, Nigeria | Open to Remote & International Roles
            </p>
            <p className="value-prop">
              I help organizations deliver complex projects with stronger
              schedule certainty, better risk control, and measurable execution
              performance.
            </p>

            <div className="contact-strip">
              <a href="mailto:iheanachofederals8@gmail.com">
                iheanachofederals8@gmail.com
              </a>
              <a href="tel:+2348093726082">+2348093726082</a>
              <a
                href="https://www.linkedin.com/in/victor-iheanacho-43aa02277/"
                target="_blank"
                rel="noreferrer"
              >
                LinkedIn Profile
              </a>
              <a href="https://x.com/sirfederals" target="_blank" rel="noreferrer">
                X Profile
              </a>
              <a className="cv-download" href={cvUrl} download>
                Download CV
              </a>
              <a className="primary-action" href="#contact">
                Book a Discovery Call
              </a>
            </div>

            <ul className="trust-metrics">
              {trustMetrics.map((metric) => (
                <li key={metric}>{metric}</li>
              ))}
            </ul>
          </div>

          <aside className="hero-visual" aria-label="Project leadership visuals">
            <img
              src={profileImageUrl}
              alt="Portrait of Iheanacho Victor Ugochukwu"
            />
            <img
              className="hero-secondary"
              src="https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=700&q=80"
              alt="Project planning dashboard and teamwork"
            />
            <div className="floating-note">Multi-Sector Delivery Expert</div>
            <div className="floating-note accent">Agile + Waterfall Governance</div>
          </aside>
        </div>
      </header>

      <section className="proof-strip panel" aria-label="Client proof metrics">
        {trustMetrics.map((metric) => (
          <article key={metric}>
            <p>{metric}</p>
          </article>
        ))}
      </section>

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

      <section className="panel services-panel" id="services">
        <div className="section-heading">
          <h2>How I Support Clients</h2>
          <p>
            Built for business owners, operations leaders, and project sponsors
            who need reliable delivery outcomes.
          </p>
        </div>
        <div className="services-grid">
          {services.map((service) => (
            <article className="service-card" key={service.title}>
              <h3>{service.title}</h3>
              <p>{service.detail}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="panel gallery-panel" id="projects">
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
              <img
                src={`${import.meta.env.BASE_URL}${encodeURI(project.image)}`}
                alt={project.title}
                loading="lazy"
              />

              <div className="project-card-body">
                <p className="project-sector">{project.sector}</p>
                <h3>{project.title}</h3>
                <p>
                  <strong>Challenge:</strong> {project.challenge}
                </p>
                <p>
                  <strong>Action:</strong> {project.action}
                </p>
                <p>
                  <strong>Outcome:</strong> {project.outcome}
                </p>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="panel photo-gallery-panel" id="gallery">
        <div className="section-heading">
          <h2>Project Gallery</h2>
          <p>
            Complete collection of project pictures across planning,
            construction, deployment, and execution activities.
          </p>
        </div>
        <div className="photo-gallery-grid">
          {projectGalleryImages.map((imagePath, index) => (
            <figure className="gallery-item" key={imagePath}>
              <img
                src={`${import.meta.env.BASE_URL}${encodeURI(imagePath)}`}
                alt={`Project photo ${index + 1}`}
                loading="lazy"
              />
              <figcaption>Project Snapshot {index + 1}</figcaption>
            </figure>
          ))}
        </div>
      </section>

      <section className="panel process-panel">
        <div className="section-heading">
          <h2>My Delivery Process</h2>
          <p>
            Structured, transparent, and designed to reduce surprises during
            execution.
          </p>
        </div>
        <div className="process-grid">
          {processSteps.map((step) => (
            <article className="process-card" key={step.name}>
              <h3>{step.name}</h3>
              <p>{step.text}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="panel" id="experience">
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
          <a href="https://www.linkedin.com/in/victor-iheanacho-43aa02277/" target="_blank" rel="noreferrer">
            Connect on LinkedIn
          </a>
          <a href="https://x.com/sirfederals" target="_blank" rel="noreferrer">
            Follow on X
          </a>
        </div>
      </section>

      <section className="panel contact-panel" id="contact">
        <h2>Contact</h2>
        <div className="contact-cards">
          <a href="mailto:iheanachofederals8@gmail.com">
            <span>Email</span>
            <strong>iheanachofederals8@gmail.com</strong>
          </a>
          <a href="tel:+2348093726082">
            <span>Phone</span>
            <strong>+2348093726082</strong>
          </a>
          <a href="https://www.linkedin.com/in/victor-iheanacho-43aa02277/" target="_blank" rel="noreferrer">
            <span>LinkedIn</span>
            <strong>linkedin.com/in/victor-iheanacho-43aa02277</strong>
          </a>
          <a href="https://x.com/sirfederals" target="_blank" rel="noreferrer">
            <span>X</span>
            <strong>x.com/sirfederals</strong>
          </a>
          <a href={cvUrl} download>
            <span>Curriculum Vitae</span>
            <strong>Download CV</strong>
          </a>
        </div>
      </section>

      <a className="sticky-cta" href="mailto:iheanachofederals8@gmail.com">
        Start a Project Conversation
      </a>
    </main>
  )
}

export default App
