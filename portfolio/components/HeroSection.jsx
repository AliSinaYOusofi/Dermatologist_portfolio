import Image from 'next/image'
import React from 'react'
import DoctorImage from "../public/static/Picture.png"

export default function HeroSection() {
    return (
        <div className="max-w-[85rem] mx-auto bg-gray-50 px-4 sm:px-6 lg:px-8 mt-10 rounded-md">
            
            <div className="flex items-center justify-center h-1/2 flex-col md:flex-row">
                
                <div className=" md:w-1/2">
                
                    <h1 className="block  p-1 md:p-0 text-3xl font-bold text-gray-800 sm:text-4xl md:text-5xl lg:text-6xl">Meet Ghida, </h1>
                    <p className="mt-3 text-lg text-gray-800 ">
                        a passionate medical student from Stanford University who is bridging the gap in dermatology care for Muslim Middle Eastern and South Asian patients.
                        And the 2nd generation Palestinian refugee working to advance dermatology care for minority populations.
                    </p>

                    

                    
                    <div className="mt-6 lg:mt-12 flex gap-x-3 items-center  justify-start">
                        <svg
                            viewBox="0 0 960 1000"
                            fill="currentColor"
                            className="w-10 h-10 transition-all duration-200 hover:-translate-y-1 cursor-pointer hover:text-black/70"
                        >
                            <path d="M480 20c133.333 0 246.667 46.667 340 140s140 206.667 140 340c0 132-46.667 245-140 339S613.333 980 480 980c-132 0-245-47-339-141S0 632 0 500c0-133.333 47-246.667 141-340S348 20 480 20m196 392c20-14.667 35.333-30.667 46-48-21.333 8-39.333 12.667-54 14 20-12 34-29.333 42-52-20 10.667-40 18-60 22-18.667-18.667-42-28-70-28-26.667 0-49 9.333-67 28s-27 40.667-27 66c0 1.333.333 4.667 1 10s1 9.333 1 12c-80-4-144.667-37.333-194-100-9.333 16-14 32-14 48 0 33.333 14.667 59.333 44 78-17.333 0-32-4-44-12v2c0 22.667 7 42.667 21 60s32.333 28 55 32c-10.667 2.667-18.667 4-24 4-8 0-14-.667-18-2 13.333 44 42.667 66 88 66-33.333 26.667-72.667 40-118 40h-22c45.333 28 93.333 42 144 42 81.333 0 146.667-27.667 196-83s74-117.667 74-187v-12" />
                        </svg>

                        <svg
                            viewBox="0 0 960 1000"
                            fill="currentColor"
                            className="w-10 h-10 transition-all duration-200 hover:-translate-y-1 cursor-pointer hover:text-black/70"
                            >
                            <path d="M480 20c133.333 0 246.667 46.667 340 140s140 206.667 140 340c0 132-46.667 245-140 339S613.333 980 480 980c-132 0-245-47-339-141S0 632 0 500c0-133.333 47-246.667 141-340S348 20 480 20M362 698V386h-96v312h96m-48-352c34.667 0 52-16 52-48s-17.333-48-52-48c-14.667 0-27 4.667-37 14s-15 20.667-15 34c0 32 17.333 48 52 48m404 352V514c0-44-10.333-77.667-31-101s-47.667-35-81-35c-44 0-76 16.667-96 50h-2l-6-42h-84c1.333 18.667 2 52 2 100v212h98V518c0-12 1.333-20 4-24 8-25.333 24.667-38 50-38 32 0 48 22.667 48 68v174h98" />
                        </svg>

                        <svg
                            viewBox="0 0 960 1000"
                            fill="currentColor"
                            className="w-10 h-10 transition-all duration-200 hover:-translate-y-1 cursor-pointer hover:text-black/70"
                        >
                            <path d="M480 20c133.333 0 246.667 46.667 340 140s140 206.667 140 340c0 132-46.667 245-140 339S613.333 980 480 980s-246.667-47-340-141S0 632 0 500c0-133.333 46.667-246.667 140-340S346.667 20 480 20m114 330v-78h-72c-29.333 0-54 11-74 33s-30 49-30 81v44h-76v74h76v222h86V504h90v-74h-90v-52c0-18.667 6-28 18-28h72" />
                        </svg>

                    </div>
                
                </div>
                

                <div className="mt-10  lg:mt-0 lg:p-5">
                
                    <img
                        className="w-full h-[500px] rounded-xl object-cover" 
                        src={"https://res.cloudinary.com/df4zdkl7h/image/upload/v1684908092/Picture_iqt2mu.png"} 
                        alt="Portfolio image"
                    />
                </div>
                
            </div>
        
        </div>

    )
}
