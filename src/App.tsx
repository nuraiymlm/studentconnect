import { useState, useEffect } from 'react'

const NAV_LINKS = [
  { label: 'Features', href: '#features' },
  { label: 'Projects', href: '#projects' },
  { label: 'Community', href: '#community' },
  { label: 'Universities', href: '#universities' },
]

const STATS = [
  { value: '48,000+', label: 'Active Students', mono: true },
  { value: '120+', label: 'Universities', mono: true },
  { value: '6,400+', label: 'Projects Launched', mono: true },
  { value: '12', label: 'Countries', mono: true },
]

const FEATURES = [
  {
    icon: '⬡',
    title: 'Project Collaboration',
    desc: 'Form teams, post ideas, and build real projects with students from any university across Kazakhstan and Central Asia.',
    tag: 'Core',
  },
  {
    icon: '◈',
    title: 'Skill Exchange',
    desc: 'Offer what you know, learn what you need. Match with peers for structured skill-swap sessions and mentorships.',
    tag: 'Learning',
  },
  {
    icon: '⬤',
    title: 'Help Requests',
    desc: 'Stuck on a problem? Post a request and get real answers from students who\'ve been there — fast, no fluff.',
    tag: 'Support',
  },
  {
    icon: '◇',
    title: 'Find People',
    desc: 'Search by skill, university, major, or interest. Build your network before you need it.',
    tag: 'Network',
  },
  {
    icon: '▲',
    title: 'Challenges & Hackathons',
    desc: 'Compete in curated academic challenges, win recognition, and add real credibility to your portfolio.',
    tag: 'Compete',
  },
  {
    icon: '▣',
    title: 'Groups & Communities',
    desc: 'Join or create groups around disciplines, cities, or shared interests. Discussion, resources, events.',
    tag: 'Community',
  },
]

const PROJECTS = [
  {
    title: 'AgroSense KZ',
    desc: 'IoT-based crop monitoring system for smallholder farms in Almaty region. Real-time soil data, weather API integration.',
    tags: ['IoT', 'Python', 'React'],
    members: 5,
    university: 'KBTU',
    status: 'Active',
    img: 'photo-1625246333195-78d9c38ad449',
  },
  {
    title: 'NomadLex',
    desc: 'Legal assistance app for migrant workers in Central Asia with multilingual support — Kazakh, Russian, Uzbek.',
    tags: ['Mobile', 'Flutter', 'NLP'],
    members: 4,
    university: 'NU',
    status: 'Recruiting',
    img: 'photo-1589829545856-d10d557cf95f',
  },
  {
    title: 'SteppeVis',
    desc: 'Open-source platform for visualizing Kazakhstan\'s historical migration patterns using curated archival datasets.',
    tags: ['D3.js', 'History', 'Open Data'],
    members: 3,
    university: 'KazNU',
    status: 'Active',
    img: 'photo-1451187580459-43490279c0fa',
  },
  {
    title: 'MedAI Triage',
    desc: 'AI-powered symptom triage assistant trained on regional health datasets. Built for rural clinic support.',
    tags: ['AI/ML', 'Healthcare', 'PyTorch'],
    members: 6,
    university: 'ASUET',
    status: 'Active',
    img: 'photo-1576091160550-2173dba999ef',
  },
]

const TESTIMONIALS = [
  {
    name: 'Aizat Nurmagambetova',
    role: 'CS Student, KBTU · Almaty',
    quote: 'StudentConnect helped me find three co-founders for my startup in one week. The skill-matching actually works — I found a backend developer and a UX designer from different universities.',
    avatar: 'photo-1531123897727-8f129e1688ce',
  },
  {
    name: 'Damir Seitkali',
    role: 'Engineering, NU · Astana',
    quote: 'I posted a help request for my embedded systems project at 11pm. By morning I had four replies from students who had solved the exact same problem. Incredible community.',
    avatar: 'photo-1507003211169-0a1dd7228f2d',
  },
  {
    name: 'Malika Dosova',
    role: 'Design, Suleyman Demirel University',
    quote: 'The Skill Exchange feature transformed how I learn. I teach UI design and get Python lessons in return. It\'s peer-to-peer education at its best.',
    avatar: 'photo-1544005313-94ddf0286df2',
  },
]

const UNIVERSITIES = [
  { name: 'Nazarbayev University', abbr: 'NU', city: 'Astana' },
  { name: 'KBTU', abbr: 'KBTU', city: 'Almaty' },
  { name: 'KazNU', abbr: 'КазНУ', city: 'Almaty' },
  { name: 'Suleyman Demirel', abbr: 'SDU', city: 'Almaty' },
  { name: 'AUPET', abbr: 'AUET', city: 'Almaty' },
  { name: 'Satbayev University', abbr: 'KazNRTU', city: 'Almaty' },
  { name: 'ENU', abbr: 'ENU', city: 'Astana' },
  { name: 'Kazakh-British TU', abbr: 'KBTU', city: 'Almaty' },
]

