import React, { useState, useEffect } from 'react'
import { createRoot } from 'react-dom/client'
import './styles.css'
import profilePortrait from './assets/profile-portrait.jpg'
import codeIntroPhoto from './assets/code-intro.jpg'

const profile = {
  initials: 'CP',
  name: 'Charnon Pookajarn',
  role: 'Junior Software Developer',
  location: 'Pathum Thani, Thailand',
  address: 'Rangsit Klong 2, Prachathipat, Thanyaburi, Pathum Thani 12130',
  phone: '081-526-4698',
  email: 'charnonpkj@hotmail.com',
  linkedin: 'https://linkedin.com/in/charnonpkj/',
  github: 'https://github.com/6haru5u',
  year: '2026',
  bio: 'Junior Software Developer with hands-on training in full-stack web development and a strong foundation in JavaScript, React, Node.js, SQL, and MongoDB. Passionate about problem-solving, software development, and continuous learning.',
}

const photos = {
  portrait: profilePortrait,
  desk: 'https://images.unsplash.com/photo-1497366754035-f200968a6e72?auto=format&fit=crop&w=900&q=85',
  codeIntro: codeIntroPhoto,
  laptop: 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=900&q=85',
  city: 'https://images.unsplash.com/photo-1518005020951-eccb494ad742?auto=format&fit=crop&w=900&q=85',
}

const experiences = [
  ['2026', 'Generation Program Certification', 'Junior Software Developer', 'Hands-on full-stack web development training with JavaScript, React, Node.js, SQL, MongoDB, and professional workplace readiness.'],
  ['2023 - 2026', 'Customer Service', 'Merchmallow Logistics, Pathum Thani', 'Coordinated export bookings, shipment data, documentation, and issue resolution across shipping lines, overseas agents, customers, logistics partners, and internal teams.'],
  ['2022 - 2023', 'Assistant Digital Marketing', 'Live Nation Tero, Bangkok', 'Supported digital campaigns, event activities, customer inquiries, event-day operations, and digital content across multiple platforms.'],
  ['2021 - 2022', 'Marketing Support', 'G Clinic, Bangkok', 'Researched and organized campaign information, coordinated with influencers and partners, and supported marketing activities across changing priorities.'],
]

const education = [
  ['2026', 'Junior Software Developer Program', 'Generation Thailand', 'Professional training focused on full-stack web development and workplace readiness.'],
  ['2019', 'Faculty of Mass Communication Technology', 'Rajamangala University of Technology Thanyaburi', 'Department of Photography and Cinematography Technology. GPA 2.74'],
]

const projects = [
  {
    title: 'Orbit Finance',
    label: 'Dashboard / Product UI',
    description: 'A finance dashboard that helps first-time investors understand spending patterns, compare monthly habits, and plan the next practical step.',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1000&q=85',
    extra: 'https://images.unsplash.com/photo-1554224155-6726b3ff858f?auto=format&fit=crop&w=500&q=80',
    tech: ['React', 'Tailwind CSS', 'Charts', 'REST API'],
    people: 'Solo project',
    github: 'https://github.com/6haru5u',
    demo: 'https://example.com',
  },
  {
    title: 'Luma Studio',
    label: 'Portfolio / Editorial Site',
    description: 'A monochrome showcase for a photography studio, designed to make case studies feel more like a printed lookbook than a template.',
    image: 'https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=1000&q=85',
    extra: 'https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?auto=format&fit=crop&w=500&q=80',
    tech: ['React', 'CMS', 'Animation', 'Figma'],
    people: 'Alex Kim, Sam Ray',
    github: 'https://github.com/6haru5u',
    demo: 'https://example.com',
  },
  {
    title: 'Good Weather',
    label: 'API App / Utility',
    description: 'A weather companion that turns dense forecast data into fast daily guidance for commuters, travelers, and weekend planning.',
    image: 'https://images.unsplash.com/photo-1499346030926-9a72daac6c63?auto=format&fit=crop&w=1000&q=85',
    extra: 'https://images.unsplash.com/photo-1504608524841-42fe6f032b4b?auto=format&fit=crop&w=500&q=80',
    tech: ['React', 'OpenWeather API', 'CSS', 'Vite'],
    people: 'Solo project',
    github: 'https://github.com/6haru5u',
    demo: 'https://example.com',
  },
]

