import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { TypeAnimation } from 'react-type-animation';
import { FaArrowUp } from 'react-icons/fa';
import { FiMail } from 'react-icons/fi';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import heroImage1 from '../assets/images/Fortuner1.png';
import heroImage2 from '../assets/images/Fortuner2.png';
import heroImage3 from '../assets/images/Fortuner3.png';

const Hero = () => {
    const [showScrollToTop, setShowScrollToTop] = useState(false);
    const [showAlert, setShowAlert] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 300) {
                setShowScrollToTop(true);
            } else {
                setShowScrollToTop(false);
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    const handleSayHelloClick = () => {
        if (!showAlert) {
            toast('Hello friend!');
            setShowAlert(true);
            setTimeout(() => {
                setShowAlert(false);
            }, 6000);
        }
    };

    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
    };

    return (
        <div>
            <div id="#" className="bg-gray-200 bg-opacity-90 py-20 px-6 md:px-10 md:flex md:items-center" style={{ minHeight: '100vh' }}>
                <motion.div 
                    initial={{ opacity: 0, x: -100 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 1, ease: 'easeInOut' }}
                    className="md:w-1/2 md:pr-10 mt-4"
                >
                    <h1 className="text-gray-900 text-3xl font-bold mb-2" style={{ fontFamily: 'Poppins, sans-serif' }}>
                        <span>Selamat Datang di </span> <span className="text-blue-800">Dealer Resmi Toyota Bandung</span>
                    </h1>
                    <TypeAnimation
                        sequence={[
                            'Servis Berkala',
                            1000,
                            'Penjualan Mobil',
                            1000,
                            'Test Drive',
                            1000,
                            'Layanan Pembiayaan',
                            1000
                        ]}
                        wrapper="span"
                        speed={10}
                        style={{ fontSize: '1.5em', display: 'inline-block', color: '#4A5568', fontFamily: 'Poppins, sans-serif' }}
                        repeat={Infinity}
                    />
                    <p className="mt-4 text-lg text-gray-600" style={{ fontFamily: 'Open Sans, sans-serif' }}>
                        Selamat datang di website resmi Tunas Toyota, dealer resmi mobil Toyota termurah di Bandung! Kami hadir untuk memberikan layanan terbaik bagi Anda yang mencari mobil Toyota berkualitas dengan harga terjangkau.
                        Melayani Pemesanan Seluruh Wilayah Jawa Barat dan DKI Jakarta.
                    </p>
                    <button
                        className='btn border border-blue-800 text-blue-800 px-4 py-2 mt-4 hover:bg-blue-800 hover:text-white transition duration-300 rounded-md flex items-center'
                        onClick={handleSayHelloClick}
                    >
                        Contact Me <FiMail className="ml-2" />
                    </button>
                </motion.div>
                <motion.div 
                    initial={{ opacity: 0, x: 100 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 1, ease: 'easeInOut' }}
                    className="md:w-1/2 mt-10 md:mt-0 relative"
                >
                    <div className="relative flex justify-center items-center h-96 md:h-screen">
                        <svg
                            className="absolute w-full h-full"
                            viewBox="0 0 200 200"
                            xmlns="http://www.w3.org/2000/svg"
                            style={{ zIndex: 1 }}
                        >
                            <path
                                fill="#0033A0"
                                d="M40.2,-60.5C49.7,-52.4,50.4,-34.2,53.1,-19.2C55.9,-4.2,60.8,7.6,59.6,19.8C58.4,32.1,51.1,44.9,40.3,52.7C29.6,60.5,14.8,63.2,1.8,60.8C-11.2,58.4,-22.3,51,-34.7,44.5C-47.1,38,-60.9,32.4,-63.6,22.5C-66.2,12.7,-57.7,-1.4,-51.1,-14.1C-44.5,-26.7,-39.8,-37.9,-31.7,-47.1C-23.6,-56.4,-11.8,-63.8,2.8,-66.9C17.4,-70.1,34.8,-68.7,40.2,-60.5Z"
                                transform="translate(100 100)"
                            />
                        </svg>
                        <Slider {...settings} className="relative z-10 w-full max-w-2xl">
                            <motion.img
                                whileHover={{ scale: 1.1, cursor: 'pointer' }}
                                animate={{ y: [0, -10, 0], transition: { duration: 3, repeat: Infinity, ease: 'easeInOut' } }}
                                src={heroImage1}
                                alt="Hero Image 1"
                                className="w-full"
                            />
                            <motion.img
                                whileHover={{ scale: 1.1, cursor: 'pointer' }}
                                animate={{ y: [0, -10, 0], transition: { duration: 3, repeat: Infinity, ease: 'easeInOut' } }}
                                src={heroImage2}
                                alt="Hero Image 2"
                                className="w-full"
                            />
                            <motion.img
                                whileHover={{ scale: 1.1, cursor: 'pointer' }}
                                animate={{ y: [0, -10, 0], transition: { duration: 3, repeat: Infinity, ease: 'easeInOut' } }}
                                src={heroImage3}
                                alt="Hero Image 3"
                                className="w-full"
                            />
                        </Slider>
                    </div>
                </motion.div>
            </div>
            {showScrollToTop && (
                <button
                    onClick={scrollToTop}
                    className="fixed bottom-4 right-4 bg-blue-800 text-white p-3 z-50 rounded-full shadow-lg hover:bg-blue-900 transition duration-300"
                >
                    <FaArrowUp className="h-6 w-6" />
                </button>
            )}
            <ToastContainer />
        </div>
    );
};

export default Hero;
