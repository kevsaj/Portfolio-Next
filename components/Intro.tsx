import React from 'react';
import Image from 'next/image'

function Intro() {

    return (
        <>

            <div className="pt-4 mx-auto">
                <div className="flex flex-col md:mx-20 mx-2 bg-gradient-to-b from-transparent to-pink-200 rounded-3xl h-auto opacity-80">
                    <div className="justify-center space-between mx-auto">
                        <a href="https://www.linkedin.com/in/kevin-s-24700b203/" target="_blank" rel="noopener noreferrer"><button className='hidden md:inline items-center mr-3 border border-blue-400 hover:bg-blue-800 hover:text-white rounded outline-none focus:outline-none bg-transparent text-blue-300 text-sm py-1 px-2'>LinkedIn</button></a>
                        <a href="https://github.com/kevsaj" target="_blank" rel="noopener noreferrer"><button className='items-center mr-3 border border-purple-400 hover:bg-purple-800 hover:text-white rounded outline-none focus:outline-none bg-transparent text-purple-300 text-sm py-1 px-2'>Github</button></a>
                        <Image src='/self.png' alt="self" width={150} height={150} className="rounded-full flex items-center border-pink-200 border-opacity-100 border-4 object-cover" />
                        <a href="/Kevin Sajan Resume.pdf" download="Resume"><button className='items-center ml-3 border border-red-400 hover:bg-red-500 hover:text-white rounded outline-none focus:outline-none bg-transparent text-red-300 text-sm py-1 px-2'>Resume</button></a>
                        <a href="#Projects"><button className='hidden md:inline items-center ml-3 border border-green-400 hover:bg-green-500 hover:text-white rounded outline-none focus:outline-none bg-transparent text-green-300 text-sm py-1 px-2'>Projects</button></a>
                    </div>
                    <div className="m-2 justify-center mx-auto">
                        <h1 className="font-extrabold text-lg">Kevin Sajan</h1>
                    </div>
                    <div className="mb-2 px-2 md:px-1 justify-center mx-auto">
                        <h2 className="font-semibold md:px-32 text-md">Full Stack Web Developer known as an innovative problem-solver passionate about developing web apps, with a focus on intuitive Front-End design. Strengths in creativity, meeting deadlines, and teamwork.</h2>
                    </div>
                    <div className="mb-4 justify-center mx-auto">
                        <h2 className="font-light text-md">Toronto, Canada</h2>
                    </div>
                </div>
            </div>

        </>
    );
}

export default Intro