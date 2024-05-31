import { useState } from 'react';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';
import logoImage from '../assets/images/icon.png';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [activeMenu, setActiveMenu] = useState('Home');

    const handleMenuClick = (menu) => {
        setActiveMenu(menu);
        setIsOpen(false);
    };

    return (
        <nav className="bg-gradient-to-r from-white/80 to-white p-4 shadow-md fixed w-full z-50 transition-colors duration-300">
            <div className="container mx-auto flex justify-between items-center">
                <div className="flex items-center">
                    <img src={logoImage} alt="ganipedia logo" style={{ width: '150px' }} />
                </div>
                <div className={`hidden md:flex md:items-center md:space-x-6 ${isOpen ? 'opacity-0' : 'opacity-100'}`}>
                    <ul className="flex space-x-6">
                        <li>
                            <a
                                href="#"
                                className={`text-gray-800 text-lg hover:text-gray-600 transition-colors ${activeMenu === 'Home' ? 'font-semibold border-2 border-gray-800 rounded-md px-3 py-2' : ''}`}
                                onClick={() => handleMenuClick('Home')}
                            >
                                Home
                            </a>
                        </li>
                        <li>
                            <a
                                href="#carType"
                                className={`text-gray-800 text-lg hover:text-gray-600 transition-colors ${activeMenu === 'Tipe Mobil' ? 'font-semibold border-2 border-gray-800 rounded-md px-3 py-2' : ''}`}
                                onClick={() => handleMenuClick('Tipe Mobil')}
                            >
                                Tipe Mobil
                            </a>
                        </li>
                        <li>
                            <a
                                href="#myService"
                                className={`text-gray-800 text-lg hover:text-gray-600 transition-colors ${activeMenu === 'My Service' ? 'font-semibold border-2 border-gray-800 rounded-md px-3 py-2' : ''}`}
                                onClick={() => handleMenuClick('My Service')}
                            >
                                My Service
                            </a>
                        </li>
                        <li>
                            <a
                                href="#contact"
                                className={`text-gray-800 text-lg hover:text-gray-600 transition-colors ${activeMenu === 'Contact' ? 'font-semibold border-2 border-gray-800 rounded-md px-3 py-2' : ''}`}
                                onClick={() => handleMenuClick('Contact')}
                            >
                                Contact
                            </a>
                        </li>
                    </ul>
                </div>
                <div className="md:hidden flex items-center space-x-4">
                    <button onClick={() => setIsOpen(!isOpen)} aria-label="Toggle Menu">
                        {isOpen ? (
                            <XMarkIcon className="h-8 w-8 text-gray-800" />
                        ) : (
                            <Bars3Icon className="h-8 w-8 text-gray-800" />
                        )}
                    </button>
                </div>
                <ul className={`fixed top-0 left-full h-full w-full bg-gradient-to-b from-white/80 to-white flex flex-col items-center justify-center space-y-6 transition-transform transform ${isOpen ? 'translate-x-[-100%]' : ''} md:hidden z-50`}>
                    <li className="absolute top-4 right-4">
                        <button onClick={() => setIsOpen(false)} aria-label="Close Menu">
                            <XMarkIcon className="h-8 w-8 text-gray-800" />
                        </button>
                    </li>
                    <li>
                        <a
                            href="#"
                            className={`text-gray-800 text-lg hover:text-gray-600 transition-colors ${activeMenu === 'Home' ? 'font-semibold border-2 border-gray-800 rounded-md px-3 py-2' : ''}`}
                            onClick={() => handleMenuClick('Home')}
                        >
                            Home
                        </a>
                    </li>
                    <li>
                        <a
                            href="#carType"
                            className={`text-gray-800 text-lg hover:text-gray-600 transition-colors ${activeMenu === 'Tipe Mobil' ? 'font-semibold border-2 border-gray-800 rounded-md px-3 py-2' : ''}`}
                            onClick={() => handleMenuClick('Tipe Mobil')}
                        >
                            Tipe Mobil
                        </a>
                    </li>
                    <li>
                        <a
                            href="#myService"
                            className={`text-gray-800 text-lg hover:text-gray-600 transition-colors ${activeMenu === 'My Service' ? 'font-semibold border-2 border-gray-800 rounded-md px-3 py-2' : ''}`}
                            onClick={() => handleMenuClick('My Service')}
                        >
                            My Service
                        </a>
                    </li>
                    <li>
                        <a
                            href="#contact"
                            className={`text-gray-800 text-lg hover:text-gray-600 transition-colors ${activeMenu === 'Contact' ? 'font-semibold border-2 border-gray-800 rounded-md px-3 py-2' : ''}`}
                            onClick={() => handleMenuClick('Contact')}
                        >
                            Contact
                        </a>
                    </li>
                </ul>
            </div>
        </nav>
    );
}

export default Navbar;
