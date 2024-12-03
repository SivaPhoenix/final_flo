import React from 'react';
import emailjs from 'emailjs-com';
import { Link } from 'react-router-dom';

const Contact = () => {
    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm(
            'service_bg909gg', // Your Service ID
            'template_f6gymbu', // Your Template ID
            e.target,
            'C2iNVomxI1ccNzlwO' // Your Public Key
        )
        .then((result) => {
            console.log('Email sent successfully:', result.text);
            alert('Message sent successfully!');
        })
        .catch((error) => {
            console.error('Error sending email:', error.text);
            alert('Failed to send message. Please try again later.');
        });

        e.target.reset(); // Reset the form after submission
    };

    return (
        <>
            <div className="m-auto max-w-6xl p-2 md:p-12 h-5/6" id='contact'>

                <div className="flex flex-col lg:flex-row py-8 justify-between lg:text-left" data-aos="fade-up">
                    {/* Form Section */}
                    <div className="lg:w-1/2 flex flex-col justify-center px-8">
                        <h3 className="text-3xl text-blue-900 font-bold mb-4">
                            Get in Touch with Final Flo
                        </h3>
                        <p className='mb-6 text-xl text-gray-600 font-semibold'>
                            We'd love to hear from you! Whether you have a project in mind or just want to ask a question, fill out the form below or reach out to us directly.
                        </p>

                        <form onSubmit={sendEmail} className="space-y-4">
                            <div>
                                <label htmlFor="name" className="block text-gray-700 font-medium mb-2">Name</label>
                                <input
                                    type="text"
                                    name="name"
                                    id="name"
                                    className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
                                    placeholder="Your Name"
                                    required
                                />
                            </div>

                            <div>
                                <label htmlFor="email" className="block text-gray-700 font-medium mb-2">Email</label>
                                <input
                                    type="email"
                                    name="email"
                                    id="email"
                                    className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
                                    placeholder="Your Email"
                                    required
                                />
                            </div>

                            <div>
                                <label htmlFor="phone" className="block text-gray-700 font-medium mb-2">Phone</label>
                                <input
                                    type="tel"
                                    name="phone"
                                    id="phone"
                                    className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
                                    placeholder="Your Phone Number"
                                    required
                                />
                            </div>

                            <div>
                                <label htmlFor="message" className="block text-gray-700 font-medium mb-2">Message</label>
                                <textarea
                                    name="message"
                                    id="message"
                                    rows="5"
                                    className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
                                    placeholder="Your Message"
                                    required
                                ></textarea>
                            </div>

                            <button
                                type="submit"
                                className="bg-blue-900 text-white py-3 px-6 rounded-lg text-lg font-medium hover:bg-blue-800 transition duration-300">
                                Send Message
                            </button>
                        </form>
                    </div>

                    {/* Contact Info Section */}
                    <div className="lg:w-1/2 flex flex-col justify-center px-8 mt-8 lg:mt-0">
                        <h3 className="text-3xl text-blue-900 font-bold mb-4">
                            Contact Information
                        </h3>
                        <p className="mb-4 text-xl text-gray-600 font-semibold">
                            You can also reach us through the following channels:
                        </p>
                        <ul className="space-y-3 text-gray-600">
                            <li><strong>Email:</strong> <a href="mailto:sivasriram1206@gmail.com" className="text-blue-800 hover:underline">sivasriram1206@gmail.com</a></li>
                            <li><strong>Phone:</strong> 8838270416</li>
                        </ul>
                        <div className="mt-6">
                            <Link to="/" className="text-white bg-blue-900 hover:bg-blue-800 inline-flex items-center justify-center w-full px-6 py-2 text-lg shadow-xl rounded-2xl sm:w-auto sm:mb-0 group">
                                Back to Home
                                <svg className="w-4 h-4 ml-1 group-hover:translate-x-2 transition-transform" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                                    <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
                                </svg>
                            </Link>
                        </div>
                    </div>
                </div>

            </div>
        </>
    );
};

export default Contact;
