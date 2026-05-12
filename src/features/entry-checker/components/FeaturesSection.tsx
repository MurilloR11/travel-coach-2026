import {
  TrafficLightIcon,
  GaugeIcon,
  ChecklistIcon,
  BookmarkIcon,
} from '@/shared/ui/Icons'
import { FlagIcon } from '@/shared/ui/FlagIcon'
import type { ReactNode } from 'react'

// ─── Aside: complexity rows ───────────────────────────────────────────────────

type ComplexityLevel = 'green' | 'amber' | 'red'

const DOT_COLORS: Record<ComplexityLevel, string> = {
  green: '#34D399',
  amber: '#F59E0B',
  red: '#F87171',
}

interface ComplexityRowProps {
  country: 'usa' | 'canada' | 'mexico'
  code: string
  status: string
  level: ComplexityLevel
}

function ComplexityRow({ country, code, status, level }: ComplexityRowProps) {
  const color = DOT_COLORS[level]
  return (
    <div className="flex items-center justify-between border-b border-white/5 px-1 py-2">
      <div className="flex items-center gap-2.5">
        <FlagIcon country={country} width={22} height={14} />
        <span className="font-mono text-xs text-brand-off-white">{code}</span>
      </div>
      <div className="flex items-center gap-2">
        <span className="text-xs text-brand-slate">{status}</span>
        <span
          className="size-2 rounded-full"
          style={{ background: color, boxShadow: `0 0 8px ${color}` }}
          aria-hidden="true"
        />
      </div>
    </div>
  )
}

function ComplexityAside() {
  return (
    <div className="flex flex-col gap-0">
      <ComplexityRow country="usa" code="USA" status="ESTA · 72 horas" level="green" />
      <ComplexityRow country="canada" code="CAN" status="eTA · 24 horas" level="green" />
      <ComplexityRow country="mexico" code="MEX" status="Visa · 4 semanas" level="red" />
    </div>
  )
}

// ─── Aside: fatigue bar ───────────────────────────────────────────────────────

function FatigueAside() {
  return (
    <div>
      <div className="mb-2.5 flex justify-between">
        <span className="font-mono text-[10px] tracking-[0.12em] text-brand-slate">PUNTUACIÓN</span>
        <span className="font-display text-[28px] font-extrabold text-brand-amber">
          4.5<span className="ml-0.5 text-sm text-brand-slate">/10</span>
        </span>
      </div>
      <div className="h-2 overflow-hidden rounded-full bg-white/8">
        <div className="h-full w-[45%]" style={{ background: 'linear-gradient(90deg, #34D399, #F59E0B, #F87171)' }} />
      </div>
      <div className="mt-3.5 grid grid-cols-2 gap-2.5 text-xs text-brand-slate">
        <div className="flex justify-between"><span>Distancia</span><span className="font-mono text-brand-off-white">3,840 km</span></div>
        <div className="flex justify-between"><span>Zona horaria</span><span className="font-mono text-brand-off-white">±2 h</span></div>
        <div className="flex justify-between"><span>Escalas</span><span className="font-mono text-brand-off-white">2</span></div>
        <div className="flex justify-between"><span>Fronteras</span><span className="font-mono text-brand-off-white">2</span></div>
      </div>
    </div>
  )
}

// ─── Aside: checklist ─────────────────────────────────────────────────────────

const CHECKLIST_ITEMS = [
  { t: 'Solicitar ESTA en línea', src: 'travel.state.gov', done: true },
  { t: 'Pagar USD 21 de tarifa', src: 'esta.cbp.dhs.gov', done: true },
  { t: 'Confirmar espera de 72h', src: 'oficial', done: false },
  { t: 'Imprimir autorización', src: 'esta.cbp.dhs.gov', done: false },
]

function ChecklistAside() {
  return (
    <ul className="flex flex-col gap-2.5">
      {CHECKLIST_ITEMS.map((item) => (
        <li key={item.t} className="flex items-center gap-2.5 text-[13px] text-brand-off-white">
          <span
            className="flex size-4.5 shrink-0 items-center justify-center rounded border border-white/18 text-[12px] font-bold text-brand-navy"
            style={{ background: item.done ? '#F59E0B' : 'transparent' }}
          >
            {item.done ? '✓' : ''}
          </span>
          <span className={`flex-1 ${item.done ? 'opacity-60 line-through' : ''}`}>{item.t}</span>
          <span className="font-mono text-[10px] tracking-[0.08em] text-brand-amber">{item.src}</span>
        </li>
      ))}
    </ul>
  )
}

// ─── Aside: saved plans ───────────────────────────────────────────────────────

