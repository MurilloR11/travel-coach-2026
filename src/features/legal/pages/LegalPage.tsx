import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import { SEO } from '@/shared/ui/SEO'

const SECTIONS = [
  { id: 'fuentes',        label: 'Fuentes y avisos legales' },
  { id: 'privacidad',     label: 'Privacidad'               },
  { id: 'responsabilidad', label: 'Aviso de responsabilidad' },
]

const LAST_UPDATED = '12 de mayo de 2026'

const SOURCES = [
  {
    country: 'Estados Unidos',
    sources: [
      { name: 'U.S. Citizenship and Immigration Services (USCIS)', url: 'uscis.gov' },
      { name: 'U.S. Department of State — Bureau of Consular Affairs', url: 'travel.state.gov' },
      { name: 'U.S. Customs and Border Protection (CBP)', url: 'cbp.gov' },
    ],
    topics: 'Visa B-1/B-2, ESTA (Visa Waiver Program), condiciones de admisión',
  },
  {
    country: 'Canadá',
    sources: [
      { name: 'Immigration, Refugees and Citizenship Canada (IRCC)', url: 'canada.ca/ircc' },
      { name: 'Canada Border Services Agency (CBSA)', url: 'cbsa-asfc.gc.ca' },
    ],
    topics: 'Autorización de Viaje Electrónica (eTA), visa de visitante, condiciones de entrada',
  },
  {
    country: 'México',
    sources: [
      { name: 'Instituto Nacional de Migración (INM)', url: 'gob.mx/inm' },
      { name: 'Secretaría de Relaciones Exteriores (SRE)', url: 'gob.mx/sre' },
    ],
    topics: 'Forma Migratoria Múltiple (FMM), visa de turista, prerregistro electrónico',
  },
]

