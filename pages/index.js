import Head from "next/head";

const dogos = [
  {
    name: "Alvan",
    description: "Lorem ipsum dolor sit amet",
    image: {
      path: "/images/alvan.jpg",
      filename: "alvan.jpg",
    },
  },
  {
    name: "Cristian",
    description: "Harum minima incidunt maiores!",
    image: {
      path: "/images/cristian.jpg",
      filename: "cristian.jpg",
    },
  },
  {
    name: "Marliese",
    description: "Quos pariatur, odit nemo odio reiciendis",
    image: {
      path: "/images/marliese.jpg",
      filename: "marliese.jpg",
    },
  },
  {
    name: "Charles",
    description: "Illum inventore temporibus sunt",
    image: {
      path: "/images/charles.jpg",
      filename: "charles.jpg",
    },
  },
  {
    name: "Karsten",
    description: "Quia fugiat vitae quis",
    image: {
      path: "/images/karsten.jpg",
      filename: "karsten.jpg",
    },
  },
  {
    name: "Louis",
    description: "Consectetur adipisicing hic qui dicta consequatur!",
    image: {
      path: "/images/louis.jpg",
      filename: "louis.jpg",
    },
  },
];

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

        {/* grid */}
        <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5">
          {dogos.map((dogo, index) => {
            let width = [
              "lg:col-span-2",
              "lg:col-span-3",
              "lg:col-span-3",
              "lg:col-span-2",
            ];

            let colors = [
              "bg-red-400",
              "bg-yellow-400",
              "bg-green-400",
              "bg-blue-400",
              "bg-indigo-400",
              "bg-purple-400",
              "bg-pink-400",
              "bg-gray-400",
            ];

            return (
              <article
                key={dogo.name}
                className={`h-[20vh] sm:h-[30vh] lg:h-[40vh] bg-cover bg-center relative group p-8 lg:px-12 lg:pt-16 lg:pb-8 xl:p-16 2xl:p-20 cursor-pointer ${
                  width[index % 4]
                }`}
                style={{
                  backgroundImage: `url(${dogo.image.path})`,
                }}
              >
                <span
                  aria-hidden="true"
                  className={`absolute z-0 inset-0 transition-opacity duration-300 ease-linear bg-opacity-90 group-hover:opacity-0 ${
                    colors[index % 8]
                  }`}
                ></span>
                <div className="flex items-center w-full h-full">
                  <header className="relative font-bold text-white w-max">
                    <h3 className="mr-4 text-xl md:text-2xl xl:text-3xl 2xl:text-4xl">
                      {dogo.name}
                    </h3>
                    <span
                      aria-hidden="true"
                      className="w-full h-0.5 bg-white my-2 xl:my-4 inline-block"
                    ></span>
                    <p className="flex items-center mr-4 text-xs leading-none uppercase md:text-sm xl:text-base">
                      {dogo.description}
                    </p>
                  </header>
                </div>
              </article>
            );
          })}
        </section>

        {/* Hero post */}
        <section className="pt-12 pb-4 bg-lucky-point xl:pb-8 2xl:pb-11 xl:pt-16 2xl:pt-24">
          <div className="w-full px-6 mx-auto text-white md:px-12 sm:max-w-screen-sm md:max-w-screen-md lg:max-w-screen-lg xl:max-w-screen-xl 2xl:max-w-screen-2xl">
            <div className="w-max 2xl:mb-11 xl:mb-8">
              <h2 className="mr-4 text-xl font-semibold leading-none sm:text-2xl md:text-3xl xl:text-4xl 2xl:text-5xl">
                Massa libero
              </h2>
              <span className="h-0.5 bg-white w-full block mt-4 xl:mt-5"></span>
            </div>
            <p className="">
              Nullam et orci eu lorem consequat tincidunt vivamus et sagittis
              libero. Mauris aliquet magna magna sed nunc rhoncus pharetra.
              Pellentesque condimentum sem. In efficitur ligula tate urna.
              Maecenas laoreet massa vel lacinia pellentesque lorem ipsum dolor.
              Nullam et orci eu lorem consequat tincidunt. Vivamus et sagittis
              libero. Mauris aliquet magna magna sed nunc rhoncus amet pharetra
              et feugiat tempus.
            </p>
            <a href="#" className="uppercase">
              Get started
            </a>
          </div>
        </section>

      </main>
    </div>
  );
}
