import Head from 'next/head'

const SiteLayout = ({ children }) => (
  <main>
    <Head>
      <title>Urth Systems - Urbit planets for sale</title>
      <link rel="icon" href="/favicon.ico" />
      <script src="https://js.stripe.com/v3"></script>
    </Head>
    { children }
    <footer className="m-10 text-center">
      <a href="mailto:litpub@cryptocculture.com" className="rounded border border-white text-white p-2">Support</a>
    </footer>
  </main>
)

export default SiteLayout