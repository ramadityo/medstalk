"use client";

import Image from "next/image";
import { useEffect, useState, createContext } from "react";

import { useRouter } from "next/navigation";

/*
|++++++++++++++++++++++++++++++++|
|           COMPONENTS           |
|++++++++++++++++++++++++++++++++|
*/

import Navbar from "@/components/Navbar";
import YoutubeResult from "@/components/YoutubeResult";
import TiktokResult from "@/components/TiktokResult";

/*
|++++++++++++++++++++++++++++++++|
|           LIBRARIES            |
|++++++++++++++++++++++++++++++++|
*/

import Tippy from "@tippyjs/react";
import "tippy.js/dist/tippy.css";
import withReactContent from "sweetalert2-react-content";
import Swal from "sweetalert2";

/*
|++++++++++++++++++++++++++++++++|
|              APIS              |
|++++++++++++++++++++++++++++++++|
*/

import YoutubeGetId from "@/api/YoutubeGetId";
import YoutubeGetDetails from "@/api/YoutubeGetDetails";
import TiktokGetUserInfo from "@/api/TiktokGetUserInfo";

const ScrollContext = createContext();

export default function Home() {
    const router = useRouter();
    const [loading, setLoading] = useState(false);
    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        console.clear();
    }, []);

    const checkDevice = () => {
        if (typeof window !== "undefined") {
            if (window.innerWidth < 500) {
                setIsMobile(true);
                router.refresh();
            } else {
                setIsMobile(false);
            }
        }
    };

    useEffect(() => {
        checkDevice();
        window.addEventListener("resize", checkDevice);

        return () => window.removeEventListener("resize", checkDevice);
    }, [isMobile]);

    /*
    |++++++++++++++++++++++++++++++++|
    |          Validator             |
    |++++++++++++++++++++++++++++++++|
    */

    const [youtubeInput, setYoutubeInput] = useState(false);
    const [tiktokInput, setTiktokInput] = useState(false);
    const [ytUsername, setYtUsername] = useState("");
    const [ttUsername, setTtUsername] = useState("");

    /*
    |++++++++++++++++++++++++++++++++|
    |       YOUTUBE SECTION          |
    |++++++++++++++++++++++++++++++++|
    */

    const [ytId, setYtId] = useState("");
    const [ytDetail, setYtDetail] = useState({});

    const youtubeClick = () => {
        setYoutubeInput(true);
        setTiktokInput(false);
        setTtUsername("");
    };

    /*
    |++++++++++++++++++++++++++++++++|
    |        TIKTOK SECTION          |
    |++++++++++++++++++++++++++++++++|
    */

    const [ttId, setTtId] = useState(null);
    const [ttDetail, setTtDetail] = useState({});

    const tiktokClick = () => {
        setTiktokInput(true);
        setYoutubeInput(false);
        setYtUsername("");
    };

    /*
    |++++++++++++++++++++++++++++++++|
    |         HANDLE SUBMIT          |
    |++++++++++++++++++++++++++++++++|
    */

    const handleSubmit = async () => {
        setLoading(true);
        if (ytUsername && youtubeInput) {
            setYtId("");
            setTtId("");
            const data = await YoutubeGetId(ytUsername);
            const channelId = data.channel_id;

            setTimeout(async () => {
                setLoading(false);
                const detail = await YoutubeGetDetails(channelId);
                setYtId(detail.channel_id);

                setYtDetail(detail);
            }, 2000);
        } else if (ttUsername && tiktokInput) {
            setYtId("");
            setTtId("");
            const data = await TiktokGetUserInfo(ttUsername);

            setTimeout(() => {
                setLoading(false);
                setTtId(data.user.id);
                setTtDetail(data);
            }, 1000);
        }
    };

    const resetTools = () => {
        setYoutubeInput(false);
        setTiktokInput(false);
    };

    /*
        |++++++++++++++++++++++++++++++++|
        |       Not available modal      |
        |++++++++++++++++++++++++++++++++|
    */
    const [isModalOpen, setIsModalOpen] = useState(false);

    const notAvailableTool = () => {
        withReactContent(Swal).fire({
            title: "Not available!",
            icon: "error",
            text: "Sorry, this tool is not available right now.",
        });
    };

    const underMaintenance = () => {
        withReactContent(Swal).fire({
            title: "Under maintenance!",
            icon: "error",
            text: "Sorry, this tool is under maintenance right now.",
        });
    };

    const [toolName, setToolName] = useState(false);

    const checkTool = (e) => {
        e.preventDefault();
        if (e.target.value === "youtube") {
            youtubeClick();
            setToolName(true);
        } else if (e.target.value === "tiktok") {
            tiktokClick();
            setToolName(true);
        } else if (e.target.value === "instagram") {
            setToolName(false);
            resetTools();
            notAvailableTool();
        } else if (e.target.value === "facebook") {
            setToolName(false);
            resetTools();
            notAvailableTool();
        } else {
            setToolName(false);
            resetTools();
        }
    };

    return (
        <main className="items-center justify-center max-w-full min-h-screen">
            <section className="relative max-w-full flex flex-col bg-black min-h-[70vh] mobile:min-h-[50vh] pb-11 hero-sec overflow-hidden rounded-br-[7rem] mobile:rounded-br-[3rem] rounded-bl-[7rem] mobile:rounded-bl-[3rem]">
                <div className="absolute inset-0 ">
                    <Image src="/hero.webp" fill className="object-cover transition-all animate-[] brightness-50 saturate-150" alt="hero"></Image>
                </div>

                <Navbar />

                <div className="relative z-10 flex flex-col items-center justify-center flex-1 gap-4">
                    <h1 className="text-[clamp(2.5rem,1.9718rem_+_1.6901vw,4rem)] text-white text-center font-hndExtBold">Welcome, mate!</h1>
                    <p className="text-[clamp(1.125rem,0.993rem_+_0.4225vw,1.5rem)] text-white font-hndReg text-center mobile:px-6">Please select the available information gathering tools</p>

                    {isMobile ? (
                        <>
                            <select id="cars" className="py-2 px-3 rounded-lg outline-none border-2 border-blue-500 shadow-[3px_1px_31px_-7px_rgba(59,130,246,0.75)]" onChange={(e) => checkTool(e)}>
                                <option value="default">Select your social platform</option>
                                <option value="youtube">Youtube</option>
                                <option value="tiktok">Tiktok</option>
                                <option value="instagram">Instagram</option>
                                <option value="facebook">Facebook</option>
                            </select>
                        </>
                    ) : (
                        <div className="flex flex-wrap mobile:flex-col justify-center gap-5 mobile:hidden">
                            <Tippy content={<span>500 limits/month</span>}>
                                <button onClick={youtubeClick} className="flex flex-col items-center px-10 py-10 transition-all bg-white  hover:scale-110 hover:shadow-xl rounded-xl">
                                    <Image src="/services/yt.png" width={100} height={100} alt="yt" className="m-auto" />
                                    <p className="text-2xl mobile:text-xl">Youtube</p>
                                </button>
                            </Tippy>
                            <Tippy content={<span>20 limits/day</span>}>
                                <button onClick={tiktokClick} className="flex flex-col items-center px-10 py-10 transition-all bg-white hover:scale-110 hover:shadow-xl rounded-xl">
                                    <Image src="/services/tiktok.png" width={100} height={100} alt="yt" className="m-auto"></Image>
                                    <p className="text-2xl">Tiktok</p>
                                </button>
                            </Tippy>

                            <Tippy content={<span>Not available</span>}>
                                <button onClick={notAvailableTool} className="flex flex-col items-center px-10 py-10 transition-all bg-white opacity-50 cursor-not-allowed hover:scale-110 hover:shadow-xl rounded-xl">
                                    <Image src="/services/ig.png" width={100} height={100} alt="yt" className="m-auto"></Image>
                                    <p className="text-2xl">Instagram</p>
                                </button>
                            </Tippy>

                            <Tippy content={<span>Not available</span>}>
                                <button onClick={notAvailableTool} className="flex flex-col items-center px-10 py-10 transition-all bg-white opacity-50 cursor-not-allowed hover:scale-110 hover:shadow-xl rounded-xl">
                                    <Image src="/services/fb.png" width={100} height={100} alt="yt" className="m-auto"></Image>
                                    <p className="text-2xl">Facebook</p>
                                </button>
                            </Tippy>
                        </div>
                    )}
                </div>
            </section>

            {/* Input */}

            <section className="flex flex-col items-center max-w-full gap-4 py-4 pb-12 min-h-10">
                {toolName ? (
                    <>
                        <p className="text-2xl mobile:text-xl font-hndMedium text-[#0a0a0a] text-center">Enter the {youtubeInput ? "Youtube" : tiktokInput ? "Tiktok" : ""} username below.</p>

                        {youtubeInput && <input onChange={(e) => setYtUsername(e.target.value)} className="py-1 text-2xl mobile:text-lg text-center border-2 border-red-500 outline-none px-5 rounded-2xl mobile:rounded-xl font-hndMedium" type="text" name="username" id="username" placeholder="Username here" />}

                        {tiktokInput && <input onChange={(e) => setTtUsername(e.target.value)} className="py-1 text-2xl mobile:text-lg text-center border-2 border-black outline-none px-7 rounded-2xl mobile:rounded-xl font-hndMedium" type="text" name="username" id="username" placeholder="Username here" />}

                        <button disabled={!ytUsername && !ttUsername && !loading} onClick={handleSubmit} className={`${!ytUsername && !ttUsername ? "opacity-50 cursor-not-allowed" : ""} ${loading ? "opacity-50 cursor-not-allowed" : ""} transition-all px-5 mobile:px-4 py-2 mobile:py-2 text-xl mobile:text-lg text-white bg-blue-500 rounded-xl flex items-center`}>
                            {loading && (
                                <svg class="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                                    <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
                                    <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                                </svg>
                            )}
                            {loading ? "Loading..." : "Submit"}
                        </button>
                    </>
                ) : (
                    <>
                        {isMobile ? (
                            <>
                                <p className="text-2xl font-hndMedium text-[#0a0a0a]">Choose tool above to start</p>
                            </>
                        ) : (
                            <>
                                <p className="text-2xl font-hndMedium text-[#0a0a0a]">Enter the {youtubeInput ? "Youtube" : tiktokInput ? "Tiktok" : ""} username below.</p>

                                {youtubeInput && <input onChange={(e) => setYtUsername(e.target.value)} className="py-2 text-2xl text-center border-2 border-red-500 outline-none px-7 rounded-2xl font-hndMedium" type="text" name="username" id="username" placeholder="Username here" />}

                                {tiktokInput && <input onChange={(e) => setTtUsername(e.target.value)} className="py-2 text-2xl text-center border-2 border-black outline-none px-7 rounded-2xl font-hndMedium" type="text" name="username" id="username" placeholder="Username here" />}

                                {
                                    /* {loading ? (
                                    <button disabled className="px-5 py-2 text-xl text-white bg-blue-500 opacity-50 cursor-not-allowed rounded-xl">
                                        Loading...
                                    </button>
                                ) : (
                                    <button disabled={!ytUsername && !ttUsername} onClick={handleSubmit} className={`${!ytUsername && !ttUsername ? "opacity-50 cursor-not-allowed" : ""} transition-all px-5 py-2 text-xl text-white bg-blue-500 rounded-xl`}>
                                        Submit
                                    </button>
                                )} */
                                    <button disabled={!ytUsername && !ttUsername && !loading} onClick={handleSubmit} className={`${!ytUsername && !ttUsername ? "opacity-50 cursor-not-allowed" : ""} ${loading ? "opacity-50 cursor-not-allowed" : ""} transition-all px-5 mobile:px-4 py-2 mobile:py-2 text-xl mobile:text-lg text-white bg-blue-500 rounded-xl flex items-center`}>
                                        {loading && (
                                            <svg class="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                                                <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
                                                <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                                            </svg>
                                        )}
                                        {loading ? "Loading..." : "Submit"}
                                    </button>
                                }
                            </>
                        )}
                    </>
                )}
            </section>

            {/* Hasil pelacakan */}

            <section className="flex flex-col items-center max-w-full min-h-60 pb-32">
                {/* {loading ? <div className="w-12 h-12 border-4 border-t-4 rounded-full border-t-blue-400 animate-spin"></div> : null} */}
                <div className={`flex flex-col items-center ${!ytId && !ttId ? "translate-y-10 opacity-0" : "opacity-100"} transition-all`}>
                    <h1 className="text-5xl mobile:text-4xl font-hndMedium transition-all">Result</h1>

                    {ytId && <YoutubeResult detail={ytDetail} />}

                    {ttId && <TiktokResult detail={ttDetail} />}
                </div>
            </section>
        </main>
    );
}
