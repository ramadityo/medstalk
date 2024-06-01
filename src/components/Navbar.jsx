import React from "react";

function Navbar() {
    return (
        <nav className="container relative z-10 flex justify-between mx-auto text-xl text-white py-7 flex-1/2">
            <h1 className="text-3xl font-hndExtBold">Medstalk</h1>

            <ul className="flex gap-4">
                <li className="relative font-hndMedium">
                    <a href="#">About</a>
                    <span></span>
                </li>
                <li className="relative font-hndMedium">
                    <a href="#">Github</a>
                    <span className="absolute bottom-0 left-0 right-0 h-[2px] bg-white"></span>
                </li>
            </ul>
        </nav>
    );
}

export default Navbar;
