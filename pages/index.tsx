import { Tab } from "@headlessui/react";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import Masonry from "react-masonry-css";
import classNames from 'classnames'

import imageOne from '../public/bg-1.jpg'
import imageTwo from '../public/bg-2.jpg'
import imageThree from '../public/bg-3.jpg'
import imageFour from '../public/photography-bg.jpg'

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
    <div className="h-full bg-[url(/photography-bg.jpg)] bg-top bg-cover overflow-auto">
      <Head>
        <title>Big-A Photography</title>
        <meta name="description" content="best photography media " />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <header className="fixed w-full z-10 top-0 flex justify-between items-center h-[90px] px-6 md:px-8">
        <Link href="/" className="text-[18px] uppercase font-bold md:text-xl">
          Big-A Photography
        </Link>
        <Link
          href="#"
          className=" rounded-full bg-white text-stone-900 px-3 py-2 hover:bg-opacity-90"
        >
          Get In Touch
        </Link>
      </header>
      <main className="pt-[110px]">
        <div className="flex flex-col items-center h-full">
          <Tab.Group>
            <Tab.List className="flex items-center gap-12">
              {tabs.map((tab) => (
                <Tab key={tab.key} className="p-2 outline-none">
                  {({ selected }) => (
                    <span
                      className={classNames("uppercase text-lg",selected ? "text-white" : "text-stone-500")}
                    >
                      {tab.display}
                    </span>
                  )}
                </Tab>
              ))}
            </Tab.List>
            <Tab.Panels className="h-full bg-opacity-80  max-w-[900px] w-full py-2 sm:p-4 my-6">
              <Tab.Panel>
                <Masonry
                  breakpointCols={2}
                  className="flex gap-4"
                  columnClassName=""
                >
                  <Image src={imageOne}  alt="images" className="my-4"/>
                  <Image src={imageTwo}  alt="images" className="my-4"/>
                  <Image src={imageThree}  alt="images" className="my-4"/>
                  <Image src={imageFour}  alt="images" className="my-4"/>
                </Masonry>
              </Tab.Panel>
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
