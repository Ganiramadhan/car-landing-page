import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { FaCar, FaTag, FaInfoCircle, FaMoneyBillWave, FaCalculator } from 'react-icons/fa';
import logoImage from '../assets/images/icon.png';
import Modal from './CreditSimulation';
import carData from '../utils/CarData'

const Product = () => {
    const [showModal, setShowModal] = useState(false);
    const [modalContent, setModalContent] = useState(null);
    const navigate = useNavigate();

    const handleCreditSimulationClick = (car) => {
        setModalContent(
            <div>
                <h2 className="text-2xl font-bold mb-4">{`Simulasi Kredit untuk ${car.name}`}</h2>
                <form>
                    <div className="mb-4">
                        <label className="block text-gray-700">Harga Mobil</label>
                        <input type="text" className="w-full p-2 border border-gray-300 rounded mt-2" value={car.price} readOnly />
                    </div>
                    <div className="mb-4">
                        <label className="block text-gray-700">Uang Muka</label>
                        <input type="number" className="w-full p-2 border border-gray-300 rounded mt-2" />
                    </div>
                    <div className="mb-4">
                        <label className="block text-gray-700">Jangka Waktu (tahun)</label>
                        <input type="number" className="w-full p-2 border border-gray-300 rounded mt-2" />
                    </div>
                    <button type="submit" className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-700">
                        Hitung
                    </button>
                </form>
            </div>
        );
        setShowModal(true);
    };

    const handleViewDetailClick = (id) => {
        navigate(`/car/${id}`);
    };

    return (
        <div className="py-10 bg-gray-200" id='carType'>
            <div className="container mx-auto px-6">
                <h2 className="text-3xl font-bold text-center text-gray-900 mb-10" style={{ fontFamily: 'Poppins, sans-serif' }}>Our Products</h2>
                <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
                    {carData.map((car) => (
                        <div key={car.id} className="bg-white rounded-lg shadow-lg overflow-hidden transform transition duration-500 hover:scale-105">
                            <div className="h-60 bg-gray-300 rounded-t relative">
                                <img src={car.image} alt={car.name} className="w-full h-full object-cover object-center" />
                                <div className="absolute top-0 left-0 p-2">
                                    <img src={logoImage} alt="ganipedia logo" style={{ width: '100px' }} />
                                </div>
                            </div>
                            <div className="p-4 bg-gray-50">
                                <h3 className="text-lg font-bold text-gray-700 mb-2" style={{ fontFamily: 'Poppins, sans-serif' }}>
                                    <FaCar className="inline-block text-blue-500 mr-2" />
                                    {car.name}
                                </h3>
                                <p className="text-gray-600 mb-4" style={{ fontFamily: 'Open Sans, sans-serif' }}>
                                    <FaInfoCircle className="inline-block text-blue-500 mr-2" />
                                    {car.description}
                                </p>
                            </div>
                            <div className="p-4 mt-auto bg-gray-50">
                                <div className="flex justify-between items-center mb-2">
                                    <span className="text-lg" style={{ fontFamily: 'Poppins, sans-serif' }}>
                                        <FaMoneyBillWave className="inline-block text-gray-600 mr-2" />
                                        {car.price}
                                    </span>
                                </div>
                                <div className="flex justify-between">
                                    <button onClick={() => handleViewDetailClick(car.id)} className="border border-blue-500 text-blue-500 w-1/2 py-2 rounded-md hover:bg-blue-500 hover:text-white transition duration-300 flex items-center justify-center">
                                        <FaTag className="inline-block mr-2" />
                                        Lihat Detail
                                    </button>
                                    <button onClick={() => handleCreditSimulationClick(car)} className="border border-red-500 text-red-500 w-1/2 py-2 ml-2 rounded-md hover:bg-red-500 hover:text-white transition duration-300 flex items-center justify-center">
                                        <FaCalculator className="inline-block mr-2" />
                                        Simulasi Kredit
                                    </button>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
            <Modal show={showModal} onClose={() => setShowModal(false)}>
                {modalContent}
            </Modal>
        </div>
    );
};

export default Product;
