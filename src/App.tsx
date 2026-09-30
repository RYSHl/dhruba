import { useEffect, useState } from 'react';
import {
  GraduationCap,
  Briefcase,
  Award,
  Users,
  Wrench,
  HeartHandshake,
  Mail,
  Phone,
  School,
  Github,
  Linkedin,
  Twitter,
  Menu,
  X,
  ChevronDown,
  MapPin,
  Sparkles,
  ExternalLink,
} from 'lucide-react';
import {
  profile,
  education,
  skills,
  experience,
  leadership,
  awards,
  workshops,
  volunteering,
} from '@/data/resume';

const NAV_ITEMS = [
  { id: 'education', label: 'Education', icon: GraduationCap },
  { id: 'skills', label: 'Skills', icon: Sparkles },
  { id: 'experience', label: 'Experience', icon: Briefcase },
  { id: 'leadership', label: 'Leadership', icon: Users },
  { id: 'awards', label: 'Awards', icon: Award },
  { id: 'workshops', label: 'Workshops', icon: Wrench },
  { id: 'volunteering', label: 'Volunteering', icon: HeartHandshake },
];

function useScrollSpy(ids: string[]) {
  const [active, setActive] = useState(ids[0]);
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActive(entry.target.id);
        });
      },
      { rootMargin: '-20% 0px -70% 0px' }
    );
    ids.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });
    return () => observer.disconnect();
  }, [ids]);
  return active;
}

function useReveal() {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('reveal-in');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1, rootMargin: '0px 0px -60px 0px' }
    );
    document.querySelectorAll('.reveal').forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);
}

