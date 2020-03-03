const Success = () => (
  <div className="container mx-auto px-4">
    <section className="mt-10 flex-col text-center">
      <section className="flex-1">
        <h1 className="md:text-huge text-9xl font-bold leading-none">
          urth
        </h1>

        <h2 className="md:text-4xl text-2xl font-bold mb-2">
          Your payment was successful
        </h2>
        
        <p className="md:text-xl font-thin leading-relaxed max-w-md mx-auto mb-10">
          You will receive an email with onboarding instructions.<br/> Please allow up to 24 hours for delivery.
        </p>
      </section>
      <section className="flex-1">
        <img className="hero-logo w-1/2 lg:w-1/3 mx-auto mt-16" src="/urth.png" alt="urth.systems" />
      </section>
    </section>
  </div>
)

export default Success