import './App.css'
import About from './components/About/About';
import Banner from './components/Banner/Banner'
import Contact from './components/Contact/Contact';
import Footer from './components/Footer/Footer';
import Navbar from './components/Navbar/Navbar'
import Services from './components/Services/Services';
import Testimonial from './components/Testimonial/Testimonial';
import Work from './components/Work/Work';

function App() {

  window.addEventListener('scroll', function () {
    const header = document.querySelector('header');
    header.classList.toggle('sticky', window.scrollY > 0);
  });

  const toggleMenu = () => {
    const menuToggle = document.querySelector('.toggle');
    const menu = document.querySelector('.menu');
    menuToggle.classList.toggle('active');
    menu.classList.toggle('active');
  }


  return (
    <>
      <Navbar toggleMenu={toggleMenu} />
      <Banner />
      <About />
      <Services />
      <Work />
      <Testimonial />
      <Contact />
      <Footer />

    </>
  )
}

export default App