function ChevronCircle({ open }) {
  return (
    <span className={`grid h-8 w-8 place-items-center rounded-full border border-black text-xs font-bold transition ${open ? 'rotate-180 bg-black text-white' : 'bg-white text-black'}`}>
      ▼
    </span>
  )
}

function CollapsibleBlock({ title, children, defaultOpen = true }) {
  const [open, setOpen] = useState(defaultOpen)

  return (
    <section className="border-t border-black pt-4">
      <button className="flex w-full items-center justify-between gap-4 text-left" onClick={() => setOpen(!open)}>
        <h3 className="text-lg sm:text-xl font-black uppercase leading-none">{title}</h3>
        <ChevronCircle open={open} />
      </button>
      {open && <div className="pt-3">{children}</div>}
    </section>
  )
}

function SectionHeader({ tag, title, number, isDark = false }) {
  return (
    <div className={`flex flex-col sm:flex-row sm:items-end justify-between border-b pb-4 mb-8 sm:mb-12 ${isDark ? 'border-neutral-800 text-white' : 'border-black text-black'}`}>
      <div>
        <span className={`text-xs font-bold uppercase tracking-widest ${isDark ? 'text-neutral-400' : 'text-neutral-500'}`}>{tag}</span>
        <h2 className="font-display text-4xl sm:text-5xl md:text-6xl font-black uppercase leading-none mt-1">{title}</h2>
      </div>
      <span className="font-black text-3xl sm:text-4xl md:text-5xl tracking-tight mt-2 sm:mt-0">{number}</span>
    </div>
  )
}

function Photo({ src, alt, className = '' }) {
  return (
    <div className={`grain relative overflow-hidden bg-neutral-200 ${className}`}>
      <img className="h-full w-full object-cover grayscale contrast-125 transition duration-500 hover:scale-105" src={src} alt={alt} />
    </div>
  )
}

/* 1. TOP NAVBAR */
function Navbar({ active, setActive }) {
  const [menuOpen, setMenuOpen] = useState(false)
  const navItems = [
    { id: 'cover', label: 'Cover' },
    { id: 'introduction', label: 'Intro' },
    { id: 'about', label: 'About Me' },
    { id: 'resume', label: 'Resume' },
    { id: 'work', label: 'Work' },
    { id: 'contact', label: 'Contact' },
  ]

  const handleScroll = (id) => {
    setActive(id)
    setMenuOpen(false)
    const element = document.getElementById(id)
    if (element) {
      const navHeight = 70
      const elementPosition = element.getBoundingClientRect().top + window.pageYOffset
      window.scrollTo({
        top: elementPosition - navHeight,
        behavior: 'smooth'
      })
    }
  }

  return (
    <header className="sticky top-0 z-50 w-full bg-black/90 backdrop-blur-md border-b border-neutral-800 text-white">
      <div className="section-container flex items-center justify-between h-16 sm:h-20">
        {/* Brand */}
        <a
          href="#cover"
          onClick={(e) => { e.preventDefault(); handleScroll('cover'); }}
          className="flex items-center gap-3 group"
        >
          <div className="grid h-10 w-10 place-items-center rounded-full bg-white text-black text-xs font-black tracking-wider transition group-hover:bg-neutral-200">
            {profile.initials}
          </div>
          <div className="hidden sm:block leading-tight">
            <div className="text-sm font-black uppercase tracking-wider">{profile.name}</div>
            <div className="text-[11px] text-neutral-400 font-semibold">{profile.role}</div>
          </div>
        </a>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-1 lg:gap-2">
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => handleScroll(item.id)}
              className={`px-3 py-1.5 text-xs font-black uppercase tracking-wider transition rounded-full ${
                active === item.id
                  ? 'bg-white text-black'
                  : 'text-neutral-300 hover:text-white hover:bg-neutral-800'
              }`}
            >
              {item.label}
            </button>
          ))}
        </nav>

        {/* Action Buttons */}
        <div className="flex items-center gap-2">
          <a
            href={profile.github}
            target="_blank"
            rel="noreferrer"
            className="hidden sm:flex items-center gap-1.5 border border-neutral-700 px-3.5 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider text-neutral-200 hover:bg-white hover:text-black hover:border-white transition"
          >
            GitHub
          </a>
          <a
            href="#contact"
            onClick={(e) => { e.preventDefault(); handleScroll('contact'); }}
            className="bg-white text-black px-4 py-1.5 rounded-full text-xs font-black uppercase tracking-wider hover:bg-neutral-200 transition"
          >
            Get In Touch
          </a>

          {/* Mobile menu button */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
            className="md:hidden grid h-9 w-9 place-items-center rounded-full border border-neutral-700 text-white"
          >
            {menuOpen ? '✕' : '☰'}
          </button>
        </div>
      </div>

      {/* Mobile dropdown */}
      {menuOpen && (
        <div className="md:hidden border-t border-neutral-800 bg-neutral-950 px-6 py-4 space-y-2">
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => handleScroll(item.id)}
              className={`block w-full text-left py-2 text-sm font-black uppercase tracking-wider ${
                active === item.id ? 'text-white' : 'text-neutral-400'
              }`}
            >
              {item.label}
            </button>
          ))}
          <div className="pt-2 border-t border-neutral-800 flex gap-4">
            <a href={profile.github} target="_blank" rel="noreferrer" className="text-xs font-bold uppercase underline text-neutral-300">
              GitHub
            </a>
            <a href={profile.linkedin} target="_blank" rel="noreferrer" className="text-xs font-bold uppercase underline text-neutral-300">
              LinkedIn
            </a>
          </div>
        </div>
      )}
    </header>
  )
}

