import 'leaflet/dist/leaflet.css';
import React, { useState } from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import { FaPaperPlane } from 'react-icons/fa';
import { icon as leafletIcon } from 'leaflet';
import { motion } from 'framer-motion';
import placeHolderMap from '../assets/images/placeholder.png';

const Contact = () => {
    const customIcon = leafletIcon({
        iconUrl: placeHolderMap,
        iconSize: [30, 30],
        iconAnchor: [15, 15],
    });

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');

    const resetInput = () => {
        setName('');
        setEmail('');
        setMessage('');
    };

    const handleFormSubmit = () => {
        const whatsappMessage = `https://wa.me/6283878624702?text=Hello!%0AName:%20${encodeURIComponent(name)}%0AEmail:%20${encodeURIComponent(email)}%0AMessage:%20${encodeURIComponent(message)}`;
        window.open(whatsappMessage);
        resetInput();
    };

    return (
        <div className="py-10 bg-gray-100" id='contact'>
            <section>
                <motion.div
                    className="max-w-7xl mx-auto text-center"
                    initial={{ opacity: 0, y: 100 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1.5, ease: "easeInOut" }}
                >
                    <h2 className="text-4xl font-bold text-gray-800 sm:text-5xl">
                        Contact Us
                    </h2>
                    <p className="mt-4 text-lg leading-6 text-gray-700">
                        Interested in a car? Have questions about our services? Fill out the form below to get in touch with our team.
                    </p>
                </motion.div>
                <div className="mt-12 max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8">
                    <motion.div
                        className="h-96 lg:h-auto z-10 bg-white shadow-lg rounded-md"
                        initial={{ opacity: 0, x: -100 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 1.5, ease: "easeInOut" }}
                    >
                        <MapContainer center={[-6.8884592, 107.6273503]} zoom={15} scrollWheelZoom={false} className="h-full w-full rounded-md z-0">
                            <TileLayer
                                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                            />
                            <Marker position={[-6.8884592, 107.6273503]} icon={customIcon}>
                                <Popup>
                                    Car Dealership
                                </Popup>
                            </Marker>
                        </MapContainer>
                    </motion.div>
                    <motion.div
                        className=""
                        initial={{ opacity: 0, x: 100 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 1.5, ease: "easeInOut" }}
                    >
                        <form className="grid grid-cols-1 gap-y-6" onSubmit={(e) => { e.preventDefault(); handleFormSubmit(); }}>
                            <div>
                                <label htmlFor="name" className="sr-only">
                                    Name
                                </label>
                                <input
                                    type="text"
                                    name="name"
                                    id="name"
                                    autoComplete="name"
                                    required
                                    value={name}
                                    onChange={(e) => setName(e.target.value)}
                                    className="block w-full shadow-sm py-3 px-4 placeholder-gray-500 focus:ring-blue-500 focus:border-blue-500 border-gray-300 rounded-md bg-white text-gray-900"
                                    placeholder="Your Name"
                                    style={{ border: '1px solid #4b5563', outline: 'none' }}
                                />
                            </div>
                            <div>
                                <label htmlFor="email" className="sr-only">
                                    Email
                                </label>
                                <input
                                    type="email"
                                    name="email"
                                    id="email"
                                    autoComplete="email"
                                    required
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    className="block w-full shadow-sm py-3 px-4 placeholder-gray-500 focus:ring-blue-500 focus:border-blue-500 border-gray-300 rounded-md bg-white text-gray-900"
                                    placeholder="Your Email"
                                    style={{ border: '1px solid #4b5563', outline: 'none' }}
                                />
                            </div>
                            <div>
                                <label htmlFor="message" className="sr-only">
                                    Message
                                </label>
                                <textarea
                                    id="message"
                                    name="message"
                                    rows="4"
                                    required
                                    value={message}
                                    onChange={(e) => setMessage(e.target.value)}
                                    className="block w-full shadow-sm py-3 px-4 placeholder-gray-500 focus:ring-blue-500 focus:border-blue-500 border-gray-300 rounded-md bg-white text-gray-900"
                                    placeholder="Your Message (e.g., I am interested in the 2022 Model S. Can I schedule a test drive?)"
                                    style={{ border: '1px solid #4b5563', outline: 'none' }}
                                ></textarea>
                            </div>
                            <div>
                                <button
                                    type="submit"
                                    className="inline-flex items-center justify-center py-3 px-6 border-2 border-blue-500 text-base font-medium rounded-md text-blue-500 bg-white hover:bg-blue-500 hover:text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-400 transition-all duration-300"
                                >
                                    <FaPaperPlane className="mr-2" />
                                    Send Message
                                </button>
                            </div>
                        </form>
                    </motion.div>
                </div>
            </section>
        </div>
    );
};

export default Contact;
