import Head from 'next/head'
import Link from 'next/link'


const SiteLayout = ({ children }) => (
  <main>
    <Head>
      <title>Urth Systems - Urbit planets for sale</title>
      <link rel="icon" href="/favicon.ico" />
      <script src="https://js.stripe.com/v3"></script>
    </Head>
    { children }
    <hr className="mt-10 border-white border-opacity-25"/>
    <footer className="m-10 text-center">
      <Link href="/account">
        <a className="rounded border border-white text-white p-2 m-2 hover:text-black hover:bg-white">Manage Account</a>
      </Link>
      <a href="https://litpub.arvo.network/status" className="rounded border border-white text-white p-2 m-2 hover:text-black hover:bg-white">System Status</a>
      <a href="mailto:admin@urth.systems" className="rounded border border-white text-white p-2 m-2 hover:text-black hover:bg-white">Support</a>
    </footer>
  </main>
)

export default SiteLayout