function NavBar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <nav
      className="fixed top-0 left-0 right-0 z-50 transition-all duration-300"
      style={{
        background: scrolled ? 'rgba(8,14,29,0.95)' : 'transparent',
        backdropFilter: scrolled ? 'blur(16px)' : 'none',
        borderBottom: scrolled ? '1px solid #1E2D47' : '1px solid transparent',
      }}
    >
      <div className="max-w-[1440px] mx-auto px-8 h-16 flex items-center justify-between">
        {/* Logo */}
        <a href="#" className="flex items-center gap-2 group">
          <div
            className="w-8 h-8 rounded-sm flex items-center justify-center text-xs font-bold"
            style={{ background: 'linear-gradient(135deg, #1A6BFF, #4D8FFF)' }}
          >
            SC
          </div>
          <span className="font-semibold text-white tracking-tight">
            StudentConnect
          </span>
          <span className="text-sm">🇰🇿</span>
        </a>

        {/* Desktop links */}
        <div className="hidden md:flex items-center gap-8">
          {NAV_LINKS.map((l) => (
            <a
              key={l.label}
              href={l.href}
              className="text-sm transition-colors"
              style={{ color: '#7A8AA0' }}
              onMouseEnter={e => (e.currentTarget.style.color = '#F0F4FF')}
              onMouseLeave={e => (e.currentTarget.style.color = '#7A8AA0')}
            >
              {l.label}
            </a>
          ))}
        </div>

        {/* CTA */}
        <div className="hidden md:flex items-center gap-3">
          <button
            className="text-sm px-4 py-2 rounded transition-colors"
            style={{ color: '#7A8AA0' }}
            onMouseEnter={e => (e.currentTarget.style.color = '#F0F4FF')}
            onMouseLeave={e => (e.currentTarget.style.color = '#7A8AA0')}
          >
            Sign in
          </button>
          <button
            className="text-sm px-5 py-2 rounded-sm font-medium transition-all"
            style={{ background: '#1A6BFF', color: '#fff' }}
            onMouseEnter={e => (e.currentTarget.style.background = '#4D8FFF')}
            onMouseLeave={e => (e.currentTarget.style.background = '#1A6BFF')}
          >
            Join Free
          </button>
        </div>

        {/* Mobile menu toggle */}
        <button className="md:hidden text-white" onClick={() => setMenuOpen(!menuOpen)}>
          <div className="w-5 h-0.5 bg-white mb-1" />
          <div className="w-5 h-0.5 bg-white mb-1" />
          <div className="w-5 h-0.5 bg-white" />
        </button>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="md:hidden px-8 pb-6 pt-2" style={{ background: 'rgba(8,14,29,0.98)' }}>
          {NAV_LINKS.map((l) => (
            <a key={l.label} href={l.href} className="block py-2 text-sm" style={{ color: '#7A8AA0' }}
              onClick={() => setMenuOpen(false)}>
              {l.label}
            </a>
          ))}
          <button
            className="mt-4 w-full py-2 rounded-sm font-medium text-sm"
            style={{ background: '#1A6BFF', color: '#fff' }}
          >
            Join Free
          </button>
        </div>
      )}
    </nav>
  )
}

