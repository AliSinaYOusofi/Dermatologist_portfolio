"use client";

import React, { useEffect, useRef, useState } from 'react'
import UserQuotes from './UserQuotes'
import { gsap } from 'gsap';

export default function QuotesContainer() {
    const containerRef = useRef(null);
    
    const [pauseAnimation, setPauseAnimation] = useState(false);
    
    useEffect(() => {

        const tl = gsap.timeline({ repeat: -1, repeatDelay: 2 });

        tl.to(containerRef.current, { duration: 150, x: -20000, ease: 'linear'});
        tl.set(containerRef.current, { x: 0});

        if (pauseAnimation) tl.pause();
        else tl.play();
        
        return () => {
            tl.kill();
        }
    }, [pauseAnimation]);

    return (
        <div   className="relative w-[90%] mx-auto h-1/2  overflow-x-scroll bg-gray-50 mt-20 scrollbar-hide">
            <div ref={containerRef}  className="flex  items-center justify-center w-min">

                <div className="w-fit">
                    <UserQuotes 
                        quote={"this [Stanford dermatology] was my very first experience. I never visited a dermatologist in my life. I always heard about acne as a teenage girl... It [dermatology] wasn't much available. Unless you have a real medical emergency, you don't go and see your doctor… I think it's really important to first have the access to the right care."}
                        patient={"User 1"}
                    />
                </div>

                <div>
                    <UserQuotes
                        quote={"I can speak from a South Asian perspective, like Pakistan, India, Bangladesh, they do not really take skin cancer seriously at all. It's just we're tanned. We don't burn like the white people do in a way. so we never wear sunscreen. it's worse for South Asian men compared to women. And for skin cancer screening, I can't think of a single person I know who has gone for the skin cancer screening from any age. I feel being tan in some way is protective. So we don't need to wear it [sunscreen], and being out of the sun is a good thing for you, and you should soak up the vitamin D and get energy from the sun."}
                        patient={"User 2"}
                    />
                </div>

                <div>
                    <UserQuotes
                        quote={"Especially with girls, if something is wrong with their face, they're always picked on it… if they are unmarried, that's the end of their life… who's going to marry you"}
                        patient={"User 2"}
                    />
                </div>

                <div>
                    <UserQuotes
                        quote={"I think they [Muslims who get cosmetic procedures] are judged because it's haram."}
                        patient={"User 3"}
                    />
                </div>

                <div>
                    <UserQuotes
                        quote={"People can be discriminatory towards me because I’m darker than other Arabs as a kid,.. I noticed that people didn't seem to tell me that I was beautiful because I was darker.. And does it affect people seeking out dermatologic care.. .. it has changed the way that I take care of my skin, because I know sunscreen is good for me, because it protects my skin from the sun, but I also like to wear face sunscreen, because I don't want to get darker."}
                        patient={"User 4"}
                    />
                </div>

                <div>
                    <UserQuotes
                        quote={"if it's a procedure, skin biopsy,.. my religious impulse based on both my faith, but also the culture of growing up in an Islamic household, is saying Bismallah or Allaho Akbar when it hurts… I think I’m more self-conscious about doing it in the health care space, so I say it completely under my breath, where they can't tell. There's been times where my mom, who wears the hijab, she has come to appointments with me in the past.. obviously they know she's Muslim, but also she's more comfortable being vocal about it, and I do recognize that I still have that a little bit of insecurity even when she is vocal about saying Bismallah when they're starting a procedure.. I internally jolt a little bit, racing for potential reaction."}
                        patient={"User 5"}
                    />
                </div>

                <div>
                    <UserQuotes
                        quote={"my dermatologist was very much clear when she was suggesting treatments.. where are the areas that she can give maximum impact and the areas where she wasn't very sure. And she did it tell me upfront this is going to be a little expensive, so you can go and think about it. that really helped me take better decision."}
                        patient={"User 6"}
                    />
                </div>

                <div>
                    <UserQuotes
                        quote={"I chose to work with a dermatologist who is also a person of color and minority background, and that's been extremely helpful. I always wonder when I see a physician and dermatologists about how seriously I'm taken. I think when it's just a brown person walking in a room you're not always being taken as seriously."}
                        patient={"User 7"}
                    />
                </div>

                <div>
                    <UserQuotes
                        quote={"When I was on Accutane, I think it had gelatin in the capsules, and it was unlabeled beef or pork or some other source. So I actually had to call the pharmacy and figure that out. It was Pork gelatin, so I had to get a substitute, and I had to do that investigation on my own.."}
                        patient={"User 8"}
                    />
                </div>

                <div>
                    <UserQuotes
                        quote={"I would have it [medication] after iftar.. if I needed to take some medicine, I wouldn't break my fast for it .. so I would just adjust the schedule so that it's within the times when we can break our fast"}
                        patient={"User 9"}
                    />
                </div>

                <div>
                    <UserQuotes
                        quote={"I always ask for a female…. even with the females, they were very respectful, kindly approaching, asking me to take off my scarf or want to check me under the scarf, or my body, etc...."}
                        patient={"User 10"}
                    />
                </div>

                <div>
                    <UserQuotes
                        quote={"My wife is hijabi. It may be uncomfortable for someone who is normally hijabi and fully covered in a clinic, even though it's a private room. People sometimes come in and out clinic rooms, so it may be more difficult to maintain your own sense of perceived modesty… I’m in the relative position of privilege, considering Islamically what an ”Aoura” is for a man. It's much more relaxed than what it is traditionally recommended for women."}
                        patient={"User 11"}
                    />
                </div>

                <div>

                    <UserQuotes
                        quote={"Because Fridays I do my prayers and before I got Dupixent, I would cry at times, because, I have to cover my hair, and then I have to get on a prayer rug, and it was burning my skin."}
                        patient={"User 12"}
                    />
                </div>
            </div>

            <div className="absolute bg-white p-1 rounded-full cursor-pointer top-5 right-3" onClick={() => setPauseAnimation(!pauseAnimation)}>
                
                {
                    !pauseAnimation
                    ?
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 5.25v13.5m-7.5-13.5v13.5" />
                    </svg>
                    :
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M5.25 5.653c0-.856.917-1.398 1.667-.986l11.54 6.348a1.125 1.125 0 010 1.971l-11.54 6.347a1.125 1.125 0 01-1.667-.985V5.653z" />
                    </svg>

                }

            </div>
        </div>
    )
}
