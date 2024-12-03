import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import NavBar from '../components/Navbar/Navbar';
import heroImg from '../assets/intro.svg';
import AOS from 'aos';
import 'aos/dist/aos.css';

const Hero = () => {
    useEffect(() => {
        AOS.init({
            once: true,
            duration: 1000,
            easing: 'ease-out-cubic',
            mirror: false, // Set to true if you want the animation to re-trigger when scrolling back up
        });
    }, []);

    return (
        <div className="hero" id="hero">
            <div>
                <NavBar />
            </div>

            <div className="m-auto overflow-hidden mx-4 mt-8 lg:mt-4 p-2 md:p-12 h-5/6" data-aos="zoom-in">
                <div id="hero" className="flex flex-col lg:flex-row py-8 justify-between text-center lg:text-left">
                    {/* Left Content */}
                    <div className="lg:w-1/2 flex flex-col justify-center" data-aos="fade-right" data-aos-delay="200">
                        <h1 className="mb-5 md:text-5xl text-3xl font-bold text-blue-900">
                            Empowering Final-Year Projects and Business Growth
                        </h1>
                        <p className="text-xl font-semibold tracking-tight mb-5 text-gray-500">
                            At Final Flo, we provide innovative final-year project solutions and web applications to help engineering students and businesses thrive in the digital era.
                        </p>
                        <div className="mb-4 space-x-0 md:space-x-2 md:mb-8">
                            {/* <Link to="/projects" className="bg-blue-600 hover:bg-blue-800 text-white py-3 px-5 rounded-lg text-lg font-medium transition duration-300">
                                Explore Projects
                            </Link> */}
                            <Link to="/contact" className="bg-gray-200 hover:bg-gray-300 text-blue-800 py-3 px-5 rounded-lg text-lg font-medium transition duration-300">
                                Contact Us
                            </Link>
                        </div>
                    </div>

                    {/* Right Content */}
                    <div className="flex lg:justify-end w-full lg:w-1/2" data-aos="fade-up" data-aos-delay="700">
                        <img alt="hero" className="rounded-t float-right duration-1000 w-full" src={heroImg} />
                    </div>
                </div>

                {/* Additional Section */}
                <div className="mt-16">
                    <h2 className="text-2xl md:text-4xl font-bold text-center text-blue-900 mb-8" data-aos="fade-up">
                        Why Choose Final Flo?
                    </h2>
                    <div className="flex flex-col md:flex-row justify-around items-center text-center space-y-8 md:space-y-0">
                        <div className="max-w-sm p-4" data-aos="flip-left" data-aos-delay="100">
                            <h3 className="text-xl font-semibold text-blue-800 mb-3">Innovative Project Solutions</h3>
                            <p className="text-gray-600">We specialize in providing cutting-edge projects tailored for engineering students to excel in their academics.</p>
                        </div>
                        <div className="max-w-sm p-4" data-aos="flip-left" data-aos-delay="200">
                            <h3 className="text-xl font-semibold text-blue-800 mb-3">Custom Web Applications</h3>
                            <p className="text-gray-600">Our team builds responsive and scalable web solutions for businesses to grow their online presence.</p>
                        </div>
                        <div className="max-w-sm p-4" data-aos="flip-left" data-aos-delay="300">
                            <h3 className="text-xl font-semibold text-blue-800 mb-3">Dedicated Support</h3>
                            <p className="text-gray-600">From ideation to implementation, we provide end-to-end support for all our services.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Hero;
