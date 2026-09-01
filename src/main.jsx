import React, { useState } from 'react'
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
  studio: codeIntroPhoto,
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
    github: 'https://github.com',
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
    github: 'https://github.com',
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
    github: 'https://github.com',
    demo: 'https://example.com',
  },
]

function IconButton({ children, label, href = '#contact' }) {
  return (
    <a
      href={href}
      aria-label={label}
      title={label}
      className="grid h-9 w-9 place-items-center rounded-full border border-black bg-white text-xs font-black transition hover:bg-black hover:text-white"
    >
      {children}
    </a>
  )
}

function ChevronCircle({ open }) {
  return (
    <span className={`grid h-8 w-8 place-items-center rounded-full border border-black text-sm transition ${open ? 'rotate-180 bg-black text-white' : 'bg-white'}`}>
      v
    </span>
  )
}

function CollapsibleBlock({ title, children, defaultOpen = true }) {
  const [open, setOpen] = useState(defaultOpen)

  return (
    <section className="border-t border-black pt-4">
      <button className="flex w-full items-center justify-between gap-4 text-left" onClick={() => setOpen(!open)}>
        <h3 className="text-xl font-black uppercase leading-none sm:text-2xl">{title}</h3>
        <ChevronCircle open={open} />
      </button>
      {open && <div className="pt-4">{children}</div>}
    </section>
  )
}

function FrameFooter({ number, isDark = false }) {
  return (
    <div className={`flex items-end justify-between border-t pt-3 text-[10px] sm:text-xs md:text-sm font-bold uppercase leading-tight ${isDark ? 'border-neutral-800 text-white' : 'border-black text-black'}`}>
      <span>
        {profile.name}<br />
        <span className={isDark ? 'text-neutral-400 font-semibold' : 'text-neutral-600 font-semibold'}>{profile.role}</span>
      </span>
      <span className="font-black tracking-widest text-xs sm:text-sm">{number}</span>
    </div>
  )
}

function Photo({ src, alt, className = '' }) {
  return (
    <div className={`grain relative overflow-hidden bg-neutral-300 ${className}`}>
      <img className="h-full w-full object-cover grayscale contrast-125" src={src} alt={alt} />
    </div>
  )
}

/* Page 1 (0001) - Cover 1920x1080 */
function CoverSlide({ onNext }) {
  return (
    <section id="cover" className="w-full flex justify-center py-4 px-2 sm:px-4 lg:py-6">
      <div className="slide-1080 bg-black text-white p-8 sm:p-12 md:p-16 lg:p-20 flex flex-col justify-between border border-neutral-800 rounded-sm">
        {/* Top bar */}
        <div className="flex items-center justify-between z-10">
          <span className="text-base sm:text-lg md:text-xl font-black uppercase tracking-wider">{profile.initials}</span>
          <button
            onClick={onNext}
            aria-label="Search"
            className="grid h-10 w-10 sm:h-12 sm:w-12 place-items-center rounded-full border border-white/70 text-sm sm:text-base font-bold transition hover:bg-white hover:text-black hover:border-white"
          >
            ⌕
          </button>
        </div>

        {/* Center Title & Subtitle */}
        <div className="my-auto text-center z-10 px-4 py-4 sm:py-6">
          <h1 className="font-display text-4xl sm:text-6xl md:text-7xl lg:text-[85px] xl:text-[105px] font-black uppercase leading-[0.92] tracking-tight">
            <span>HELLO,</span>
            <br />
            <span>IT'S ME</span>
          </h1>
          <p className="mx-auto mt-5 sm:mt-6 max-w-xl text-[10px] sm:text-xs md:text-sm font-medium uppercase leading-relaxed tracking-[0.18em] text-neutral-300">
            A PERSONAL ARCHIVE OF INTERFACE DESIGN, DEVELOPMENT
            <br className="hidden sm:inline" /> PRACTICE, AND SELECTED CASE STUDIES.
          </p>
        </div>

        {/* Bottom Bar */}
        <div className="flex items-end justify-between z-10 border-t border-neutral-800 pt-4 text-[10px] sm:text-xs md:text-sm font-extrabold uppercase tracking-wider">
          <div className="leading-snug">
            <div>{profile.name}</div>
            <div className="text-neutral-400 font-semibold">{profile.role}</div>
          </div>
          <div className="font-black tracking-widest text-xs sm:text-sm">
            0001
          </div>
        </div>
      </div>
    </section>
  )
}

