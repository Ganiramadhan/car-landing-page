import { FaCar, FaTag, FaInfoCircle, FaMoneyBillWave, FaCalculator } from 'react-icons/fa';
import heroImage1 from '../assets/images/Fortuner1.png';
import heroImage2 from '../assets/images/Fortuner2.png';
import heroImage3 from '../assets/images/Fortuner3.png';
import logoImage from '../assets/images/icon.png';

const Product = () => {
    const carData = [
        {
            name: 'Toyota Fortuner',
            price: 'Rp 500.000.000',
            description: 'Toyota Fortuner is a mid-size SUV with great performance and advanced features.',
            image: heroImage1,
        },
        {
            name: 'Toyota Innova',
            price: 'Rp 400.000.000',
            description: 'Toyota Innova offers a comfortable ride and is perfect for families.',
            image: heroImage2,
        },
        {
            name: 'Toyota Avanza',
            price: 'Rp 200.000.000',
            description: 'Toyota Avanza is a compact MPV with great fuel efficiency and versatility.',
            image: heroImage3,
        },
        // Add more car data as needed
    ];

    return (
        <div className="py-10 bg-gray-200">
            <div className="container mx-auto px-6">
                <h2 className="text-3xl font-bold text-center text-gray-900 mb-10" style={{ fontFamily: 'Poppins, sans-serif' }}>Our Products</h2>
                <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
                    {carData.map((car, index) => (
                        <div key={index} className="bg-white rounded-lg shadow-lg overflow-hidden transform transition duration-500 hover:scale-105">
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
                                    <button className="border border-blue-500 text-blue-500 w-1/2 py-2 rounded-md hover:bg-blue-500 hover:text-white transition duration-300 flex items-center justify-center">
                                        <FaTag className="inline-block mr-2" />
                                        Lihat Detail
                                    </button>
                                    <button className="border border-red-500 text-red-500 w-1/2 py-2 ml-2 rounded-md hover:bg-red-500 hover:text-white transition duration-300 flex items-center justify-center">
                                        <FaCalculator className="inline-block mr-2" />
                                        Simulasi Kredit
                                    </button>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Product;
