import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'

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

        <div className="mt-6 flex max-w-4xl flex-wrap items-center justify-around sm:w-full">
          <a
            href="#"
            className="mt-6 w-96 rounded-xl border p-6 text-left hover:text-blue-600 focus:text-blue-600"
          >
            <h3 className="text-2xl font-bold">Arrays &rarr;</h3>
            <p className="mt-4 text-xl">
              Learn about various problems of 1-D Arrays. For 2-D arrays, please refer Matrices.
            </p>
          </a>

          <a
            href="#"
            className="mt-6 w-96 rounded-xl border p-6 text-left hover:text-blue-600 focus:text-blue-600"
          >
            <h3 className="text-2xl font-bold">Linked Lists &rarr;</h3>
            <p className="mt-4 text-xl">
              Learn about various problems involving Linked List.
            </p>
          </a>

          <a
            href="#"
            className="mt-6 w-96 rounded-xl border p-6 text-left hover:text-blue-600 focus:text-blue-600"
          >
            <h3 className="text-2xl font-bold">Stacks &rarr;</h3>
            <p className="mt-4 text-xl">
            Learn about various problems involving Stacks.
            </p>
          </a>

          <a
            href="#"
            className="mt-6 w-96 rounded-xl border p-6 text-left hover:text-blue-600 focus:text-blue-600"
          >
            <h3 className="text-2xl font-bold">Queues &rarr;</h3>
            <p className="mt-4 text-xl">
            Learn about various problems involving Queues.
            </p>
          </a>

          <a
            href="#"
            className="mt-6 w-96 rounded-xl border p-6 text-left hover:text-blue-600 focus:text-blue-600"
          >
            <h3 className="text-2xl font-bold">Trees &rarr;</h3>
            <p className="mt-4 text-xl">
            Learn more about Trees and various problems involving Trees.
            </p>
          </a>

          <a
            href="#"
            className="mt-6 w-96 rounded-xl border p-6 text-left hover:text-blue-600 focus:text-blue-600"
          >
            <h3 className="text-2xl font-bold">Graphs &rarr;</h3>
            <p className="mt-4 text-xl">
            Learn more about Graphs and various problems involving Graphs.
            </p>
          </a>

          <a
            href="#"
            className="mt-6 w-96 rounded-xl border p-6 text-left hover:text-blue-600 focus:text-blue-600"
          >
            <h3 className="text-2xl font-bold">Matrices &rarr;</h3>
            <p className="mt-4 text-xl">
            Learn more about Matrices and various problems involving Matrices.
            </p>
          </a>
          
          <a
            href="#"
            className="mt-6 w-96 rounded-xl border p-6 text-left hover:text-blue-600 focus:text-blue-600"
          >
            <h3 className="text-2xl font-bold">Many more &rarr;</h3>
            <p className="mt-4 text-xl">
            Learn more about other Data Structures.
            </p>
          </a>
        </div>
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
