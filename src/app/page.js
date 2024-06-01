"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import axios from "axios";
import GetChannelId from "@/api/GetChannelId";
import GetChannelDetails from "@/api/GetChannelDetails";
import Navbar from "@/components/Navbar";

import Tippy from "@tippyjs/react";
import "tippy.js/dist/tippy.css"; // optional
import withReactContent from "sweetalert2-react-content";
import Swal from "sweetalert2";
// import { Image } from "next/image";

export default function Home() {
    const [input, setInput] = useState("");
    const [data, setData] = useState();
    const [loading, setLoading] = useState(true);

    const notAvailableTool = () => {
        withReactContent(Swal).fire({
            title: "Not available!",
            icon: "error",
            text: "Sorry, this tool is not available right now.",
        })
    }

    return (
        <main className="items-center justify-center min-h-screen">
            <section className="relative w-full flex flex-col bg-black min-h-[75vh] hero-sec overflow-hidden rounded-br-[7rem] rounded-bl-[7rem]">
                <div className="absolute inset-0 ">
                    <Image src="/hero.webp" fill={true} className="object-cover brightness-50 saturate-150" alt="hero"></Image>
                </div>

                <Navbar />

                <div className="relative z-10 flex flex-col items-center justify-center flex-1 gap-4">
                    <h1 className="text-[4rem] text-white text-center font-hndExtBold">Welcome, mate!</h1>
                    <p className="text-2xl text-white font-hndReg">Please select the available information gathering tools</p>

                    <div className="flex flex-wrap gap-5">
                        <button className="flex flex-col items-center px-10 py-10 transition-all bg-white hover:scale-110 hover:shadow-xl rounded-xl">
                            <Image src="/services/yt.png" width={100} height={100} alt="yt" className="m-auto"></Image>
                            <p className="text-2xl">Youtube</p>
                        </button>
                        <button className="flex flex-col items-center px-10 py-10 transition-all bg-white hover:scale-110 hover:shadow-xl rounded-xl">
                            <Image src="/services/tiktok.png" width={100} height={100} alt="yt" className="m-auto"></Image>
                            <p className="text-2xl">Tiktok</p>
                        </button>

                        <Tippy content={<span>Not available</span>}>
                            <button onClick={notAvailableTool} className="flex flex-col items-center px-10 py-10 transition-all bg-white opacity-50 cursor-not-allowed hover:scale-110 hover:shadow-xl rounded-xl">
                                <Image src="/services/ig.png" width={100} height={100} alt="yt" className="m-auto"></Image>
                                <p className="text-2xl">Instagram</p>
                            </button>
                        </Tippy>
                    </div>
                </div>
            </section>

            {/* Input */}

            <section className="flex flex-col items-center w-full gap-2 py-4 min-h-10">
                <p className="text-2xl font-hdnMed">Enter your username below.</p>
                <input onChange={(e) => setInput(e.target.value)} className="px-5 py-2 text-center border border-blue-500 outline-none rounded-xl" type="text" name="username" id="username" placeholder="Username here" />
            </section>

            {/* Hasil pelacakan */}

            <section className=""></section>
        </main>
    );
}
