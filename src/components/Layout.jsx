import React from 'react';
import {Header} from "./header/Header.jsx";
import {More} from "./more/More.jsx";
import {ShortenLink} from "./link/ShortenLink.jsx";
import {Features} from "./features/Features.jsx";
import {Boost} from "./boost/Boost.jsx";
import {Footer} from "./footer/Footer.jsx";

const Layout = () => {

    return (
        <>
            <header>
                <Header/>
            </header>
            <main>
                <More/>
                <ShortenLink/>
                <Features/>
                <Boost/>
            </main>
            <footer>
                <Footer/>
            </footer>
        </>
    );
}

export {Layout}