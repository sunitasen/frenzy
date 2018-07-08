import React from 'react';

const Navbar = () =>{
        return(
            <header class="bg-black-90  w-100 pv4-ns ph4-m ph5-l mt0 pt0">
            <nav class="f6 fw6 ttu tracked fixed">
                <a class="link dim white dib mr3" href="/" title="Home">Home</a>
                <a class="link dim white dib mr3" href="/about" title="About">About</a>
                <a class="link dim white dib mr3" href="#" title="Store">Store</a>
                <a class="link dim white dib" href="#" title="Contact">Contact</a>
            </nav>
        </header>

        );

}

export default Navbar;