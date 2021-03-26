import { useEffect } from "react";
import resizeHeight from "../hooks/resizeHeight";

export default function Responsive() {
  resizeHeight();
  return (
    <div className="min-h-screen bg-blue-200 p-20">
      <h2 className="text-6xl">Mobile First</h2>
      <h2 className="text-3xl lg:text-6xl">Difference sizes per device</h2>
      {/* Stacking vs side by side */}
      <div className="md:flex">
        <div className="md:w-1/2 p-10 bg-white mt-10">On mobile we stack</div>
        <div className="md:w-1/2 p-10 bg-white mt-10">
          On desktop, we are side by side
        </div>
      </div>
    </div>
  );
}