export function LegalPage() {
  const { hash } = useLocation()

  useEffect(() => {
    if (!hash) return
    const el = document.getElementById(hash.slice(1))
    if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }, [hash])

  return (
    <>
      <SEO
        title="Avisos legales"
        description="Fuentes oficiales, política de privacidad y aviso de responsabilidad de TravelCoach 2026."
        path="/legal"
      />

      <main className="mx-auto max-w-3xl px-6 py-16 md:py-24">
        {/* Page header */}
        <header className="mb-12">
          <p className="font-mono mb-3 text-[11px] uppercase tracking-widest text-brand-amber">
            Información legal
          </p>
          <h1 className="text-3xl font-bold text-brand-off-white">Avisos legales</h1>
          <p className="mt-3 text-brand-slate">
            Última actualización: {LAST_UPDATED}
          </p>
        </header>

        {/* Anchor nav */}
        <nav aria-label="Secciones legales" className="mb-14 flex flex-wrap gap-2">
          {SECTIONS.map(s => (
            <a
              key={s.id}
              href={`#${s.id}`}
              className="font-mono rounded-full border border-white/12 bg-white/4 px-4 py-2 text-[11px] uppercase tracking-widest text-brand-slate-light transition-colors hover:border-brand-amber/40 hover:text-brand-amber focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-amber"
            >
              {s.label}
            </a>
          ))}
        </nav>

        <div className="flex flex-col gap-16">

          {/* ── Fuentes y avisos legales ────────────────────────────────── */}
          <section id="fuentes" className="scroll-mt-24">
            <SectionHeading>Fuentes y avisos legales</SectionHeading>

            <p className="mb-8 text-sm leading-relaxed text-brand-slate">
              La información sobre requisitos de entrada presentada en TravelCoach proviene
              exclusivamente de fuentes oficiales de los gobiernos de los países anfitriones.
              A continuación se listan las fuentes consultadas y el alcance de cada una.
            </p>

            <div className="flex flex-col gap-6">
              {SOURCES.map(item => (
                <div
                  key={item.country}
                  className="rounded-xl border border-white/8 bg-brand-navy-mid p-5"
                >
                  <p className="font-mono mb-3 text-[11px] uppercase tracking-widest text-brand-amber">
                    {item.country}
                  </p>
                  <ul className="mb-3 flex flex-col gap-1.5">
                    {item.sources.map(src => (
                      <li key={src.name} className="flex items-baseline gap-2 text-sm text-brand-slate-light">
                        <span className="mt-1 size-1 shrink-0 rounded-full bg-brand-amber/50" aria-hidden="true" />
                        {src.name}{' '}
                        <span className="font-mono text-[11px] text-brand-slate">({src.url})</span>
                      </li>
                    ))}
                  </ul>
                  <p className="text-[13px] text-brand-slate">
                    <span className="text-brand-slate-light">Temas cubiertos:</span> {item.topics}
                  </p>
                </div>
              ))}
            </div>

            <p className="mt-6 text-[13px] text-brand-slate">
              Fuentes verificadas al {LAST_UPDATED}. La información puede haber cambiado desde
              esa fecha. Consulta siempre las fuentes oficiales antes de viajar.
            </p>

            <Divider />

            <Subsection title="Propiedad intelectual y marcas">
              <p>
                <strong className="text-brand-slate-light">FIFA World Cup 2026™</strong> y{' '}
                <strong className="text-brand-slate-light">Copa Mundial de la FIFA™</strong> son
                marcas registradas de la Fédération Internationale de Football Association (FIFA).
                TravelCoach no tiene ninguna afiliación, patrocinio, endorsement ni asociación
                oficial con FIFA, sus filiales ni con los comités organizadores de los países
                anfitriones (United 2026).
              </p>
              <p className="mt-3">
                El contenido editorial, diseño e interfaz de TravelCoach son propiedad de sus
                autores. © 2026 TravelCoach. Todos los derechos reservados.
              </p>
            </Subsection>
          </section>

          {/* ── Privacidad ──────────────────────────────────────────────── */}
          <section id="privacidad" className="scroll-mt-24">
            <SectionHeading>Política de privacidad</SectionHeading>

            <p className="mb-8 text-sm leading-relaxed text-brand-slate">
              Esta política describe cómo TravelCoach trata la información relacionada con
              quienes usan la plataforma, de conformidad con la{' '}
              <strong className="text-brand-slate-light">Ley 1581 de 2012</strong> y el{' '}
              <strong className="text-brand-slate-light">Decreto 1377 de 2013</strong> de Colombia
              (Protección de Datos Personales).
            </p>

            <Subsection title="¿Qué datos recolectamos?">
              <p>
                Actualmente, TravelCoach <strong className="text-brand-slate-light">no recolecta
                datos personales identificables</strong> para el uso de sus herramientas.
                Las selecciones que realizas (país de pasaporte, partidos, rutas) se procesan
                localmente en tu dispositivo y no se transmiten ni almacenan en nuestros servidores.
              </p>
              <p className="mt-3">
                El proveedor de alojamiento puede registrar automáticamente metadatos técnicos
                como dirección IP, tipo de navegador y páginas visitadas con fines de seguridad y
                diagnóstico. Estos registros no son compartidos con terceros.
              </p>
            </Subsection>

            <Subsection title="¿Usamos cookies?">
              <p>
                No utilizamos cookies de seguimiento, publicidad ni analítica de terceros.
                Podemos usar el almacenamiento local del navegador (<em>localStorage</em>) para
                recordar preferencias de sesión cuando se active la función de guardar planes,
                dato que permanece únicamente en tu dispositivo.
              </p>
            </Subsection>

            <Subsection title="Cuando crees una cuenta (próximamente)">
              <p>
                Al activar el inicio de sesión, recolectaremos nombre y correo electrónico
                con el único propósito de identificar tu cuenta y asociar tus planes guardados.
                Esta política se actualizará antes de que esa función esté disponible para
                detallar la base legal del tratamiento, los plazos de conservación y los
                mecanismos de exportación y eliminación de datos.
              </p>
            </Subsection>

            <Subsection title="Tus derechos (Ley 1581 de 2012, art. 8)">
              <p>Como titular de datos personales tienes derecho a:</p>
              <ul className="mt-3 flex flex-col gap-2">
                {[
                  'Conocer, actualizar y rectificar tus datos.',
                  'Solicitar prueba de la autorización otorgada para el tratamiento.',
                  'Ser informado sobre el uso que se ha dado a tus datos.',
                  'Revocar la autorización y/o solicitar la supresión de tus datos cuando no se respeten los principios legales.',
                  'Presentar quejas ante la Superintendencia de Industria y Comercio (SIC) por infracciones a la ley.',
                ].map(right => (
                  <li key={right} className="flex items-baseline gap-2.5 text-sm text-brand-slate">
                    <span className="mt-1 size-1 shrink-0 rounded-full bg-brand-amber/50" aria-hidden="true" />
                    {right}
                  </li>
                ))}
              </ul>
            </Subsection>

            <Subsection title="Contacto">
              <p>
                Para ejercer tus derechos o resolver dudas sobre el tratamiento de tus datos,
                escríbenos a{' '}
                <a
                  href="mailto:contacto@travelcoach2026.com"
                  className="text-brand-amber underline underline-offset-2 hover:text-brand-amber/80"
                >
                  contacto@travelcoach2026.com
                </a>
                . Responderemos en un plazo máximo de diez (10) días hábiles.
              </p>
            </Subsection>
          </section>

          {/* ── Aviso de responsabilidad ────────────────────────────────── */}
          <section id="responsabilidad" className="scroll-mt-24">
            <SectionHeading>Aviso de responsabilidad</SectionHeading>

            <div className="mb-8 rounded-xl border border-yellow-500/20 bg-yellow-500/5 px-5 py-4">
              <p className="text-sm leading-relaxed text-yellow-200/80">
                TravelCoach es una herramienta informativa de orientación. La información
                disponible en esta plataforma tiene carácter meramente informativo y{' '}
                <strong>no constituye asesoría legal, migratoria ni jurídica de ningún tipo.</strong>
              </p>
            </div>

            <Subsection title="Sin garantía de exactitud o vigencia">
              <p>
                Los requisitos de entrada a los países anfitriones (visas, permisos electrónicos,
                documentación requerida) pueden cambiar sin previo aviso por decisiones
                gubernamentales, cambios normativos o situaciones de emergencia. TravelCoach no
                garantiza que la información presentada esté actualizada al momento de tu consulta.
              </p>
              <p className="mt-3">
                <strong className="text-brand-slate-light">Siempre verifica en los portales
                oficiales</strong> de los gobiernos correspondientes (USCIS, IRCC, INM) antes
                de planificar o iniciar tu viaje.
              </p>
            </Subsection>

            <Subsection title="La admisión no está garantizada">
              <p>
                Cumplir con los requisitos de entrada informados no garantiza la admisión al
                país de destino. Los agentes de control migratorio tienen facultad discrecional
                para determinar la admisión de cualquier viajero, independientemente de los
                documentos que porte.
              </p>
            </Subsection>

            <Subsection title="Sin responsabilidad por decisiones de viaje">
              <p>
                TravelCoach no asume ninguna responsabilidad por pérdidas, daños, gastos o
                perjuicios de cualquier naturaleza que deriven del uso de esta herramienta,
                incluyendo pero no limitado a: denegación de entrada a un país, cancelación o
                pérdida de vuelos, gastos de visa o trámites migratorios, o cualquier otra
                consecuencia de basar decisiones de viaje en la información aquí presentada.
              </p>
            </Subsection>

            <Subsection title="Casos migratorios complejos">
              <p>
                Para situaciones con mayor complejidad migratoria — antecedentes de visa negada,
                residencia en un país diferente al de tu nacionalidad, viaje con menores de edad,
                doble nacionalidad u otras circunstancias particulares — te recomendamos consultar
                directamente con la embajada o consulado del país de destino, o con un asesor
                migratorio certificado.
              </p>
            </Subsection>

            <Subsection title="Sin afiliación gubernamental ni con FIFA">
              <p>
                TravelCoach no es una entidad gubernamental ni tiene afiliación con ningún
                gobierno, embajada, consulado, FIFA ni comité organizador del Mundial 2026.
                No estamos autorizados para emitir, aprobar ni garantizar visas, permisos ni
                documentos de viaje de ningún tipo.
              </p>
            </Subsection>
          </section>

        </div>
      </main>
    </>
  )
}

// ── Shared layout components ───────────────────────────────────────────────────

function SectionHeading({ children }: { children: React.ReactNode }) {
  return (
    <h2 className="mb-6 text-xl font-bold text-brand-off-white border-b border-white/8 pb-4">
      {children}
    </h2>
  )
}

function Subsection({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div className="mt-7">
      <h3 className="mb-3 text-[15px] font-semibold text-brand-off-white">{title}</h3>
      <div className="text-sm leading-relaxed text-brand-slate">{children}</div>
    </div>
  )
}

function Divider() {
  return <hr className="my-8 border-white/8" />
}
