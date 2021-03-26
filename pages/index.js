import Head from "next/head";
import Image from "next/image";
import resizeHeight from "../hooks/resizeHeight";

// 1. Add the html
// 2. layout the things
// 3. spacing
// 4. box properties
// 5. typography
// 6. fun element
// 7. responsive
export default function Home() {
  resizeHeight();
  return (
    <div className="text-gray-700 flex bg-gradient-to-tr from-white to-gray-200 flex-col items-center justify-center min-h-screen py-2">
      <Head>
        <title>Hello! I'm Scottie</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="h-screen flex flex-col items-center justify-center">
        <h2 className="flex text-5xl lg:text-6xl font-extrabold leading-snug mb-4">
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-teal-400 to-teal-500">
            Hello, I'm
          </span>
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-teal-500 via-purple-600 to-purple-500">
            &nbsp;Scottie
          </span>
        </h2>
        <p className="text-lg lg:text-2xl mb-12 text-gray-700">
          Product, Designer, Developer, Mover.
        </p>
      </div>
      {/* End full header */}
      <div className="block w-full bg-purple-700">
        <div className="relative container mx-auto px-8 text-xl">
          <h2 className="text-4xl lg:text-6xl font-bold text-white mt-20 mb-10">
            So who am I anyway?
          </h2>
          <div className="lg:flex lg:space-x-16">
            <div className="lg:w-2/3 lg:mb-0 lg:p-16 mb-12 p-8 bg-white rounded text-gray-800 shadow-2xl">
              <p className="mb-8">
                I am many things, but if you had to label me with anything -
                call me a craftsman. I'm always in the beginner mindset and
                would much rather be confronted with something new that I suck
                at, than something I've mastered.
                <strong className="font-bold text-teal-500">
                  &nbsp;Always learning, always improving.
                </strong>
              </p>
              <p className="mb-8">
                As an entrepreneur, I've founded 2 successful bootstrapped
                startups.{" "}
                <a
                  className="text-blue-500 hover:underline"
                  href="https://gofetch.it"
                  target="_blank"
                >
                  FollowupEdge
                </a>
                , and{" "}
                <a
                  className="text-blue-500 hover:underline"
                  href="https://welcome.org"
                  target="_blank"
                >
                  Welcome
                </a>
                . I built FollowupEdge in my basement, reaching 50K MRR in the
                first year. We were aquired by Inventive Ventures and rebranded
                as GoFetchIt. The second, Welcome, grew to over 100k MRR in a
                year and a half.
              </p>
              <p className="mb-8">
                What I'm most proud of is what the people that work with me say
                about me.
              </p>
            </div>
          </div>
        </div>
      </div>
      {/* Co workers/reviews section */}
      <div className="container mx-auto px-8">
        <div className="relative leading-loose mb-16 lg:mb-32">
          <h2 className="mt-20 text-3xl lg:text-6xl text-center font-bold text-gray-800">
            What my co-workers say about me
          </h2>
          <div className="absolute left-0 top-0 w-1/3 h-2 bg-gradient-to-r from-blue-400 to-purple-400 rounded transform -translate-y-5"></div>
          <div className="absolute right-0 bottom-0 w-1/3 h-2 bg-gradient-to-r from-blue-400 to-purple-400 rounded transform translate-y-5"></div>
        </div>
        <div className="lg:col-span-2">
          <ul className="space-y-12 sm:grid sm:grid-cols-2 sm:gap-x-6 sm:gap-y-12 sm:space-y-0 lg:gap-x-8">
            {/* Review Card 1*/}
            <li>
              <div className="space-y-4">
                <div className="aspect-w-3 aspect-h-2">
                  <img
                    className="object-cover shadow-lg rounded-lg"
                    src="https://media-exp1.licdn.com/dms/image/C4E03AQFqtLChP4wjNA/profile-displayphoto-shrink_800_800/0/1553317472543?e=1622073600&v=beta&t=Nc70Eulhrk6PLz4Vc-d3tMO3TZFHWao-3AejzMHEXyw"
                    alt=""
                  />
                </div>
                <div className="text-lg leading-6 font-medium space-y-1">
                  <h3>Sebastian Garces</h3>
                  <p className="text-indigo-600">Lead Dev</p>
                </div>
                <div className="text-lg">
                  <p className="text-gray-500">
                    Scottie is the type of person you want to surround yourself
                    with. He's able to see opportunities in every challenge
                    presented to him.
                  </p>
                </div>
              </div>
            </li>
            {/* Review Card 2 */}
            <li>
              <div className="space-y-4">
                <div className="aspect-w-3 aspect-h-2">
                  <img
                    className="object-cover shadow-lg rounded-lg"
                    src="https://media-exp1.licdn.com/dms/image/C4D35AQGxMgoJPQw7qw/profile-framedphoto-shrink_800_800/0/1603920413941?e=1616878800&v=beta&t=w1Eo7T0_SOtRdxx2MpaRDfIkk9K1DCvIFKJx65DS1YE"
                    alt=""
                  />
                </div>
                <div className="text-lg leading-6 font-medium space-y-1">
                  <h3>Vital Boisset</h3>
                  <p className="text-indigo-600">Product Designer</p>
                </div>
                <div className="text-lg">
                  <p className="text-gray-500">
                    Scottie was a pleasure to work with. It was inspiring to see
                    him manage three Zoom meetings, working on UX, Frontend and
                    Backend simultaneously. Great to have around when the goal
                    is to ship a product! I look forward to the next project.
                  </p>
                </div>
              </div>
            </li>
            {/* End Review Card 2 */}
            {/* Review Card 3 */}
            <li>
              <div className="space-y-4">
                <div className="aspect-w-3 aspect-h-2">
                  <img
                    className="object-cover shadow-lg rounded-lg"
                    src="https://media-exp1.licdn.com/dms/image/C4D35AQGxMgoJPQw7qw/profile-framedphoto-shrink_800_800/0/1603920413941?e=1616878800&v=beta&t=w1Eo7T0_SOtRdxx2MpaRDfIkk9K1DCvIFKJx65DS1YE"
                    alt=""
                  />
                </div>
                <div className="text-lg leading-6 font-medium space-y-1">
                  <h3>Vital Boisset</h3>
                  <p className="text-indigo-600">Product Designer</p>
                </div>
                <div className="text-lg">
                  <p className="text-gray-500">
                    Scottie was a pleasure to work with. It was inspiring to see
                    him manage three Zoom meetings, working on UX, Frontend and
                    Backend simultaneously. Great to have around when the goal
                    is to ship a product! I look forward to the next project.
                  </p>
                </div>
              </div>
            </li>
            {/* End Review Card 3 */}
            {/* Review Card 4 */}
            <li>
              <div className="space-y-4">
                <div className="aspect-w-3 aspect-h-2">
                  <img
                    className="object-cover shadow-lg rounded-lg"
                    src="https://media-exp1.licdn.com/dms/image/C4D35AQGxMgoJPQw7qw/profile-framedphoto-shrink_800_800/0/1603920413941?e=1616878800&v=beta&t=w1Eo7T0_SOtRdxx2MpaRDfIkk9K1DCvIFKJx65DS1YE"
                    alt=""
                  />
                </div>
                <div className="text-lg leading-6 font-medium space-y-1">
                  <h3>Vital Boisset</h3>
                  <p className="text-indigo-600">Product Designer</p>
                </div>
                <div className="text-lg">
                  <p className="text-gray-500">
                    Scottie was a pleasure to work with. It was inspiring to see
                    him manage three Zoom meetings, working on UX, Frontend and
                    Backend simultaneously. Great to have around when the goal
                    is to ship a product! I look forward to the next project.
                  </p>
                </div>
              </div>
            </li>
            {/* End Review Card 4 */}
          </ul>
        </div>
      </div>
    </div>
  );
}
