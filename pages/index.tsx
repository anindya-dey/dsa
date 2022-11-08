import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
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

        <div className="mt-8">
          <p className="text-lg font-extralight text-gray-600">
            This website contains various problems involving Data Structures and Algorithms
            Every problem on this website contains detailed solution, from brute-force to optimal approach and analysis of the time and space complexities.</p>
        </div>

        <Link href={'/dsa'}>
          <div className='mt-8 px-6 py-4 border border-blue-600 rounded-lg bg-blue-600 text-white cursor-pointer hover:bg-white hover:text-blue-600 transition-all'>Let&apos;s go &rarr;</div>
        </Link>
      </main>
  )
}

export default Home
