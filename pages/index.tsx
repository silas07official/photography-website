import { Tab } from "@headlessui/react";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";

const tabs = [
  {
    key: "all",
    display: "All",
  },
  {
    key: "oceans",
    display: "Oceans",
  },
  {
    key: "forests",
    display: "Forests",
  },
];

export default function Home() {
  return (
    <div className=" flex flex-col h-full bg-[url(/photography-bg.jpg)] bg-top bg-cover">
      <Head>
        <title>Big-A Photography</title>
        <meta name="description" content="best photography media " />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <header className="flex justify-between items-center h-[90px] px-6 md:px-8">
        <Link href="/" className="text-[18px] font-bold md:text-xl">
          Big-A Photography
        </Link>
        <Link
          href="#"
          className=" rounded-full bg-white text-stone-900 px-3 py-2 hover:bg-opacity-90"
        >
          Get In Touch
        </Link>
      </header>
      <main className="grow">
        <div className="flex flex-col items-center h-full">
          <Tab.Group>
            <Tab.List className="flex items-center gap-12">
              {tabs.map((tab) => (
                <Tab key={tab.key} className="p-2 outline-none">
                  {({ selected }) => (
                    <span
                      className={selected ? "text-white" : "text-stone-500"}
                    >
                      {tab.display}
                    </span>
                  )}
                </Tab>
              ))}
            </Tab.List>
            <Tab.Panels className=" bg-stone-900 h-full bg-opacity-80  max-w-[900px] w-full py-2 sm:p-4 my-6">
              <Tab.Panel>All Photos</Tab.Panel>
              <Tab.Panel>Oceans</Tab.Panel>
              <Tab.Panel>Forests</Tab.Panel>
            </Tab.Panels>
          </Tab.Group>
        </div>
      </main>

      <footer className="h-[60px] flex justify-center items-center font-semibold">
        <p>Big-A Photography &copy; 2022. All rights reserved</p>
      </footer>
    </div>
  );
}
