import Head from "next/head";

export default function Home() {
  return (
    <div className="box-border">
      <Head>
        <title>TailwindCSS & Next.js Forty by HTML5 UP</title>
        <link rel="icon" href="/favicon.ico" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Source+Sans+Pro:ital,wght@0,300;0,600;1,300;1,600&display=swap"
          rel="stylesheet"
        />
      </Head>

      <header className="relative z-10 flex items-center justify-between text-xs font-bold text-white uppercase h-11 md:h-12 xl:h-14 2xl:h-16 xl:text-sm 2xl:text-lg tracking-forty-5">
        <a
          href="/"
          className="inline-block px-3 font-semibold leading-5 md:px-5 2xl:px-6 group xl:leading-6 2xl:leading-8"
        >
          <strong className="box-border inline-block pl-1 pr-px mr-1 transition duration-200 ease-in-out bg-white xl:mr-2 xl:pl-2 xl:pr-1 text-lucky-point group-hover:bg-anakiwa">
            FORTY
          </strong>
          &nbsp;
          <span className="hidden transition duration-200 ease-in-out group-hover:text-anakiwa sm:inline">
            by HTML5 UP
          </span>
        </a>
        <nav className="pl-2 pr-4 md:pl-4 md:pr-6">
          <a
            href="#menu"
            className="flex items-center no-underline transition duration-200 ease-in-out hover:text-anakiwa"
          >
            <span className="hidden mr-1 sm:inline">Menu</span>
            <svg
              className="w-5"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </a>
        </nav>
      </header>

      <main className="">
        {/* banner */}
        <section className="bg-lucky-point text-white sm:h-[50vh] xl:h-[66vh] 2xl:h-[75vh] flex justify-center flex-col pt-32 sm:pt-24 2xl:pt-28 pb-16 sm:pb-9 relative -top-11 md:-top-12 xl:-top-14 2xl:-top-16 -mb-11 md:-mb-12 xl:-mb-14 2xl:-mb-16">
          <div className="z-10 w-full px-6 mx-auto md:px-12 sm:max-w-screen-sm md:max-w-screen-md lg:max-w-screen-lg xl:max-w-screen-xl 2xl:max-w-screen-2xl">
            <header>
              <h1 className="text-3xl font-bold leading-7 text-left md:text-5xl xl:text-6xl 2xl:text-7xl">
                Hi, my name is Forty
              </h1>
              <span className="inline-block mt-4 md:mt-5 lg:mt-9 xl:mt-10 2xl:mt-11 mb-3 md:mb-4 lg:mb-7 xl:mb-8 2xl:mb-9 h-0.5 bg-white w-full"></span>
            </header>
            <div className="flex flex-col items-start lg:items-stretch lg:flex-row">
              <p className="mb-4 text-xs font-semibold leading-5 uppercase lg:mr-4 lg:mb-0 xl:text-sm 2xl:text-base xl:leading-6 2xl:leading-7 tracking-forty-4">
                A responsive site template designed by HTML5 UP
                <br />
                and released under the Creative Commons.
              </p>
              <button
                className="flex items-center flex-grow-0 px-4 uppercase transition duration-200 ease-in-out border-2 border-white sm:px-6 xl:px-7 2xl:px-8 group hover:border-anakiwa"
                type="button"
              >
                <span className="pr-4 text-xs font-semibold transition duration-200 ease-in-out xl:text-sm 2xl:text-lg tracking-forty-5 group-hover:text-anakiwa">
                  Get started
                </span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  className="transition duration-200 ease-in-out w-9 group-hover:text-anakiwa "
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M17 8l4 4m0 0l-4 4m4-4H3"
                  />
                </svg>
              </button>
            </div>
          </div>
          <div
            className="absolute inset-x-0 bottom-0 z-0 w-full h-full bg-center bg-cover sm:bg-fixed opacity-5"
            style={{
              backgroundImage: "url(/images/banner.jpg)",
            }}
          ></div>
        </section>


            </p>

      </main>
    </div>
  );
}
