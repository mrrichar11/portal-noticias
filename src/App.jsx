import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'

export default function PortalNoticias() {
  return (
    <div className="min-h-screen bg-zinc-100 text-zinc-900">
      <header className="bg-red-700 text-white shadow-lg">
        <div className="max-w-6xl mx-auto px-6 py-6 flex items-center justify-between">
          <div>
            <h1 className="text-4xl font-black tracking-tight">LITORAL NOTICIAS</h1>
            <p className="text-sm opacity-90 mt-1">
              Información política, gremial y social de Entre Ríos
            </p>
          </div>
          <div className="hidden md:block text-right text-sm font-medium">
            <p>Edición digital</p>
            <p>Paraná · Entre Ríos</p>
          </div>
        </div>
      </header>

      <main className="max-w-6xl mx-auto px-4 md:px-6 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <article className="lg:col-span-2 bg-white rounded-3xl shadow-xl overflow-hidden">
            <div className="relative">
              <img
                src="/Reunion1.jpeg"
                alt="Asamblea de trabajadores del transporte urbano"
                className="w-full h-[420px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
              <div className="absolute bottom-0 left-0 p-6 md:p-8">
                <span className="bg-red-700 text-white text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wide">
                  Conflicto gremial
                </span>
                <h2 className="text-3xl md:text-5xl font-black text-white mt-4 leading-tight">
                  CONTINÚA EL CONFLICTO EN EL TRANSPORTE URBANO DE PARANÁ
                </h2>
              </div>
            </div>

            <div className="p-6 md:p-8 space-y-6 text-lg leading-8 text-zinc-700">
              <p className="font-semibold text-zinc-900 text-xl leading-9">
                EL DEFICITARIO TRANSPORTE URBANO DE PARANÁ QUE PADECEN LOS
                USUARIOS, GESTIONADO ACTUALMENTE POR LA EMPRESA SAN JOSÉ SA,
                CONTINÚA SUMERGIDO EN UN CONFLICTO LABORAL QUE AMENAZA CON
                CONCLUIR SU GESTIÓN.
              </p>

              <p>
                Recordemos que la UTA Seccional Entre Ríos denuncia el
                incumplimiento de la Ley de Contrato de Trabajo por parte de la
                Empresa San José SA, en cuanto al iniciar la explotación como
                nueva permisionaria en diciembre del 2025, se negó a absorber a
                los trabajadores que se desempeñaban en ella para el anterior
                operador.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-5 my-8">
                <img
                  src="/Reunion.jpeg"
                  alt="Reunión sindical por el conflicto del transporte"
                  className="rounded-2xl shadow-lg object-cover h-full"
                />
                <img
                  src="/Colectivo.jpeg"
                  alt="Unidad de transporte urbano de Paraná"
                  className="rounded-2xl shadow-lg object-cover h-full"
                />
              </div>

              <p>
                Ante el arribo del nuevo empleador, plantea la UTA la
                continuidad de los contratos laborales con fundamento en el art.
                225 de la Ley de Contrato de Trabajo y la medida cautelar de la
                Justicia Nacional que así lo ordena.
              </p>

              <p>
                La Empresa San José SA, por su parte, argumenta que, si el
                pliego licitatorio no lo contempla, no tiene la obligación de
                absorber dicho personal; a lo que la UTA sostiene que la
                Municipalidad no regula las relaciones laborales entre
                particulares, postura que coincide con la del Municipio, que a
                lo largo de las innumerables audiencias realizadas afirma y
                aclara que no es parte del conflicto porque no es empleadora de
                los trabajadores de la empresa.
              </p>

              <blockquote className="border-l-4 border-red-700 pl-5 italic text-zinc-800 bg-zinc-50 py-4 rounded-r-2xl">
                “El pliego licitatorio tampoco dice nada de las vacaciones del
                personal, el descanso entre jornada y jornada, las licencias por
                enfermedad, la escala salarial o las categorías laborales”.
              </blockquote>

              <p>
                Esta coincidencia entre la postura municipal y la UTA fue
                destacada por la asistencia letrada de la entidad gremial al
                ejemplificar que el pliego licitatorio tampoco dice nada de las
                vacaciones del personal, el descanso entre jornada y jornada,
                las licencias por enfermedad, la escala salarial, las categorías
                laborales, etc, porque ello es resorte exclusivo y excluyente de
                las leyes laborales que deben cumplirse al margen de cualquier
                pliego, dado que un municipio no se encuentra legalmente
                facultado para dictar las leyes laborales de fondo, y mucho
                menos para dejarlas sin efecto, actividad asignada
                constitucionalmente al Congreso.
              </p>

              <p>
                Con respecto a una medida cautelar posterior dictada por la Sala
                II de la Cámara de Apelaciones del Trabajo de Paraná que
                pretende dejar sin efecto la dictada con anterioridad por la
                Justicia Nacional, la UTA sostiene que no les resulta aplicable
                porque ni el gremio ni los trabajadores son parte en ese
                supuesto juicio y por ende cualquier pretensión de hacerla valer
                frente a ellos es nula de nulidad absoluta.
              </p>

              <p>
                Con la esperanza de que las partes logren ponerse de acuerdo, el
                notable deterioro del servicio que afecta a los vecinos de
                Paraná aguarda la resolución del conflicto.
              </p>
            </div>
          </article>

          <aside className="space-y-6">
            <div className="bg-white rounded-3xl shadow-xl p-6">
              <h3 className="text-xl font-black border-b pb-3 mb-4">
                Último momento
              </h3>

              <div className="space-y-5">
                <div>
                  <span className="text-red-700 font-bold text-sm uppercase">
                    Transporte
                  </span>
                  <p className="font-semibold mt-1 leading-6">
                    Crece la preocupación de usuarios por la continuidad del
                    servicio urbano.
                  </p>
                </div>

                <div>
                  <span className="text-red-700 font-bold text-sm uppercase">
                    Gremiales
                  </span>
                  <p className="font-semibold mt-1 leading-6">
                    La UTA insiste en el cumplimiento de la Ley de Contrato de
                    Trabajo.
                  </p>
                </div>

                <div>
                  <span className="text-red-700 font-bold text-sm uppercase">
                    Paraná
                  </span>
                  <p className="font-semibold mt-1 leading-6">
                    El Municipio se mantiene al margen del conflicto entre las
                    partes.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-zinc-900 text-white rounded-3xl shadow-xl overflow-hidden">
              <img
                src="/Colectivo.jpeg"
                alt="Colectivo urbano"
                className="w-full h-56 object-cover"
              />
              <div className="p-6">
                <h3 className="text-2xl font-black leading-tight">
                  Un servicio en crisis
                </h3>
                <p className="mt-4 text-zinc-300 leading-7">
                  El conflicto laboral se suma a las reiteradas críticas de los
                  usuarios por la frecuencia, el estado de las unidades y las
                  demoras del sistema de transporte urbano.
                </p>
              </div>
            </div>
          </aside>
        </div>
      </main>

      <footer className="bg-zinc-950 text-zinc-400 mt-10">
        <div className="max-w-6xl mx-auto px-6 py-8 flex flex-col md:flex-row items-center justify-between gap-3 text-sm">
          <p>© 2026 Litoral Noticias · Todos los derechos reservados.</p>
          <p>Portal informativo digital de actualidad regional.</p>
        </div>
      </footer>
    </div>
  );
}
