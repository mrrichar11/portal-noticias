import Header from "../components/Header";
import Footer from "../components/Footer";

export default function QuiniGanadores() {
  return (
    <div className="min-h-screen bg-zinc-100 text-zinc-900">

      <Header />

      <main className="max-w-6xl mx-auto px-4 md:px-6 py-8">

        <article className="bg-white rounded-3xl shadow-xl overflow-hidden">

          <div className="relative">

            <img
              src="/quinifoto.PNG"
              alt="Ganadores entrerrianos del Quini 6"
              className="w-full h-[420px] object-cover"
            />

            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />

            <div className="absolute bottom-0 left-0 p-6 md:p-8">
              <span className="bg-red-700 text-white text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wide">
                Sociedad
              </span>

              <h1 className="text-3xl md:text-5xl font-black text-white mt-4 leading-tight">
                Un apostador de Paraná ganó más de $9 millones en el Quini 6
              </h1>
            </div>
          </div>

          <div className="p-6 md:p-8 space-y-6 text-lg leading-8 text-zinc-700">

            <p className="font-semibold text-zinc-900 text-xl leading-9">
              Cuatro entrerrianos ganaron importantes premios en el último
              sorteo del Quini 6 y otro apostador acertó cinco números en el
              Loto.
            </p>

            <p>
              El sorteo Nº 3371 del Quini 6 dejó cuatro ganadores en Entre Ríos
              en la modalidad Siempre Sale. Las apuestas fueron realizadas en
              Paraná, Aldea Brasilera, Villaguay y Basavilbaso.
            </p>

            <p>
              Desde IAFAS confirmaron que cada uno de los apostadores se llevará
              un premio de $9.298.203,55.
            </p>

            <p>
              En el Tradicional y La Segunda no hubo ganadores, por lo que los
              pozos continúan acumulándose para el próximo sorteo.
            </p>

            <p>
              En La Revancha tampoco se registraron apostadores con todos los
              aciertos y el pozo seguirá creciendo para el domingo.
            </p>

            <p>
              Además, en el Pozo Extra hubo 950 ganadores que percibirán más de
              $163 mil cada uno.
            </p>

            <p>
              Por otra parte, desde IAFAS informaron que un apostador de
              Concepción del Uruguay ganó más de $6 millones en el Loto tras
              acertar cinco números en la modalidad Tradicional.
            </p>

            <p>
              El próximo sorteo tendrá un pozo acumulado superior a los 8.170
              millones de pesos.
            </p>
          </div>
        </article>
      </main>

      <Footer />
    </div>
  );
}