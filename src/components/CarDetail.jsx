import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import carData from '../utils/CarData';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import { FaHome, FaChevronDown, FaChevronUp } from 'react-icons/fa';
import logoImage from '../assets/images/icon.png';


const CarDetail = () => {
    const { id } = useParams();
    const car = carData.find(car => car.id === parseInt(id));
    const [activeTab, setActiveTab] = useState('description');
    const [accordionState, setAccordionState] = useState({
        engine: false,
        exterior: false,
        interior: false,
        safety: false,
    });

    const toggleAccordion = (section) => {
        setAccordionState(prevState => ({
            ...prevState,
            [section]: !prevState[section]
        }));
    };

    if (!car) {
        return <div className="container mx-auto px-6 py-10 text-center">Car not found</div>;
    }

    return (
        <div className="car-detail-container mx-auto px-4 sm:px-6 lg:px-8 py-32">
            <nav className="mb-8 text-gray-700 text-lg">
                <Link to="/" className="hover:underline flex items-center text-blue-500">
                    <FaHome className="inline-block mr-1" /> Home
                </Link> / <span>{car.name}</span>
            </nav>

            <div className="car-detail flex flex-col md:flex-row gap-8 mb-12">
                <div className="w-full md:w-1/2">
                    <div className="bg-white p-8 rounded-lg shadow-lg">
                        <img src={logoImage} alt={car.name} className=" h-10 object-contain rounded mb-4" />
                        <Carousel showThumbs={false} infiniteLoop useKeyboardArrows autoPlay>
                            {car.images.map((image, index) => (
                                <div key={index}>
                                    <img src={image} alt={car.name} className="w-full h-96 object-contain rounded mb-4" />
                                </div>
                            ))}
                        </Carousel>
                    </div>
                </div>
                <div className="w-full md:w-1/2">
                    <div className="bg-white p-8 rounded-lg shadow-lg">
                        <h2 className="text-4xl font-bold text-gray-700 mb-4" style={{ fontFamily: 'Poppins, sans-serif' }}>{car.name}</h2>
                        <p className="text-gray-700 font-bold text-xl mb-4">{car.price}</p>
                        <div className="flex mb-4">
                            {car.specifications.colorOptions.map((color, index) => (
                                <span key={index} className="inline-block w-6 h-6 rounded-full border-2 border-gray-300 mr-2" style={{ backgroundColor: color }}></span>
                            ))}
                        </div>

                        <div className="mb-6">
                            <div className="border-b border-gray-300 mb-4">
                                <button
                                    className={`py-2 px-4 text-lg font-semibold ${activeTab === 'description' ? 'border-b-2 border-blue-500 text-blue-500' : 'text-gray-500'}`}
                                    onClick={() => setActiveTab('description')}
                                >
                                    Description
                                </button>
                                <button
                                    className={`py-2 px-4 text-lg font-semibold ${activeTab === 'specifications' ? 'border-b-2 border-blue-500 text-blue-500' : 'text-gray-500'}`}
                                    onClick={() => setActiveTab('specifications')}
                                >
                                    Specifications
                                </button>
                            </div>

                            {activeTab === 'description' && (
                                <div className="text-gray-700 text-lg" style={{ fontFamily: 'Open Sans, sans-serif' }}>
                                    {car.description}
                                </div>
                            )}

                            {activeTab === 'specifications' && (
                                <div className="space-y-4">
                                    <div>
                                        <button
                                            className="flex items-center justify-between w-full py-2 px-4 text-lg font-semibold text-gray-800 focus:outline-none focus:ring focus:ring-blue-300"
                                            onClick={() => toggleAccordion('engine')}
                                            aria-expanded={accordionState.engine}
                                            tabIndex={0}
                                        >
                                            <span>Engine</span>
                                            {accordionState.engine ? <FaChevronUp /> : <FaChevronDown />}
                                        </button>
                                        {accordionState.engine && (
                                            <ul className="list-disc list-inside text-gray-700 pl-8 space-y-2 text-lg">
                                                <li>Mesin: Mesin bensin berkapasitas 1.2L</li>
                                                <li>Tenaga: Mesin dapat menghasilkan sekitar 88 PS dan torsi sekitar 108 Nm</li>
                                                <li>Transmisi: Umumnya dilengkapi dengan transmisi manual 5-percepatan atau otomatis 4-percepatan</li>
                                                <li>Penggerak: Penggerak depan (FWD)</li>
                                            </ul>
                                        )}
                                    </div>
                                    <div>
                                        <button
                                            className="flex items-center justify-between w-full py-2 px-4 text-lg font-semibold text-gray-800 focus:outline-none focus:ring focus:ring-blue-300"
                                            onClick={() => toggleAccordion('exterior')}
                                            aria-expanded={accordionState.exterior}
                                            tabIndex={0}
                                        >
                                            <span>Exterior</span>
                                            {accordionState.exterior ? <FaChevronUp /> : <FaChevronDown />}
                                        </button>
                                        {accordionState.exterior && (
                                            <ul className="list-disc list-inside text-gray-700 pl-8 space-y-2 text-lg">
                                                <li>Desain: Desain MPV yang modern dan kompak</li>
                                                <li>Lampu: Lampu depan LED dan lampu belakang kombinasi LED</li>
                                                <li>Velg: Velg alloy dengan ukuran yang sesuai</li>
                                                <li>Fitur Eksterior Lain: Fog lamp (jika tersedia), antena tipe sirip hiu, dan rear spoiler</li>
                                            </ul>
                                        )}
                                    </div>
                                    <div>
                                        <button
                                            className="flex items-center justify-between w-full py-2 px-4 text-lg font-semibold text-gray-800 focus:outline-none focus:ring focus:ring-blue-300"
                                            onClick={() => toggleAccordion('interior')}
                                            aria-expanded={accordionState.interior}
                                            tabIndex={0}
                                        >
                                            <span>Interior</span>
                                            {accordionState.interior ? <FaChevronUp /> : <FaChevronDown />}
                                        </button>
                                        {accordionState.interior && (
                                            <ul className="list-disc list-inside text-gray-700 pl-8 space-y-2 text-lg">
                                                <li>Kapasitas: Biasanya memiliki 7 kursi dengan konfigurasi tempat duduk yang fleksibel</li>
                                                <li>Material Kursi: Kursi dengan material kain yang nyaman</li>
                                                <li>Sistem Infotainment: Layar sentuh untuk sistem infotainment dengan konektivitas smartphone (Apple CarPlay dan Android Auto) tergantung varian</li>
                                                <li>Fitur Kenyamanan: AC dengan kontrol iklim, akses tanpa kunci, dan tombol start/stop mesin</li>
                                            </ul>
                                        )}
                                    </div>
                                    <div>
                                        <button
                                            className="flex items-center justify-between w-full py-2 px-4 text-lg font-semibold text-gray-800 focus:outline-none focus:ring focus:ring-blue-300"
                                            onClick={() => toggleAccordion('safety')}
                                            aria-expanded={accordionState.safety}
                                            tabIndex={0}
                                        >
                                            <span>Safety</span>
                                            {accordionState.safety ? <FaChevronUp /> : <FaChevronDown />}
                                        </button>
                                        {accordionState.safety && (
                                            <ul className="list-disc list-inside text-gray-700 pl-8 space-y-2 text-lg">
                                                <li>Sistem Pengereman: ABS, EBD, dan Brake Assist</li>
                                                <li>Airbag: Airbag depan untuk pengemudi dan penumpang</li>
                                                <li>Fitur Keamanan Lain: Seatbelt untuk semua penumpang, dan mungkin beberapa fitur keamanan tambahan</li>
                                                <li>Kamera Parkir: Kamera mundur (tergantung varian) untuk memudahkan parkir</li>
                                                <li>Suspensi: Suspensi yang disesuaikan untuk kenyamanan berkendara</li>
                                            </ul>
                                        )}
                                    </div>
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CarDetail;
