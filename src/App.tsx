import { useEffect, useState } from "react";
import "./App.css";
import useGetInnerHeight from "./hooks/useGetInnerHeight";

function App() {
  const innerHeight = useGetInnerHeight();
  const [headerTitle, setHeaderTitle] = useState<false | string>("");
  const [mouseCoords, setMouseCoords] = useState<{
    clientX: number;
    clientY: number;
  }>({ clientX: 0, clientY: 0 });

  const [name, setName] = useState("");

  function typeWriter(text: string, i: number) {
    if (i <= text.length) {
      setName(text.substring(0, i + 1));
    }

    setTimeout(() => typeWriter(text, i + 1), 100);
  }

  useEffect(() => {
    document.body.onscroll = () => {
      const position = window.scrollY;
      const aboutPosition = document.getElementById("hh-about")?.offsetTop;
      const workPosition = document.getElementById("work-exp")?.offsetTop;

      if (position === 0 || position < aboutPosition!) {
        setHeaderTitle(false);
      }
      if (position >= aboutPosition!) {
        setHeaderTitle("ABOUT");
      }
      if (position >= workPosition!) {
        setHeaderTitle("WORK EXPERIENCE");
      }
    };

    document.body.addEventListener("mousemove", function (evt) {
      setMouseCoords({ clientX: evt.clientX, clientY: evt.clientY });
    });

    typeWriter("Elias Nemr", 0);
  }, []);

  return (
    <div
      style={{
        background: `radial-gradient(600px at ${mouseCoords.clientX}px ${mouseCoords.clientY}px, rgba(29, 78, 216, 0.15), transparent 80%)`,
      }}
      className={`grid grid-cols-1 grid-rows-1  h-[${innerHeight}px]`}
    >
      <main className="grid grid-cols-[1fr_minmax(0,_760px)_1fr] grid-rows-1 pb-16">
        <div />

        {headerTitle && (
          <div
            id="sticky-title"
            className="md:hidden fixed top-0 left-0 right-0 p-4 text-sm text-white font-bold xl:hidden bg-slate-700 opacity-90"
          >
            {headerTitle}
          </div>
        )}

        <section className="px-4 md:px-0 pt-16">
          <section className="grid grid-cols-1 lg:grid-cols-2 grid-rows-1 gap-16 lg:gap-4">
            <div className="max-w-[400px]">
              <h1 className="text-5xl mb-2">
                {name}
                <span
                  className={`animate-pulse text-teal-200 ${
                    name === "Elias Nemr" ? "hidden" : "inline"
                  }`}
                >
                  _
                </span>
              </h1>
              <p className="text-slate-400 mb-2 animate-fadeIn">
                Software Engineer
              </p>
              <p className="text-slate-300 font-light animate-fadeIn">
                I build exceptional digital experiences. Experienced in Web
                Development, DeFi, Blockchain & Smart Contracts.
              </p>
              <ul className="mt-4 flex gap-4 items-center gap">
                <li>
                  <a
                    href="https://github.com/eliasnemr"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 16 16"
                      fill="currentColor"
                      className="fill-slate-300 hover:cursor-pointer h-6 w-6 hover:fill-white transition-colors ease-in-out delay-50 animate-fadeIn"
                      aria-hidden="true"
                    >
                      <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0016 8c0-4.42-3.58-8-8-8z"></path>
                    </svg>
                  </a>
                </li>
                <li>
                  <a
                    href="https://x.com/0xNemr"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 248 204"
                      fill="currentColor"
                      className="fill-slate-300 h-6 w-6 hover:cursor-pointer hover:fill-white transition-colors ease-in-out delay-50 animate-fadeIn"
                      aria-hidden="true"
                    >
                      <path
                        id="white_background"
                        d="M221.95,51.29c0.15,2.17,0.15,4.34,0.15,6.53c0,66.73-50.8,143.69-143.69,143.69v-0.04   C50.97,201.51,24.1,193.65,1,178.83c3.99,0.48,8,0.72,12.02,0.73c22.74,0.02,44.83-7.61,62.72-21.66   c-21.61-0.41-40.56-14.5-47.18-35.07c7.57,1.46,15.37,1.16,22.8-0.87C27.8,117.2,10.85,96.5,10.85,72.46c0-0.22,0-0.43,0-0.64   c7.02,3.91,14.88,6.08,22.92,6.32C11.58,63.31,4.74,33.79,18.14,10.71c25.64,31.55,63.47,50.73,104.08,52.76   c-4.07-17.54,1.49-35.92,14.61-48.25c20.34-19.12,52.33-18.14,71.45,2.19c11.31-2.23,22.15-6.38,32.07-12.26   c-3.77,11.69-11.66,21.62-22.2,27.93c10.01-1.18,19.79-3.86,29-7.95C240.37,35.29,231.83,44.14,221.95,51.29z"
                      ></path>
                    </svg>
                  </a>
                </li>
                <li>
                  <a
                    href="https://linkedin.com/in/eliasnemr"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      className="fill-slate-300 h-6 w-6 hover:cursor-pointer hover:fill-white transition-colors ease-in-out delay-50 animate-fadeIn"
                      aria-hidden="true"
                    >
                      <path d="M20.5 2h-17A1.5 1.5 0 002 3.5v17A1.5 1.5 0 003.5 22h17a1.5 1.5 0 001.5-1.5v-17A1.5 1.5 0 0020.5 2zM8 19H5v-9h3zM6.5 8.25A1.75 1.75 0 118.3 6.5a1.78 1.78 0 01-1.8 1.75zM19 19h-3v-4.74c0-1.42-.6-1.93-1.38-1.93A1.74 1.74 0 0013 14.19a.66.66 0 000 .14V19h-3v-9h2.9v1.3a3.11 3.11 0 012.7-1.4c1.55 0 3.36.86 3.36 3.66z"></path>
                    </svg>
                  </a>
                </li>
                <li>
                  <a
                    href="https://hey.xyz/u/swishs"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <svg
                      className="w-6 h-6 fill-slate-300 hover:fill-white transition-colors ease-in-out delay-50 animate-fadeIn"
                      viewBox="0 0 204 130"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                        d="M140.236 34.2127C148.585 27.1958 157.901 24.5261 166.835 25.201C176.365 25.9209 185.184 30.4204 191.77 36.956C198.357 43.492 202.881 52.2342 203.606 61.6691C204.336 71.19 201.172 81.1618 192.828 89.9136C192.064 90.7192 191.284 91.5148 190.488 92.3003C152.642 129.852 102.368 129.951 101.854 129.951H101.851C101.595 129.951 51.1619 129.949 13.2174 92.2951L13.2091 92.2868C12.4258 91.5047 11.6543 90.7177 10.8946 89.9256L10.8884 89.9192C2.54038 81.175 -0.627422 71.2055 0.101149 61.6848C0.823023 52.2515 5.3448 43.5082 11.9292 36.9699C18.5132 30.432 27.3314 25.929 36.8631 25.206C45.7966 24.5283 55.1141 27.1948 63.4682 34.2084C64.3665 23.3909 69.0465 14.9717 75.8401 9.1837C83.0857 3.0105 92.5278 0 101.852 0C111.176 0 120.618 3.0105 127.864 9.1837C134.658 14.9725 139.338 23.3931 140.236 34.2127Z"
                        className="fill-slate-300 hover:fill-[#DDCEF8]"
                      />
                    </svg>
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h1
                id="hh-about"
                className="text-sm mb-8 text-white font-bold lg:hidden animate-fadeIn3"
              >
                ABOUT
              </h1>
              <p className="text-slate-400 mb-2 animate-fadeIn3">
                “It’s really complex to make something simple.” -{" "}
                <span className="text-sm">J. Dorsey</span>
                <br /> <br />
                My formative years were taken by the{" "}
                <span className="font-bold text-white">
                  technological revolution
                </span>
                . It commenced with endless hours of gaming with the
                cassette-transparent Game Boy, cartridge Sega, cd-rom
                Playstation & digital computer.{" "}
                <span className="font-extralight">
                  'How on earth are all these built?'
                </span>{" "}
                &mdash; At the age of 12 I Google'd "How to{" "}
                <span className="font-bold text-white">write code</span>" and
                the rest was history and the present.
              </p>
            </div>
          </section>

          <section className="mt-16 pb-16">
            <h1
              id="work-exp"
              className="text-sm mb-8 text-white font-bold animate-fadeIn"
            >
              WORK EXPERIENCE
            </h1>

            <div
              id="workexperience"
              className="grid grid-rows-1 sm:grid-cols-1 md:grid-cols-[100px_1fr] md:gap-16 sm:gap-1 items-center md:[&:hover~div]:opacity-50"
            >
              <h3 className="text-sm text-slate-400 animate-fadeIn mb-4 md:mb-0">
                2019-present
              </h3>
              <a
                href="https://minima.global/"
                target="_blank"
                rel="noreferrer"
                className="md:hover:bg-slate-500 md:p-4 rounded-lg delay-50 hover:cursor-pointer ease-in-out transition-colors animate-fadeIn3"
              >
                <h4 className="text-white sm:hover:text-teal-300 flex gap-1 items-center [&>svg>path]:sm:hover:fill-teal-300 [&>svg]:sm:hover:animate-bounce">
                  Minima Global{" "}
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    height="16"
                    viewBox="0 -960 960 960"
                    width="16"
                  >
                    <path
                      fill="#FAFAFF"
                      d="m256-240-56-56 384-384H240v-80h480v480h-80v-344L256-240Z"
                    />
                  </svg>
                </h4>
                <p className="text-sm text-slate-400 mb-2">Core Developer</p>
                <p className="text-slate-100 font-light text-sm">
                  Key developer to the protocol's early development. Developed
                  and maintained a diverse array of decentralized applications
                  that leverage Smart Contracts; Social apps, financial apps, A
                  Wallet, Block explorer & full stack payment progressive web
                  apps. Wrote documentation for the protocol's application layer
                  stack. Orchestrated projects that were being built by the
                  community developers. Collaborated on Ethereum-based
                  contracts.
                </p>
                <ul className="mt-2 flex gap-2 flex-wrap text-[12px]">
                  <li>
                    <div className="rounded-lg bg-slate-800 text-slate-400 max-w-fit px-2 py-1 technology">
                      React JS
                    </div>
                  </li>
                  <li>
                    <div className="rounded-lg bg-slate-800 text-slate-400 max-w-fit px-2 py-1">
                      Angular JS
                    </div>
                  </li>
                  <li>
                    <div className="rounded-lg bg-slate-800 text-slate-400 max-w-fit px-2 py-1">
                      Vanilla JS
                    </div>
                  </li>
                  <li>
                    <div className="rounded-lg bg-slate-800 text-slate-400 max-w-fit px-2 py-1">
                      Typescript
                    </div>
                  </li>
                  <li>
                    <div className="rounded-lg bg-slate-800 text-slate-400 max-w-fit px-2 py-1">
                      JQuery
                    </div>
                  </li>
                  <li>
                    <div className="rounded-lg bg-slate-800 text-slate-400 max-w-fit px-2 py-1">
                      Redux
                    </div>
                  </li>
                  <li>
                    <div className="rounded-lg bg-slate-800 text-slate-400 max-w-fit px-2 py-1">
                      Java
                    </div>
                  </li>
                  <li>
                    <div className="rounded-lg bg-slate-800 text-slate-400 max-w-fit px-2 py-1">
                      Rest API
                    </div>
                  </li>
                  <li>
                    <div className="rounded-lg bg-slate-800 text-slate-400 max-w-fit px-2 py-1">
                      GCloud
                    </div>
                  </li>
                  <li>
                    <div className="rounded-lg bg-slate-800 text-slate-400 max-w-fit px-2 py-1">
                      LAMP Stack
                    </div>
                  </li>
                  <li>
                    <div className="rounded-lg bg-slate-800 text-slate-400 max-w-fit px-2 py-1">
                      TypeORM
                    </div>
                  </li>

                  <li>
                    <div className="rounded-lg bg-slate-800 text-slate-400 max-w-fit px-2 py-1">
                      MySQL
                    </div>
                  </li>

                  <li>
                    <div className="rounded-lg bg-slate-800 text-slate-400 max-w-fit px-2 py-1">
                      Tailwind CSS
                    </div>
                  </li>
                  <li>
                    <div className="rounded-lg bg-slate-800 text-slate-400 max-w-fit px-2 py-1">
                      Vanilla CSS
                    </div>
                  </li>
                  <li>
                    <div className="rounded-lg bg-slate-800 text-slate-400 max-w-fit px-2 py-1">
                      SASS/SCSS
                    </div>
                  </li>
                  <li>
                    <div className="rounded-lg bg-slate-800 text-slate-400 max-w-fit px-2 py-1">
                      Ionic
                    </div>
                  </li>
                  <li>
                    <div className="rounded-lg bg-slate-800 text-slate-400 max-w-fit px-2 py-1">
                      Blockchain
                    </div>
                  </li>
                  <li>
                    <div className="rounded-lg bg-slate-800 text-slate-400 max-w-fit px-2 py-1">
                      ethers.js
                    </div>
                  </li>
                  <li>
                    <div className="rounded-lg bg-slate-800 text-slate-400 max-w-fit px-2 py-1">
                      discord.js
                    </div>
                  </li>
                  <li>
                    <div className="rounded-lg bg-slate-800 text-slate-400 max-w-fit px-2 py-1">
                      Docusaurus
                    </div>
                  </li>
                </ul>
              </a>
            </div>
            <div
              id="workexperience"
              className="grid grid-rows-1 mt-8 sm:grid-cols-1 md:grid-cols-[100px_1fr] md:gap-16 sm:gap-1 items-center mb-16 [&:hover~div]:opacity-50 workexperience2 avopluto"
            >
              <h3 className="text-sm text-slate-400 animate-fadeIn mb-4 md:mb-0">
                2017-2019
              </h3>
              <a
                target="_blank"
                rel="noreferrer"
                className="md:hover:bg-slate-500 md:p-4 rounded-lg delay-50 hover:cursor-pointer ease-in-out transition-colors animate-fadeIn3"
              >
                <h4 className="text-white">Avopluto</h4>
                <p className="text-sm text-slate-400 mb-2">
                  Front-end Developer/Co-founder
                </p>
                <p className="text-slate-100 font-light text-sm">
                  Consulted with clients business requirements for their
                  webpage. Developed and maintained the customer's website.
                </p>
                <ul className="mt-2 flex gap-2 flex-wrap text-[12px]">
                  <li>
                    <div className="rounded-lg bg-slate-800 text-slate-400 max-w-fit px-2 py-1 technology">
                      Wordpress
                    </div>
                  </li>
                  <li>
                    <div className="rounded-lg bg-slate-800 text-slate-400 max-w-fit px-2 py-1">
                      Php
                    </div>
                  </li>
                  <li>
                    <div className="rounded-lg bg-slate-800 text-slate-400 max-w-fit px-2 py-1">
                      MySQL
                    </div>
                  </li>
                  <li>
                    <div className="rounded-lg bg-slate-800 text-slate-400 max-w-fit px-2 py-1">
                      Javascript
                    </div>
                  </li>
                </ul>
              </a>
            </div>

            <a
              href=""
              target="_blank"
              rel="noreferrer"
              className="cursor-pointer hover:animate-pulse text-white font-semibold hover:text-teal-300"
            >
              View full Résumé
            </a>
          </section>

          <section>
            <h4 className="text-sm text-slate-400 opacity-80 pb-16 float-left max-w-[300px]">
              Coded on{" "}
              <span className="font-bold text-white">Visual Studio Code</span>{" "}
              by me. Built with{" "}
              <span className="font-bold text-white">React</span> +{" "}
              <span className="font-bold text-white">Vite</span> and styled with{" "}
              <span className="font-bol text-whited">TailwindCSS</span>.
              Deployed using{" "}
              <span className="font-bold text-white">Github Pages</span>.
            </h4>
          </section>
        </section>
        <div />
      </main>
    </div>
  );
}

export default App;
