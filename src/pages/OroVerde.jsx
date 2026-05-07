import Header from "../components/Header";
import Footer from "../components/Footer";

export default function OroVerde() {
  return (
    <div className="min-h-screen bg-zinc-100 text-zinc-900">
      
      <Header />

      <main className="max-w-6xl mx-auto px-4 md:px-6 py-8">
        
        <article className="bg-white rounded-3xl shadow-xl overflow-hidden">
          
          <div className="relative">
            
            <img
              src="/reunionambiental.png"
              alt="Reunión ambiental en Oro Verde"
              className="w-full h-[420px] object-cover"
            />

            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />

            <div className="absolute bottom-0 left-0 p-6 md:p-8">
              <span className="bg-red-700 text-white text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wide">
                Política
              </span>

              <h1 className="text-3xl md:text-5xl font-black text-white mt-4 leading-tight">
                Vecinos de Oro Verde rechazan la instalación de un Parque Ambiental
              </h1>
            </div>
          </div>

          <div className="p-6 md:p-8 space-y-6 text-lg leading-8 text-zinc-700">
            
            <p className="font-semibold text-zinc-900 text-xl leading-9">
              Vecinos y organizaciones ambientales manifestaron su preocupación
              por la posible instalación de un Parque Ambiental en cercanías de
              la localidad.
            </p>

            <p>
              La discusión por el tratamiento regional de residuos volvió a
              generar tensión en Oro Verde luego de que trascendiera la
              posibilidad de instalar un Parque Ambiental del Gran Paraná en la
              zona.
            </p>

            <p>
              Vecinos autoconvocados y organizaciones ambientales expresaron su
              rechazo al proyecto y reclamaron mayor información sobre el
              posible impacto ambiental.
            </p>

            <p>
              Durante distintas reuniones realizadas en los últimos días,
              también se planteó la posibilidad de que el municipio abandone el
              consorcio regional vinculado al proyecto.
            </p>

            <p>
              Los habitantes de la localidad insistieron en preservar el perfil
              ambiental de Oro Verde y evitar el traslado de residuos desde
              otras ciudades del área metropolitana.
            </p>
          </div>
        </article>
      </main>

      <Footer />
    </div>
  );
}