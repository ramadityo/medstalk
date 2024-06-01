import React from "react";

function Navbar() {
    return (
        <nav className="container relative z-10 flex justify-between py-8 mx-auto text-xl text-white">
            <h1 className="text-3xl font-hndExtBold">Medstalk</h1>

            <ul className="flex gap-4">
                <li className="relative font-hndMedium">
                    <a href="#">About</a>
                </li>
                <li className="relative font-hndMedium">
                    <a href="#">Github</a>
                </li>
            </ul>
        </nav>
    );
}

export default Navbar;
