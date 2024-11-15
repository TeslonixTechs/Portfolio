import { useState } from 'react'
import MyProjects from '../components/Projects/MyProjects';
import AboutMe from '../components/About/AboutMe';
import Services from '../components/Services/Services';
import Header from '../components/Header/Header';
import Hero from '../components/Hero/Hero';
import Footer from '../components/Footer/Footer';

export default function ServicePage() {
    return (
        <>
            <Header />
            <Services />
            <Footer />
        </>
    )
}