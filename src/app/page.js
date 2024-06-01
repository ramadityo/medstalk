"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import axios from "axios";
import Navbar from "@/components/Navbar";

import Tippy from "@tippyjs/react";
import "tippy.js/dist/tippy.css"; // optional
import withReactContent from "sweetalert2-react-content";
import Swal from "sweetalert2";


import YoutubeGetId from "@/api/YoutubeGetId";
// import { Image } from "next/image";

export default function Home() {
    // const [input, setInput] = useState("");
    const [loading, setLoading] = useState(true);

    const [youtubeInput, setYoutubeInput] = useState(true);
    const [tiktokInput, setTiktokInput] = useState(false);

    

    /*
    |++++++++++++++++++++++++++++++++|
    |       YOUTUBE SECTION          |
    |++++++++++++++++++++++++++++++++|
    */
    const [ytUsername, setYtUsername] = useState("");
    const [ytData, setYtData] = useState(null);

    const youtubeClick = () => {
        setYoutubeInput(true);
        setTiktokInput(false);
    };

    /*
    |++++++++++++++++++++++++++++++++|
    |        TIKTOK SECTION          |
    |++++++++++++++++++++++++++++++++|
    */
    const [ttUsername, setTtUsername] = useState("");
    const [youtubeId, setYoutubeId] = useState(null);

    const tiktokClick = () => {
        setTiktokInput(true);
        setYoutubeInput(false);
    };

    /*
    |++++++++++++++++++++++++++++++++|
    |         HANDLE SUBMIT          |
    |++++++++++++++++++++++++++++++++|
    */

    const handleSubmit = async () => {
        if (ytUsername) {
            const data = await YoutubeGetId(ytUsername);
            const channelId = data.channel_id;

            setYoutubeId(channelId)
            
        }
    }

    

    /*
        |++++++++++++++++++++++++++++++++|
        |       Not available modal      |
        |++++++++++++++++++++++++++++++++|
    */

    const notAvailableTool = () => {
        withReactContent(Swal).fire({
            title: "Not available!",
            icon: "error",
            text: "Sorry, this tool is not available right now.",
        });
    };

    return (
        <main className="items-center justify-center min-h-screen">
            <section className="relative w-full flex flex-col bg-black min-h-[70vh] hero-sec overflow-hidden rounded-br-[7rem] rounded-bl-[7rem]">
                <div className="absolute inset-0 ">
                    <Image src="/hero.webp" fill={true} className="object-cover brightness-50 saturate-150" alt="hero"></Image>
                </div>

                <Navbar />

                <div className="relative z-10 flex flex-col items-center justify-center flex-1 gap-4">
                    <h1 className="text-[4rem] text-white text-center font-hndExtBold">Welcome, mate!</h1>
                    <p className="text-2xl text-white font-hndReg">Please select the available information gathering tools</p>

                    <div className="flex flex-wrap gap-5">
                        <button onClick={youtubeClick} className="flex flex-col items-center px-10 py-10 transition-all bg-white hover:scale-110 hover:shadow-xl rounded-xl">
                            <Image src="/services/yt.png" width={100} height={100} alt="yt" className="m-auto"></Image>
                            <p className="text-2xl">Youtube</p>
                        </button>
                        <button onClick={tiktokClick} className="flex flex-col items-center px-10 py-10 transition-all bg-white hover:scale-110 hover:shadow-xl rounded-xl">
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

            <section className="flex flex-col items-center w-full gap-4 py-4 pb-12 min-h-10">
                <p className="text-2xl font-hndMedium text-[#0a0a0a]">Enter the username below.</p>

                {youtubeInput && <input onChange={(e) => setYtUsername(e.target.value)} className="py-2 text-2xl text-center border-2 border-red-500 outline-none px-7 rounded-2xl font-hndMedium" type="text" name="username" id="username" placeholder="Username here" />}
                
                {tiktokInput && <input onChange={(e) => setTtUsername(e.target.value)} className="py-2 text-2xl text-center border-2 border-black outline-none px-7 rounded-2xl font-hndMedium" type="text" name="username" id="username" placeholder="Username here" />}

                <button onClick={handleSubmit} className="px-5 py-2 text-white bg-blue-500 rounded-xl">Submit</button>
            </section>

            {/* Hasil pelacakan */}

            <section className="flex flex-col items-center w-full min-h-3">
                <h1 className="text-[3rem] font-hndMedium">Result</h1>

                <h1 className="text-3xl">{youtubeId}</h1>
            </section>
        </main>
    );
}
