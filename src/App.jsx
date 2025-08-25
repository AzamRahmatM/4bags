import React from 'react'
import gsap from "gsap";
import {ScrollTrigger, SplitText} from "gsap/all";
import NavBar from "./components/NavBar.jsx";
import Hero from "./components/Hero.jsx";
import {useGSAP} from "@gsap/react";
import Cocktails from "./components/Cocktails.jsx";

gsap.registerPlugin(ScrollTrigger, SplitText, useGSAP);
const App = () => {
    return (
        <main>
            <NavBar />
            <Hero />
            <Cocktails/>

        </main>
    )
}
export default App
