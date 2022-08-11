import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";

const Dsa: NextPage = () => {
  return (
    <>
      <div className="mt-6 flex max-w-4xl flex-wrap items-center justify-around sm:w-full">
        <a
          href="#"
          className="mt-6 w-96 rounded-xl border p-6 text-left hover:text-blue-600 focus:text-blue-600"
        >
          <h3 className="text-2xl font-bold">Arrays &rarr;</h3>
          <p className="mt-4 text-xl">
            Learn about various problems of 1-D Arrays. For 2-D arrays, please
            refer Matrices.
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
    </>
  );
};

export default Dsa;
