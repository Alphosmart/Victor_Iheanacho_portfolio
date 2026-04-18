/**
 * Victor Iheanacho - Project Management Professional Portfolio
 * 
 * A React + Vite single-page application showcasing professional expertise,
 * featured projects, work experience, and services offered in project management
 * and delivery leadership.
 */

import { useEffect, useRef } from 'react'
import './App.css'

/* ──────────────────────────────────────────────────────────────────
   DATA STRUCTURES - Portfolio content and configuration
   ────────────────────────────────────────────────────────────────── */

/**
 * Core competencies array - Lists key project management skills
 * and tools used across various industries and delivery models
 */
const coreCompetencies = [
  'Project & Program Lifecycle Leadership',
  'Strategic Planning & Execution Alignment',
  'Enterprise Scheduling & Baseline Governance',
  'Project Controls & Cost Management',
  'Construction & EPC Project Coordination',
  'IT & Digital Transformation Delivery',
  'Risk Management & Mitigation Strategy',
  'PMO Governance & Executive Dashboarding',
  'Vendor, Contract & Stakeholder Management',
  'Resource Planning & Portfolio Optimization',
  'Primavera P6 · MS Project · Click Up',
]

/**
 * Technical expertise array - Maps specialized skill areas to specific tools
 * used for collaboration, planning, and delivery management
 */
const technicalExpertise = [
  { area: 'Project Planning & Scheduling',     tools: 'Microsoft Project · Primavera P6 · Click Up' },
  { area: 'Collaboration & Communication',     tools: 'Microsoft Teams · Zoom · Google Workspace' },
  { area: 'Documentation & Knowledge Mgmt',   tools: 'Microsoft Office Suite · SharePoint · Confluence' },
  { area: 'Delivery Frameworks',               tools: 'Kanban · Waterfall · Hybrid' },
]

/**
 * Proof metrics array - Quantifiable results demonstrating project
 * management impact across different domains (improvements, efficiency, scope)
 */
const proofMetrics = [
  { num: '20%',   desc: 'Milestone delivery improvement in fibre rollout' },
  { num: '95%',   desc: 'Schedule adherence on E&I commissioning' },
  { num: '30%',   desc: 'Operational efficiency uplift in IT systems' },
  { num: '6+',    desc: 'Industries delivered across Nigeria' },
]

/**
 * Experience array - Detailed work history with roles, companies, periods,
 * and key accomplishments. Each entry includes project scope and measurable outcomes.
 */
