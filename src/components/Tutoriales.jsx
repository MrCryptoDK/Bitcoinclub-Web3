import React from 'react'

const Tutoriales = () => {
  return (
        <div className="overflow-auto p-8 gradient-bg-transactions ">

        <h1 className="py-1 text-3xl text-center text-white sm:text-5xl text-gradient">
            Tenemos tutoriales gratuitos<br />para toda la comunidad
          </h1>
          <p className="mt-5 font-light text-center text-white">
            Proximamente se estaran desarrollando tutoriales propios. <br />
            Aquí hay varios videos de los cuales puedes aprender sobre Criptomonedas.
          </p>



          <section className= "flex w-full p-5 gap-5 snap-x overflow-x-auto">
            <div className="snap-center shrink-0 w-1/3 shadow-lg shadow-orange-400/50 overflow-hidden rounded">
              <img className="aspect-video object-cover" src="https://images.unsplash.com/photo-1634704784915-aacf363b021f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80" />
            </div>
            <div className="snap-center shrink-0 w-1/3 shadow-lg shadow-orange-400/50 overflow-hidden rounded">
              <iframe className="w-full aspect-video rounded-lg shadow-lg" src="https://www.youtube.com/embed/C-3aYnhF6Io"></iframe>
            </div>
            <div className="snap-center shrink-0 w-1/3 shadow-lg shadow-orange-400/50 overflow-hidden rounded">
              <iframe className="w-full aspect-video rounded-lg shadow-lg" src="https://www.youtube.com/embed/FmtyY2hmg04"></iframe>
            </div>
            <div className="snap-center shrink-0 w-1/3 shadow-lg shadow-orange-400/50 overflow-hidden rounded">
              <iframe className="w-full aspect-video rounded-lg shadow-lg" src="https://www.youtube.com/embed/Yn8WGaO__ak"></iframe>
            </div>
            <div className="snap-center shrink-0 w-1/3 shadow-lg shadow-orange-400/50 overflow-hidden rounded">
              <img className="aspect-video object-cover" src="https://images.unsplash.com/photo-1634704784915-aacf363b021f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80" />
            </div>
          </section>

          <section className= "flex w-full p-5 gap-5 snap-x overflow-x-auto">
            <div className="snap-center shrink-0 w-1/3 shadow-lg shadow-orange-400/50 overflow-hidden rounded">
              <img className="aspect-video object-cover" src="https://images.unsplash.com/photo-1516245834210-c4c142787335?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1469&q=80" />
            </div>
            <div className="snap-center shrink-0 w-1/3 shadow-lg shadow-orange-400/50 overflow-hidden rounded">
              <iframe className="w-full aspect-video rounded-lg shadow-lg" src="https://www.youtube.com/embed/N9vPxoWgfQc"></iframe>
            </div>
            <div className="snap-center shrink-0 w-1/3 shadow-lg shadow-orange-400/50 overflow-hidden rounded">
              <iframe className="w-full aspect-video rounded-lg shadow-lg" src="https://www.youtube.com/embed/kPUfx-i5k_E"></iframe>
            </div>
            <div className="snap-center shrink-0 w-1/3 shadow-lg shadow-orange-400/50 overflow-hidden rounded">
              <iframe className="w-full aspect-video rounded-lg shadow-lg" src="https://www.youtube.com/embed/D90jmWX76PY"></iframe>
            </div>
            <div className="snap-center shrink-0 w-1/3 shadow-lg shadow-orange-400/50 overflow-hidden rounded-xl">
              <img className="aspect-video object-cover" src="https://images.unsplash.com/photo-1516245834210-c4c142787335?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1469&q=80" />
            </div>
          </section>


        </div>
  )
}

export default Tutoriales