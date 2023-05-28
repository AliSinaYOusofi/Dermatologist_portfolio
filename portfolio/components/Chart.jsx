"use client";
import React, { useEffect } from 'react'
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

export default function Chart() {

    useEffect(() => {
        
        const tl = gsap.timeline({
            scrollTrigger: {
                trigger: '.chart',
                start: 'top 80%',
                end: 'bottom 20%',
                toggleActions: "play pause resume reset",
            }
        });
      
        tl
        .from('.chart img:nth-child(odd)', { x: 200, opacity: 0 })
        .from('.chart img:nth-child(even)', { x: -200, opacity: 0 });
      
        return () => {
            tl.kill();
        };
    }, []);

    return (
        <div className="w-[90%] chart gap-x-4 gap-y-4 mx-auto mt-20 flex  flex-wrap items-center justify-center md:flex-row">
            <img 
                src="https://res.cloudinary.com/df4zdkl7h/image/upload/v1685219244/Picture1_fe4je3.png" 
                className="object-contain rounded-md w-[40%]"
            />

            <img 
                src="https://res.cloudinary.com/df4zdkl7h/image/upload/v1685232518/Pic4_atinlc.png" 
                className="object-contain rounded-md w-1/2 w-[40%]"
            />

            <img 
                src="https://res.cloudinary.com/df4zdkl7h/image/upload/v1685232504/Pic2_cjaaal.png" 
                className="object-contain rounded-md  w-[40%]"
            />
            <img 
                src="https://res.cloudinary.com/df4zdkl7h/image/upload/v1685232480/Pic1_tuxzoj.png" 
                className="object-contain rounded-md  w-[40%]"
            />

            <img 
                src="https://res.cloudinary.com/df4zdkl7h/image/upload/v1685232513/Pic3_ieo8do.png" 
                className="object-contain rounded-md  w-[40%]"
            />

            <img 
                src="https://res.cloudinary.com/df4zdkl7h/image/upload/v1685233090/Pic5_1_effhio.png" 
                className="object-contain rounded-md  w-[40%] h-1/2"
            />

            <img 
                src="https://res.cloudinary.com/df4zdkl7h/image/upload/v1685234081/CBPR_dk27md.png" 
                className="object-contain rounded-md  w-[40%] h-1/2"
            />

            
        </div>
    )
}