const experience = [
  {
    role: 'Project Manager / Project Scheduler — Telecommunications',
    company: 'Kennyworks Limited · AKK Gas Pipeline Fibre Optic Backbone Project',
    period: 'Feb 2025 – Jan 2026',
    highlights: [
      'Directed planning and execution oversight for fibre optic backbone deployment, developing and controlling integrated schedules in Primavera P6 to improve on-time milestone delivery by 20%.',
      'Managed end-to-end fibre rollout including route survey, ROW coordination, trenching, HDD crossings, duct installation, cable blowing, splicing, OTDR testing, and network integration.',
      'Implemented schedule risk analysis and recovery planning, reducing potential delays by 20% and strengthening rollout predictability across multiple work fronts.',
      'Led resource forecasting and productivity monitoring for fibre crews, reducing idle time by 15% and accelerating deployment timelines.',
      'Supported commissioning, acceptance testing, and final handover documentation in compliance with regulatory, quality, and HSE standards.',
    ],
  },
  {
    role: 'Technical Project Manager — Project Controls (E&I)',
    company: 'A.A. Rano Nigeria Limited · Lubricant Oil Blending Plant, Kano',
    period: 'Sep 2024 – Jan 2025',
    highlights: [
      'Led planning, scheduling, and performance monitoring for Electrical & Instrumentation installation and commissioning works.',
      'Maintained detailed schedules and delivered 95% schedule adherence through proactive variance analysis and corrective action planning.',
      'Managed cost tracking and material control for electrical panels, field instruments, cabling, and bulk materials.',
      'Conducted schedule risk assessments, RCA, and FMEA to mitigate execution risks and minimise potential downtime.',
      'Ensured compliance with HSE, quality, and regulatory standards while maintaining scope control and change management discipline.',
    ],
  },
  {
    role: 'Project Manager / Project Scheduler — Digital Transformation',
    company: 'KSD Multicorp · Quicksilver Website Project',
    period: 'Jul 2023 – Aug 2024',
    highlights: [
      'Led planning, scheduling, and execution for web design, hardware setup, software development, and communication infrastructure.',
      'Developed a complete WBS and integrated schedule in Microsoft Project and Primavera P6, defining tasks, dependencies, and key milestones.',
      'Coordinated cross-functional teams across design, procurement, software delivery, and network configuration.',
      'Implemented baseline management, progress tracking, and critical path analysis to improve schedule performance visibility.',
      'Delivered on time while maintaining scope, quality, and stakeholder satisfaction.',
    ],
  },
  {
    role: 'Project Manager / Project Scheduler — Residential Construction',
    company: 'KSD Multicorp',
    period: '2023',
    highlights: [
      'Managed end-to-end construction from foundation to finishing, ensuring delivery within scope, schedule, and budget.',
      'Developed and controlled integrated schedules across foundation, superstructure, and finishing phases.',
      'Directed sequencing for critical activities including clearing, digging, slab work, formwork, plastering, plumbing, electricals, and decoration.',
      'Applied project controls with baseline creation, progress tracking, and critical path analysis to prevent schedule slippage.',
      'Delivered successfully on time with high workmanship standards and strong stakeholder satisfaction.',
    ],
  },
  {
    role: 'Project Manager — Furniture Production & Installation',
    company: 'Kennyworks Limited',
    period: '2022',
    highlights: [
      'Managed execution from design approval through fabrication, procurement, delivery, and on-site installation.',
      'Maintained detailed schedules in Microsoft Project to track production and installation milestones.',
      'Implemented procurement planning and inventory tracking to reduce material wastage and improve cost efficiency.',
      'Coordinated carpenters, vendors, and logistics teams to maintain on-time delivery.',
    ],
  },
  {
    role: 'Project Coordinator — Fashion Retail & Product Launch',
    company: 'Bubket Engineering',
    period: '2022',
    highlights: [
      'Managed seasonal production cycles from concept design through manufacturing, quality control, and market launch.',
      'Coordinated suppliers, manufacturers, and production timelines to ensure product availability before peak sales periods.',
      'Implemented inventory tracking and reporting to improve stock visibility and reduce high-demand shortages.',
      'Supported marketing, distribution planning, and release scheduling to align operations with business goals.',
    ],
  },
]

/**
 * Certifications array - Professional credentials and certifications
 * that validate project management expertise and technical knowledge
 */
const certifications = [
  'Project Management Professional (PMP) — Project Management Institute (PMI)',
  'Microsoft Project & Primavera P6 Certification — Project Scheduling & Controls',
  'Agile Scrum Certification — International Association of Project Managers (IAPM)',
  'Cybersecurity Certification — IAPM',
  'Project Management Certification — IAPM',
]

/**
 * Education array - Academic qualifications including diplomas and certifications
 * relevant to engineering, project management, and professional development
 */
const education = [
  'Postgraduate Diploma (Engineering) — Industrial Automation, 2020',
  'Graduate Diploma — Project Management, 2019',
  'Higher National Diploma — Mechanical & Fabrication Engineering, 2019',
  'National Youth Service Corps (NYSC) — 2021',
]

/**
 * Impact array - Key achievements and measurable business outcomes
 * demonstrating the value delivered through project management expertise
 */
const impact = [
  { icon: '📈', text: 'Improved schedule adherence across multi-disciplinary engineering and IT projects by up to 20% through proactive planning and project controls.' },
  { icon: '🛡️', text: 'Reduced risk exposure by implementing structured schedule monitoring, progress tracking, and mitigation strategies.' },
  { icon: '⚡', text: 'Delivered IT systems and process improvements that enhanced operational efficiency by 30%.' },
  { icon: '🌍', text: 'Successfully managed projects across Oil & Gas, Telecom, Construction, Furniture Production, and Fashion Retail.' },
]