function HeroSection() {
  return (
    <section
      className="relative min-h-screen flex flex-col justify-center overflow-hidden pt-16"
      style={{ background: '#080E1D' }}
    >
      {/* Grid background */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage: `
            linear-gradient(rgba(26,107,255,0.05) 1px, transparent 1px),
            linear-gradient(90deg, rgba(26,107,255,0.05) 1px, transparent 1px)
          `,
          backgroundSize: '64px 64px',
        }}
      />

      {/* Glow spots */}
      <div
        className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full pointer-events-none"
        style={{ background: 'radial-gradient(circle, rgba(26,107,255,0.15) 0%, transparent 70%)' }}
      />
      <div
        className="absolute bottom-1/3 right-1/4 w-64 h-64 rounded-full pointer-events-none"
        style={{ background: 'radial-gradient(circle, rgba(245,197,24,0.08) 0%, transparent 70%)' }}
      />

      <div className="max-w-[1440px] mx-auto px-8 w-full grid grid-cols-12 gap-6 items-center py-20">
        {/* Left: copy */}
        <div className="col-span-12 lg:col-span-7 relative z-10">
          {/* Badge */}
          <div
            className="inline-flex items-center gap-2 px-3 py-1.5 rounded-sm mb-8 text-xs font-mono-custom"
            style={{
              background: 'rgba(26,107,255,0.12)',
              border: '1px solid rgba(26,107,255,0.3)',
              color: '#4D8FFF',
              letterSpacing: '0.05em',
            }}
          >
            <span className="w-1.5 h-1.5 rounded-full bg-blue-400 animate-pulse" />
            NOW IN BETA — KAZAKHSTAN'S STUDENT NETWORK
          </div>

          {/* Headline */}
          <h1
            className="font-display leading-none mb-6"
            style={{ fontSize: 'clamp(48px, 5vw, 80px)', color: '#F0F4FF' }}
          >
            Build something
            <br />
            <em style={{ color: '#1A6BFF', fontStyle: 'italic' }}>remarkable</em>
            <br />
            together.
          </h1>

          {/* Sub */}
          <p
            className="text-lg mb-10 leading-relaxed max-w-xl"
            style={{ color: '#7A8AA0', fontWeight: 300 }}
          >
            StudentConnect is Kazakhstan's platform for student collaboration —
            find co-founders, exchange skills, launch projects, and connect with
            48,000+ ambitious students across 120 universities.
          </p>

          {/* CTAs */}
          <div className="flex flex-wrap gap-4 mb-12">
            <button
              className="px-8 py-3.5 rounded-sm font-semibold text-sm transition-all"
              style={{
                background: '#1A6BFF',
                color: '#fff',
                boxShadow: '0 0 30px rgba(26,107,255,0.4)',
              }}
              onMouseEnter={e => {
                e.currentTarget.style.background = '#4D8FFF'
                e.currentTarget.style.boxShadow = '0 0 40px rgba(26,107,255,0.6)'
              }}
              onMouseLeave={e => {
                e.currentTarget.style.background = '#1A6BFF'
                e.currentTarget.style.boxShadow = '0 0 30px rgba(26,107,255,0.4)'
              }}
            >
              Start Collaborating →
            </button>
            <button
              className="px-8 py-3.5 rounded-sm font-medium text-sm transition-all"
              style={{
                background: 'transparent',
                color: '#F0F4FF',
                border: '1px solid #1E2D47',
              }}
              onMouseEnter={e => (e.currentTarget.style.borderColor = '#4D8FFF')}
              onMouseLeave={e => (e.currentTarget.style.borderColor = '#1E2D47')}
            >
              Explore Projects
            </button>
          </div>

          {/* Social proof */}
          <div className="flex items-center gap-4">
            <div className="flex -space-x-2">
              {['photo-1531123897727-8f129e1688ce', 'photo-1507003211169-0a1dd7228f2d', 'photo-1544005313-94ddf0286df2', 'photo-1438761681033-6461ffad8d80'].map((id, i) => (
                <img
                  key={i}
                  src={`https://images.unsplash.com/${id}?w=40&h=40&fit=crop&auto=format`}
                  alt="Student"
                  className="w-8 h-8 rounded-full border-2"
                  style={{ borderColor: '#080E1D', objectFit: 'cover' }}
                />
              ))}
            </div>
            <span className="text-sm" style={{ color: '#7A8AA0' }}>
              <span style={{ color: '#F5C518', fontWeight: 600 }}>+48,000</span> students already connected
            </span>
          </div>
        </div>

        {/* Right: dashboard preview card */}
        <div className="col-span-12 lg:col-span-5 relative z-10">
          <DashboardPreviewCard />
        </div>
      </div>

      {/* Bottom fade */}
      <div
        className="absolute bottom-0 left-0 right-0 h-32 pointer-events-none"
        style={{ background: 'linear-gradient(to bottom, transparent, #080E1D)' }}
      />
    </section>
  )
}

function DashboardPreviewCard() {
  return (
    <div
      className="relative rounded-sm overflow-hidden"
      style={{
        background: '#0E1929',
        border: '1px solid #1E2D47',
        boxShadow: '0 40px 80px rgba(0,0,0,0.5), 0 0 0 1px rgba(26,107,255,0.1)',
        transform: 'perspective(1200px) rotateY(-8deg) rotateX(4deg)',
        transformOrigin: 'right center',
      }}
    >
      {/* Card header */}
      <div className="px-4 py-3 flex items-center gap-2" style={{ borderBottom: '1px solid #1E2D47' }}>
        <div className="w-2 h-2 rounded-full bg-red-500/50" />
        <div className="w-2 h-2 rounded-full bg-yellow-500/50" />
        <div className="w-2 h-2 rounded-full bg-green-500/50" />
        <span className="font-mono-custom text-xs ml-2" style={{ color: '#7A8AA0' }}>
          studentconnect.kz / dashboard
        </span>
      </div>

      <div className="p-5">
        {/* Greeting */}
        <p className="font-mono-custom text-xs mb-1" style={{ color: '#1A6BFF' }}>Good morning,</p>
        <h3 className="font-semibold text-base mb-4" style={{ color: '#F0F4FF' }}>Aizat Nurmagambetova</h3>

        {/* Mini stats */}
        <div className="grid grid-cols-3 gap-2 mb-4">
          {[
            { n: '3', l: 'Projects' },
            { n: '12', l: 'Connections' },
            { n: '7', l: 'Messages' },
          ].map((s) => (
            <div key={s.l} className="rounded-sm p-2.5 text-center" style={{ background: '#162035' }}>
              <div className="font-semibold text-lg" style={{ color: '#F5C518' }}>{s.n}</div>
              <div className="font-mono-custom text-xs" style={{ color: '#7A8AA0' }}>{s.l}</div>
            </div>
          ))}
        </div>

        {/* Recent project */}
        <div className="rounded-sm p-3 mb-3" style={{ background: '#162035', border: '1px solid rgba(26,107,255,0.2)' }}>
          <div className="flex items-center justify-between mb-1">
            <span className="text-xs font-medium" style={{ color: '#F0F4FF' }}>AgroSense KZ</span>
            <span className="font-mono-custom text-xs px-1.5 py-0.5 rounded-sm" style={{ background: 'rgba(26,107,255,0.15)', color: '#4D8FFF' }}>Active</span>
          </div>
          <div className="w-full h-1 rounded-full mb-1" style={{ background: '#1E2D47' }}>
            <div className="h-1 rounded-full" style={{ width: '67%', background: '#1A6BFF' }} />
          </div>
          <span className="font-mono-custom text-xs" style={{ color: '#7A8AA0' }}>67% complete · 5 members</span>
        </div>

        {/* Skill match notification */}
        <div className="rounded-sm p-3 flex items-center gap-3" style={{ background: 'rgba(245,197,24,0.08)', border: '1px solid rgba(245,197,24,0.2)' }}>
          <span className="text-base">⚡</span>
          <div>
            <p className="text-xs font-medium" style={{ color: '#F5C518' }}>New skill match!</p>
            <p className="text-xs" style={{ color: '#7A8AA0' }}>Damir offers Python · needs UI design</p>
          </div>
        </div>
      </div>
    </div>
  )
}

