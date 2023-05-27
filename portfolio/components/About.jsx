import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

function About() {
    const containerRef = useRef(null);

    useEffect(() => {
        gsap.registerPlugin(ScrollTrigger);

        const container = containerRef.current;
        const children = container.children;

        gsap.from(children, {
            
            y: 50,
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
        <div id="about" className="bg-gray-50 rounded-md p-8 w-[90%] mx-auto" ref={containerRef}>
            <h1 className="block text-3xl font-bold text-gray-800 sm:text-4xl md:text-5xl lg:text-6xl"> About ME</h1>
            <p className="mb-4 mt-4">
                Ghida, a graduating medical student at the Stanford University School of Medicine, has been working with the
                Stanford Dermatology Department to understand the Muslim Middle Eastern and South Asian patient experience in
                dermatology. She is a 2nd generation Palestinian refugee who grew up in Lebanon. As someone who grew up in a
                marginalized community with limited access to health care, Ghida is passionate about advancing dermatology care
                for minority populations, especially those who are not traditionally represented in dermatology. Ghida is
                starting her medicine preliminary year at the Massachusetts General Hospital- Harvard Program and is excited
                to carry forward this project and collaborate across institutions.
            </p>
            <h2 className="block mt-10 text-3xl font-bold text-gray-800 sm:text-4xl md:text-5xl lg:text-6xl">What we do Research
                Summary</h2>
            <p className="mb-4 mt-4">
                In collaboration with the Stanford Dermatology Department, the Office of Community Engagement, Stanford Muslim
                Medical Association, the Markaz Resource Center at Stanford, and the Muslim Community Association in Santa Clara
                on a project to understand the perceptions of Muslim Middle Eastern and South Asian patients of their
                dermatology care. This mixed methods study (surveys and interviews) explores the impact of ongoing sociopolitical
                lived experiences (e.g., Islamophobia, colorism) on patients’ health-seeking behavior in dermatology and cultural
                and religious accommodations pertinent to their dermatology care 1 (e.g., medication scheduling during Ramadan,
                halal medication ingredients, modesty during skin checks).
            </p>
            <h2 className="mb-4 text-2xl font-bold mt-10">Participate in the study</h2>
            <p className="mb-4">
                If you’re a patient who received dermatology care from a primary care doctor or a dermatology, please take this
                survey{' '}
                <a href="#" className="text-blue-600 underline hover:no-underline">
                [survey-link-here]
                </a>
                . We will be offering $30 gift card to every 20th participant (e.g., 20th, 40th, 60th, etc). This might be
                you! It is a great way to contribute to our current understanding of Muslim Middle Eastern and South Asian skin
                and dermatology care.
            </p>
            <h2 className="block mt-10 text-3xl font-bold text-gray-800 sm:text-4xl md:text-5xl lg:text-6xl">Community Initiatives
                and Collaboration</h2>
            <p className="mb-4 mt-4">
                We are awarded the Valley Fellowship through the Stanford Office of Community Engagement and the Markaz Graduate
                Student Mini-Grants to bring dermatology and education to the community. We hold events and office hours in the
                community. We aim to increase access to dermatology education in the community, create a platform for community
                members to interact with and learn from healthcare providers, normalize sensitive yet important dermatology
                topics (e.g., full-body skin check), and bridge the gap between academic institutions and community groups.
            </p>
        </div>
  );
}

export default About;