/**
 * Featured projects array - Case studies showcasing specific projects with:
 * - Title and industry sector
 * - Metrics of success (improvements and KPIs achieved)
 * - Challenge faced, actions taken, and outcomes delivered
 * - Project imagery for visual storytelling
 */
const featuredProjects = [
  {
    title: 'AKK Fibre Optic Backbone Rollout',
    sector: 'Telecommunications',
    success: '20% milestone improvement · 15% idle time cut',
    challenge: 'Multi-location rollout with high dependency on civil works, approvals, and testing windows.',
    action: 'Built integrated Primavera P6 schedules, coordinated fibre and civil interfaces, and introduced recovery triggers.',
    outcome: 'Improved milestone delivery by 20%; reduced delay exposure by 20% across active work fronts.',
    image: 'Projects/Building schedule.png',
  },
  {
    title: 'Lubricant Blending Plant E&I Delivery',
    sector: 'Industrial Engineering',
    success: '95% schedule adherence · Zero commissioning delays',
    challenge: 'Commissioning-critical instrumentation and electrical scope with strict HSE and quality controls.',
    action: 'Implemented baseline monitoring, RCA/FMEA risk workflows, and disciplined weekly variance governance.',
    outcome: 'Maintained 95% schedule adherence and improved commissioning readiness before plant startup.',
    image: 'Projects/WhatsApp Image 2026-03-30 at 3.22.53 PM.jpeg',
  },
  {
    title: 'Residential Construction Execution',
    sector: 'Construction',
    success: 'On-time delivery · Full HSE compliance achieved',
    challenge: 'Sequencing multiple trades across foundation, superstructure, and finishing phases.',
    action: 'Developed detailed WBS sequencing and applied critical path controls with active resource coordination.',
    outcome: 'Delivered full-scope residential build on time while maintaining quality and HSE compliance.',
    image: 'Projects/WhatsApp Image 2026-03-30 at 3.38.12 PM.jpeg',
  },
  {
    title: 'Quicksilver Digital Transformation',
    sector: 'IT & Web Delivery',
    success: 'Full scope delivered on schedule · Stakeholder sign-off',
    challenge: 'Aligning digital, hardware, and communication infrastructure deliverables in one timeline.',
    action: 'Created integrated WBS dependencies and orchestrated cross-functional delivery checkpoints.',
    outcome: 'Delivered on schedule while protecting scope quality and stakeholder confidence.',
    image: 'Projects/WhatsApp Image 2026-03-30 at 3.40.47 PM.jpeg',
  },
]

/**
 * Services array - Core service offerings describing how the portfolio owner
 * supports clients with project management, scheduling, governance, and delivery
 */
const services = [
  {
    title: 'Project Rescue & Recovery',
    detail: 'Stabilise delayed projects through schedule recovery plans, risk triage, and execution reset governance.',
  },
  {
    title: 'Enterprise Scheduling & Controls',
    detail: 'Design baseline schedules, critical path visibility, and progress control systems in Primavera P6 and MS Project.',
  },
  {
    title: 'PMO Reporting & Executive Dashboards',
    detail: 'Translate project complexity into concise executive insight for faster decisions and portfolio alignment.',
  },
  {
    title: 'Multi-Sector Delivery Leadership',
    detail: 'Coordinate teams across telecom, construction, engineering, and IT with high accountability and stakeholder clarity.',
  },
]

/**
 * Process steps array - Describes the structured 4-phase delivery methodology:
 * 1. Discovery: Understanding scope and constraints
 * 2. Blueprint: Planning and architecture
 * 3. Execution Control: Real-time monitoring and adjustments
 * 4. Delivery Assurance: Quality and handover
 */