/* 2. COVER / HERO SECTION */
function CoverSection({ onNext }) {
  return (
    <section id="cover" className="w-full bg-black text-white py-16 sm:py-24 lg:py-32 border-b border-neutral-800">
      <div className="section-container flex flex-col justify-between min-h-[60vh]">
        {/* Top Tag */}
        <div className="flex items-center justify-between text-xs font-bold uppercase tracking-widest text-neutral-400 pb-4 border-b border-neutral-800">
          <span>PORTFOLIO — {profile.year}</span>
          <span>CH-0001</span>
        </div>

        {/* Center Hero Heading */}
        <div className="my-auto py-12 text-center">
          <h1 className="font-display text-5xl sm:text-7xl md:text-8xl lg:text-[100px] xl:text-[120px] font-black uppercase leading-[0.9] tracking-tight">
            <span>HELLO,</span>
            <br />
            <span>IT'S ME</span>
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-xs sm:text-sm md:text-base font-medium uppercase leading-relaxed tracking-[0.18em] text-neutral-300">
            A PERSONAL ARCHIVE OF INTERFACE DESIGN, DEVELOPMENT PRACTICE, AND SELECTED CASE STUDIES.
          </p>

          <div className="mt-8 flex flex-wrap justify-center gap-3">
            <button
              onClick={onNext}
              className="inline-flex items-center gap-2 bg-white text-black font-black text-xs sm:text-sm uppercase tracking-wider px-6 py-3 rounded-full hover:bg-neutral-200 transition"
            >
              Explore Portfolio <span>↓</span>
            </button>
            <a
              href={`mailto:${profile.email}`}
              className="inline-flex items-center gap-2 border border-neutral-700 text-white font-bold text-xs sm:text-sm uppercase tracking-wider px-6 py-3 rounded-full hover:bg-neutral-900 transition"
            >
              Direct Email
            </a>
          </div>
        </div>

        {/* Bottom Hero Info */}
        <div className="flex flex-col sm:flex-row items-start sm:items-end justify-between border-t border-neutral-800 pt-6 text-xs sm:text-sm font-extrabold uppercase tracking-wider gap-4">
          <div>
            <div className="text-white text-base">{profile.name}</div>
            <div className="text-neutral-400 font-semibold">{profile.role}</div>
          </div>
          <div className="text-neutral-500 font-semibold">
            {profile.location}
          </div>
        </div>
      </div>
    </section>
  )
}

