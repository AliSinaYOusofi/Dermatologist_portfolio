"use client";

import React, { useState } from 'react'

export default function Contact() {

    const [email, setEmail] = useState("");
    const [subject, setSubject] = useState("");
    const [messageBody, setMessageBody] = useState("");
    const [emailResponse, setEmailResponse] = useState();
    const [errorMessage, setErrorMessage] = useState();

    const handleEmailSubmitButton = async (event) => {

        event.preventDefault();

        if (! /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) return setErrorMessage('Invalid email');
        
        else if (subject.length < 1) return setErrorMessage('Subject must be at least 1 characters long');
        
        else if (messageBody.length < 3) return setErrorMessage('Message body must be at least 3 characters long');

        const data = {
            email,
            subject,
            messageBody
        }
        setErrorMessage(null)
        try {

            let response = fetch("/api/email", {
                
                method: "POST",

                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(data)
            });

            let json = await response.json();

            if ( json.message === "EmailSentSuccessfully" ) {
                alert("Your message has been sent successfully");
                setEmail(null);
                setSubject(null);
                setMessageBody(null);
            }
            setEmailResponse(json.message);
        } catch (error) {
            console.log(error);
            setEmailResponse("Error Sending Email")
        }
    }
    return (
        <section id="contact" className="bg-white ">
            
            <div className="py-8 lg:py-16 px-4 mx-auto max-w-screen-md">
                
                <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-center text-gray-900 ">Contact Us</h2>
                <p className="mb-8 lg:mb-16 font-light text-center text-gray-500 sm:text-xl">Do you have a skin concern or a medical question? Are you looking for advice on your skincare routine? Looking to schedule an appointment with a dermatologist? Let us know how we can help.</p>
                
                <form action="#" className="space-y-8">
                    <div>
                        <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900 ">Your email</label>
                        <input onChange={(e) => setEmail(e.target.value)} type="email" id="email" className="shadow-sm bg-gray-50 border  text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5  border-gray-600 placeholder-gray-400 " placeholder="name@flowbite.com" required />
                    </div>

                    <div>
                        <label htmlFor="subject" className="block mb-2 text-sm font-medium text-gray-900">Subject</label>
                        <input onChange={(e) => setSubject(e.target.value)} type="text" id="subject" className="block p-3 w-full text-sm text-gray-900  rounded-lg border  shadow-sm focus:ring-primary-500 focus:border-primary-500 bg-gray-50 border-gray-600 placeholder-gray-400 " placeholder="Let us know how we can help you" required />
                    </div>

                    <div className="sm:col-span-2">
                        <label htmlFor="message" className="block mb-2 text-sm font-medium text-gray-900 ">Your message</label>
                        <textarea onChange={(e) => setMessageBody(e.target.value)} id="message" rows="6" className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg shadow-sm border border-gray-300 focus:ring-primary-500 focus:border-primary-500 placeholder-gray-400 focus:ring-primary-500 focus:border-primary-500" placeholder="Leave a comment..."></textarea>
                    </div>
                    
                    <div className={`${emailResponse ? "block" : "hidden"} transition-[display] duration-200`}>
                        
                        {
                            emailResponse === "EmailSentSuccessfully" && email
                            ?
                            <p className="p-4 bg-green-500 rounded-md text-white"> {emailResponse}</p>
                            :
                            <p className="p-4 bg-red-500 rounded-md text-white"> {emailResponse}</p>
                        }
                        
                    </div>
                    {errorMessage && <p className="text-white bg-red-500 rounded-md p-4 border-none outline-none">{errorMessage}</p>}
                    <button onClick={handleEmailSubmitButton} type="submit" className="py-3 px-5 text-sm font-medium text-center bg-blue-600 text-white rounded-sm outline-none border-none hover:bg-blue-700 focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-50 focus:ring-blue-500 transition-all duration-300">Send message</button>
                </form>
            </div>
      </section>
    )
    }
