import type { NextPage } from 'next';
import Link from 'next/link';

const Home: NextPage = () => {
  return (
      <main className="flex w-full flex-1 flex-col items-center justify-center px-20 text-center">
        <p className="mt-4 text-2xl font-light text-gray-600">Welcome to the{' '}</p>
        <h1 className="mt-4 text-6xl font-bold">
          <a className="text-blue-600" href="#">
            World of DSA!
          </a>
        </h1>

        <h2 className="mt-6 text-xl font-extralight text-gray-600">This website contains various problems involving Data Structures and Algorithms</h2>

        <div className="mt-8">
          <p className="text-lg font-extralight text-gray-600">Every problem on this website contains detailed solution, from brute-force to optimal approach and analysis of the time and space complexities.</p>
        </div>

        <Link href="/dsa">
          <a className="mt-8 text-blue-600 border px-8 py-4 rounded border-blue-500 hover:text-white hover:bg-blue-600 transform transition-all ease-in-out">Let&apos;s go &rarr;</a>
        </Link>
      </main>
  )
}

export default Home
