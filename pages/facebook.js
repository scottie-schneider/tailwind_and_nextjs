import Head from "next/head";
import Image from "next/image";

// 1. Add the html
// 2. layout the things
// 3. spacing
// 4. box properties
// 5. typography
// 6. fun element
// 7. responsive
export default function Facebook() {
    // resizeHeight();
    return (
        <div className="text-gray-700 bg-gray-100 flex-col items-center justify-center min-h-screen">
            <div className="header bg-gray-500 h-12 flex justify-center">
                Header
            </div>
            <div className="w-1/2 flex h-48 max-h-48 justify-center mx-auto py-2">
                <div className="h-full max-h-full overflow-hidden grid grid-cols-4 gap-2 ">
                    <div className="block max-h-48">
                        <img
                            src="https://images.unsplash.com/photo-1582053433976-25c00369fc93?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=512&q=80"
                            alt=""
                            className="rounded h-full group-hover:opacity-75 object-cover pointer-events-none"
                        />
                    </div>
                    <div className="block max-h-48">
                        <img
                            src="https://images.unsplash.com/photo-1582053433976-25c00369fc93?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=512&q=80"
                            alt=""
                            className="rounded h-full group-hover:opacity-75 object-cover pointer-events-none"
                        />
                    </div>
                    <div className="block max-h-48">
                        <img
                            src="https://images.unsplash.com/photo-1582053433976-25c00369fc93?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=512&q=80"
                            alt=""
                            className="rounded h-full group-hover:opacity-75 object-cover pointer-events-none"
                        />
                    </div>
                    <div className="block max-h-48">
                        <img
                            src="https://images.unsplash.com/photo-1582053433976-25c00369fc93?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=512&q=80"
                            alt=""
                            className="rounded h-full group-hover:opacity-75 object-cover pointer-events-none"
                        />
                    </div>
                </div>
            </div>
        </div>
    );
}