/* Page 2 (0002) - Introduction 1920x1080 */
function IntroSlide({ onNext }) {
  return (
    <section id="introduction" className="w-full flex justify-center py-4 px-2 sm:px-4 lg:py-6">
      <div className="slide-1080 bg-white text-black p-8 sm:p-12 md:p-16 lg:p-20 flex flex-col justify-between border border-neutral-300 rounded-sm">
        {/* Top bar */}
        <div className="flex items-center justify-between z-10">
          <span className="text-base sm:text-lg md:text-xl font-black uppercase tracking-wider">{profile.initials}</span>
          <span className="text-3xl sm:text-4xl md:text-5xl font-black">02</span>
        </div>

        {/* Center Content */}
        <div className="my-auto grid grid-cols-1 lg:grid-cols-[1.2fr_0.8fr] gap-8 md:gap-12 items-center py-6">
          <div>
            <h2 className="font-display text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-black uppercase leading-none">
              Introduction
            </h2>
            <div className="mt-8 grid grid-cols-1 sm:grid-cols-[140px_1fr] md:grid-cols-[180px_1fr] gap-6 items-start">
              <Photo src={photos.portrait} alt="Charnon portrait" className="aspect-square w-full rounded-sm shadow-sm" />
              <div className="space-y-4">
                <p className="text-sm sm:text-base md:text-lg leading-relaxed text-neutral-800 font-medium">
                  {profile.bio}
                </p>
                <div className="pt-2">
                  <button
                    onClick={onNext}
                    className="inline-flex items-center gap-3 text-xs sm:text-sm font-black uppercase tracking-wider border-b-2 border-black pb-1 hover:opacity-70 transition"
                  >
                    See More <span className="grid h-7 w-7 place-items-center rounded-full border border-black">↓</span>
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="hidden lg:block h-full max-h-[440px]">
            <Photo src={photos.studio} alt="Code and development" className="h-full w-full object-cover rounded-sm shadow-md" />
          </div>
        </div>

        {/* Footer */}
        <FrameFooter number="0002" />
      </div>
    </section>
  )
}

