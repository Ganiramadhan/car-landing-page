import React from 'react';
import { motion } from 'framer-motion';

const services = [
    {
        title: "Car Sales",
        description: "We offer a wide range of new and pre-owned vehicles to fit your lifestyle and budget.",
        icon: "🚗",
    },
    {
        title: "Maintenance & Repairs",
        description: "Our expert technicians are here to provide top-notch maintenance and repair services.",
        icon: "🛠️",
    },
    {
        title: "Financing",
        description: "Get the best financing options available with our in-house finance team.",
        icon: "💰",
    },
    {
        title: "Test Drives",
        description: "Schedule a test drive today to experience your favorite car up close.",
        icon: "🛣️",
    },
];

const MyService = () => {
    return (
        <div className="py-16 bg-gray-100" id='myService'>
            <motion.div
                className="max-w-7xl mx-auto text-center"
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, ease: "easeInOut" }}
            >
                <h2 className="text-4xl font-bold text-gray-800 sm:text-5xl">
                    Our Services
                </h2>
                <p className="mt-4 text-lg leading-6 text-gray-700">
                    Discover the range of services we offer to meet all your automotive needs.
                </p>
            </motion.div>
            <div className="mt-12 max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                {services.map((service, index) => (
                    <motion.div
                        key={index}
                        className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300"
                        initial={{ opacity: 0, y: 50 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1, delay: index * 0.2 }}
                    >
                        <div className="text-5xl mb-4">{service.icon}</div>
                        <h3 className="text-2xl font-semibold text-gray-800 mb-2">
                            {service.title}
                        </h3>
                        <p className="text-gray-600">
                            {service.description}
                        </p>
                    </motion.div>
                ))}
            </div>
        </div>
    );
};

export default MyService;
