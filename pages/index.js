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
    // resizeHeight();
    return (
        <div className="text-gray-700 bg-gray-100 flex-col items-center justify-center min-h-screen py-2">
            <Head>
                <title>Hello! I'm Scottie</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <div className="h-96 relative flex bg-gradient-to-tr from-white to-gray-200 flex flex-col items-center justify-center">
                <h2 className="flex text-4xl md:text-5xl lg:text-6xl font-extrabold leading-snug mb-4">
                    <span className=" bg-clip-text text-transparent bg-gradient-to-r from-teal-400 to-teal-500">
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

            <div className="relative items-center flex flex-col bg-purple-700  w-full pt-12">
                <div className="transform -translate-y-20 w-1/2 space-y-4">
                    <div className="">
                        <Image
                            className="object-fit shadow-lg rounded-lg"
                            src="/profile.JPG"
                            alt=""
                            width="400"
                            height="300"
                        />
                    </div>
                </div>

                {/* <img
                    className=" transform -translate-y-40 object-cover w-1/2 mx-auto z-40 shadow-lg rounded-lg"
                    src="https://scontent.feoh1-1.fna.fbcdn.net/v/t1.0-9/165618272_280396350140021_2599161582639439013_o.jpg?_nc_cat=106&ccb=1-3&_nc_sid=730e14&_nc_eui2=AeG49l1QMAHdbavO-O9Ggxxo7qIe-ecnNH7uoh755yc0fkIiU05eyfl1HUYHRnt7_zEOUTx4mdzq_V6D-dM8RPZZ&_nc_ohc=Prs3khQiap0AX-yY75v&_nc_ht=scontent.feoh1-1.fna&oh=58da0e92f792bd35c8b060b7e07bd3b8&oe=608404A9"
                    alt=""
                /> */}
                <div className="absolute bottom-0 bg-gray-100 h-64 inset-x-0"></div>
                <div className="relative mx-auto px-6 lg:px-0 container">
                    <h2 className="mb-10 text-purple-100 font-bold text-4xl lg:text-6xl">
                        So who am I, anyway?
                    </h2>
                    <div className="flex space-x-16">
                        <div className="bg-white p-16 rounded shadow-2xl text-gray-800 text-lg space-y-16 leading-relaxed">
                            <p>
                                I am many things, but if you had to label me
                                with anything -
                                <strong className="font-bold text-purple-500">
                                    &nbsp;call me a craftsman.
                                </strong>{" "}
                                I'm always in the beginner mindset and would
                                much rather be confronted with something new
                                that I suck at, than something I've mastered.
                            </p>
                            <p>
                                As an entrepreneur, I've founded 2 successful
                                bootstrapped startups.{" "}
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
                                . I built FollowupEdge in my basement, reaching
                                50K MRR in the first year. We were aquired by
                                Inventive Ventures and rebranded as GoFetchIt.
                                The second, Welcome, grew to over 100k MRR in a
                                year and a half.
                            </p>
                            <div className="bg-gray-200 p-8 rounded shadow">
                                <code className="block px-1 bg-gray-200 text-teal-700 text-xs font-mono">
                                    <span className="text-red-700">
                                        function
                                    </span>
                                    {` growBusinesses() {`}
                                </code>
                                <code className="pl-6 block px-1 bg-gray-200 text-teal-700 text-xs font-mono">
                                    growPersonally();
                                </code>
                                <code className="pl-6 block px-1 bg-gray-200 text-teal-700 text-xs font-mono">
                                    growBusinesses();
                                </code>
                                <code className="block px-1 bg-gray-200 text-teal-700 text-xs font-mono">
                                    {`}`}
                                </code>
                                <code className="block px-1 bg-gray-200 text-teal-700 text-xs font-mono">
                                    {`growBusinesses()`}
                                </code>
                            </div>
                            <p>
                                In my personal life, I am a movement coach and
                                passionate about exploring my body's potential
                                for health, flexibility, and strength. I'm
                                deeply in love with my partner, Dani. Together
                                we have an independent and self assured Yorkie
                                terrier named Chewie.
                            </p>
                            <p className="relative text-3xl text-italic">
                                <span className="absolute top-0 left-0 transform -translate-x-6 -translate-y-6 text-purple-600 text-6xl scale-150 text-italic opacity-50">
                                    "
                                </span>{" "}
                                Every day, I make it a point to{" "}
                                <span className="text-purple-500">
                                    compare myself to who I was yesterday
                                </span>
                                , not to who someone else is today.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
            {/* Overview section */}
            {/* Co workers/reviews section */}
            <div className="container mx-auto px-8 pb-20">
                <div className="relative leading-loose mb-16 lg:mb-32">
                    <h2 className="mt-20 text-3xl lg:text-6xl text-center font-bold text-gray-800">
                        What my co-workers say about me
                    </h2>
                    <div className="absolute left-0 top-0 w-1/3 h-2 bg-gradient-to-r from-blue-400 to-purple-400 rounded transform -translate-y-5"></div>
                    <div className="absolute right-0 bottom-0 w-1/3 h-2 bg-gradient-to-r from-blue-400 to-purple-400 rounded transform translate-y-5"></div>
                </div>
                <div className="lg:col-span-2">
                    <ul className="space-y-12 sm:grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 sm:gap-x-6 sm:gap-y-12 sm:space-y-0 lg:gap-x-8">
                        {/* Review Card 1*/}
                        <li>
                            <div className="space-y-4">
                                <div className="aspect-w-3 aspect-h-3">
                                    <Image
                                        className="object-cover shadow-lg rounded-lg"
                                        src="/sebastian.jpeg"
                                        alt=""
                                        layout="fill"
                                    />
                                </div>
                                <div className="text-lg leading-6 font-medium space-y-1">
                                    <h3>Sebastian Garces</h3>
                                    <p className="text-indigo-600">Lead Dev</p>
                                </div>
                                <div className="text-lg">
                                    <p className="text-gray-500">
                                        Scottie is the type of person you want
                                        to surround yourself with. He's able to
                                        see opportunities in every challenge
                                        presented to him.
                                    </p>
                                </div>
                            </div>
                        </li>
                        {/* Review Card 2 */}
                        <li>
                            <div className="space-y-4">
                                <div className="aspect-w-3 aspect-h-3">
                                    <Image
                                        className="object-cover shadow-lg rounded-lg"
                                        src="/vital.jpeg"
                                        alt=""
                                        layout="fill"
                                    />
                                </div>
                                <div className="text-lg leading-6 font-medium space-y-1">
                                    <h3>Vital Boisset</h3>
                                    <p className="text-indigo-600">
                                        Product Designer
                                    </p>
                                </div>
                                <div className="text-lg">
                                    <p className="text-gray-500">
                                        Scottie was a pleasure to work with. It
                                        was inspiring to see him manage three
                                        Zoom meetings, working on UX, Frontend
                                        and Backend simultaneously. Great to
                                        have around when the goal is to ship a
                                        product! I look forward to the next
                                        project.
                                    </p>
                                </div>
                            </div>
                        </li>
                        {/* End Review Card 2 */}
                        {/* Review Card 3 */}
                        <li>
                            <div className="space-y-4">
                                <div className="aspect-w-3 aspect-h-3">
                                    <Image
                                        className="object-cover shadow-lg rounded-lg"
                                        src="/dani.jpeg"
                                        alt=""
                                        layout="fill"
                                    />
                                </div>
                                <div className="text-lg leading-6 font-medium space-y-1">
                                    <h3>Daniela Marmolejo</h3>
                                    <p className="text-indigo-600">
                                        Entrepreneur
                                    </p>
                                </div>
                                <div className="text-lg">
                                    <p className="text-gray-500">
                                        Scottie is disciplined, consistent, and
                                        highly creative.
                                    </p>
                                </div>
                            </div>
                        </li>
                        {/* End Review Card 3 */}
                        {/* Review Card 4 */}
                        <li>
                            <div className="space-y-4">
                                <div className="aspect-w-3 aspect-h-3">
                                    <Image
                                        className="object-cover shadow-lg rounded-lg"
                                        src="/cami.jpeg"
                                        alt=""
                                        layout="fill"
                                    />
                                </div>
                                <div className="text-lg leading-6 font-medium space-y-1">
                                    <h3>Cami Arango</h3>
                                    <p className="text-indigo-600">
                                        Human Resources
                                    </p>
                                </div>
                                <div className="text-lg">
                                    <p className="text-gray-500">
                                        Scottie can be a real dick sometimes,
                                        but is one of the top 2 best men I know.
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
