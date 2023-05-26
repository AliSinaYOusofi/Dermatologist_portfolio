"use client";

import { useEffect, useState } from "react";

export default function NavBar({timeline}) {
    
    const [navbar, setNavbar] = useState(false);
    
    console.log(timeline);

    useEffect(() => {
         // Pause the timeline at the start
      }, [timeline]);
    return (
        <nav className=" w-[90%] main mx-auto bg-gray-50 relative rounded rounded-bl-md rounded-br-md">
            <div className=" justify-between px-4 mx-auto lg:max-w-7xl md:items-center md:flex md:px-8">
                <div>
                    <div className="icon flex items-center justify-between py-3 md:py-5 md:block">
                        <a href="/">
                            <h2 className="text-2xl font-bold ">
                                <img
                                    className=" rounded-sm p-1 w-[50px] h-[50px] md:w-[75px] md:h-[75px] lg:w-[80px] lg:h-[80px] bg-white object-contain" 
                                    src="https://res.cloudinary.com/df4zdkl7h/image/upload/v1685141462/Screen_Shot_2023-05-16_at_8.44.52_PM_y4qhyk.png" />
                            </h2>
                        </a>
                        <div className="md:hidden">
                            <button
                                className="p-2 text-gray-700 rounded-md outline-none focus:border-gray-400 focus:border"
                                onClick={() => setNavbar(!navbar)}
                            >
                                {navbar ? (
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        className="w-6 h-6"
                                        viewBox="0 0 20 20"
                                        fill="currentColor"
                                    >
                                        <path
                                            fillRule="evenodd"
                                            d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                                            clipRule="evenodd"
                                        />
                                    </svg>
                                ) : (
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        className="w-6 h-6"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke="currentColor"
                                        strokeWidth={2}
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            d="M4 6h16M4 12h16M4 18h16"
                                        />
                                    </svg>
                                )}
                            </button>
                        </div>
                    </div>
                </div>
                <div>
                    <div
                        className={`list flex-1 justify-self-center pb-3 mt-8 md:block md:pb-0 md:mt-0 ${
                            navbar ? "block" : "hidden"
                        }`}
                    >
                        <ul className="items-center justify-center space-y-8 md:flex md:space-x-6 md:space-y-0">
                            <li className="text-gray-600 hover:text-blue-600">
                                <a href="">Main</a>
                            </li>
                            <li className="text-gray-600 hover:text-blue-600">
                                <a href="#faq">FAQ</a>
                            </li>
                            <li className="text-gray-600 hover:text-blue-600">
                                <a href="#about">About</a>
                            </li>
                            <li className="text-gray-600 hover:text-blue-600">
                                <a href="#contact">Contact</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </nav>
    );
}