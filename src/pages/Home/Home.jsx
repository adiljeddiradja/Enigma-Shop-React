import {Component} from "react";
import AboutUs from "@/pages/Home/components/AboutUs.jsx";
import Navbar from "@/pages/Home/components/Navbar.jsx";
import Testimonial from "@/pages/Home/components/Testimonial.jsx";
import Hero from "@/pages/Home/components/Hero.jsx";
import ContactUs from "@/pages/Home/components/ContactUs.jsx";
import Footer from "@/pages/Home/components/Footer.jsx";





export default class Home extends Component {
    render() {
        return (

                <>
                    <Navbar/>
                    <Hero />
                    <AboutUs/>
                    <Testimonial/>
                    <ContactUs/>
                    <Footer />



                </>


        );
    }
}

