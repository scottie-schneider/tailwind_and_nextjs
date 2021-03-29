import Head from "next/head";
import Image from "next/image";
import { Fragment } from "react";
import resizeHeight from "../hooks/resizeHeight";

// 1. Add the html
// 2. layout the things
// 3. spacing
// 4. box properties
// 5. typography
// 6. fun element
// 7. responsive
export default function Netflix() {
    // resizeHeight();
    return (
        <div class="overflow-hidden flex flex-col bg-white m-auto p-auto">
            <h1 class="flex py-5 lg:px-20 md:px-10 px-5 lg:mx-40 md:mx-20 mx-5 font-bold text-4xl text-gray-800">
                Example
            </h1>
            <div class="flex overflow-x-scroll pb-10 hide-scroll-bar">
                <div class="flex flex-nowrap lg:ml-40 md:ml-20 ml-10 ">
                    <div class="inline-block px-3">
                        <div class="w-64 h-64 max-w-xs overflow-hidden rounded-lg shadow-md bg-white hover:shadow-xl transition-shadow duration-300 ease-in-out"></div>
                    </div>
                    <div class="inline-block px-3">
                        <div class="w-64 h-64 max-w-xs overflow-hidden rounded-lg shadow-md bg-white hover:shadow-xl transition-shadow duration-300 ease-in-out"></div>
                    </div>
                    <div class="inline-block px-3">
                        <div class="w-64 h-64 max-w-xs overflow-hidden rounded-lg shadow-md bg-white hover:shadow-xl transition-shadow duration-300 ease-in-out"></div>
                    </div>
                    <div class="inline-block px-3">
                        <div class="w-64 h-64 max-w-xs overflow-hidden rounded-lg shadow-md bg-white hover:shadow-xl transition-shadow duration-300 ease-in-out"></div>
                    </div>
                    <div class="inline-block px-3">
                        <div class="w-64 h-64 max-w-xs overflow-hidden rounded-lg shadow-md bg-white hover:shadow-xl transition-shadow duration-300 ease-in-out"></div>
                    </div>
                    <div class="inline-block px-3">
                        <div class="w-64 h-64 max-w-xs overflow-hidden rounded-lg shadow-md bg-white hover:shadow-xl transition-shadow duration-300 ease-in-out"></div>
                    </div>
                    <div class="inline-block px-3">
                        <div class="w-64 h-64 max-w-xs overflow-hidden rounded-lg shadow-md bg-white hover:shadow-xl transition-shadow duration-300 ease-in-out"></div>
                    </div>
                    <div class="inline-block px-3">
                        <div class="w-64 h-64 max-w-xs overflow-hidden rounded-lg shadow-md bg-white hover:shadow-xl transition-shadow duration-300 ease-in-out"></div>
                    </div>
                </div>
            </div>
        </div>
    );
}