function Navbar({ active, setActive }) {
  const tabs = ['Cover', 'Intro', 'About Me', 'Resume', 'Work', 'Contact']

  const handleNav = (tab) => {
    setActive(tab)
    if (tab === 'Cover') {
      document.getElementById('cover')?.scrollIntoView({ behavior: 'smooth' })
    } else if (tab === 'Intro') {
      document.getElementById('introduction')?.scrollIntoView({ behavior: 'smooth' })
    } else {
      document.getElementById('content')?.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <nav id="content" className="sticky top-0 z-40 mx-auto w-full max-w-[1920px] px-2 sm:px-4">
      <div className="flex items-center justify-between border-y border-black bg-white/95 backdrop-blur-md px-4 py-3 sm:px-8 shadow-sm">
        <div className="flex items-center gap-4">
          <div className="grid h-9 w-9 shrink-0 place-items-center rounded-full bg-black text-xs font-black text-white">
            {profile.initials}
          </div>
          <div className="flex gap-4 sm:gap-6 overflow-x-auto text-xs sm:text-sm font-black uppercase tracking-wider">
            {tabs.map((tab) => (
              <button
                key={tab}
                className={`whitespace-nowrap border-b-2 pb-1 transition ${active === tab ? 'border-black text-black' : 'border-transparent text-neutral-400 hover:text-neutral-700'}`}
                onClick={() => handleNav(tab)}
              >
                {tab}
              </button>
            ))}
          </div>
        </div>
        <div className="flex gap-2">
          <IconButton label="Profile" href="#about">●</IconButton>
          <IconButton label="Resume" href="#resume">↓</IconButton>
          <IconButton label="Contact" href="#contact">✎</IconButton>
        </div>
      </div>
    </nav>
  )
}

/* Page 3 (0003 & 0004) - About Me 1920x1080 */
function AboutSlide() {
  return (
    <section id="about" className="w-full flex justify-center py-4 px-2 sm:px-4 lg:py-6">
      <div className="slide-1080 bg-[#f5f5f3] text-black p-6 sm:p-10 md:p-14 lg:p-16 flex flex-col justify-between border border-neutral-300 rounded-sm">
        {/* Top indicator */}
        <div className="flex items-center justify-between pb-3 border-b border-black text-xs font-black uppercase tracking-wider">
          <span>Section / 01</span>
          <span>About Me Spreads</span>
        </div>

        {/* 2-Spread Columns in 16:9 page */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8 my-auto py-4">
          {/* Left Spread 0003 */}
          <div className="bg-white p-6 sm:p-8 flex flex-col justify-between border border-neutral-200 shadow-sm rounded-sm">
            <div className="text-center max-w-md mx-auto">
              <h2 className="font-display text-4xl sm:text-5xl md:text-6xl font-black uppercase leading-tight">
                Charnon<br />Pookajarn
              </h2>
              <Photo src={photos.portrait} alt="Charnon portrait" className="mx-auto mt-4 h-44 w-36 sm:h-56 sm:w-44 rounded-sm shadow-sm" />
              <p className="mt-4 text-xs sm:text-sm leading-relaxed text-neutral-700 font-medium">
                Hello, my name is {profile.name}. I am a junior software developer with full-stack training, a creative media background, and practical experience coordinating real-world business operations.
              </p>
            </div>
            <div className="mt-6 border-t border-black pt-2 flex justify-between text-[10px] sm:text-xs font-bold uppercase">
              <span>Profile Overview</span>
              <span>0003</span>
            </div>
          </div>

          {/* Right Spread 0004 */}
          <div className="bg-white p-6 sm:p-8 flex flex-col justify-between border border-neutral-200 shadow-sm rounded-sm">
            <div>
              <div className="flex justify-between items-start">
                <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-black uppercase leading-none">About Me</h2>
                <span className="text-3xl font-black">04</span>
              </div>
              <div className="mt-6 grid grid-cols-1 md:grid-cols-[120px_1fr] gap-4">
                <Photo src={photos.desk} alt="Workspace" className="h-32 w-full hidden md:block rounded-sm" />
                <div className="space-y-4">
                  <CollapsibleBlock title="Profile" defaultOpen={true}>
                    <dl className="grid gap-2 text-xs sm:text-sm">
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
                        ['Email', `mailto:${profile.email}`],
                        ['Phone', `tel:${profile.phone.replaceAll('-', '')}`],
                        ['GitHub', profile.github],
                      ].map(([item, href]) => (
                        <a key={item} href={href} target={href.startsWith('http') ? '_blank' : undefined} rel={href.startsWith('http') ? 'noreferrer' : undefined} className="rounded-full border border-black px-3 py-1 text-xs font-black uppercase transition hover:bg-black hover:text-white">
                          {item}
                        </a>
                      ))}
                    </div>
                  </CollapsibleBlock>
                </div>
              </div>
            </div>
            <div className="mt-6 border-t border-black pt-2 flex justify-between text-[10px] sm:text-xs font-bold uppercase">
              <span>Personal Details</span>
              <span>0004</span>
            </div>
          </div>
        </div>

        {/* Slide Footer */}
        <FrameFooter number="SPREAD 02" />
      </div>
    </section>
  )
}

