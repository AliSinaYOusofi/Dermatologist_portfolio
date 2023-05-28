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
                
                <div className="sm:flex items-center  justify-center sm:items-center sm:justify-between">
                    
                    <div className="md:w-2/3">
                       
                        <p className="mt-2">
                        In collaboration with the Stanford Dermatology Department, the Office of Community Engagement, Stanford Muslim Medical Association, the Markaz Resource Center at Stanford, and the Muslim Community Association in Santa Clara on a project to understand the perceptions of Muslim Middle Eastern and South Asian patients of their dermatology care. This mixed methods study (surveys and interviews) explores the impact of ongoing sociopolitical lived experiences (e.g., Islamophobia, colorism) on patients’ health-seeking behavior in dermatology and cultural and religious accommodations pertinent to their dermatology care.
                        </p>
                    </div>
                    
                   

                    <div className="flex items-center justify-center mt-14">
                        <img
                            src="https://res.cloudinary.com/df4zdkl7h/image/upload/v1685234356/ghida_s_Aljuld_initiative_version_3_mvsz4c.jpg"
                            alt="image"
                            className="w-full h-[200px] object-cover rounded-md"
                        />
                    </div>
                </div>
                <div className="mt-10 md:mt-0 flex flex-col items-start ">
                        <h6
                        className="mb-4 mt-10 flex justify-center font-semibold uppercase md:justify-start">
                        Contact
                        </h6>

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
                    </div>
                
                <hr className="my-6 border-gray-200 sm:mx-auto  lg:my-8" />
            </div>
        </footer>
    );
}

export default Footer;