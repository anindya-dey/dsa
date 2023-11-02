import Link from "next/link";

// flex min-h-screen flex-col justify-center max-w-4xl m-auto bg-red-400
export default function Home() {
  return (
    <div className="bg-zinc-950 min-w-full h-screen overflow-hidden text-zinc-300 flex flex-col items-center">
      <div className="flex max-w-4xl mx-auto mt-32 flex-col items-center justify-center text-center border border-zinc-700 rounded-lg p-20">
        <div className="text-2xl font-light">Welcome to the </div>

        <Link href="#">
          <h1 className="text-6xl font-bold mt-4">World of DSA!</h1>
        </Link>

        <div className="mt-8 text-lg">
          This website contains various problems involving Data Structures and
          Algorithms Every problem on this website contains detailed solution,
          from brute-force to optimal approach and analysis of the time and
          space complexities.
        </div>

        <Link href={"/dsa"}>
          <div className="mt-16 px-6 py-4 border border-zinc-300 rounded-lg bg-zinc-200 text-zinc-700 cursor-pointer hover:bg-transparent hover:text-zinc-300 transition-all">
            Let&apos;s go &rarr;
          </div>
        </Link>
      </div>
      <div className="mt-24 text-zinc-700">Anindya Dey &copy; 2023</div>
    </div>
  );
}
