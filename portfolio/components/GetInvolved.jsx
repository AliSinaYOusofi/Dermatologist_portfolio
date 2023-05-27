import React, { useRef, useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

function GetInvolved() {
  const getInvolvedRef = useRef(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const getInvolvedEl = getInvolvedRef.current;

    gsap.from(getInvolvedEl, {
      opacity: 0,
      x: 150,
      duration: 2,
      ease: "easeInOut",
      scrollTrigger: {
        trigger: getInvolvedEl,
        start: 'bottom bottom',
        end: 'bottom bottom',
        scrub: 4,
        toggleActions: "play pause resume reset",
      },
    });
  }, []);

  return (
    <div
      className="bg-gray-50 p-8 w-[90%] mx-auto rounded-md"
      id="get-involved"
      ref={getInvolvedRef}
    >
      <h1 className="block text-3xl font-bold text-gray-800 sm:text-4xl md:text-5xl lg:text-6xl">
        Get Involved? Interested in collaboration?
      </h1>

      <p className=" mb-4 mt-4">
        Interested in collaboration? If you’re a patient who received dermatology
        care from a primary care doctor or a dermatology, please take this survey{" "}
        <a
          href="survey-link-here"
          className="text-blue-600 underline hover:no-underline"
        >
          [survey-link-here]
        </a>
        . We will be offering $30 gift card to every 20th participant (e.g., 20th,
        40th, 60th, etc). This might be you! It is a great way to contribute to our
        current understanding of Muslim Middle Eastern and South Asian skin and
        dermatology care.
      </p>

      <p className="mb-4">
        If you’re a community organization interested in bringing dermatology
        education to your members, we would love to work with you to co-host
        events.
      </p>
      <p className=" mb-4">
        If you’re a researcher and interested in collaborating or need our help to
        recruit participants from the Muslim Middle Easter or South Asian
        population, we have lots of connections to help with that!
      </p>
    </div>
  );
}

export default GetInvolved;