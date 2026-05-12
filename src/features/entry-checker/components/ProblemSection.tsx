import { PassportIcon, GaugeIcon, GlobeIcon } from '@/shared/ui/Icons'
import type { ReactNode } from 'react'

interface ProblemCardProps {
  num: string
  icon: ReactNode
  title: string
  body: string
}

function ProblemCard({ num, icon, title, body }: ProblemCardProps) {
  return (
    <li className="group grid grid-cols-[44px_1fr] gap-5 rounded-[14px] border border-black/8 bg-white p-7 transition-all duration-200 hover:-translate-y-0.5 hover:shadow-[0_12px_30px_-18px_rgba(11,18,32,0.18)]">
      <div className="flex size-11 items-center justify-center rounded-[10px] bg-brand-amber">
        {icon}
      </div>
      <div>
        <div className="mb-1.5 flex items-center gap-2.5">
          <span className="font-mono text-[11px] tracking-[0.14em] text-brand-amber-dim">{num}</span>
          <span className="h-px w-7 bg-black/18" aria-hidden="true" />
        </div>
        <h3 className="font-display text-[22px] font-semibold tracking-tight text-brand-navy">{title}</h3>
        <p className="mt-2 text-[15px] leading-[1.6] text-brand-navy/55">{body}</p>
      </div>
    </li>
  )
}

const PROBLEMS: ProblemCardProps[] = [
  {
    num: '01',
    icon: <PassportIcon stroke="#0F172A" />,
    title: 'No existe una sola visa que cubra los tres países.',
    body: 'EE.UU. exige ESTA o visa B1/B2. Canadá pide eTA o visa de visitante. México tiene sus propias reglas. No se comunican entre sí y cambian según el pasaporte.',
  },
  {
    num: '02',
    icon: <GaugeIcon stroke="#0F172A" />,
    title: 'Ese itinerario de cinco ciudades perfecto? Probablemente agotador.',
    body: 'Cinco partidos en doce días suena manejable en papel. En la práctica son seis vuelos, tres zonas horarias, dos fronteras y un hincha muy cansado antes de octavos.',
  },
  {
    num: '03',
    icon: <GlobeIcon stroke="#0F172A" />,
    title: 'Los requisitos dependen de tu pasaporte Y tu residencia.',
    body: 'Un brasileño viviendo en Lisboa no tiene las mismas opciones que uno en São Paulo. Preguntamos ambas cosas para que el checklist sea realmente tuyo.',
  },
]

export function ProblemSection() {
  return (
    <section className="bg-brand-paper py-28" aria-labelledby="problem-title">
      <div className="mx-auto max-w-6xl px-6">
        <div className="grid grid-cols-1 items-start gap-14 lg:grid-cols-[1fr_1.4fr]">
          <div>
            <div className="mb-4 flex items-center gap-2.5">
              <span className="h-px w-7 bg-brand-amber-dim" aria-hidden="true" />
              <span className="font-mono text-[12px] uppercase tracking-[0.14em] text-brand-navy/55">
                El problema
              </span>
            </div>
            <h2
              id="problem-title"
              className="font-display font-semibold tracking-tight text-brand-navy"
              style={{ fontSize: 'clamp(36px, 4.6vw, 56px)', maxWidth: 520 }}
            >
              Por qué planificar un viaje al Mundial es más difícil de lo que parece.
            </h2>
            <p className="mt-5 text-[17px] leading-[1.6] text-brand-navy/55" style={{ maxWidth: 460 }}>
              Tres países anfitriones. Tres sistemas migratorios. Un calendario extendido por dos continentes. La mayoría de herramientas no fueron diseñadas para esto.
            </p>
          </div>

          <ul className="flex flex-col gap-3.5" aria-label="Principales problemas">
            {PROBLEMS.map((p) => (
              <ProblemCard key={p.num} {...p} />
            ))}
          </ul>
        </div>
      </div>
    </section>
  )
}
