import Head from 'next/head'
import Checkout from '../components/checkout';

const Home = () => {
  return (
    <div className="container mx-auto px-4">
      <Head>
        <title>Urth Systems - Urbit planets for sale</title>
        <link rel="icon" href="/favicon.ico" />
        <script src="https://js.stripe.com/v3"></script>
      </Head>
      <main className="mt-10 flex-col text-center">
        <section className="flex-1">
          <h1 className="md:text-huge text-9xl font-bold leading-none">
            urth
          </h1>

          <h2 className="md:text-4xl text-2xl font-bold leading-loose">
            Infrastructure for the next internet
          </h2>
          
          <p className="md:text-xl font-thin leading-relaxed max-w-md mx-auto mb-10">
            From Old Norse <em>Ur&eth;r</em>, from Proto-Germanic <em>*wurdiz</em> ("fate, destiny"), Proto-Indo-European <em>*wert-</em> ("to turn, wind"). Cognate with English <em>weird.</em>
          </p>
        </section>
        <section className="flex-1">
          <img className="hero-logo w-1/2 lg:w-1/3 mx-auto mt-16" src="/urth.png" alt="urth.systems" />
        </section>
        <section className="flex-1 mt-8 mb-20">
          <Checkout />
        </section>
      </main> 
    </div>
  )
}

export default Home
