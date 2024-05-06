"use client";

import Link from "next/link";
import React, { useState, useEffect } from "react";

import { HiExternalLink } from "react-icons/hi";
import { IoIosArrowDown } from "react-icons/io";

function Navbar() {
    const [showDropdown, setShowDropdown] = useState(false);

    const onToggleDropdown = () => {
        setShowDropdown((prev) => !prev);
    };

    return (
        <div className="w-full py-5  bg-blue-500 flex">
            <div className="nav-items py-2 flex justify-between items-center mx-auto w-3/4 text-white">
                <h1 className="font-bold text-xl">Medstalk</h1>

                <div className="flex gap-3 items-center">
                    <Link href="/" className="py-2 px-3 hover:bg-white/20 rounded-md transition-all">
                        Home
                    </Link>
                    <div className="wrapper-dropdown relative">
                        <Link
                            href="#"
                            className="flex items-center gap-2 py-2 px-3 hover:bg-white/20 rounded-md transition-all"
                            onClick={onToggleDropdown}
                        >
                            Tools
                            <IoIosArrowDown className={`transition-all ${showDropdown ? "rotate-180" : "rotate-0"} `} />
                        </Link>
                        <div
                            className={`w-40 absolute z-50 transition-all ${
                                showDropdown ? "opacity-1 translate-y-0" : "opacity-0 -translate-y-5"
                            } top-14 left-1/2 -translate-x-1/2 dropdown bg-white px-2 py-3 text-black rounded-md border shadow-md`}
                        >
                            <ul className="divide-y ">
                                <li className="group py-2 transition-all hover:bg-blue-500/100 rounded-md">
                                    <Link href="#" className="flex gap-2 items-center transition-all group-hover:text-white px-2 w-full">
                                        Tiktok
                                        <HiExternalLink />
                                    </Link>
                                </li>

                                <li className="group py-2 transition-all hover:bg-blue-500/100 rounded-md">
                                    <Link href="#" className="flex gap-2 items-center transition-all group-hover:text-white px-2 w-full">
                                        Youtube
                                        <HiExternalLink />
                                    </Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <Link href="#" className="py-2 px-3 hover:bg-white/20 rounded-md transition-all">
                        Github
                    </Link>
                </div>
            </div>
        </div>
    );
}

export default Navbar;
