import React, { useMemo, useState } from 'react';
import { createRoot } from 'react-dom/client';
import { GitBranch, Link, Mail, Moon, Menu, Home, Sparkles, BookOpen, Sprout, User, Send, Coffee, Activity, BarChart3, Cpu, WalletCards, ArrowRight, ChevronLeft, ChevronRight } from 'lucide-react';
import { motion } from 'framer-motion';
import './styles.css';

const constellations = [
  {
    id: 'espresso',
    title: 'espresso nebula',
    subtitle: 'Starbucks Analytics',
    icon: Coffee,
    blurb: 'Exploring store operations, customer behavior, and workforce planning across 12,000+ stores.',
    projects: ['Predicting Rush Hours', 'Store Staffing Optimization', 'Queue Time Analysis', 'Weather Impact Explorer'],
    points: [[8,48],[20,28],[36,34],[49,18],[63,38],[76,24],[88,46],[63,64],[39,58]],
    className: 'espresso'
  },
  {
    id: 'pulse',
    title: 'pulse cluster',
    subtitle: 'Healthcare Analytics',
    icon: Activity,
    blurb: 'Finding small changes in healthcare metrics before they become big operational problems.',
    projects: ['Metric Health Tracker', 'Claims Pattern Explorer', 'Provider Signal Dashboard', 'Executive Reporting'],
    points: [[8,25],[28,32],[45,20],[61,42],[81,34],[72,64],[49,55],[25,70]],
    className: 'pulse'
  },
  {
    id: 'nova',
    title: 'data nova',
    subtitle: 'Anomaly Detection',
    icon: BarChart3,
    blurb: 'A mission-control dashboard that detects unusual patterns, explains changes, and creates reports.',
    projects: ['Rolling Z-Score Alerts', 'Root Cause Notes', 'CSV Upload Studio', 'Signal Severity Score'],
    points: [[14,62],[28,24],[44,52],[58,20],[75,40],[88,74],[60,82],[36,72]],
    className: 'nova'
  },
  {
    id: 'binary',
    title: 'binary galaxy',
    subtitle: 'Software Projects',
    icon: Cpu,
    blurb: 'Full-stack applications with polished UX, reusable components, authentication, and cloud storage.',
    projects: ['NoteIt', 'AI Image Detection', 'Portfolio Journal', 'Dashboard Experiments'],
    points: [[10,55],[25,35],[43,63],[62,28],[82,42],[91,70],[66,77],[39,81]],
    className: 'binary'
  },
  {
    id: 'finance',
    title: 'finance star',
    subtitle: 'Quantitative Analysis',
    icon: WalletCards,
    blurb: 'Using statistical thinking, risk metrics, and quantitative finance methods to explain noisy systems.',
    projects: ['Volatility Notes', 'Hypothesis Testing', 'Risk Dashboards', 'Distribution Checks'],
    points: [[12,70],[29,42],[47,55],[56,24],[72,36],[84,58],[64,76],[38,82]],
    className: 'finance'
  }
];

const fieldNotes = [
  {
    no: 23,
    title: 'Why Rain Changes Everything',
    location: 'Seattle, WA / Starbucks Stores',
    date: 'April 12, 2024',
    question: 'How does rain impact store traffic, staffing needs, and customer behavior?',
    tools: 'Python · SQL · PySpark · Databricks',
    finding: 'Rain increases morning traffic by 23% but decreases afternoon traffic by 17%.'
  },
  {
    no: 29,
    title: 'The Secret Life of a Coffee Shop Queue',
    location: 'Coffee Shop Floor',
    date: 'June 4, 2024',
    question: 'Can wait times reveal hidden staffing bottlenecks?',
    tools: 'Queueing Theory · Simulation · pandas',
    finding: 'Small staffing changes create nonlinear improvements during rush windows.'
  },
  {
    no: 41,
    title: 'A Metric Blinked at Midnight',
    location: 'Healthcare Operations Dashboard',
    date: 'May 27, 2026',
    question: 'Which metric shifts are worth waking up for?',
    tools: 'Rolling averages · z-scores · change detection',
    finding: 'Severity scoring helps separate noise from true operational risk.'
  }
];

function StarField() {
  const stars = useMemo(() => Array.from({ length: 130 }, (_, i) => ({
    id: i,
    left: Math.random() * 100,
    top: Math.random() * 100,
    size: Math.random() * 2.2 + 0.4,
    delay: Math.random() * 4,
    opacity: Math.random() * 0.75 + 0.2
  })), []);
  return <div className="stars" aria-hidden="true">{stars.map(s => <span key={s.id} style={{ left: `${s.left}%`, top: `${s.top}%`, width: s.size, height: s.size, animationDelay: `${s.delay}s`, opacity: s.opacity }} />)}</div>;
}

function ConstellationArt({ item, compact = false }) {
  const Icon = item.icon;
  const path = item.points.map(([x,y], i) => `${i === 0 ? 'M' : 'L'}${x} ${y}`).join(' ');
  return <div className={`constellation-art ${item.className} ${compact ? 'compact' : ''}`}>
    <svg viewBox="0 0 100 100" role="img" aria-label={`${item.title} constellation`}>
      <path d={path} />
      {item.points.map(([x,y], i) => <circle key={i} cx={x} cy={y} r={i % 3 === 0 ? 2.2 : 1.5} />)}
    </svg>
    <div className="constellation-center"><Icon size={compact ? 20 : 34} /></div>
  </div>;
}

