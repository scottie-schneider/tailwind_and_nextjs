import { useState, useEffect } from "react";
// Height madness on iOS controlled by: https://www.markusantonwolf.com/en/articles/solution-to-the-mobile-viewport-height-issue-with-tailwind-css

export default function Spacing() {
  const [viewportHeight, setViewportHeight] = useState(undefined);
  useEffect(() => {
    // Handler to call on window resize
    function handleResize() {
      // Set vh property
      let vh = window.innerHeight * 0.01;
      document.documentElement.style.setProperty("--vh", `${vh}px`);
      // Set window width and height to state
      setViewportHeight(vh);
    }
    // Add event listener
    window.addEventListener("resize", handleResize);
    // Call handler right away so state gets updated with initial window size
    handleResize();
    // Remove event listener on cleanup
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div className="py-20 bg-gray-200 h-screen">
      <div className="container mx-auto ">
        <div className="relative bg-white p-10 rounded-lg shadow-lg">
          {/* Absolutely positioned label */}
          <div className="absolute top-0 right-0 bg-red-500 text-red-100 rounded py-2 px-4 transform translate-x-2 -translate-y-2">
            Brand new
          </div>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Non
            perferendis exercitationem at dolorem architecto! Voluptas tenetur,
            voluptatibus neque architecto doloribus a necessitatibus et ut
            iusto. Quibusdam ut voluptate quam ea.
          </p>
        </div>
      </div>
    </div>
  );
}
