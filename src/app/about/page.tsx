"use client"
import * as React from 'react';
import Testimonials from './Testimonials';
const About = () => {
  return (
    <>
      <section>
        <div className="min-h-screen text-center bg-white dark:bg-black   py-20 md:py-16 px-8 sm:px-10 lg:px-8">
          <div className="relative text-center mx-auto inline-block w-max [filter:drop-shadow(0px_1px_3px_rgba(27,_37,_80,_0.14))]">
            <div className="absolute text-2xl font-bold md:text-5xl left-0 top-[1px] bg-clip-text bg-no-repeat text-transparent bg-gradient-to-r py-4 from-purple-500 via-violet-500 to-pink-500 [text-shadow:0_0_rgba(0,0,0,0.1)]">
              <span>About Us</span>
            </div>
            <div className="relative text-2xl md:text-5xl font-bold bg-clip-text text-transparent bg-no-repeat bg-gradient-to-r from-purple-500 via-violet-500 to-pink-500 py-4">
              <span>About Us</span>
            </div>
          </div>
          <section className="text-gray-600 body-font">
            <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
              <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 mb-10 md:mb-0">
                <img className="object-cover object-center rounded" alt="hero" src="./team.jpg" />
              </div>
              <div className="lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left items-center text-center">
                <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900 dark:text-gray-300">Join the Developer Community
                </h1>
                <p className="mb-8 leading-relaxed text-gray-800 dark:text-gray-400">Connect with other developers by sharing your coding journey, collaborating on projects, and learning from the community. Whether you're a beginner or an experienced coder, this platform offers a space to exchange ideas, ask questions, and gain valuable insights to enhance your skills and grow as a developer.</p>
                <div className="flex justify-center">
                  <button className="inline-flex text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg">Lets start sharing</button>
                </div>
              </div>
            </div>
          </section>
          <Testimonials />
        </div>
      </section>
    </>
  );
};

export default About;