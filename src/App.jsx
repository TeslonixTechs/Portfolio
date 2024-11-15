import { useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./portfolio1/pages/HomePage";
import ProjectPage from "./portfolio1/pages/ProjectPage";
import NotFoundPage from "./portfolio1/pages/NotFoundPage";
import AboutPage from "./portfolio1/pages/AboutPage";
import ReactGA from "react-ga4";
import ServicesPage from './portfolio1/pages/ServicesPage';
// import Navbar from "./portfolio/components/Navbar/Navbar";
// import Page from "./portfolio/Page";
// import Home from "./portfolio/screens/Home";
// import About from "./portfolio/screens/About";
// import Services from "./portfolio/screens/Services";
// import Skills from "./portfolio/screens/Skills";
// import Projects from "./portfolio/screens/Projects";
// import Contact from "./portfolio/screens/Contact";

const trackingId = "G-ETW3F6K6VY";
ReactGA.initialize(trackingId);

export default function App() {
    useEffect(() => {
        ReactGA.send({ hitType: "pageview", page: "/" });
    }, []);

    return (
        <>
            <Router>
                <Routes>
                    <Route path="/" element={<HomePage />} />
                    <Route path="/about" element={<AboutPage />} />
                    <Route path="/projects" element={<ProjectPage />} />
                    <Route path="*" element={<NotFoundPage />} />
                    <Route path="/services" element={<ServicesPage />} />
                </Routes>
            </Router>
            {/* <Navbar />
            <Router>
                <Routes>
                    <Route path="/" element={<Page />} />
                    <Route path="/home" element={<Home />} />
                    <Route path="/about" element={<About />} />
                    <Route path="/services" element={<Services />} />
                    <Route path="/skills" element={<Skills />} />
                    <Route path="/projects" element={<Projects />} />
                    <Route path="/contact" element={<Contact />} />
                </Routes>
            </Router> */}
        </>
    );
}
