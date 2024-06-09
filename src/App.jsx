import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Product from './components/Product';
import Promotion from './components/Promotion';
import MyService from './components/Service';
import Contact from './components/Contact';
import MyFooter from './components/Footer';
import CarDetail from './components/CarDetail';

const App = () => {
    return (
        <Router>
            <div className="app-container bg-gray-100">
                <Navbar />
                <div className="content-container">
                    <Routes>
                        <Route
                            path="/"
                            element={
                                <>
                                    <Hero />
                                    <Product />
                                    <Promotion />
                                    <MyService />
                                    <Contact />
                                    <MyFooter />
                                </>
                            }
                        />
                        <Route path="/car/:id" element={<CarDetail />} />
                    </Routes>
                </div>
            </div>
        </Router>
    );
};

export default App;
