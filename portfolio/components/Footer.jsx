"use client";

import Link from 'next/link';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useEffect, useRef } from 'react';


function Footer() {

    let containerRef = useRef(null);

    useEffect(() => {
        gsap.registerPlugin(ScrollTrigger);

        const container = containerRef.current;
        const children = container.children;

        gsap.from(children, {
            x: 50,
            duration: 1,
            opacity: 0,
            stagger: 0.3,
            
            scrollTrigger: {
                trigger: container,
                start: 'top 80%',
                toggleActions: "play pause resume reset",
            },
        });
    }, []);

    return (
        <footer className="bg-gray-50 w-[90%] mx-auto rounded-md  m-4">
            <div ref={containerRef} className="w-full max-w-screen-xl mx-auto p-4 md:py-8">
                
                <div className="sm:flex sm:items-center sm:justify-between">
                    
                    <div className="md:w-2/3">
                        <Link href="/" className="">
                            <span className="flex w-fit items-center mb-4 sm:mb-0">
                            <span className="self-center text-2xl font-semibold whitespace-nowrap w-fit">
                            <img
                                className=" rounded-sm p-1 w-[50px] h-[50px] md:w-[75px] md:h-[75px] lg:w-[80px] lg:h-[80px] bg-white object-contain" 
                                src="https://res.cloudinary.com/df4zdkl7h/image/upload/v1685141462/Screen_Shot_2023-05-16_at_8.44.52_PM_y4qhyk.png" />
                            </span>
                            </span>  
                        </Link>
                        <p className="mt-2">
                        In collaboration with the Stanford Dermatology Department, the Office of Community Engagement, Stanford Muslim Medical Association, the Markaz Resource Center at Stanford, and the Muslim Community Association in Santa Clara on a project to understand the perceptions of Muslim Middle Eastern and South Asian patients of their dermatology care. This mixed methods study (surveys and interviews) explores the impact of ongoing sociopolitical lived experiences (e.g., Islamophobia, colorism) on patients’ health-seeking behavior in dermatology and cultural and religious accommodations pertinent to their dermatology care.
                        </p>
                    </div>
                    
                    <div className="mt-10 md:mt-0 flex flex-col items-start">
                        <h6
                        className="mb-4 flex justify-center font-semibold uppercase md:justify-start">
                        Contact
                        </h6>

                        <p className="mb-4 flex items-center justify-center md:justify-start">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 24 24"
                                fill="currentColor"
                                className="mr-3 h-5 w-5 ">
                                <path
                                d="M11.47 3.84a.75.75 0 011.06 0l8.69 8.69a.75.75 0 101.06-1.06l-8.689-8.69a2.25 2.25 0 00-3.182 0l-8.69 8.69a.75.75 0 001.061 1.06l8.69-8.69z" />
                                <path
                                d="M12 5.432l8.159 8.159c.03.03.06.058.091.086v6.198c0 1.035-.84 1.875-1.875 1.875H15a.75.75 0 01-.75-.75v-4.5a.75.75 0 00-.75-.75h-3a.75.75 0 00-.75.75V21a.75.75 0 01-.75.75H5.625a1.875 1.875 0 01-1.875-1.875v-6.198a2.29 2.29 0 00.091-.086L12 5.43z" />
                            </svg>
                            New York, NY
                        </p>

                        <a  href="mailto:ghida@gmail.com" className="mb-4 group cursor-pointer flex items-center justify-center md:justify-start">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 24 24"
                                fill="currentColor"
                                className="mr-3 h-5 w-5 transition-all duration-200 group-hover:-translate-y-1 cursor-pointer group-hover:text-black/70">
                                <path
                                d="M1.5 8.67v8.58a3 3 0 003 3h15a3 3 0 003-3V8.67l-8.928 5.493a3 3 0 01-3.144 0L1.5 8.67z" />
                                <path
                                d="M22.5 6.908V6.75a3 3 0 00-3-3h-15a3 3 0 00-3 3v.158l9.714 5.978a1.5 1.5 0 001.572 0L22.5 6.908z" />
                            </svg>
                            ghida.elbanna@gmail.com
                        </a>
                        
                        <a href="tel:+ 01 234 567 88"  className="group cursor-pointer mb-4 flex items-center justify-center md:justify-start">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 24 24"
                                fill="currentColor"
                                className="mr-3 h-5 w-5 transition-all duration-200 group-hover:-translate-y-1 cursor-pointer group-hover:text-black/70">
                                <path
                                fillRule="evenodd"
                                d="M1.5 4.5a3 3 0 013-3h1.372c.86 0 1.61.586 1.819 1.42l1.105 4.423a1.875 1.875 0 01-.694 1.955l-1.293.97c-.135.101-.164.249-.126.352a11.285 11.285 0 006.697 6.697c.103.038.25.009.352-.126l.97-1.293a1.875 1.875 0 011.955-.694l4.423 1.105c.834.209 1.42.959 1.42 1.82V19.5a3 3 0 01-3 3h-2.25C8.552 22.5 1.5 15.448 1.5 6.75V4.5z"
                                clipRule="evenodd" />
                            </svg>
                            (916) 801-9419
                        </a>
                    </div>

                    
                </div>
                
                
                <hr className="my-6 border-gray-200 sm:mx-auto  lg:my-8" />
            </div>
        </footer>
    );
}

export default Footer;