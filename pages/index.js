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



            </p>

      </main>
    </div>
  );
}
