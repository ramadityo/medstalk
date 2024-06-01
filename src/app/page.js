"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import axios from "axios";
import GetChannelId from "@/api/GetChannelId";
import GetChannelDetails from "@/api/GetChannelDetails";
import Navbar from "@/components/Navbar";
// import { Image } from "next/image";

export default function Home() {
    const [input, setInput] = useState("");
    const [data, setData] = useState();
    const [loading, setLoading] = useState(true);

    return (
        <main className="items-center justify-center min-h-screen">
            <div className="relative w-full flex flex-col bg-black h-[75vh] hero-sec overflow-hidden rounded-br-[7rem] rounded-bl-[7rem]">
                <div className="absolute inset-0 ">
                    {/* <Image */}
                    {/* <Image src="/hero.webp" width={100} height={100} alt="hero"></Image> */}
                    <Image src="/hero.webp" fill={true} className="object-cover brightness-50 saturate-150" alt="hero"></Image>
                </div>
                
                <Navbar />

                <div className="relative z-10 flex flex-col items-center justify-center flex-1">
                    <h1 className="text-[4rem] text-white text-center font-hndExtBold">Welcome, mate!</h1>
                    <p className="text-2xl text-white font-hndReg">Please select the available information gathering tools</p>

                    <div className="flex flex-wrap gap-2">
                        <button>
                            
                        </button>
                    </div>
                </div>
            </div>
        </main>
    );
}
