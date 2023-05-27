import React from 'react'

export default function HeroSection() {
    return (
        <div className="hero max-w-[85rem] mx-auto bg-gray-50 px-4 sm:px-6 lg:px-8 mt-10 rounded-md">
            
            <div className="flex items-center justify-center h-1/2 flex-col md:flex-row">
                
                <div className=" md:w-1/2">
                
                    <h1 className="header block  p-1 md:p-0 text-3xl font-bold text-gray-800 sm:text-4xl md:text-5xl lg:text-6xl">Meet Ghida, </h1>
                    <p className="mt-3 text text-lg text-gray-800 ">
                        a passionate medical student from Stanford University who is bridging the gap in dermatology care for Muslim Middle Eastern and South Asian patients.
                        And the 2nd generation Palestinian refugee working to advance dermatology care for minority populations.
                    </p>
                
                </div>
            
                <div className="mt-10 img  lg:mt-0 lg:p-5">
                
                    <img
                        className="w-full h-[500px] rounded-xl object-cover" 
                        src={"https://res.cloudinary.com/df4zdkl7h/image/upload/v1685132487/OMSA_El-Banna_01_HiRes_270_tg38zz.jpg"} 
                        alt="Portfolio image"
                    />
                </div>
                
            </div>
        
        </div>

    )
}
