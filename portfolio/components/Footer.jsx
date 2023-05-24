import Link from 'next/link';

function Footer() {
  return (
    <footer className="bg-gray-50 w-[90%] mx-auto rounded-md  m-4">
        
        
        <div className="w-full max-w-screen-xl mx-auto p-4 md:py-8">
            
            <div className="sm:flex sm:items-center sm:justify-between">
                
                <div className="md:w-2/3">
                    <Link href="/" className="">
                        <span className="flex w-fit items-center mb-4 sm:mb-0">
                        <span className="self-center text-2xl font-semibold whitespace-nowrap w-fit">LOGO</span>
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
            
            <div className="mt-6 lg:mt-12  flex gap-x-3 items-center  justify-start">
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
            <hr className="my-6 border-gray-200 sm:mx-auto  lg:my-8" />
            <span className="block text-sm text-gray-500 sm:text-center ">© 2023 <Link href="/">Logo™</Link></span>
        
        </div>
    </footer>
  );
}

export default Footer;