/* 3. INTRODUCTION SECTION */
function IntroSection({ onNext }) {
  return (
    <section id="introduction" className="w-full bg-white text-black py-16 sm:py-24 border-b border-neutral-200">
      <div className="section-container">
        <SectionHeader tag="Overview" title="Introduction" number="02" />

        <div className="grid grid-cols-1 lg:grid-cols-[1.2fr_0.8fr] gap-8 md:gap-12 items-center">
          <div>
            <div className="grid grid-cols-1 sm:grid-cols-[160px_1fr] md:grid-cols-[200px_1fr] gap-6 sm:gap-8 items-start">
              <Photo src={photos.portrait} alt="Charnon portrait" className="aspect-square w-full rounded-sm shadow-md" />
              <div className="space-y-4">
                <p className="text-base sm:text-lg md:text-xl leading-relaxed text-neutral-800 font-medium">
                  {profile.bio}
                </p>
                <div className="pt-3">
                  <button
                    onClick={onNext}
                    className="inline-flex items-center gap-3 text-xs sm:text-sm font-black uppercase tracking-wider border-b-2 border-black pb-1 hover:opacity-70 transition"
                  >
                    Read Profile & Experience <span className="grid h-6 w-6 place-items-center rounded-full border border-black text-[10px]">↓</span>
                  </button>
                </div>
              </div>
            </div>
          </div>

          <div className="h-full min-h-[280px] sm:min-h-[360px]">
            <Photo src={photos.codeIntro} alt="Code and development" className="h-full w-full object-cover rounded-sm shadow-md min-h-[280px]" />
          </div>
        </div>
      </div>
    </section>
  )
}

