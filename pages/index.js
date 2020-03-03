import Head from 'next/head'

const Home = () => (
  <div className="container mx-auto px-4">
    <Head>
      <title>Urth Systems - Urbit planets for sale</title>
      <link rel="icon" href="/favicon.ico" />
    </Head>
    <main className="mt-20 flex-col text-center">
      <section className="flex-1">
        <h1 className="md:text-huge text-9xl font-bold leading-none">
          urth
        </h1>

        <h2 className="md:text-4xl text-2xl font-bold leading-loose">
          Infrastructure for Urbit &amp; IPFS 
        </h2>
        
        <p className="md:text-xl font-thin leading-relaxed max-w-md mx-auto">
          From Old Norse <em>Ur&eth;r</em>, from Proto-Germanic <em>*wurdiz</em> ("fate, destiny"), Proto-Indo-European <em>*wert-</em> ("to turn, wind"). Cognate with English <em>weird.</em>
        </p>
      </section>
      <section className="flex-1">
        <img className="hero-logo w-1/2 lg:w-2/5 mx-auto mt-20" src="/urth.png" alt="urth.systems" />
      </section>
    </main>

    <style jsx global>{`
      .hero-logo {
        -webkit-animation: mover 2s infinite  alternate;
        animation: mover 2s infinite  alternate;
      }
      @-webkit-keyframes mover {
        0% { transform: translateY(0); }
        100% { transform: translateY(-20px); }
      }
      @keyframes mover {
        0% { transform: translateY(0); }
        100% { transform: translateY(-20px); }
      }
    `}</style>    
  </div>
)

export default Home
