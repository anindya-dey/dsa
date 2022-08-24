import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link';

const Home: NextPage = () => {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center py-2">
      <Head>
        <title>World of DSA | Anindya Dey</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="flex w-full flex-1 flex-col items-center justify-center px-20 text-center">
        <p className="mt-4 text-xl font-light">Welcome to the{' '}</p>
        <h1 className="mt-4 text-6xl font-bold">
          <a className="text-blue-600" href="#">
            World of DSA!
          </a>
          
        </h1>

        <Link href={'/dsa'}>
          <div className='mt-8 px-6 py-4 border border-blue-600 rounded-lg bg-blue-600 text-white cursor-pointer hover:bg-white hover:text-blue-600 transition-all'>Let&apos;s go &rarr;</div>
        </Link>
        
      </main>

      <footer className="mt-6 flex h-24 w-full items-center justify-center border-t">
        <a
          className="flex items-center justify-center gap-2"
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{' '}
          <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
        </a>
      </footer>
    </div>
  )
}

export default Home
