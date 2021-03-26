import { useEffect } from "react";
import resizeHeight from "../hooks/resizeHeight";

export default function Responsive() {
  resizeHeight();
  return <div className="h-screen bg-red-100">responsive!</div>;
}
