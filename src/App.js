import "./App.css";
import About from "./components/About";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Home from "./components/Home";
import Menu from "./components/Menu";
import Navbar from "./components/Navbar";
import Section from "./components/Section";

function App() {
    return (
        <div id='kuliner' className=' md:px-[100px] px-[30px] w-full bg-black-2 flex flex-col'>
            <Navbar />
            <div className='mt-[70px] md:mt-[100px]'>
                <hr className='bg-[#4D4D4D] border-none h-[1px] ' />
                <Section />
                <hr className='bg-[#4D4D4D] border-none h-[1px] my-5' />
                <Home />
                <hr className='bg-[#4D4D4D] border-none h-[1px] my-5' />
                <Menu />
                <hr className='bg-[#4D4D4D] border-none h-[1px] my-5' />
                <About />
                <hr className='bg-[#4D4D4D] border-none h-[1px] my-5' />
                <Contact />
            </div>
			<Footer />
        </div>
    );
}

export default App;
