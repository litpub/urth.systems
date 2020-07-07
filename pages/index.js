import Join from '../components/join';

const Section = ({ children, width, id }) => (
  <section id={id} className={`flex-1 min-h-screen mt-20 mb-20 ${width || "max-w-4xl"}`}>
    { children }
  </section>
)

const Header = ({ children }) => (
  <h3 className="md:text-5xl text-5xl font-bold mb-8 leading-tight">
    { children }
  </h3>
)

const Home = () => (
  <div className="container mx-auto px-4">
    <section className="flex-col">
      <section className="flex-1 min-h-screen mt-10 mb-20 max-w-2xl">
        <h1 className="md:text-huge text-9xl font-bold leading-none">
          urth
        </h1>
        <h2 className="md:text-6xl text-5xl font-bold mx-auto leading-tight mt-10">
          Urth is a private community that exists only on Urbit.
        </h2>
        <h2 className="md:text-6xl text-5xl font-bold mx-auto leading-tight mt-8 mb-10 pb-10">
          Urbit is a new internet.
        </h2>
        <section>
          <Join />
          <a href="#migrate" className="text-gray-300 hover:text-white hover:text-underline font-bold py-4 px-4 md:py-4 md:px-8 md:text-xl ml-4">
            Migrate a Planet
          </a>
        </section>
      </section>
      <Section>
        <Header>Why Urth?</Header>
        <p className="text-xl md:text-3xl mb-4">
          We need to escape the current internet. Urbit is a competitive answer to where we can go.
        </p>

        <p className="text-xl md:text-3xl mb-4">
          Urth, like Urbit, is part of an ecosystem of interesting people. We collect and curate interviews and written submissions. We commission longer form essays from anonymous internet personalities you might have heard of.
        </p>

        <p className="text-xl md:text-3xl mb-4">
          Joining Urth lets you participate in private Urth-hosted chats, view our content archives, and support the Urbit ecosystem. And you get an Urbit ID for free when you subscribe for 3 months.
        </p>

        <p className="text-xl md:text-3xl mb-4">
          For anyone already using Urbit, we support migrating to our Star with high uptime and reliable OTAs.
        </p>
      </Section>
      <Section>
        <Header>
          To join Urth, you need to be on Urbit. We've got you covered.
        </Header>

        <p className="text-3xl mb-4">
          <strong>1. First, you need an Urbit ID.</strong>
        </p>

        <p className="text-xl mb-8">
          On Urbit you have just one account for using apps, talking to people, and joining communities (like Urth). <strong>When you subscribe to Urth you get an Urbit ID for free.</strong>
        </p>

        <p className="text-3xl mb-4">
          <strong>2. Next, you need to run Urbit.</strong>
        </p>

        <p className="text-xl mb-8">
          <a href="https://urbit.org/using/install/" className="underline">Installing Urbit</a> on MacOS or Linux is easy for technical users. <strong>Urth users will have exclusive access to Urth.app - a MacOS desktop experience coming in August 2020.</strong>
        </p>

        <p className="text-3xl mb-4">
          <strong>3. Access Urth.</strong>
        </p>

        <p className="text-xl mb-8">
          Urth subscribers are automatically added to our private group on Urbit, with community chats, the cryptocculture archive, and exclusive content from interesting independent thought.
        </p>

        <Join text={'Subscribe to Urth'} />
      </Section>
      <Section>
        <Header>
          Simple Pricing
        </Header>

        <p className="text-xl md:text-3xl leading-relaxed mb-4">
          Urth is $5 a month.
        </p>

        <p className="text-xl md:text-3xl leading-relaxed mb-4">
          If you're new to Urbit, we'll set you up with your own Urbit ID for free when you purchase a subscription. To support the cost of Urbit IDs, we will charge you once per 3 months.
        </p>

        <p className="text-xl md:text-3xl leading-relaxed mb-4">
          If you cancel, you'll lose access to the Urth community but your Urbit ID is yours forever.
        </p>
      </Section>
      <Section id="migrate">
        <Header>
          Are you an Urbit user already? <br/> We are a reliable star ready for you to escape to.
        </Header>
        <p className="text-xl md:text-3xl leading-relaxed mb-4">
          <strong>Our stars have high uptime and we monitor OTA distribution</strong>. We have publicly accessible measurements for both.
        </p>
        <p className="text-xl md:text-3xl leading-relaxed mb-4">
          <strong>We're easy to talk to.</strong> We have a public ops channel on Urbit and on Github. Tracking down how to talk to your Star operator has never been easier.
        </p>
        <p className="text-xl md:text-3xl leading-relaxed mb-8">
          Urth has been the sponsor of large community chats like Coronachan and an active contributor to projects like Chat. Supporting Urth means supporting people trying to make Urbit better.
        </p>
        <p className="text-xl md:text-3xl leading-relaxed mb-8">
          We keep and collect only the minimum necessary information to do business.
        </p>
        <Join text={'Migrate to Urth'} plan={process.env.STRIPE_PLAN}/>
      </Section>
    </section>
  </div>
  )


export default Home
