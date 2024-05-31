import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Product from "./components/Product";
import Contact from "./components/Contact";
import MyFooter from "./components/Footer";
import MyService from "./components/Service";
import Promotion from "./components/Promotion";


const App = () => {
  return (
    <>
      <Navbar/>
      <Hero/>
      <Product/>
      <Promotion/>
      <MyService/>
      <Contact/>
      <MyFooter/>
    </>
  )
}

export default App;