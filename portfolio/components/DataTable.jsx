"use client";

import React from 'react'
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useEffect, useRef } from 'react';

export default function DataTable() {

    let containerRef = useRef(null);

    useEffect(() => {
        gsap.registerPlugin(ScrollTrigger);

        const container = containerRef.current;
        const children = container.children;

        gsap.from(children, {
            x: -150,
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
        <div ref={containerRef}  className="w-[90%] mx-auto mt-20">
            <h1 className="block  p-1 md:p-0 text-3xl font-bold text-gray-800 sm:text-4xl md:text-5xl lg:text-6xl"> A snapshot of patient demographics. </h1>
            
        <table className="table-auto w-full bg-gray-50 mt-16 ">
            <thead>
            <tr>
                <th className="px-4 py-2">Characteristic</th>
                <th className="px-4 py-2">Participants No. (%)</th>
                <th className="px-4 py-2">Mean Age, years (range)</th>
            </tr>
            </thead>
            
            <tbody>
                <tr>
                    <td className="border px-4 py-2 f font-semibold">Sex</td>
                    <td className="border px-4 py-2"> </td>
                    <td className="border px-4 py-2"> </td>
                </tr>
                <tr>
                    <td className="border px-4 py-2 pl-10">Male</td>
                    <td className="border px-4 py-2">5 (23.8)</td>
                    <td className="border px-4 py-2">36.4 (26-71)</td>
                </tr>
                <tr>
                    <td className="border px-4 py-2 pl-10">Female</td>
                    <td className="border px-4 py-2">16 (76.2)</td>
                    <td className="border px-4 py-2">36.4 (26-71)</td>
                </tr>
                <tr>
                    <td className="border px-4 py-2 font-semibold">Ethnicity</td>
                    <td className="border px-4 py-2"> </td>
                    <td className="border px-4 py-2"> </td>
                </tr>
                <tr>
                    <td className="border px-4 py-2 pl-10">Middle Eastern</td>
                    <td className="border px-4 py-2">11 (52.4)</td>
                    <td className="border px-4 py-2">36.4 (26-71)</td>
                </tr>
                <tr>
                    <td className="border px-4 py-2 pl-10">North African</td>
                    <td className="border px-4 py-2">1 (4.8)</td>
                    <td className="border px-4 py-2">36.4 (26-71)</td>
                </tr>
                <tr>
                    <td className="border px-4 py-2 pl-10">South Asian</td>
                    <td className="border px-4 py-2">8 (38.1)</td>
                    <td className="border px-4 py-2">36.4 (26-71)</td>
                </tr>
                <tr>
                    <td className="border px-4 py-2 pl-10">Other Asian</td>
                    <td className="border px-4 py-2">1 (4.8)</td>
                    <td className="border px-4 py-2">36.4 (26-71)</td>
                </tr>
                <tr>
                    <td className="border px-4 py-2 font-semibold">Immigration Generation</td>
                    <td className="border px-4 py-2"> </td>
                    <td className="border px-4 py-2"> </td>
                </tr>
                <tr>
                    <td className="border px-4 py-2 pl-10">1st generation immigrant</td>
                    <td className="border px-4 py-2">14 (66.7)</td>
                    <td className="border px-4 py-2">36.4 (26-71)</td>
                </tr>
                <tr>
                    <td className="border px-4 py-2 pl-10">2nd generation immigrant</td>
                    <td className="border px-4 py-2">7 (33.3)</td>
                    <td className="border px-4 py-2">36.4 (26-71)</td>
                </tr>
                <tr>
                    <td className="border px-4 py-2">Wear hijab</td>
                    <td className="border px-4 py-2">10 (62.5)</td>
                    <td className="border px-4 py-2"> </td>
                </tr>

                <tr>
                    <td className="border px-4 py-2">Keep a full beard</td>
                    <td className="border px-4 py-2">2 (40.0)</td>
                    <td className="border px-4 py-2"></td>
                </tr>

                <tr>
                    <td className="border px-4 py-2">Had a full body skin check</td>
                    <td className="border px-4 py-2">3 (14.3)</td>
                    <td className="border px-4 py-2"></td>
                </tr>

                <tr>
                    <td className="border px-4 py-2">Received cosmetic care</td>
                    <td className="border px-4 py-2">3 (14.3)</td>
                    <td className="border px-4 py-2"></td>
                </tr>

                <tr>
                    <td className="border px-4 py-2" rowspan="4">Patient felt discriminated against in their daily living</td>
                    <td className="border px-4 py-2">A couple of times a month</td>
                    <td className="border px-4 py-2">3 (14.3)</td>
                </tr>

                <tr>
                    <td className="border px-4 py-2">A couple of times a year</td>
                    <td className="border px-4 py-2">6 (28.6)</td>
                </tr>

                <tr>
                    <td className="border px-4 py-2">Less than once a year</td>
                    <td className="border px-4 py-2">7 (33.3)</td>
                </tr>
                <tr>
                    <td className="border px-4 py-2">Never</td>
                    <td className="border px-4 py-2">5 (23.8)</td>
                </tr>
            </tbody>
        </table>
    </div>
    )
}