function Nav() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const active = useScrollSpy(NAV_ITEMS.map((n) => n.id));

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth', block: 'start' });
    setOpen(false);
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'bg-white/90 backdrop-blur-md shadow-sm' : 'bg-transparent'
      }`}
    >
      <nav className="mx-auto max-w-6xl px-5 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="font-semibold tracking-tight text-slate-900 text-lg"
          >
            Dhrubajyoti<span className="text-teal-600">.</span>
          </button>

          {/* Desktop nav */}
          <div className="hidden lg:flex items-center gap-1">
            {NAV_ITEMS.map((item) => {
              const Icon = item.icon;
              return (
                <button
                  key={item.id}
                  onClick={() => scrollTo(item.id)}
                  className={`px-3 py-2 rounded-lg text-sm font-medium transition-all duration-200 flex items-center gap-1.5 ${
                    active === item.id
                      ? 'text-teal-700 bg-teal-50'
                      : 'text-slate-600 hover:text-slate-900 hover:bg-slate-100'
                  }`}
                >
                  <Icon className="w-3.5 h-3.5" />
                  {item.label}
                </button>
              );
            })}
          </div>

          {/* Mobile toggle */}
          <button
            onClick={() => setOpen(!open)}
            className="lg:hidden p-2 rounded-lg text-slate-700 hover:bg-slate-100"
            aria-label="Menu"
          >
            {open ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>

        {/* Mobile menu */}
        {open && (
          <div className="lg:hidden pb-4 flex flex-col gap-1 animate-[fadeIn_0.2s_ease]">
            {NAV_ITEMS.map((item) => {
              const Icon = item.icon;
              return (
                <button
                  key={item.id}
                  onClick={() => scrollTo(item.id)}
                  className={`px-4 py-2.5 rounded-lg text-sm font-medium text-left flex items-center gap-2.5 ${
                    active === item.id
                      ? 'text-teal-700 bg-teal-50'
                      : 'text-slate-600 hover:bg-slate-100'
                  }`}
                >
                  <Icon className="w-4 h-4" />
                  {item.label}
                </button>
              );
            })}
          </div>
        )}
      </nav>
    </header>
  );
}

function Hero() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden pt-20">
      {/* Background gradient mesh */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-50 via-teal-50/40 to-slate-100" />
      <div className="absolute top-20 right-10 w-72 h-72 bg-teal-200/30 rounded-full blur-3xl" />
      <div className="absolute bottom-10 left-10 w-96 h-96 bg-cyan-200/20 rounded-full blur-3xl" />

      <div className="relative mx-auto max-w-6xl px-5 lg:px-8 w-full">
        <div className="grid lg:grid-cols-5 gap-10 items-center">
          <div className="lg:col-span-3 space-y-6">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-teal-100/80 text-teal-700 text-sm font-medium">
              <span className="w-2 h-2 rounded-full bg-teal-500 animate-pulse" />
              Open to opportunities
            </div>

            <h1 className="text-5xl lg:text-7xl font-bold tracking-tight text-slate-900 leading-[1.05]">
              Dhrubajyoti
              <br />
              <span className="text-teal-600">Paul</span>
            </h1>

            <p className="text-lg lg:text-xl text-slate-600 max-w-xl leading-relaxed">
              {profile.tagline}. Commerce graduate specializing in financial analytics,
              driven by public policy, civic governance, and data-driven decision-making.
            </p>

            <div className="flex flex-wrap gap-3 pt-2">
              {profile.contacts.map((c) => {
                const Icon = c.label === 'Phone' ? Phone : c.label === 'Email' ? Mail : School;
                return (
                  <a
                    key={c.label}
                    href={c.href}
                    className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-white/70 backdrop-blur border border-slate-200 text-sm text-slate-700 hover:border-teal-300 hover:bg-white transition-all duration-200"
                  >
                    <Icon className="w-4 h-4 text-teal-600" />
                    {c.value}
                  </a>
                );
              })}
            </div>

            <div className="flex gap-3 pt-2">
              {[
                { icon: Linkedin, label: 'LinkedIn', href: '#' },
                { icon: Github, label: 'GitHub', href: '#' },
                { icon: Twitter, label: 'X: @dhruba_01', href: '#' },
              ].map((s) => {
                const Icon = s.icon;
                return (
                  <a
                    key={s.label}
                    href={s.href}
                    aria-label={s.label}
                    className="w-11 h-11 rounded-xl bg-white/70 backdrop-blur border border-slate-200 flex items-center justify-center text-slate-600 hover:text-teal-600 hover:border-teal-300 hover:bg-white hover:scale-105 transition-all duration-200"
                  >
                    <Icon className="w-5 h-5" />
                  </a>
                );
              })}
            </div>
          </div>

          {/* Right: profile card */}
          <div className="lg:col-span-2 hidden lg:block">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-br from-teal-400 to-cyan-500 rounded-3xl rotate-3 opacity-20" />
              <div className="relative bg-white rounded-3xl shadow-xl border border-slate-100 p-8 space-y-5">
                <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-teal-500 to-cyan-600 flex items-center justify-center text-white text-3xl font-bold">
                  DP
                </div>
                <div>
                  <p className="text-sm text-slate-500 font-medium">{profile.degree}</p>
                  <p className="text-slate-900 font-semibold mt-1">{profile.institution}</p>
                </div>
                <div className="space-y-2 pt-2 border-t border-slate-100">
                  {[
                    'Prime Minister\u2019s Letter of Appreciation (2023 & 2024)',
                    'State Finalist — Viksit Bharat & Budget Quest',
                    '100+ RTI petitions resolved',
                  ].map((h) => (
                    <div key={h} className="flex items-start gap-2 text-sm text-slate-600">
                      <Sparkles className="w-3.5 h-3.5 text-teal-500 mt-0.5 shrink-0" />
                      {h}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        <button
          onClick={() => document.getElementById('education')?.scrollIntoView({ behavior: 'smooth' })}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 text-slate-400 hover:text-teal-600 transition-colors animate-bounce"
          aria-label="Scroll down"
        >
          <ChevronDown className="w-6 h-6" />
        </button>
      </div>
    </section>
  );
}

function SectionHeading({
  id,
  icon: Icon,
  title,
  subtitle,
}: {
  id: string;
  icon: React.ComponentType<{ className?: string }>;
  title: string;
  subtitle?: string;
}) {
  return (
    <div id={id} className="reveal mb-10 scroll-mt-20">
      <div className="flex items-center gap-3 mb-2">
        <div className="w-10 h-10 rounded-xl bg-teal-50 border border-teal-100 flex items-center justify-center">
          <Icon className="w-5 h-5 text-teal-600" />
        </div>
        <h2 className="text-2xl lg:text-3xl font-bold tracking-tight text-slate-900">{title}</h2>
      </div>
      {subtitle && <p className="text-slate-500 text-sm ml-13 pl-1">{subtitle}</p>}
    </div>
  );
}

function EducationSection() {
  return (
    <section className="mx-auto max-w-6xl px-5 lg:px-8 py-20 lg:py-28">
      <SectionHeading id="education" icon={GraduationCap} title="Education" />
      <div className="grid md:grid-cols-2 gap-5">
        {education.map((edu) => (
          <div
            key={edu.id}
            className="reveal group bg-white rounded-2xl border border-slate-200 p-6 hover:border-teal-300 hover:shadow-lg transition-all duration-300"
          >
            <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-teal-50 to-cyan-50 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
              <GraduationCap className="w-6 h-6 text-teal-600" />
            </div>
            <h3 className="font-semibold text-slate-900 text-lg">{edu.institution}</h3>
            <p className="text-teal-600 text-sm font-medium mt-1">{edu.degree}</p>
            <p className="text-slate-500 text-sm mt-1">{edu.detail}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

function SkillsSection() {
  const entries = Object.entries(skills);
  return (
    <section className="mx-auto max-w-6xl px-5 lg:px-8 py-20 lg:py-28 bg-slate-50/50">
      <SectionHeading id="skills" icon={Sparkles} title="Core Competencies & Certifications" />
      <div className="grid md:grid-cols-3 gap-5">
        {entries.map(([category, items], i) => (
          <div
            key={category}
            className="reveal bg-white rounded-2xl border border-slate-200 p-6 hover:shadow-lg transition-shadow duration-300"
            style={{ transitionDelay: `${i * 60}ms` }}
          >
            <h3 className="font-semibold text-slate-900 mb-4 text-sm uppercase tracking-wide">
              {category}
            </h3>
            <div className="flex flex-wrap gap-2">
              {items.map((item) => (
                <span
                  key={item}
                  className="px-3 py-1.5 rounded-lg bg-teal-50 text-teal-700 text-xs font-medium border border-teal-100 hover:bg-teal-100 transition-colors"
                >
                  {item}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

function ExperienceSection() {
  return (
    <section className="mx-auto max-w-6xl px-5 lg:px-8 py-20 lg:py-28">
      <SectionHeading id="experience" icon={Briefcase} title="Professional & Administrative Experience" />
      <div className="relative">
        {/* Timeline line */}
        <div className="absolute left-4 top-2 bottom-2 w-px bg-slate-200 lg:left-1/2" />

        <div className="space-y-8">
          {experience.map((item, i) => (
            <div
              key={item.id}
              className={`reveal relative flex flex-col lg:flex-row gap-4 ${
                i % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'
              }`}
            >
              {/* Timeline dot */}
              <div className="absolute left-4 lg:left-1/2 top-6 -translate-x-1/2 z-10">
                <div
                  className={`w-3 h-3 rounded-full border-2 border-white ${
                    item.current ? 'bg-teal-500 animate-pulse' : 'bg-slate-300'
                  }`}
                />
              </div>

              {/* Card */}
              <div className={`pl-12 lg:pl-0 lg:w-1/2 ${i % 2 === 0 ? 'lg:pr-12' : 'lg:pl-12'}`}>
                <div className="bg-white rounded-2xl border border-slate-200 p-6 hover:border-teal-300 hover:shadow-lg transition-all duration-300">
                  <div className="flex items-start justify-between gap-3 flex-wrap">
                    <div>
                      <h3 className="font-semibold text-slate-900">{item.role}</h3>
                      <p className="text-teal-600 text-sm font-medium">{item.org}</p>
                    </div>
                    {item.current && (
                      <span className="px-2.5 py-1 rounded-full bg-teal-50 text-teal-600 text-xs font-semibold border border-teal-100">
                        Current
                      </span>
                    )}
                  </div>
                  <div className="flex items-center gap-3 text-xs text-slate-500 mt-2">
                    <span className="flex items-center gap-1">
                      <MapPin className="w-3 h-3" />
                      {item.location}
                    </span>
                    <span>·</span>
                    <span>{item.period}</span>
                  </div>
                  <ul className="mt-4 space-y-2">
                    {item.points.map((point, idx) => (
                      <li key={idx} className="text-sm text-slate-600 flex items-start gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-teal-400 mt-2 shrink-0" />
                        {point}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function LeadershipSection() {
  return (
    <section className="mx-auto max-w-6xl px-5 lg:px-8 py-20 lg:py-28 bg-slate-50/50">
      <SectionHeading
        id="leadership"
        icon={Users}
        title="Leadership & Research Publications"
      />
      <div className="grid md:grid-cols-2 gap-5">
        {leadership.map((item, i) => (
          <div
            key={item.id}
            className="reveal group bg-white rounded-2xl border border-slate-200 p-6 hover:shadow-lg hover:border-teal-300 transition-all duration-300"
            style={{ transitionDelay: `${i * 50}ms` }}
          >
            <div className="flex items-start gap-3">
              <div className="w-9 h-9 rounded-lg bg-teal-50 flex items-center justify-center shrink-0 group-hover:bg-teal-100 transition-colors">
                <Users className="w-4 h-4 text-teal-600" />
              </div>
              <div>
                <h3 className="font-semibold text-slate-900 text-[0.95rem] leading-snug">{item.title}</h3>
                <p className="text-sm text-slate-600 mt-2 leading-relaxed">{item.description}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

function AwardsSection() {
  return (
    <section className="mx-auto max-w-6xl px-5 lg:px-8 py-20 lg:py-28">
      <SectionHeading id="awards" icon={Award} title="Awards & National Recognition" />
      <div className="space-y-5">
        {awards.map((item, i) => (
          <div
            key={item.id}
            className="reveal group relative bg-white rounded-2xl border border-slate-200 p-6 hover:shadow-lg transition-all duration-300 overflow-hidden"
            style={{ transitionDelay: `${i * 60}ms` }}
          >
            <div className="absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b from-teal-400 to-cyan-500" />
            <div className="flex items-start gap-4 pl-3">
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-teal-50 to-cyan-50 flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform">
                <Award className="w-6 h-6 text-teal-600" />
              </div>
              <div>
                <h3 className="font-semibold text-slate-900 text-lg leading-snug">{item.title}</h3>
                <p className="text-sm text-slate-600 mt-2 leading-relaxed">{item.description}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

function WorkshopsSection() {
  return (
    <section className="mx-auto max-w-6xl px-5 lg:px-8 py-20 lg:py-28 bg-slate-50/50">
      <SectionHeading id="workshops" icon={Wrench} title="Workshops & Olympiads" />
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
        {workshops.map((item, i) => (
          <div
            key={item.id}
            className="reveal bg-white rounded-2xl border border-slate-200 p-6 hover:shadow-lg hover:border-teal-300 transition-all duration-300 flex flex-col"
            style={{ transitionDelay: `${i * 50}ms` }}
          >
            <div className="flex items-center justify-between mb-3">
              <div className="w-10 h-10 rounded-xl bg-teal-50 flex items-center justify-center">
                <Wrench className="w-5 h-5 text-teal-600" />
              </div>
              {item.year && (
                <span className="text-xs font-semibold text-slate-400">{item.year}</span>
              )}
            </div>
            <h3 className="font-semibold text-slate-900 text-[0.95rem]">{item.title}</h3>
            <p className="text-teal-600 text-xs font-medium mt-0.5">{item.org}</p>
            <p className="text-sm text-slate-600 mt-3 leading-relaxed flex-1">{item.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

function VolunteeringSection() {
  return (
    <section className="mx-auto max-w-6xl px-5 lg:px-8 py-20 lg:py-28">
      <SectionHeading id="volunteering" icon={HeartHandshake} title="Volunteering & Community" />
      <div className="grid md:grid-cols-2 gap-5">
        {volunteering.map((item, i) => (
          <div
            key={item.id}
            className="reveal bg-white rounded-2xl border border-slate-200 p-6 hover:shadow-lg hover:border-teal-300 transition-all duration-300"
            style={{ transitionDelay: `${i * 60}ms` }}
          >
            <div className="flex items-start gap-3">
              <div className="w-10 h-10 rounded-xl bg-rose-50 flex items-center justify-center shrink-0">
                <HeartHandshake className="w-5 h-5 text-rose-500" />
              </div>
              <div>
                <div className="flex items-center gap-2 flex-wrap">
                  <h3 className="font-semibold text-slate-900">{item.title}</h3>
                  {item.period && (
                    <span className="text-xs text-slate-400 font-medium">{item.period}</span>
                  )}
                </div>
                <p className="text-sm text-slate-600 mt-2 leading-relaxed">{item.description}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="border-t border-slate-200 bg-slate-50">
      <div className="mx-auto max-w-6xl px-5 lg:px-8 py-12">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <p className="font-semibold text-slate-900 text-lg">
              Dhrubajyoti<span className="text-teal-600">.</span>
            </p>
            <p className="text-sm text-slate-500 mt-1">Financial Analytics · Public Policy · Civic Governance</p>
          </div>
          <div className="flex items-center gap-3">
            {[
              { icon: Mail, href: 'mailto:pauldhrubajyoti12@gmail.com', label: 'Email' },
              { icon: Linkedin, href: '#', label: 'LinkedIn' },
              { icon: Github, href: '#', label: 'GitHub' },
              { icon: Twitter, href: '#', label: 'X' },
            ].map((s) => {
              const Icon = s.icon;
              return (
                <a
                  key={s.label}
                  href={s.href}
                  aria-label={s.label}
                  className="w-10 h-10 rounded-xl bg-white border border-slate-200 flex items-center justify-center text-slate-600 hover:text-teal-600 hover:border-teal-300 transition-all duration-200"
                >
                  <Icon className="w-4 h-4" />
                </a>
              );
            })}
          </div>
        </div>
        <p className="text-center text-xs text-slate-400 mt-8">
          Built for GitHub · {new Date().getFullYear()} Dhrubajyoti Paul
        </p>
      </div>
    </footer>
  );
}

export default function App() {
  useReveal();

  return (
    <div className="min-h-screen bg-white text-slate-800 antialiased">
      <Nav />
      <Hero />
      <EducationSection />
      <SkillsSection />
      <ExperienceSection />
      <LeadershipSection />
      <AwardsSection />
      <WorkshopsSection />
      <VolunteeringSection />
      <Footer />
    </div>
  );
}