function Header() {
  return <header className="topbar">
    <a href="#home" className="logo">jessica <Sparkles size={16} /></a>
    <nav>
      <a href="#home">home</a><a href="#constellations">constellations</a><a href="#notes">field notes</a><a href="#greenhouse">greenhouse</a><a href="#about">about</a><a href="#contact">contact</a>
    </nav>
    <a className="ground" href="mailto:jessica@example.com"><Send size={14} /> ground control</a>
    <Moon className="moon" />
    <Menu className="menu" />
  </header>;
}

function Sidebar() {
  return <aside className="socials">
    <a href="#" aria-label="Github"><GitBranch size={19}/></a>
    <a href="#" aria-label="LinkedIn"><Link size={19}/></a>
    <a href="mailto:jessica@example.com" aria-label="Email"><Mail size={19}/></a>
  </aside>;
}

function Hero() {
  return <section id="home" className="hero panel">
    <Header /><Sidebar />
    <div className="hero-copy">
      <span className="eyebrow">welcome, traveler.</span>
      <h1>i collect tiny signals in the universe.</h1>
      <p>From coffee shops to healthcare systems, from numbers to human behavior — I turn hidden patterns into stories that matter.</p>
      <a href="#constellations" className="primary-btn">explore the sky <Sparkles size={15}/></a>
    </div>
    <div className="sky-map">
      {constellations.map((item, idx) => <motion.a href={`#${item.id}`} className={`sky-node node-${idx}`} key={item.id} whileHover={{ scale: 1.04 }}>
        <ConstellationArt item={item} compact />
        <strong>{item.title}</strong><span>{item.subtitle}</span>
      </motion.a>)}
      <div className="hint">click a<br/>constellation<br/>to explore</div>
    </div>
    <div className="horizon"><div className="observatory" /></div>
  </section>;
}

function ConstellationsSection() {
  const [active, setActive] = useState(constellations[0]);
  return <section id="constellations" className="section two-col">
    <div className="side-nav glass">
      <a className="logo mini">jessica <Sparkles size={14}/></a>
      {[[Home,'home'],[Sparkles,'constellations'],[BookOpen,'field notes'],[Sprout,'greenhouse'],[User,'about'],[Mail,'contact']].map(([Icon, text]) => <a key={text}><Icon size={16}/>{text}</a>)}
      <div className="observing"><span className="planet">♄</span><small>currently observing<br/><b>something amazing</b></small></div>
    </div>
    <div className="feature-card glass" id={active.id}>
      <span className="eyebrow">constellation</span>
      <h2>{active.title}</h2>
      <h4>{active.subtitle}</h4>
      <p>{active.blurb}</p>
      <ul>{active.projects.map(p => <li key={p}>{p}</li>)}</ul>
      <button className="primary-btn">view projects <Sparkles size={14}/></button>
      <div className="big-art"><ConstellationArt item={active}/></div>
      <div className="cycle"><button onClick={() => setActive(constellations[(constellations.indexOf(active)+4)%5])}><ChevronLeft/></button><button onClick={() => setActive(constellations[(constellations.indexOf(active)+1)%5])}><ChevronRight/></button></div>
    </div>
    <div className="mobile-card glass">
      <div className="mobile-top"><span>11:11</span><Menu size={17}/></div>
      <a className="logo mini">jessica <Sparkles size={14}/></a>
      <h3>good evening,<br/>explorer.</h3>
      <p>the universe is full of hidden signals.</p>
      <div className="dome"><Sprout/><Sparkles/></div>
      <button className="primary-btn">explore constellations</button>
    </div>
  </section>;
}

function FieldNotes() {
  return <section id="notes" className="section cards-row">
    {fieldNotes.map(note => <article className="note-card glass" key={note.no}>
      <span className="eyebrow">field note #{note.no}</span>
      <h3>{note.title}</h3>
      <p><b>Location</b><br/>{note.location}</p><p><b>Date</b><br/>{note.date}</p><p><b>Question</b><br/>{note.question}</p><p><b>Tools Used</b><br/>{note.tools}</p>
      <div className="sticky">tiny signals,<br/>big impact ★</div>
      <button className="primary-btn">read the full note <ArrowRight size={14}/></button>
    </article>)}
  </section>;
}

function Greenhouse() {
  return <section id="greenhouse" className="section cards-row">
    <div className="greenhouse-card glass">
      <span className="eyebrow">greenhouse</span><h2>growing ideas,<br/>nurturing impact</h2><p>each project is a seed of curiosity.</p>
      <div className="plants">{constellations.map(c => <button key={c.id}><Sprout size={20}/><span>{c.title}</span></button>)}</div>
      <a className="primary-btn" href="#constellations">visit the greenhouse</a>
    </div>
    <div className="case-study glass">
      <span className="eyebrow">data nova</span><h2>Anomaly Detection<br/>Mission Control</h2><p>Detect unusual patterns before they become problems.</p>
      <div className="dashboard-preview"><div/><div/><div/><div/><div/><div/></div>
      <p className="chips"><span>Python</span><span>PySpark</span><span>Databricks</span><span>ML</span><span>Tableau</span></p>
      <button className="primary-btn">view case study <Sparkles size={14}/></button>
    </div>
  </section>;
}

function Footer() {
  return <footer id="contact" className="footer panel">
    <div className="girl">☕</div>
    <h2>we are all made of stars, coffee, and curiosity.</h2>
    <p>thank you for visiting my little corner of the universe.</p>
    <div className="postcard"><b>let's connect</b><span>jessica@example.com</span><div><Link/><GitBranch/><Mail/></div></div>
  </footer>;
}

function App() {
  return <main><StarField /><Hero /><ConstellationsSection /><FieldNotes /><Greenhouse /><Footer /></main>;
}

createRoot(document.getElementById('root')).render(<App />);