const processSteps = [
  { name: '01 Discovery',          text: 'Clarify scope, success metrics, constraints, and delivery risk profile.' },
  { name: '02 Blueprint',          text: 'Build schedule architecture, governance cadence, and resource strategy.' },
  { name: '03 Execution Control',  text: 'Track progress vs baseline, resolve blockers quickly, and keep stakeholders aligned.' },
  { name: '04 Delivery Assurance', text: 'Close out with quality, compliance, and handover discipline.' },
]

/* ──────────────────────────────────────────────────────────────────
   CUSTOM REACT HOOKS - Scroll animations and interactive behaviors
   ────────────────────────────────────────────────────────────────── */

/**
 * useReveal Hook - Implements scroll-triggered animation reveals
 * 
 * Uses IntersectionObserver to detect when elements with class 'reveal'
 * enter the viewport, then adds 'visible' class to trigger CSS animations.
 * Automatically unobserves elements after they've been revealed (once).
 * 
 * Benefits:
 * - Lazy animation rendering (better performance)
 * - Smooth staggered content reveals as user scrolls
 * - Respects user scroll speed and viewport position
 */
function useReveal() {
  useEffect(() => {
    // Select all elements marked for reveal animation
    const els = document.querySelectorAll('.reveal')
    
    // Create IntersectionObserver to watch for elements entering viewport
    const io = new IntersectionObserver(
      (entries) => entries.forEach((e) => { 
        if (e.isIntersecting) { 
          // Add 'visible' class to trigger CSS animation when element is in view
          e.target.classList.add('visible')
          // Stop observing after animation is triggered (one-time only)
          io.unobserve(e.target) 
        } 
      }),
      { 
        threshold: 0.1,                      // Trigger when 10% of element is visible
        rootMargin: '0px 0px -40px 0px'     // Start animation 40px before element fully visible
      }
    )
    
    // Start observing all reveal elements
    els.forEach((el) => io.observe(el))
    
    // Cleanup: Disconnect observer when component unmounts
    return () => io.disconnect()
  }, [])
}

/**
 * useScrolledNav Hook - Adds scroll-based styling to navigation bar
 * 
 * Detects when user has scrolled beyond 40px from top of page and
 * applies 'scrolled' class to nav element for visual feedback.
 * Uses ref to prevent unnecessary class toggles on every scroll event.
 * 
 * Benefits:
 * - Provides visual hierarchy changes as user scrolls
 * - Signals navigation position to user
 * - Uses passive event listener for performance
 */
function useScrolledNav() {
  // Track previous scroll state to avoid redundant updates
  const ref = useRef(false)
  
  useEffect(() => {
    // Get navigation element
    const nav = document.querySelector('.top-nav')
    
    // Handle scroll events
    const onScroll = () => {
      // Check if user has scrolled past 40px threshold
      const scrolled = window.scrollY > 40
      
      // Only update if scroll state has actually changed
      if (scrolled !== ref.current) {
        ref.current = scrolled
        // Toggle 'scrolled' class on nav for styling changes
        nav?.classList.toggle('scrolled', scrolled)
      }
    }
    
    // Add scroll listener with passive flag for better scroll performance
    window.addEventListener('scroll', onScroll, { passive: true })
    
    // Cleanup: Remove listener when component unmounts
    return () => window.removeEventListener('scroll', onScroll)
  }, [])
}

/* ──────────────────────────────────────────────────────────────────
   MAIN APP COMPONENT - Portfolio page structure and content
   ────────────────────────────────────────────────────────────────── */

/**
 * App Component - Main entry point for the portfolio application
 * 
 * Renders a complete professional portfolio featuring:
 * - Hero section with introduction and call-to-action
 * - Proof metrics and key achievements
 * - Professional summary and competencies
 * - Services offered
 * - Featured project case studies
 * - Delivery process overview
 * - Complete work experience timeline
 * - Certifications and education
 * - Impact metrics and results
 * - Contact information and CTA sections
 * - Sticky chat widget for quick engagement
 * 
 * Accessibility: Includes semantic HTML, ARIA labels, and proper heading hierarchy
 */