function StatsBar() {
  return (
    <section style={{ background: '#0E1929', borderTop: '1px solid #1E2D47', borderBottom: '1px solid #1E2D47' }}>
      <div className="max-w-[1440px] mx-auto px-8 py-10 grid grid-cols-2 md:grid-cols-4 gap-8">
        {STATS.map((s) => (
          <div key={s.label} className="text-center">
            <div
              className="font-display leading-none mb-1"
              style={{ fontSize: 'clamp(28px, 3vw, 44px)', color: '#F5C518' }}
            >
              {s.value}
            </div>
            <div className="font-mono-custom text-xs uppercase tracking-widest" style={{ color: '#7A8AA0' }}>
              {s.label}
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

function FeaturesSection() {
  return (
    <section id="features" className="py-28" style={{ background: '#080E1D' }}>
      <div className="max-w-[1440px] mx-auto px-8">
        {/* Header */}
        <div className="grid grid-cols-12 gap-6 mb-16">
          <div className="col-span-12 md:col-span-5">
            <span className="font-mono-custom text-xs tracking-widest uppercase" style={{ color: '#1A6BFF' }}>
              Platform Features
            </span>
            <h2
              className="font-display mt-3 leading-tight"
              style={{ fontSize: 'clamp(32px, 3vw, 52px)', color: '#F0F4FF' }}
            >
              Everything you need to
              <em className="block" style={{ color: '#1A6BFF', fontStyle: 'italic' }}>
                collaborate and grow.
              </em>
            </h2>
          </div>
          <div className="col-span-12 md:col-span-5 md:col-start-8 flex items-end">
            <p className="text-base leading-relaxed" style={{ color: '#7A8AA0', fontWeight: 300 }}>
              StudentConnect brings every collaboration tool into one platform —
              purpose-built for the realities of student life in Kazakhstan and Central Asia.
            </p>
          </div>
        </div>

        {/* Feature grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px" style={{ background: '#1E2D47' }}>
          {FEATURES.map((f, i) => (
            <FeatureCard key={i} feature={f} />
          ))}
        </div>
      </div>
    </section>
  )
}

function FeatureCard({ feature }: { feature: typeof FEATURES[0] }) {
  const [hovered, setHovered] = useState(false)
  return (
    <div
      className="p-8 transition-all duration-200 cursor-default"
      style={{
        background: hovered ? '#0E1929' : '#080E1D',
        borderBottom: '1px solid transparent',
      }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <div
        className="w-10 h-10 rounded-sm flex items-center justify-center text-lg mb-5 transition-all"
        style={{
          background: hovered ? 'rgba(26,107,255,0.2)' : '#0E1929',
          border: `1px solid ${hovered ? 'rgba(26,107,255,0.5)' : '#1E2D47'}`,
          color: hovered ? '#4D8FFF' : '#7A8AA0',
        }}
      >
        {feature.icon}
      </div>
      <span className="font-mono-custom text-xs uppercase tracking-widest mb-3 block" style={{ color: '#1A6BFF' }}>
        {feature.tag}
      </span>
      <h3 className="text-base font-semibold mb-3" style={{ color: '#F0F4FF' }}>{feature.title}</h3>
      <p className="text-sm leading-relaxed" style={{ color: '#7A8AA0', fontWeight: 300 }}>{feature.desc}</p>
    </div>
  )
}

function HowItWorks() {
  const steps = [
    {
      num: '01',
      title: 'Create your profile',
      desc: 'Add your university, skills, interests, and what you\'re looking to build. Takes 3 minutes.',
    },
    {
      num: '02',
      title: 'Find or post opportunities',
      desc: 'Browse open projects, post your idea, request help, or start a skill exchange.',
    },
    {
      num: '03',
      title: 'Connect and build',
      desc: 'Message collaborators, form a team, join a group, and ship something real.',
    },
  ]

  return (
    <section className="py-28 relative overflow-hidden" style={{ background: '#0E1929' }}>
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage: `radial-gradient(circle at 20% 50%, rgba(26,107,255,0.06) 0%, transparent 60%)`,
        }}
      />
      <div className="max-w-[1440px] mx-auto px-8 relative z-10">
        <div className="text-center mb-16">
          <span className="font-mono-custom text-xs tracking-widest uppercase" style={{ color: '#1A6BFF' }}>
            How It Works
          </span>
          <h2
            className="font-display mt-3"
            style={{ fontSize: 'clamp(32px, 3vw, 52px)', color: '#F0F4FF' }}
          >
            Three steps to your next collaboration.
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative">
          {/* Connector line */}
          <div
            className="absolute top-8 left-1/6 right-1/6 h-px hidden md:block"
            style={{ background: 'linear-gradient(90deg, transparent, #1E2D47 20%, #1E2D47 80%, transparent)' }}
          />

          {steps.map((step, i) => (
            <div key={i} className="relative text-center">
              <div
                className="w-16 h-16 rounded-sm flex items-center justify-center mx-auto mb-6 font-mono-custom font-medium text-xl relative z-10"
                style={{
                  background: '#162035',
                  border: '1px solid #1E2D47',
                  color: '#F5C518',
                }}
              >
                {step.num}
              </div>
              <h3 className="font-semibold text-lg mb-3" style={{ color: '#F0F4FF' }}>{step.title}</h3>
              <p className="text-sm leading-relaxed" style={{ color: '#7A8AA0', fontWeight: 300 }}>{step.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

function ProjectsSection() {
  const [activeFilter, setActiveFilter] = useState('All')
  const filters = ['All', 'Active', 'Recruiting']

  const filtered = activeFilter === 'All' ? PROJECTS : PROJECTS.filter(p => p.status === activeFilter)

  return (
    <section id="projects" className="py-28" style={{ background: '#080E1D' }}>
      <div className="max-w-[1440px] mx-auto px-8">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div>
            <span className="font-mono-custom text-xs tracking-widest uppercase" style={{ color: '#1A6BFF' }}>
              Student Projects
            </span>
            <h2
              className="font-display mt-3 leading-tight"
              style={{ fontSize: 'clamp(32px, 3vw, 52px)', color: '#F0F4FF' }}
            >
              Real work. Real impact.
            </h2>
          </div>

          {/* Filters */}
          <div className="flex gap-2">
            {filters.map((f) => (
              <button
                key={f}
                onClick={() => setActiveFilter(f)}
                className="px-4 py-1.5 rounded-sm text-sm font-medium transition-all font-mono-custom"
                style={{
                  background: activeFilter === f ? '#1A6BFF' : 'transparent',
                  color: activeFilter === f ? '#fff' : '#7A8AA0',
                  border: `1px solid ${activeFilter === f ? '#1A6BFF' : '#1E2D47'}`,
                }}
              >
                {f}
              </button>
            ))}
          </div>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {filtered.map((p, i) => (
            <ProjectCard key={i} project={p} />
          ))}
        </div>

        {/* View all CTA */}
        <div className="text-center mt-12">
          <button
            className="px-8 py-3 rounded-sm text-sm font-medium transition-all"
            style={{ border: '1px solid #1E2D47', color: '#7A8AA0' }}
            onMouseEnter={e => {
              e.currentTarget.style.borderColor = '#1A6BFF'
              e.currentTarget.style.color = '#F0F4FF'
            }}
            onMouseLeave={e => {
              e.currentTarget.style.borderColor = '#1E2D47'
              e.currentTarget.style.color = '#7A8AA0'
            }}
          >
            Browse all 6,400+ projects →
          </button>
        </div>
      </div>
    </section>
  )
}

function ProjectCard({ project }: { project: typeof PROJECTS[0] }) {
  const [hovered, setHovered] = useState(false)
  return (
    <div
      className="rounded-sm overflow-hidden transition-all duration-200 cursor-pointer"
      style={{
        background: '#0E1929',
        border: `1px solid ${hovered ? 'rgba(26,107,255,0.4)' : '#1E2D47'}`,
        boxShadow: hovered ? '0 20px 40px rgba(0,0,0,0.3)' : 'none',
        transform: hovered ? 'translateY(-2px)' : 'translateY(0)',
      }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {/* Image */}
      <div className="h-40 overflow-hidden relative" style={{ background: '#162035' }}>
        <img
          src={`https://images.unsplash.com/${project.img}?w=600&h=200&fit=crop&auto=format`}
          alt={project.title}
          className="w-full h-full object-cover transition-transform duration-500"
          style={{ transform: hovered ? 'scale(1.04)' : 'scale(1)', opacity: 0.7 }}
        />
        <div className="absolute inset-0" style={{ background: 'linear-gradient(to top, #0E1929 0%, transparent 60%)' }} />
        <div className="absolute bottom-3 left-4 right-4 flex items-center justify-between">
          <span
            className="font-mono-custom text-xs px-2 py-0.5 rounded-sm"
            style={{
              background: project.status === 'Active' ? 'rgba(26,107,255,0.3)' : 'rgba(245,197,24,0.2)',
              color: project.status === 'Active' ? '#4D8FFF' : '#F5C518',
              border: `1px solid ${project.status === 'Active' ? 'rgba(26,107,255,0.5)' : 'rgba(245,197,24,0.4)'}`,
            }}
          >
            {project.status}
          </span>
          <span className="font-mono-custom text-xs" style={{ color: '#7A8AA0' }}>{project.university}</span>
        </div>
      </div>

      {/* Content */}
      <div className="p-5">
        <h3 className="font-semibold text-base mb-2" style={{ color: '#F0F4FF' }}>{project.title}</h3>
        <p className="text-sm leading-relaxed mb-4" style={{ color: '#7A8AA0', fontWeight: 300 }}>{project.desc}</p>

        {/* Tags */}
        <div className="flex flex-wrap gap-2 mb-4">
          {project.tags.map((t) => (
            <span
              key={t}
              className="text-xs px-2 py-0.5 rounded-sm font-mono-custom"
              style={{ background: '#162035', color: '#7A8AA0', border: '1px solid #1E2D47' }}
            >
              {t}
            </span>
          ))}
        </div>

        {/* Footer */}
        <div className="flex items-center justify-between pt-3" style={{ borderTop: '1px solid #1E2D47' }}>
          <span className="text-xs" style={{ color: '#7A8AA0' }}>
            👥 {project.members} members
          </span>
          <button
            className="text-xs font-medium transition-colors"
            style={{ color: hovered ? '#4D8FFF' : '#1A6BFF' }}
          >
            View project →
          </button>
        </div>
      </div>
    </div>
  )
}

function CommunitySection() {
  return (
    <section id="community" className="py-28" style={{ background: '#0E1929' }}>
      <div className="max-w-[1440px] mx-auto px-8">
        <div className="text-center mb-16">
          <span className="font-mono-custom text-xs tracking-widest uppercase" style={{ color: '#1A6BFF' }}>
            Testimonials
          </span>
          <h2
            className="font-display mt-3"
            style={{ fontSize: 'clamp(32px, 3vw, 52px)', color: '#F0F4FF' }}
          >
            Students speak for themselves.
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {TESTIMONIALS.map((t, i) => (
            <TestimonialCard key={i} t={t} featured={i === 1} />
          ))}
        </div>
      </div>
    </section>
  )
}

function TestimonialCard({ t, featured }: { t: typeof TESTIMONIALS[0]; featured?: boolean }) {
  return (
    <div
      className="p-7 rounded-sm flex flex-col"
      style={{
        background: featured ? 'linear-gradient(135deg, rgba(26,107,255,0.15), rgba(26,107,255,0.05))' : '#162035',
        border: `1px solid ${featured ? 'rgba(26,107,255,0.4)' : '#1E2D47'}`,
        transform: featured ? 'scale(1.02)' : 'scale(1)',
      }}
    >
      <div className="text-2xl mb-4" style={{ color: featured ? '#4D8FFF' : '#1E2D47' }}>"</div>
      <p className="text-sm leading-relaxed flex-1 mb-6" style={{ color: '#A0B0C8', fontWeight: 300 }}>
        {t.quote}
      </p>
      <div className="flex items-center gap-3">
        <img
          src={`https://images.unsplash.com/${t.avatar}?w=80&h=80&fit=crop&auto=format`}
          alt={t.name}
          className="w-10 h-10 rounded-full object-cover"
          style={{ border: '2px solid #1E2D47' }}
        />
        <div>
          <div className="text-sm font-medium" style={{ color: '#F0F4FF' }}>{t.name}</div>
          <div className="text-xs font-mono-custom" style={{ color: '#7A8AA0' }}>{t.role}</div>
        </div>
      </div>
    </div>
  )
}

function UniversitiesSection() {
  return (
    <section id="universities" className="py-24" style={{ background: '#080E1D', borderTop: '1px solid #1E2D47' }}>
      <div className="max-w-[1440px] mx-auto px-8">
        <div className="text-center mb-12">
          <span className="font-mono-custom text-xs tracking-widest uppercase" style={{ color: '#7A8AA0' }}>
            Trusted by students from
          </span>
          <h2
            className="font-display mt-3"
            style={{ fontSize: 'clamp(24px, 2.5vw, 40px)', color: '#F0F4FF' }}
          >
            Kazakhstan's leading universities
          </h2>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {UNIVERSITIES.map((u, i) => (
            <div
              key={i}
              className="p-5 rounded-sm flex flex-col items-center text-center transition-all duration-200 cursor-default"
              style={{ background: '#0E1929', border: '1px solid #1E2D47' }}
              onMouseEnter={e => (e.currentTarget.style.borderColor = 'rgba(26,107,255,0.4)')}
              onMouseLeave={e => (e.currentTarget.style.borderColor = '#1E2D47')}
            >
              <div
                className="w-12 h-12 rounded-sm flex items-center justify-center font-mono-custom font-medium text-xs mb-3"
                style={{ background: '#162035', color: '#4D8FFF', border: '1px solid rgba(26,107,255,0.2)' }}
              >
                {u.abbr}
              </div>
              <div className="text-sm font-medium mb-0.5" style={{ color: '#F0F4FF' }}>{u.name}</div>
              <div className="font-mono-custom text-xs" style={{ color: '#7A8AA0' }}>{u.city}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

function SkillExchangePreview() {
  const skills = [
    { offer: 'React / TypeScript', want: 'Machine Learning', name: 'Bekzod A.', uni: 'KBTU' },
    { offer: 'UI/UX Design', want: 'Python Backend', name: 'Malika D.', uni: 'SDU' },
    { offer: 'Data Analysis', want: 'Mobile Dev', name: 'Arman S.', uni: 'NU' },
    { offer: 'Video Editing', want: 'Web Development', name: 'Zhuldyz K.', uni: 'KazNU' },
  ]

  return (
    <section className="py-28" style={{ background: '#0E1929' }}>
      <div className="max-w-[1440px] mx-auto px-8">
        <div className="grid grid-cols-12 gap-8 items-center">
          <div className="col-span-12 md:col-span-5">
            <span className="font-mono-custom text-xs tracking-widest uppercase" style={{ color: '#F5C518' }}>
              Skill Exchange
            </span>
            <h2
              className="font-display mt-3 leading-tight mb-5"
              style={{ fontSize: 'clamp(28px, 3vw, 48px)', color: '#F0F4FF' }}
            >
              Trade what you know.
              <em className="block" style={{ color: '#F5C518', fontStyle: 'italic' }}>Learn what you need.</em>
            </h2>
            <p className="text-base leading-relaxed mb-8" style={{ color: '#7A8AA0', fontWeight: 300 }}>
              No money changes hands. Post a skill you can teach, name a skill you want to learn, and we'll match you with the right person. Structured peer-to-peer learning at scale.
            </p>
            <button
              className="px-6 py-3 rounded-sm text-sm font-medium transition-all"
              style={{
                background: 'rgba(245,197,24,0.12)',
                color: '#F5C518',
                border: '1px solid rgba(245,197,24,0.3)',
              }}
              onMouseEnter={e => (e.currentTarget.style.background = 'rgba(245,197,24,0.2)')}
              onMouseLeave={e => (e.currentTarget.style.background = 'rgba(245,197,24,0.12)')}
            >
              Browse skill exchanges →
            </button>
          </div>

          <div className="col-span-12 md:col-span-6 md:col-start-7 space-y-3">
            {skills.map((s, i) => (
              <div
                key={i}
                className="p-4 rounded-sm flex items-center gap-4 transition-all"
                style={{ background: '#162035', border: '1px solid #1E2D47' }}
                onMouseEnter={e => (e.currentTarget.style.borderColor = 'rgba(245,197,24,0.3)')}
                onMouseLeave={e => (e.currentTarget.style.borderColor = '#1E2D47')}
              >
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-1">
                    <span
                      className="text-xs px-2 py-0.5 rounded-sm font-mono-custom"
                      style={{ background: 'rgba(26,107,255,0.15)', color: '#4D8FFF', border: '1px solid rgba(26,107,255,0.2)' }}
                    >
                      OFFERS: {s.offer}
                    </span>
                    <span className="text-xs" style={{ color: '#7A8AA0' }}>⇄</span>
                    <span
                      className="text-xs px-2 py-0.5 rounded-sm font-mono-custom"
                      style={{ background: 'rgba(245,197,24,0.1)', color: '#F5C518', border: '1px solid rgba(245,197,24,0.2)' }}
                    >
                      WANTS: {s.want}
                    </span>
                  </div>
                  <div className="text-xs" style={{ color: '#7A8AA0' }}>
                    {s.name} · {s.uni}
                  </div>
                </div>
                <button
                  className="text-xs px-3 py-1.5 rounded-sm font-medium shrink-0 transition-all"
                  style={{ background: '#1A6BFF', color: '#fff' }}
                  onMouseEnter={e => (e.currentTarget.style.background = '#4D8FFF')}
                  onMouseLeave={e => (e.currentTarget.style.background = '#1A6BFF')}
                >
                  Connect
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

function CTASection() {
  return (
    <section className="py-32 relative overflow-hidden" style={{ background: '#080E1D' }}>
      {/* Background glow */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: 'radial-gradient(ellipse 80% 60% at 50% 50%, rgba(26,107,255,0.12) 0%, transparent 70%)',
        }}
      />

      <div className="max-w-[1440px] mx-auto px-8 relative z-10 text-center">
        <span className="font-mono-custom text-xs tracking-widest uppercase" style={{ color: '#1A6BFF' }}>
          Get Started Free
        </span>

        <h2
          className="font-display mt-4 mb-6 mx-auto"
          style={{
            fontSize: 'clamp(40px, 5vw, 72px)',
            color: '#F0F4FF',
            maxWidth: '800px',
            lineHeight: 1.1,
          }}
        >
          Your next great project
          <em className="block" style={{ color: '#1A6BFF', fontStyle: 'italic' }}>
            starts here.
          </em>
        </h2>

        <p className="text-lg mb-10 mx-auto" style={{ color: '#7A8AA0', maxWidth: '500px', fontWeight: 300 }}>
          Join 48,000+ students already building, learning, and connecting on StudentConnect. Free forever for students.
        </p>

        <div className="flex flex-wrap justify-center gap-4 mb-12">
          <button
            className="px-10 py-4 rounded-sm font-semibold text-sm transition-all"
            style={{
              background: '#1A6BFF',
              color: '#fff',
              boxShadow: '0 0 40px rgba(26,107,255,0.4)',
            }}
            onMouseEnter={e => {
              e.currentTarget.style.background = '#4D8FFF'
              e.currentTarget.style.boxShadow = '0 0 60px rgba(26,107,255,0.6)'
            }}
            onMouseLeave={e => {
              e.currentTarget.style.background = '#1A6BFF'
              e.currentTarget.style.boxShadow = '0 0 40px rgba(26,107,255,0.4)'
            }}
          >
            Create your free account →
          </button>
          <button
            className="px-10 py-4 rounded-sm text-sm font-medium transition-all"
            style={{ border: '1px solid #1E2D47', color: '#7A8AA0' }}
            onMouseEnter={e => {
              e.currentTarget.style.borderColor = '#4D8FFF'
              e.currentTarget.style.color = '#F0F4FF'
            }}
            onMouseLeave={e => {
              e.currentTarget.style.borderColor = '#1E2D47'
              e.currentTarget.style.color = '#7A8AA0'
            }}
          >
            See how it works
          </button>
        </div>

        {/* Trust badges */}
        <div className="flex flex-wrap justify-center gap-8">
          {[
            { icon: '🔒', text: 'Student-only community' },
            { icon: '✓', text: 'Free for all students' },
            { icon: '🇰🇿', text: 'Made in Kazakhstan' },
          ].map((b) => (
            <div key={b.text} className="flex items-center gap-2">
              <span>{b.icon}</span>
              <span className="font-mono-custom text-xs" style={{ color: '#7A8AA0' }}>{b.text}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

function Footer() {
  const links = {
    Platform: ['Explore', 'Projects', 'Ideas', 'Find People', 'Skill Exchange', 'Challenges'],
    Community: ['Groups', 'Universities', 'Help Requests', 'Messages', 'Dashboard'],
    Company: ['About', 'Blog', 'Careers', 'Press', 'Contact'],
    Legal: ['Privacy Policy', 'Terms of Service', 'Cookie Policy'],
  }

  return (
    <footer style={{ background: '#080E1D', borderTop: '1px solid #1E2D47' }}>
      <div className="max-w-[1440px] mx-auto px-8 py-16">
        <div className="grid grid-cols-12 gap-8 mb-16">
          {/* Brand */}
          <div className="col-span-12 md:col-span-3">
            <div className="flex items-center gap-2 mb-4">
              <div
                className="w-8 h-8 rounded-sm flex items-center justify-center text-xs font-bold"
                style={{ background: 'linear-gradient(135deg, #1A6BFF, #4D8FFF)', color: '#fff' }}
              >
                SC
              </div>
              <span className="font-semibold" style={{ color: '#F0F4FF' }}>StudentConnect 🇰🇿</span>
            </div>
            <p className="text-sm leading-relaxed mb-6" style={{ color: '#7A8AA0', fontWeight: 300 }}>
              Kazakhstan's platform for student collaboration, skill exchange, and academic community.
            </p>
            <div className="flex gap-3">
              {['TG', 'IG', 'LI', 'TT'].map((s) => (
                <div
                  key={s}
                  className="w-8 h-8 rounded-sm flex items-center justify-center font-mono-custom text-xs cursor-pointer transition-all"
                  style={{ background: '#0E1929', border: '1px solid #1E2D47', color: '#7A8AA0' }}
                  onMouseEnter={e => {
                    e.currentTarget.style.borderColor = '#1A6BFF'
                    e.currentTarget.style.color = '#4D8FFF'
                  }}
                  onMouseLeave={e => {
                    e.currentTarget.style.borderColor = '#1E2D47'
                    e.currentTarget.style.color = '#7A8AA0'
                  }}
                >
                  {s}
                </div>
              ))}
            </div>
          </div>

          {/* Links */}
          {Object.entries(links).map(([section, items]) => (
            <div key={section} className="col-span-6 md:col-span-2">
              <h4 className="font-mono-custom text-xs uppercase tracking-widest mb-4" style={{ color: '#F0F4FF' }}>
                {section}
              </h4>
              <ul className="space-y-2.5">
                {items.map((item) => (
                  <li key={item}>
                    <a
                      href="#"
                      className="text-sm transition-colors"
                      style={{ color: '#7A8AA0' }}
                      onMouseEnter={e => (e.currentTarget.style.color = '#F0F4FF')}
                      onMouseLeave={e => (e.currentTarget.style.color = '#7A8AA0')}
                    >
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom bar */}
        <div
          className="flex flex-col md:flex-row items-center justify-between gap-4 pt-8"
          style={{ borderTop: '1px solid #1E2D47' }}
        >
          <p className="font-mono-custom text-xs" style={{ color: '#7A8AA0' }}>
            © 2026 StudentConnect. Built with ♥ in Kazakhstan.
          </p>
          <p className="font-mono-custom text-xs" style={{ color: '#7A8AA0' }}>
            Almaty · Astana · Shymkent · Karagandy
          </p>
        </div>
      </div>
    </footer>
  )
}

export default function App() {
  return (
    <div style={{ background: '#080E1D', minWidth: '320px' }}>
      <NavBar />
      <HeroSection />
      <StatsBar />
      <FeaturesSection />
      <HowItWorks />
      <ProjectsSection />
      <CommunitySection />
      <SkillExchangePreview />
      <UniversitiesSection />
      <CTASection />
      <Footer />
    </div>
  )
}
