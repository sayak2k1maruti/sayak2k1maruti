import Head from 'next/head'
import App from '../components/Home/App'
import { library } from '@fortawesome/fontawesome-svg-core';


export default function Home() {

  return (
    <>
      <Head>
        <title>@Sayak</title>
        <script src="https://cdn.jsdelivr.net/npm/pace-js@latest/pace.min.js"></script>
        <script data-pace-options='{ "ajax": false }' src="pace.min.js"></script>

        <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/pace-js@latest/pace-theme-default.min.css" />
        <link rel="stylesheet" href="/pace.css" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="bg-dark-100">
        <span className="bg-dark-100" ></span>
        <span className="bg-dark-200"></span>
        <span className="bg-dark-300"></span>
        <span className="bg-light-200"></span>
        <App />
      </main>
    </>
  )
}
