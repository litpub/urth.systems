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
          Joining Urth lets you participate in private Urth-hosted chats, view our content archives, and support the Urbit ecosystem.
        </p>
      </Section>
      <Section>
        <Header>
          Invite only
        </Header>

        <p className="text-3xl mb-4">
          <strong>Have a friend recommend you</strong>
        </p>

        <p className="text-xl mb-8">
          People on Urth can request invites for their friends. Ask them to recommend you.
        </p>

        <Join />
      </Section>
      <Section>
        <Header>
          Looking for an Urbit ID?
        </Header>

        <p className="text-xl md:text-3xl leading-relaxed mb-4">
          Due to current transaction costs, we've halted the sale of planets. We'll announce a new way to buy them soon.
        </p>
      </Section>
    </section>
  </div>
  )


export default Home
