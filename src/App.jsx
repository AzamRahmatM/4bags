import React from 'react'
import gsap from "gsap";
import {ScrollTrigger, SplitText} from "gsap/all";
import NavBar from "./components/NavBar.jsx";
import Hero from "./components/Hero.jsx";
import {useGSAP} from "@gsap/react";

gsap.registerPlugin(ScrollTrigger, SplitText, useGSAP);
const App = () => {
    return (
        <main>
            <NavBar />
            <Hero />

        </main>
    )
}
export default App