/* 4. ABOUT ME SECTION */
function AboutSection() {
  return (
    <section id="about" className="w-full bg-[#f6f6f4] text-black py-16 sm:py-24 border-b border-neutral-200">
      <div className="section-container">
        <SectionHeader tag="Section / 01" title="About Me" number="03" />

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Left Column: Portrait & Personal Statement */}
          <div className="bg-white p-6 sm:p-10 flex flex-col justify-between border border-neutral-300 shadow-sm rounded-sm">
            <div className="text-center max-w-md mx-auto">
              <h3 className="font-display text-3xl sm:text-4xl md:text-5xl font-black uppercase leading-tight">
                Charnon<br />Pookajarn
              </h3>
              <Photo src={photos.portrait} alt="Charnon portrait" className="mx-auto mt-6 h-48 w-40 sm:h-60 sm:w-48 rounded-sm shadow-sm" />
              <p className="mt-6 text-sm leading-relaxed text-neutral-700 font-medium">
                Hello, my name is {profile.name}. I am a junior software developer with full-stack training, a creative media background, and practical experience coordinating real-world business operations.
              </p>
            </div>
            <div className="mt-8 border-t border-black pt-3 flex justify-between text-[11px] font-bold uppercase">
              <span>Profile Overview</span>
              <span>0003</span>
            </div>
          </div>

          {/* Right Column: Profile Details & Digital Presence */}
          <div className="bg-white p-6 sm:p-10 flex flex-col justify-between border border-neutral-300 shadow-sm rounded-sm">
            <div>
              <div className="grid grid-cols-1 md:grid-cols-[140px_1fr] gap-6">
                <Photo src={photos.desk} alt="Workspace" className="h-36 w-full hidden md:block rounded-sm" />
                <div className="space-y-6">
                  <CollapsibleBlock title="Profile" defaultOpen={true}>
                    <dl className="grid gap-2.5 text-xs sm:text-sm">
                      <div className="flex justify-between border-b border-neutral-200 pb-1.5"><dt className="font-bold uppercase">Full name</dt><dd>{profile.name}</dd></div>
                      <div className="flex justify-between border-b border-neutral-200 pb-1.5"><dt className="font-bold uppercase">Location</dt><dd>{profile.location}</dd></div>
                      <div className="flex justify-between border-b border-neutral-200 pb-1.5"><dt className="font-bold uppercase">Phone</dt><dd><a className="underline font-bold" href={`tel:${profile.phone.replaceAll('-', '')}`}>{profile.phone}</a></dd></div>
                      <div className="flex justify-between border-b border-neutral-200 pb-1.5"><dt className="font-bold uppercase">Email</dt><dd><a className="underline font-bold" href={`mailto:${profile.email}`}>{profile.email}</a></dd></div>
                      <div className="flex justify-between border-b border-neutral-200 pb-1.5 gap-2"><dt className="font-bold uppercase shrink-0">Language</dt><dd className="text-right">Thai native, English Working Proficiency (Reading/Technical Documentation)</dd></div>
                    </dl>
                  </CollapsibleBlock>

                  <CollapsibleBlock title="Digital Presence" defaultOpen={true}>
                    <div className="flex flex-wrap gap-2 pt-1">
                      {[
                        ['LinkedIn', profile.linkedin],
                        ['GitHub', profile.github],
                        ['Email', `mailto:${profile.email}`],
                        ['Phone', `tel:${profile.phone.replaceAll('-', '')}`],
                      ].map(([item, href]) => (
                        <a
                          key={item}
                          href={href}
                          target={href.startsWith('http') ? '_blank' : undefined}
                          rel={href.startsWith('http') ? 'noreferrer' : undefined}
                          className="rounded-full border border-black px-3.5 py-1 text-xs font-black uppercase transition hover:bg-black hover:text-white"
                        >
                          {item}
                        </a>
                      ))}
                    </div>
                  </CollapsibleBlock>
                </div>
              </div>
            </div>
            <div className="mt-8 border-t border-black pt-3 flex justify-between text-[11px] font-bold uppercase">
              <span>Personal Details</span>
              <span>0004</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

/* 5. RESUME SECTION */
function ResumeSection() {
  const hardSkills = ['JavaScript', 'React', 'Node.js', 'SQL', 'MongoDB', 'HTML', 'CSS', 'Tailwind', 'Git', 'REST API', 'Express', 'Full Stack']
  const softSkills = ['Problem-Solving', 'Analytical Thinking', 'Attention to Detail', 'Teamwork', 'Adaptability', 'Continuous Learning']

  return (
    <section id="resume" className="w-full bg-[#f6f6f4] text-black py-16 sm:py-24 border-b border-neutral-200">
      <div className="section-container">
        <SectionHeader tag="Section / 02" title="Resume & Credentials" number="04" />

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Experience */}
          <div className="bg-white p-6 sm:p-8 flex flex-col justify-between border border-neutral-300 shadow-sm rounded-sm">
            <div>
              <div className="flex justify-between items-start border-b border-black pb-3">
                <h3 className="font-display text-2xl sm:text-3xl font-black uppercase leading-none">Experience</h3>
                <span className="text-2xl font-black">05</span>
              </div>
              <div className="mt-6 space-y-4">
                {experiences.map(([date, title, place, detail]) => (
                  <article key={title} className="border-b border-neutral-200 pb-3 text-xs last:border-b-0">
                    <div className="flex justify-between font-black text-neutral-900">
                      <span>{title}</span>
                      <span className="text-neutral-500 font-bold">{date}</span>
                    </div>
                    <p className="font-semibold text-neutral-600 text-[11px] mt-0.5">{place}</p>
                    <p className="mt-1 text-neutral-700 leading-relaxed text-[11px]">{detail}</p>
                  </article>
                ))}
              </div>
            </div>
            <div className="mt-6 border-t border-black pt-3 flex justify-between text-[11px] font-bold uppercase">
              <span>Work History</span>
              <span>0005</span>
            </div>
          </div>

          {/* Skills */}
          <div className="bg-white p-6 sm:p-8 flex flex-col justify-between border border-neutral-300 shadow-sm rounded-sm">
            <div>
              <div className="flex justify-between items-start border-b border-black pb-3">
                <h3 className="font-display text-2xl sm:text-3xl font-black uppercase leading-none">Skills</h3>
                <span className="text-2xl font-black">06</span>
              </div>
              <div className="mt-6 space-y-6">
                <div>
                  <h4 className="text-xs font-black uppercase tracking-wider mb-2.5">Technical Skills</h4>
                  <div className="grid grid-cols-3 sm:grid-cols-4 gap-1.5">
                    {hardSkills.map((skill) => (
                      <div key={skill} className="grid place-items-center border border-black bg-neutral-50 py-1.5 px-1 text-[10px] font-black uppercase text-center">
                        {skill}
                      </div>
                    ))}
                  </div>
                </div>
                <div>
                  <h4 className="text-xs font-black uppercase tracking-wider mb-2.5">Soft Skills</h4>
                  <div className="flex flex-wrap gap-1.5">
                    {softSkills.map((skill) => (
                      <span key={skill} className="rounded-full border border-black px-3 py-1 text-[11px] font-bold uppercase">
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
            <div className="mt-6 border-t border-black pt-3 flex justify-between text-[11px] font-bold uppercase">
              <span>Core Competencies</span>
              <span>0006</span>
            </div>
          </div>

          {/* Education */}
          <div className="bg-white p-6 sm:p-8 flex flex-col justify-between border border-neutral-300 shadow-sm rounded-sm">
            <div>
              <div className="flex justify-between items-start border-b border-black pb-3">
                <h3 className="font-display text-2xl sm:text-3xl font-black uppercase leading-none">Education</h3>
                <span className="text-2xl font-black">07</span>
              </div>
              <div className="mt-6 space-y-4">
                {education.map(([date, title, place, detail]) => (
                  <article key={title} className="border-b border-neutral-200 pb-3 text-xs last:border-b-0">
                    <div className="flex justify-between font-black text-neutral-900">
                      <span>{title}</span>
                      <span className="text-neutral-500 font-bold">{date}</span>
                    </div>
                    <p className="font-semibold text-neutral-600 text-[11px] mt-0.5">{place}</p>
                    <p className="mt-1 text-neutral-700 leading-relaxed text-[11px]">{detail}</p>
                  </article>
                ))}
                <div className="pt-2">
                  <Photo src={photos.laptop} alt="Laptop setup" className="h-32 w-full rounded-sm" />
                </div>
              </div>
            </div>
            <div className="mt-6 border-t border-black pt-3 flex justify-between text-[11px] font-bold uppercase">
              <span>Academic & Bootcamp</span>
              <span>0007</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

/* 6. PROJECTS / WORK SECTION */
function WorkSection() {
  return (
    <section id="work" className="w-full bg-[#f6f6f4] text-black py-16 sm:py-24 border-b border-neutral-200">
      <div className="section-container">
        <SectionHeader tag="Section / 03" title="Selected Projects" number="05" />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <article key={project.title} className="bg-white p-6 sm:p-8 flex flex-col justify-between border border-neutral-300 shadow-sm rounded-sm hover:shadow-md transition">
              <div>
                <div className="flex justify-between items-start border-b border-black pb-3">
                  <div>
                    <span className="text-[10px] font-black uppercase tracking-wider text-neutral-500">{project.label}</span>
                    <h3 className="font-display text-2xl sm:text-3xl font-black uppercase leading-tight mt-1">{project.title}</h3>
                  </div>
                  <span className="text-2xl font-black">{String(index + 8).padStart(2, '0')}</span>
                </div>
                <div className="mt-5">
                  <Photo src={project.image} alt={project.title} className="h-44 sm:h-48 w-full rounded-sm" />
                  <p className="mt-4 text-xs sm:text-sm leading-relaxed text-neutral-700">{project.description}</p>
                </div>
              </div>

              <div className="mt-6 pt-4 border-t border-black space-y-3 text-[11px] font-bold uppercase">
                <div className="flex flex-wrap gap-1.5">
                  {project.tech.map((t) => (
                    <span key={t} className="border border-black px-2 py-0.5 text-[10px]">{t}</span>
                  ))}
                </div>
                <div className="flex justify-between items-center pt-2">
                  <span className="text-neutral-500 text-[10px]">{project.people}</span>
                  <div className="flex gap-3">
                    <a className="underline font-black hover:text-neutral-600" href={project.github} target="_blank" rel="noreferrer">GitHub</a>
                    <a className="underline font-black hover:text-neutral-600" href={project.demo} target="_blank" rel="noreferrer">Demo</a>
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

/* 7. CONTACT / FOOTER SECTION */
function ContactSection() {
  return (
    <footer id="contact" className="w-full bg-black text-white py-16 sm:py-24">
      <div className="section-container">
        <div className="flex items-center justify-between border-b border-neutral-800 pb-4 mb-12">
          <span className="text-base sm:text-lg md:text-xl font-black uppercase tracking-wider">{profile.initials}</span>
          <span className="text-xs font-bold uppercase tracking-widest text-neutral-400">Get In Touch</span>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center py-6">
          <div className="border-b lg:border-b-0 lg:border-r border-neutral-800 pb-8 lg:pb-0 lg:pr-8">
            <Photo src={photos.portrait} alt="Small portrait" className="h-28 w-28 rounded-full mb-6 border-2 border-white/20" />
            <h2 className="font-display text-6xl sm:text-7xl md:text-8xl lg:text-9xl font-black uppercase leading-none">
              Thanks.
            </h2>
            <p className="mt-4 text-sm sm:text-base uppercase tracking-wider text-neutral-400 max-w-md">
              Thank you for exploring my portfolio. Open to opportunities, collaborations, and software engineering roles.
            </p>
          </div>

          <div className="space-y-8">
            <div>
              <p className="text-xs font-black uppercase tracking-widest text-neutral-400">Direct Contact</p>
              <a href={`mailto:${profile.email}`} className="mt-2 block text-2xl sm:text-4xl md:text-5xl font-black underline hover:text-neutral-300 transition break-all">
                {profile.email}
              </a>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 text-xs sm:text-sm uppercase font-bold text-neutral-300 pt-6 border-t border-neutral-800">
              <div>
                <p className="text-white">{profile.location}</p>
                <p className="mt-1">Tel: <a className="underline hover:text-white" href={`tel:${profile.phone.replaceAll('-', '')}`}>{profile.phone}</a></p>
              </div>
              <div className="flex sm:flex-col sm:items-end gap-4 sm:gap-2">
                <a href={profile.linkedin} target="_blank" rel="noreferrer" className="underline hover:text-white">LinkedIn</a>
                <a href={profile.github} target="_blank" rel="noreferrer" className="underline hover:text-white">GitHub</a>
              </div>
            </div>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row items-center justify-between border-t border-neutral-800 pt-8 mt-12 text-xs font-extrabold uppercase tracking-wider text-neutral-400 gap-2">
          <div>Copyright {profile.year} — {profile.name}</div>
          <div className="font-black tracking-widest text-neutral-500">0013</div>
        </div>
      </div>
    </footer>
  )
}

function App() {
  const [active, setActive] = useState('cover')

  useEffect(() => {
    const handleScrollObserver = () => {
      const sections = ['cover', 'introduction', 'about', 'resume', 'work', 'contact']
      const scrollPosition = window.scrollY + 200

      for (const section of sections) {
        const el = document.getElementById(section)
        if (el) {
          const top = el.offsetTop
          const height = el.offsetHeight
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActive(section)
            break
          }
        }
      }
    }

    window.addEventListener('scroll', handleScrollObserver, { passive: true })
    return () => window.removeEventListener('scroll', handleScrollObserver)
  }, [])

  const scrollToSection = (id) => {
    const el = document.getElementById(id)
    if (el) {
      const navHeight = 70
      const pos = el.getBoundingClientRect().top + window.pageYOffset
      window.scrollTo({ top: pos - navHeight, behavior: 'smooth' })
    }
  }

  return (
    <div className="min-h-screen bg-[#0e0e0e] text-[#111111] flex flex-col">
      {/* 1. TOP STICKY NAVBAR */}
      <Navbar active={active} setActive={setActive} />

      {/* 2. RESPONSIVE SECTIONS */}
      <main className="flex-1">
        <CoverSection onNext={() => scrollToSection('introduction')} />
        <IntroSection onNext={() => scrollToSection('about')} />
        <AboutSection />
        <ResumeSection />
        <WorkSection />
      </main>

      {/* 3. FOOTER / CONTACT */}
      <ContactSection />
    </div>
  )
}

createRoot(document.getElementById('root')).render(<App />)
