import React, { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import Slider from 'react-slick';
import promotion1 from '../assets/images/promotion1.jpg';
import promotion2 from '../assets/images/promotion2.jpg';
import promotion3 from '../assets/images/promotion3.jpg';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Modal from 'react-modal';
import { FaTimes } from 'react-icons/fa';

const promotions = [
    {
        title: "Summer Sale",
        description: "Get up to 20% off on selected models this June. Limited time offer!",
        image: promotion1,
    },
    {
        title: "Free Maintenance",
        description: "Enjoy one year of free maintenance with every new car purchase this month.",
        image: promotion2,
    },
    {
        title: "Special Financing",
        description: "Low interest rates available for all customers. Apply now and drive your dream car.",
        image: promotion3,
    },
    {
        title: "Trade-In Bonus",
        description: "Get a bonus on your trade-in vehicle when you buy a new car from us.",
        image: promotion3,
    },
];

Modal.setAppElement('#root');

const Promotion = () => {
    const [modalIsOpen, setModalIsOpen] = useState(false);
    const [selectedImage, setSelectedImage] = useState(null);
    const modalRef = useRef();

    useEffect(() => {
        if (modalIsOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'unset';
        }
    }, [modalIsOpen]);

    const openModal = (image) => {
        setSelectedImage(image);
        setModalIsOpen(true);
    };

    const closeModal = () => {
        setModalIsOpen(false);
        setSelectedImage(null);
    };

    const handleClickOutside = (event) => {
        if (modalRef.current && !modalRef.current.contains(event.target)) {
            closeModal();
        }
    };

    useEffect(() => {
        if (modalIsOpen) {
            document.addEventListener('mousedown', handleClickOutside);
        } else {
            document.removeEventListener('mousedown', handleClickOutside);
        }
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, [modalIsOpen]);

    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 2,
                },
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 1,
                },
            },
        ],
    };

    return (
        <div>
            <div className={`py-16 bg-gray-100 ${modalIsOpen ? 'blur-container' : ''}`} id='promotion'> 
                <motion.div
                    className="max-w-7xl mx-auto text-center"
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1, ease: "easeInOut" }}
                >
                    <h2 className="text-4xl font-bold text-gray-800 sm:text-5xl">
                        June Promotions
                    </h2>
                    <p className="mt-4 text-lg leading-6 text-gray-700">
                        Check out our exclusive deals and offers for this month.
                    </p>
                </motion.div>
                <div className="mt-12 max-w-7xl mx-auto">
                    <Slider {...settings}>
                        {promotions.map((promotion, index) => (
                            <motion.div
                                key={index}
                                className="relative p-4 bg-white rounded-lg shadow-md overflow-hidden cursor-pointer group mx-2"
                                onClick={() => openModal(promotion.image)}
                                initial={{ opacity: 0, y: 50 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 1, delay: index * 0.2 }}
                            >
                                <motion.img
                                    src={promotion.image}
                                    alt={promotion.title}
                                    className="w-full h-96 object-cover transition-transform duration-300 transform group-hover:scale-110"
                                />
                            </motion.div>
                        ))}
                    </Slider>
                </div>
            </div>
            {selectedImage && (
                <Modal
                    isOpen={modalIsOpen}
                    onRequestClose={closeModal}
                    contentLabel="Promotion Image"
                    className="fixed inset-0 flex items-center justify-center p-4 z-50"
                    overlayClassName="fixed inset-0 bg-black bg-opacity-50"
                >
                    <div ref={modalRef} className="relative bg-white p-4 rounded-lg shadow-lg max-w-2xl w-full overflow-hidden z-50">
                        <button
                            onClick={closeModal}
                            className="absolute top-2 right-2 text-gray-600 hover:text-gray-900 transition-colors"
                        >
                            <FaTimes size={24} />
                        </button>
                        <img src={selectedImage} alt="Promotion" className="w-full h-auto rounded-md"/>
                    </div>
                </Modal>
            )}
        </div>
    );
};

export default Promotion;
