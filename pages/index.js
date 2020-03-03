import Checkout from '../components/checkout';

const Home = () => (
  <div className="container mx-auto px-4">
    <section className="mt-10 flex-col text-center">
      <section className="flex-1">
        <h1 className="md:text-huge text-9xl font-bold leading-none">
          urth
        </h1>

        <h2 className="md:text-4xl text-xl font-bold mb-2">
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
    </section> 
  </div>
  )


export default Home