const SAVED_PLANS = [
  { name: 'Solo fase de grupos', days: 9, score: '3.2' },
  { name: 'Todo: grupos → final', days: 28, score: '7.8' },
  { name: 'Solo México', days: 12, score: '2.1' },
]

function PlansAside() {
  return (
    <ul className="flex flex-col gap-2">
      {SAVED_PLANS.map((plan) => (
        <li
          key={plan.name}
          className="flex items-center justify-between rounded-lg border border-white/6 bg-white/3 px-3 py-2.5"
        >
          <div>
            <p className="text-[13px] font-medium text-brand-off-white">{plan.name}</p>
            <p className="font-mono text-[10px] tracking-widest text-brand-slate">
              {plan.days} DÍAS · FATIGA {plan.score}
            </p>
          </div>
          <span className="text-brand-amber text-sm">→</span>
        </li>
      ))}
    </ul>
  )
}

// ─── Feature card ─────────────────────────────────────────────────────────────

interface FeatureCardProps {
  icon: ReactNode
  title: string
  body: string
  aside: ReactNode
}

function FeatureCard({ icon, title, body, aside }: FeatureCardProps) {
  return (
    <li className="grid grid-cols-1 gap-7 rounded-[14px] border border-white/6 bg-brand-navy-mid p-7 transition-all duration-200 hover:-translate-y-0.5 hover:border-brand-amber/35 hover:bg-[#1A2236] sm:grid-cols-[1.1fr_1fr]">
      <div className="flex flex-col gap-3">
        <div className="flex size-11 items-center justify-center rounded-[10px] border border-brand-amber/25 bg-brand-amber/10">
          {icon}
        </div>
        <h3 className="font-display mt-2 text-[22px] font-semibold tracking-tight text-brand-off-white">{title}</h3>
        <p className="text-[15px] leading-[1.55] text-brand-slate">{body}</p>
      </div>
      <div className="flex flex-col justify-center rounded-[10px] border border-white/6 bg-white/2 p-3.5">
        {aside}
      </div>
    </li>
  )
}

const FEATURES: FeatureCardProps[] = [
  {
    icon: <TrafficLightIcon stroke="#F59E0B" />,
    title: 'Semáforos de complejidad',
    body: 'Verde, amarillo, rojo por país. Un vistazo te dice si necesitas una tarde o un mes para entrar.',
    aside: <ComplexityAside />,
  },
  {
    icon: <GaugeIcon stroke="#F59E0B" />,
    title: 'Calculadora de fatiga de ruta',
    body: 'Ponderamos distancia, cambios de zona horaria, escalas y cruces fronterizos. Ves el resultado antes de reservar.',
    aside: <FatigueAside />,
  },
  {
    icon: <ChecklistIcon stroke="#F59E0B" />,
    title: 'Checklist accionable con enlaces oficiales',
    body: 'Cada tarea apunta a la fuente oficial del gobierno. Sin agencias de visa de terceros. Sin ventas adicionales.',
    aside: <ChecklistAside />,
  },
  {
    icon: <BookmarkIcon stroke="#F59E0B" />,
    title: 'Guarda y compara planes',
    body: 'Esboza tres itinerarios, comparte el enlace, decide después. Login opcional — tus planes viven en una URL compartible.',
    aside: <PlansAside />,
  },
]

export function FeaturesSection() {
  return (
    <section
      id="funcionalidades"
      className="border-t border-white/6 bg-brand-navy py-28"
      aria-labelledby="features-title"
    >
      <div className="mx-auto max-w-6xl px-6">
        <div className="mb-12 flex flex-wrap items-end justify-between gap-6">
          <div>
            <div className="mb-4 flex items-center gap-2.5">
              <span className="h-px w-7 bg-brand-amber" aria-hidden="true" />
              <span className="font-mono text-[12px] uppercase tracking-[0.14em] text-brand-amber">
                Funcionalidades
              </span>
            </div>
            <h2
              id="features-title"
              className="font-display font-semibold tracking-tight text-brand-off-white"
              style={{ fontSize: 'clamp(36px, 4.6vw, 56px)', maxWidth: 720 }}
            >
              Herramientas que hacen lo difícil, aburrido.
            </h2>
          </div>
          <span className="font-mono text-[12px] tracking-[0.12em] text-brand-amber">
            VER TODO →
          </span>
        </div>

        <ul className="grid grid-cols-1 gap-4 lg:grid-cols-2" aria-label="Funcionalidades principales">
          {FEATURES.map((f) => (
            <FeatureCard key={f.title} {...f} />
          ))}
        </ul>
      </div>
    </section>
  )
}