/* Page 4 (0005, 0006, 0007) - Resume 1920x1080 */
function ResumeSlide() {
  const hardSkills = ['JavaScript', 'React', 'Node.js', 'SQL', 'MongoDB', 'HTML', 'CSS', 'Tailwind', 'Git', 'REST API', 'Express', 'Full Stack']
  const softSkills = ['Problem-Solving', 'Analytical Thinking', 'Attention to Detail', 'Teamwork', 'Adaptability', 'Continuous Learning']

  return (
    <section id="resume" className="w-full flex justify-center py-4 px-2 sm:px-4 lg:py-6">
      <div className="slide-1080 bg-[#f5f5f3] text-black p-6 sm:p-10 md:p-14 lg:p-16 flex flex-col justify-between border border-neutral-300 rounded-sm">
        {/* Top indicator */}
        <div className="flex items-center justify-between pb-3 border-b border-black text-xs font-black uppercase tracking-wider">
          <span>Section / 02</span>
          <span>Resume & Credentials</span>
        </div>

        {/* 3 Columns */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 my-auto py-4">
          {/* Experience 0005 */}
          <div className="bg-white p-6 flex flex-col justify-between border border-neutral-200 shadow-sm rounded-sm">
            <div>
              <div className="flex justify-between items-start">
                <h2 className="font-display text-3xl sm:text-4xl font-black uppercase leading-none">Experience</h2>
                <span className="text-3xl font-black">05</span>
              </div>
              <div className="mt-5 space-y-4">
                {experiences.map(([date, title, place, detail]) => (
                  <article key={title} className="border-t border-neutral-300 pt-2.5 text-xs">
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
            <div className="mt-4 border-t border-black pt-2 flex justify-between text-[10px] font-bold uppercase">
              <span>Work History</span>
              <span>0005</span>
            </div>
          </div>

          {/* Skills 0006 */}
          <div className="bg-white p-6 flex flex-col justify-between border border-neutral-200 shadow-sm rounded-sm">
            <div>
              <div className="flex justify-between items-start">
                <h2 className="font-display text-3xl sm:text-4xl font-black uppercase leading-none">Skills</h2>
                <span className="text-3xl font-black">06</span>
              </div>
              <div className="mt-5 space-y-4">
                <div>
                  <h3 className="text-xs font-black uppercase tracking-wider mb-2">Technical Skills</h3>
                  <div className="grid grid-cols-3 sm:grid-cols-4 gap-1.5">
                    {hardSkills.map((skill) => (
                      <div key={skill} className="grid place-items-center border border-black bg-neutral-50 py-1 px-1 text-[9px] font-black uppercase text-center">
                        {skill}
                      </div>
                    ))}
                  </div>
                </div>
                <div>
                  <h3 className="text-xs font-black uppercase tracking-wider mb-2">Soft Skills</h3>
                  <div className="flex flex-wrap gap-1.5">
                    {softSkills.map((skill) => (
                      <span key={skill} className="rounded-full border border-black px-2.5 py-1 text-[10px] font-bold uppercase">
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
            <div className="mt-4 border-t border-black pt-2 flex justify-between text-[10px] font-bold uppercase">
              <span>Core Competencies</span>
              <span>0006</span>
            </div>
          </div>

          {/* Education 0007 */}
          <div className="bg-white p-6 flex flex-col justify-between border border-neutral-200 shadow-sm rounded-sm">
            <div>
              <div className="flex justify-between items-start">
                <h2 className="font-display text-3xl sm:text-4xl font-black uppercase leading-none">Education</h2>
                <span className="text-3xl font-black">07</span>
              </div>
              <div className="mt-5 space-y-4">
                {education.map(([date, title, place, detail]) => (
                  <article key={title} className="border-t border-neutral-300 pt-2.5 text-xs">
                    <div className="flex justify-between font-black text-neutral-900">
                      <span>{title}</span>
                      <span className="text-neutral-500 font-bold">{date}</span>
                    </div>
                    <p className="font-semibold text-neutral-600 text-[11px] mt-0.5">{place}</p>
                    <p className="mt-1 text-neutral-700 leading-relaxed text-[11px]">{detail}</p>
                  </article>
                ))}
                <div className="pt-2">
                  <Photo src={photos.laptop} alt="Laptop setup" className="h-28 w-full rounded-sm" />
                </div>
              </div>
            </div>
            <div className="mt-4 border-t border-black pt-2 flex justify-between text-[10px] font-bold uppercase">
              <span>Academic & Bootcamp</span>
              <span>0007</span>
            </div>
          </div>
        </div>

        {/* Slide Footer */}
        <FrameFooter number="SPREAD 03" />
      </div>
    </section>
  )
}

/* Page 5 (0008-0011) - Work / Projects 1920x1080 */
function WorkSlide() {
  return (
    <section id="work" className="w-full flex justify-center py-4 px-2 sm:px-4 lg:py-6">
      <div className="slide-1080 bg-[#f5f5f3] text-black p-6 sm:p-10 md:p-14 lg:p-16 flex flex-col justify-between border border-neutral-300 rounded-sm">
        {/* Top indicator */}
        <div className="flex items-center justify-between pb-3 border-b border-black text-xs font-black uppercase tracking-wider">
          <span>Section / 03</span>
          <span>Selected Projects</span>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 my-auto py-4">
          {projects.map((project, index) => (
            <article key={project.title} className="bg-white p-6 flex flex-col justify-between border border-neutral-200 shadow-sm rounded-sm">
              <div>
                <div className="flex justify-between items-start">
                  <div>
                    <span className="text-[10px] font-black uppercase tracking-wider text-neutral-500">{project.label}</span>
                    <h3 className="font-display text-2xl sm:text-3xl font-black uppercase leading-tight mt-1">{project.title}</h3>
                  </div>
                  <span className="text-2xl font-black">{String(index + 8).padStart(2, '0')}</span>
                </div>
                <div className="mt-4">
                  <Photo src={project.image} alt={project.title} className="h-36 sm:h-44 w-full rounded-sm" />
                  <p className="mt-3 text-xs leading-relaxed text-neutral-700">{project.description}</p>
                </div>
              </div>
              <div className="mt-4 pt-3 border-t border-black space-y-2 text-[10px] font-bold uppercase">
                <div className="flex flex-wrap gap-1.5">
                  {project.tech.map((t) => (
                    <span key={t} className="border border-black px-1.5 py-0.5 text-[9px]">{t}</span>
                  ))}
                </div>
                <div className="flex justify-between items-center pt-1">
                  <span className="text-neutral-500">{project.people}</span>
                  <div className="flex gap-2.5">
                    <a className="underline font-black hover:text-neutral-600" href={project.github} target="_blank" rel="noreferrer">GitHub</a>
                    <a className="underline font-black hover:text-neutral-600" href={project.demo} target="_blank" rel="noreferrer">Demo</a>
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* Slide Footer */}
        <FrameFooter number="SPREAD 04" />
      </div>
    </section>
  )
}

/* Page 6 (0012, 0013) - Contact & Thanks 1920x1080 */
function ContactSlide() {
  return (
    <footer id="contact" className="w-full flex justify-center py-4 px-2 sm:px-4 lg:py-6">
      <div className="slide-1080 bg-black text-white p-8 sm:p-12 md:p-16 lg:p-20 flex flex-col justify-between border border-neutral-800 rounded-sm">
        {/* Top bar */}
        <div className="flex items-center justify-between z-10 border-b border-neutral-800 pb-4">
          <span className="text-base sm:text-lg md:text-xl font-black uppercase tracking-wider">{profile.initials}</span>
          <span className="text-xs font-bold uppercase tracking-widest text-neutral-400">Get In Touch</span>
        </div>

        {/* Center Thanks & Contact */}
        <div className="my-auto grid grid-cols-1 lg:grid-cols-2 gap-10 items-center py-6">
          <div className="border-b lg:border-b-0 lg:border-r border-neutral-800 pb-8 lg:pb-0 lg:pr-8">
            <Photo src={photos.portrait} alt="Small portrait" className="h-24 w-24 rounded-full mb-6 border-2 border-white/20" />
            <h2 className="font-display text-6xl sm:text-7xl md:text-8xl lg:text-9xl font-black uppercase leading-none">
              Thanks.
            </h2>
            <p className="mt-4 text-xs sm:text-sm md:text-base uppercase tracking-wider text-neutral-400 max-w-md">
              Thank you for exploring my portfolio. Open to opportunities, collaborations, and software engineering roles.
            </p>
          </div>

          <div className="space-y-6">
            <div>
              <p className="text-[10px] sm:text-xs font-black uppercase tracking-widest text-neutral-400">Direct Contact</p>
              <a href={`mailto:${profile.email}`} className="mt-2 block text-2xl sm:text-4xl md:text-5xl font-black underline hover:text-neutral-300 transition break-all">
                {profile.email}
              </a>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs sm:text-sm uppercase font-bold text-neutral-300 pt-4 border-t border-neutral-800">
              <div>
                <p>{profile.location}</p>
                <p className="mt-1">Tel: <a className="underline" href={`tel:${profile.phone.replaceAll('-', '')}`}>{profile.phone}</a></p>
              </div>
              <div className="flex sm:flex-col sm:items-end gap-3 sm:gap-2">
                <a href={profile.linkedin} target="_blank" rel="noreferrer" className="underline hover:text-white">LinkedIn</a>
                <a href={profile.github} target="_blank" rel="noreferrer" className="underline hover:text-white">GitHub</a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="flex items-end justify-between z-10 border-t border-neutral-800 pt-4 text-[10px] sm:text-xs md:text-sm font-extrabold uppercase tracking-wider">
          <div>Copyright {profile.year} — {profile.name}</div>
          <div className="font-black tracking-widest text-xs sm:text-sm">0013</div>
        </div>
      </div>
    </footer>
  )
}

function App() {
  const [active, setActive] = useState('Cover')

  const scrollToNext = () => {
    document.getElementById('introduction')?.scrollIntoView({ behavior: 'smooth' })
  }

  const scrollToAbout = () => {
    document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <div className="min-h-screen bg-[#111111] text-[#050505] flex flex-col items-center">
      {/* 1920x1080 Slide Pages */}
      <CoverSlide onNext={scrollToNext} />
      <IntroSlide onNext={scrollToAbout} />
      <Navbar active={active} setActive={setActive} />
      <AboutSlide />
      <ResumeSlide />
      <WorkSlide />
      <ContactSlide />
    </div>
  )
}

createRoot(document.getElementById('root')).render(<App />)
