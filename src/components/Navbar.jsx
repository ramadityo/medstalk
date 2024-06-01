import React from "react";
import Link from "next/link";

function Navbar() {
    return (
        <nav className="container relative z-10 flex justify-between mx-auto text-xl text-white py-7 flex-1/2">
            <h1 className="text-3xl font-hndExtBold">Medstalk</h1>

            <ul className="flex gap-4">
                <li className="relative font-hndMedium group">
                    <Link href="#">About</Link>
                    <span className="transition-all absolute bottom-0 left-0 right-0 h-[2px] bg-white origin-center scale-x-0 group-hover:scale-x-100"></span>
                </li>
                <li className="relative font-hndMedium group">
                    <Link href="https://github.com/ramadityo/medstalk">Github</Link>
                    <span className="transition-all absolute bottom-0 left-0 right-0 h-[2px] bg-white origin-center scale-x-0 group-hover:scale-x-100"></span>
                </li>
            </ul>
        </nav>
    );
}

export default Navbar;
