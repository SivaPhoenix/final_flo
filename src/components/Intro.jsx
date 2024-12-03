import React, { useEffect } from 'react';
import img from '../assets/about_us.svg';
import { Link } from 'react-router-dom';
import AOS from 'aos';
import 'aos/dist/aos.css';

const Intro = () => {
    useEffect(() => {
        AOS.init({
            once: true,
            duration: 1000,
            easing: 'ease-out-cubic',
            mirror: false, // Set to true if you want the animation to re-trigger when scrolling back up
        });
    }, []);

    return (
        <div className="m-auto max-w-6xl p-2 md:p-12 h-5/6" id="about">
            <div className="flex flex-col-reverse lg:flex-row py-8 justify-between lg:text-left" data-aos="fade-up">
                {/* Image Section */}
                <div className="lg:w-1/2 flex flex-col lg:mx-4 justify-center" data-aos="fade-left" data-aos-delay="200">
                    <img alt="Intro Illustration" className="rounded-t float-right" src={img} />
                </div>

                {/* Content Section */}
                <div className="flex-col my-4 text-center lg:text-left lg:my-0 lg:justify-end w-full lg:w-1/2 px-8" data-aos="zoom-in" data-aos-delay="500">
                    <h3 className="text-3xl text-blue-900 font-bold" data-aos="fade-up" data-aos-delay="300">
                        Transforming Ideas into Powerful Digital Solutions
                    </h3>
                    <div>
                        <p className="my-3 text-xl text-gray-600 font-semibold" data-aos="fade-up" data-aos-delay="400">
                            Final Flo is your partner in creating high-quality, tailor-made web and mobile applications designed to meet the unique needs of students, organizations, and small-to-medium enterprises.
                        </p>
                    </div>

                    <div>
                        <p className="my-3 text-xl text-gray-600 font-semibold" data-aos="fade-up" data-aos-delay="500">
                            Whether you're automating business processes or crafting a standout final-year project, our team ensures innovative, scalable, and efficient solutions to bring your vision to life.
                        </p>
                    </div>

                    <Link to="/contact" className="text-white bg-blue-900 hover:bg-blue-800 inline-flex items-center justify-center w-full px-6 py-2 my-4 text-lg shadow-xl rounded-2xl sm:w-auto sm:mb-0 group" data-aos="fade-up" data-aos-delay="600">
                        Contact us
                        <svg className="w-4 h-4 ml-1 group-hover:translate-x-2 transition-transform" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                            <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
                        </svg>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default Intro;