export default function App() {
  // Initialize scroll animation and navigation scroll detection hooks
  useReveal()
  useScrolledNav()

  // Asset paths and external URLs
  const base      = import.meta.env.BASE_URL              // Vite base URL for assets
  const cvUrl     = `${base}Assets/My%20CV.pdf`           // Link to downloadable CV
  const photoUrl  = `${base}Assets/Victor%20pix.jpg`      // Profile photo for hero section
  const waUrl     = 'https://wa.me/2347062733935?text=Hello%20Victor%2C%20I%20would%20like%20to%20discuss%20a%20project.' // WhatsApp contact link

  return (
    <main>
      {/* ═══════════════════════════════════════════════════════════
          NAVIGATION HEADER - Sticky navigation with quick links
          ═══════════════════════════════════════════════════════════ */}
      <header className="top-nav" role="banner">
        {/* Brand logo with PMP credential */}
        <p className="brand">Victor I.<span> PMP</span></p>
        
        {/* Primary navigation - Main sections and quick CTA */}
        <nav aria-label="Primary navigation">
          <a href="#projects">Projects</a>
          <a href="#experience">Experience</a>
          <a href="#contact">Contact</a>
          {/* Direct WhatsApp link for immediate engagement */}
          <a href={waUrl} target="_blank" rel="noreferrer" className="nav-cta">Let's Talk</a>
        </nav>
      </header>

      {/* ═══════════════════════════════════════════════════════════
          HERO SECTION - Main introduction and value proposition
          Professional introduction with photo, key achievements, and CTAs
          ═══════════════════════════════════════════════════════════ */}
      <section className="hero" aria-labelledby="hero-name">
        {/* Two-column layout: Left text content, Right profile image */}
        <div className="hero-grid">
          {/* LEFT: Copy - Introduction, headline, and calls-to-action */}
          <div className="hero-copy">
            {/* Professional subtitle */}
            <p className="hero-eyebrow reveal">Project Management Professional</p>

            {/* Main headline with name and staggered reveal animation */}
            <h1 className="hero-name reveal reveal-delay-1" id="hero-name">
              Iheanacho<br /><em>Victor</em> Ugochukwu
            </h1>

            {/* Location and availability info */}
            <p className="hero-location reveal reveal-delay-2">
              📍 Abuja, Nigeria · Open to Remote &amp; International Roles
            </p>

            {/* Value proposition - Core benefit statement */}
            <p className="hero-value reveal reveal-delay-2">
              I help organisations deliver complex projects with stronger schedule
              certainty, better risk control, and measurable execution performance.
            </p>

            {/* Multi-channel contact options and primary CTAs */}
            <div className="contact-strip reveal reveal-delay-3">
              {/* Direct contact channels */}
              <a href="mailto:iheanachofederals8@gmail.com">Email</a>
              <a href="tel:+2348093726082">+234 809 372 6082</a>
              <a href={waUrl} target="_blank" rel="noreferrer">WhatsApp</a>
              <a href="https://www.linkedin.com/in/victor-iheanacho-43aa02277/" target="_blank" rel="noreferrer">LinkedIn</a>
              <a href="https://x.com/sirfederals" target="_blank" rel="noreferrer">X / Twitter</a>
              
              {/* Action buttons */}
              <a href={cvUrl} download className="btn-dl">Download CV</a>
              <a href="#contact" className="btn-primary">Book a Discovery Call</a>
            </div>

            {/* Key achievements - Quick proof points */}
            <ul className="trust-pills reveal reveal-delay-4" aria-label="Key achievements">
              <li>20% better milestone delivery</li>
              <li>95% schedule adherence</li>
              <li>30% efficiency uplift</li>
              <li>6+ industries delivered</li>
              <li>15% crew idle time reduced</li>
              <li>End-to-end PMO governance</li>
            </ul>
          </div>

          {/* RIGHT: Visual - Profile image with floating badges */}
          <aside className="hero-visual" aria-label="Profile portrait">
            {/* Profile photo wrapper with animated entrance */}
            <div className="profile-wrap reveal reveal-delay-2">
              <img className="profile-static" src={photoUrl} alt="Portrait of Iheanacho Victor Ugochukwu, PMP" />
              {/* Floating credentials badges */}
              <div className="floating-badge b1">Multi-Sector Delivery Expert</div>
              <div className="floating-badge b2">Structured Delivery Governance</div>
            </div>
          </aside>
        </div>
      </section>

      {/* Visual divider between sections */}
      <hr className="divider" />

      {/* ═══════════════════════════════════════════════════════════
          PROOF METRICS STRIP - Key performance indicators and results
          Quick visual proof of value delivered
          ═══════════════════════════════════════════════════════════ */}
      <div className="proof-strip">
        <div className="proof-grid">
          {/* Render proof metrics dynamically - Each metric displays a number and description */}
          {proofMetrics.map((m) => (
            <div className="proof-card reveal" key={m.num}>
              <p className="proof-num">{m.num}</p>
              <p className="proof-desc">{m.desc}</p>
            </div>
          ))}
        </div>
      </div>

      {/* ═══════════════════════════════════════════════════════════
          PROFESSIONAL SUMMARY & COMPETENCIES - Expertise overview
          Comprehensive summary, core competencies, and technical tools
          ═══════════════════════════════════════════════════════════ */}
      <section className="panel" aria-labelledby="summary-title">
        <div className="summary-panel">
          {/* LEFT: Main professional summary text */}
          <div className="summary-text reveal">
            {/* Section label for visual hierarchy */}
            <p className="section-label">Professional Summary</p>
            
            {/* Main section heading */}
            <h2 className="section-title" id="summary-title">
              Driving Delivery Excellence Across Complex Programmes
            </h2>
            
            {/* First paragraph: Background and credentials */}
            <p>
              Project Management Professional (PMP) with extensive experience leading
              complex, multi-sector projects across Engineering, Construction, IT,
              Furniture Manufacturing, and Retail Operations. Demonstrated expertise in
              strategic planning, enterprise scheduling, cost governance, and risk management
              using Microsoft Project, Primavera P6, and Click Up.
            </p>
            
            {/* Second paragraph: Proven capabilities and methodologies */}
            <p>
              Proven ability to lead cross-functional and geographically distributed teams,
              strengthen governance frameworks, and implement structured methodologies across
              Agile and Waterfall environments — building scalable project controls systems,
              improving schedule predictability, and delivering measurable gains in cost efficiency
              and organisational performance.
            </p>
          </div>

          {/* RIGHT: Two-column aside with competencies and technical expertise */}
          <div className="summary-aside">
            <div className="reveal reveal-delay-1">
              <p className="section-label">Core Competencies</p>
              <ul className="competency-chips">
                {coreCompetencies.map((c) => <li key={c}>{c}</li>)}
              </ul>
            </div>

            <div className="reveal reveal-delay-2" style={{ marginTop: '2.5rem' }}>
              <p className="section-label">Technical Expertise</p>
              <div className="tech-table">
                {technicalExpertise.map((t) => (
                  <div className="tech-row" key={t.area}>
                    <div>{t.area}</div>
                    <div>{t.tools}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <hr className="divider" />

      {/* ── Services ───────────────────────────────────────────── */}
      <div className="services-bg">
        <section className="panel" id="services" aria-labelledby="services-title">
          <div className="reveal">
            <p className="section-label">How I Support Clients</p>
            <h2 className="section-title" id="services-title">Built for Reliable Delivery Outcomes</h2>
            <p className="section-sub">
              For business owners, operations leaders, and project sponsors who need
              execution certainty — not just plans.
            </p>
          </div>

          <div className="services-grid">
            {services.map((s, i) => (
              <article className="service-card reveal" key={s.title} style={{ transitionDelay: `${i * 0.08}s` }}>
                <p className="service-num">0{i + 1}</p>
                <h3>{s.title}</h3>
                <p>{s.detail}</p>
              </article>
            ))}
          </div>
        </section>
      </div>

      {/* ── Projects ───────────────────────────────────────────── */}
      <section className="panel" id="projects" aria-labelledby="projects-title">
        <div className="reveal">
          <p className="section-label">Featured Projects</p>
          <h2 className="section-title" id="projects-title">Delivery Snapshots</h2>
          <p className="section-sub">
            Selected highlights across telecom, engineering, construction, and digital transformation.
          </p>
        </div>

        <div className="project-grid">
          {featuredProjects.map((p, i) => (
            <article
              className="project-card reveal"
              key={p.title}
              style={{ transitionDelay: `${(i % 2) * 0.12}s` }}
            >
              <div className="project-card-img">
                <img
                  src={`${base}${encodeURI(p.image)}`}
                  alt={p.title}
                  loading="lazy"
                />
                <span className="project-sector-tag">{p.sector}</span>
              </div>
              <div className="project-card-body">
                <h3>{p.title}</h3>
                <p className="project-success">★ {p.success}</p>
                <p className="project-meta">
                  <strong>Challenge</strong>
                  {p.challenge}
                </p>
                <p className="project-meta">
                  <strong>Action</strong>
                  {p.action}
                </p>
                <p className="project-outcome">
                  <strong style={{ display: 'inline', textTransform: 'none', fontSize: 'inherit', letterSpacing: 0, color: 'inherit' }}>↑ Outcome: </strong>
                  {p.outcome}
                </p>
              </div>
            </article>
          ))}
        </div>
      </section>

      <hr className="divider" />

      {/* ── Process ────────────────────────────────────────────── */}
      <section className="panel" aria-labelledby="process-title">
        <div className="reveal" style={{ textAlign: 'center' }}>
          <p className="section-label" style={{ justifyContent: 'center' }}>My Delivery Process</p>
          <h2 className="section-title" id="process-title" style={{ textAlign: 'center' }}>Structured. Transparent. Predictable.</h2>
          <p className="section-sub" style={{ margin: '0 auto' }}>
            Designed to reduce surprises and keep every stakeholder informed at every phase.
          </p>
        </div>

        <div className="process-grid">
          {processSteps.map((step, i) => (
            <div className="process-step reveal" key={step.name} style={{ transitionDelay: `${i * 0.1}s` }}>
              <div className="process-dot" />
              <h3>{step.name}</h3>
              <p>{step.text}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ── Experience ─────────────────────────────────────────── */}
      <hr className="divider" />

      <section className="panel" id="experience" aria-labelledby="exp-title">
        <div className="reveal">
          <p className="section-label">Career Timeline</p>
          <h2 className="section-title" id="exp-title">Professional Experience</h2>
        </div>

        <div className="timeline">
          {experience.map((job, i) => (
            <article
              className="timeline-card reveal"
              key={`${job.role}-${job.period}`}
              style={{ transitionDelay: `${Math.min(i * 0.06, 0.3)}s` }}
            >
              <p className="job-period">{job.period}</p>
              <h3>{job.role}</h3>
              <p className="job-company">{job.company}</p>
              <ul>
                {job.highlights.map((pt) => <li key={pt}>{pt}</li>)}
              </ul>
            </article>
          ))}
        </div>
      </section>

      <hr className="divider" />

      {/* ── Certs & Education ──────────────────────────────────── */}
      <section className="panel" aria-labelledby="certs-title">
        <div className="two-col">
          <div className="reveal">
            <p className="section-label">Qualifications</p>
            <h2 className="section-title" id="certs-title">Certifications</h2>
            <ul className="plain-list" style={{ marginTop: '1.5rem' }}>
              {certifications.map((c) => <li key={c}>{c}</li>)}
            </ul>
          </div>

          <div className="reveal reveal-delay-2">
            <p className="section-label">&nbsp;</p>
            <h2 className="section-title">Education</h2>
            <ul className="plain-list" style={{ marginTop: '1.5rem' }}>
              {education.map((e) => <li key={e}>{e}</li>)}
            </ul>
          </div>
        </div>
      </section>

      {/* ── Impact ─────────────────────────────────────────────── */}
      <div className="impact-bg">
        <section className="panel" aria-labelledby="impact-title">
          <div className="reveal">
            <p className="section-label">Results by the Numbers</p>
            <h2 className="section-title" id="impact-title">Measurable Project Management Impact</h2>
          </div>

          <div className="impact-grid">
            {impact.map((item, i) => (
              <div
                className="impact-card reveal"
                key={item.text}
                style={{ transitionDelay: `${i * 0.1}s` }}
              >
                <div className="impact-icon" aria-hidden="true">{item.icon}</div>
                <p>{item.text}</p>
              </div>
            ))}
          </div>
        </section>
      </div>

      {/* ── CTA ────────────────────────────────────────────────── */}
      <section className="cta-panel reveal" aria-labelledby="cta-title">
        {/* CTA section label */}
        <p className="section-label" style={{ justifyContent: 'center' }}>Work With Me</p>
        {/* CTA headline */}
        <h2 id="cta-title">Let's Build Your Next Successful Project</h2>
        {/* CTA supporting copy */}
        <p>
          Available for project management leadership, scheduling strategy, PMO governance,
          and turnaround support for complex delivery programmes.
        </p>
        {/* CTA action buttons - Multiple contact/engagement options */}
        <div className="cta-actions">
          {/* Primary CTA: WhatsApp for quick chat */}
          <a href={waUrl} target="_blank" rel="noreferrer" className="cta-primary">Chat on WhatsApp</a>
          {/* Email for formal engagement */}
          <a href="mailto:iheanachofederals8@gmail.com">Email for Engagement</a>
          {/* Professional network link */}
          <a href="https://www.linkedin.com/in/victor-iheanacho-43aa02277/" target="_blank" rel="noreferrer">Connect on LinkedIn</a>
          {/* Social follow */}
          <a href="https://x.com/sirfederals" target="_blank" rel="noreferrer">Follow on X</a>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════
          CONTACT SECTION - Comprehensive contact information
          All contact methods in a scannable contact card layout
          ═══════════════════════════════════════════════════════════ */}
      <section className="panel" id="contact" aria-labelledby="contact-title">
        <div className="reveal">
          <p className="section-label">Get in Touch</p>
          <h2 className="section-title" id="contact-title">Contact</h2>
        </div>

        <div className="contact-cards reveal reveal-delay-1">
          {[
            { label: 'Email',       value: 'iheanachofederals8@gmail.com', href: 'mailto:iheanachofederals8@gmail.com' },
            { label: 'Phone',       value: '+234 809 372 6082',            href: 'tel:+2348093726082' },
            { label: 'WhatsApp',   value: '+234 706 273 3935',            href: waUrl, external: true },
            { label: 'LinkedIn',   value: 'linkedin.com/in/victor-iheanacho…', href: 'https://www.linkedin.com/in/victor-iheanacho-43aa02277/', external: true },
            { label: 'X / Twitter', value: 'x.com/sirfederals',           href: 'https://x.com/sirfederals', external: true },
            { label: 'Curriculum Vitae', value: 'Download PDF',           href: cvUrl, download: true },
          ].map((c) => (
            <a
              className="contact-card"
              key={c.label}
              href={c.href}
              {...(c.external ? { target: '_blank', rel: 'noreferrer' } : {})}
              {...(c.download ? { download: true } : {})}
            >
              <span>{c.label}</span>
              <strong>{c.value}</strong>
            </a>
          ))}
        </div>
      </section>

      {/* ── Footer ─────────────────────────────────────────────── */}
      <footer>
        <p>© {new Date().getFullYear()} Iheanacho Victor Ugochukwu, PMP · Abuja, Nigeria</p>
        <p>Built for impact — delivered with precision.</p>
      </footer>

      {/* ── Sticky CTA ─────────────────────────────────────────── */}
      <a className="sticky-cta" href={waUrl} target="_blank" rel="noreferrer">
        Start a Conversation →
      </a>
    </main>
  )
}
