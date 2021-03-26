import { useEffect } from "react";
// Height madness on iOS controlled by: https://www.markusantonwolf.com/en/articles/solution-to-the-mobile-viewport-height-issue-with-tailwind-css
const resizeHeight = () => {
  useEffect(() => {
    // Handler to call on window resize
    function handleResize() {
      // Set vh property
      let vh = window.innerHeight * 0.01;
      document.documentElement.style.setProperty("--vh", `${vh}px`);
    }
    // Add event listener
    window.addEventListener("resize", handleResize);
    // Call handler right away so state gets updated with initial window size
    handleResize();
    // Remove event listener on cleanup
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return;
};
export default resizeHeight;
