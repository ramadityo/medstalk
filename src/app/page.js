"use client";

import Image from "next/image";
import { useEffect, useState, createContext } from "react";

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
    // const [input, setInput] = useState("");
    const [loading, setLoading] = useState(false);

    /*
    |++++++++++++++++++++++++++++++++|
    |          Validator             |
    |++++++++++++++++++++++++++++++++|
    */

    const [youtubeInput, setYoutubeInput] = useState(true);
    const [tiktokInput, setTiktokInput] = useState(false);
    const [ytUsername, setYtUsername] = useState("");
    const [ttUsername, setTtUsername] = useState("");

    /*
    |++++++++++++++++++++++++++++++++|
    |       YOUTUBE SECTION          |
    |++++++++++++++++++++++++++++++++|
    */

    const [ytId, setYtId] = useState("");
    const [ytAvatar, setYtAvatar] = useState("");
    const [ytTitle, setYtTitle] = useState("");
    const [ytDesc, setYtDesc] = useState("");
    const [ytSubsCount, setYtSubsCount] = useState("");
    const [ytLinks, setYtLinks] = useState();
    const [ytAvatars, setYtAvatars] = useState([]);
    const [ytVerified, setYtVerified] = useState();
    const [ytHasBusiness, setYtHasBusiness] = useState();
    const [ytViewCount, setYtViewCount] = useState("");
    const [ytCountry, setYtCountry] = useState("");
    const [ytCreationDate, setYtCreationDate] = useState("");

    const youtubeClick = () => {
        setYoutubeInput(true);
        setTiktokInput(false);
        setTtUsername(""); // Hapus username toktok jika memilih yt
    };

    /*
    |++++++++++++++++++++++++++++++++|
    |        TIKTOK SECTION          |
    |++++++++++++++++++++++++++++++++|
    */

    // Main info
    const [ttId, setTtId] = useState(null);
    const [ttSecId, setTtSecId] = useState("");
    const [ttNickname, setTtNickname] = useState("");
    const [ttLogId, setTtLogId] = useState("");
    const [ttAvatar, setTtAvatar] = useState("");

    // Avatars
    const [ttAvatarLarge, setTtAvatarLarge] = useState("");
    const [ttAvatarMedium, setTtAvatarMedium] = useState("");
    const [ttAvatarThumb, setTtAvatarThumb] = useState("");

    // Misc info
    const [ttSignature, setTtSignature] = useState("");
    const [ttCategory, setTtCategory] = useState("");
    const [ttVerified, setTtVerified] = useState(false);
    const [ttTotalFavorited, setTtTotalFavorited] = useState("");
    const [ttFollowerCount, setTtFollowerCount] = useState();
    const [ttFollowingCount, setTtFollowingCount] = useState("");
    const [ttTwitterId, setTtTwitterId] = useState("");
    const [ttTwitterName, setTtTwitterName] = useState("");
    const [ttYoutubeId, setTtYoutubeId] = useState("");
    const [ttYoutubeName, setTtYoutubeName] = useState("");
    const [ttFavoritingCount, setTtFavoritingCount] = useState("");

    const tiktokClick = () => {
        setTiktokInput(true);
        setYoutubeInput(false);
        setYtUsername(""); // Hapus username yt jika memilih toktok
    };

    /*
    |++++++++++++++++++++++++++++++++|
    |         HANDLE SUBMIT          |
    |++++++++++++++++++++++++++++++++|
    */

    const handleSubmit = async () => {
        setYtId("");
        setLoading(true);
        if (ytUsername && youtubeInput) {
            const data = await YoutubeGetId(ytUsername);
            const channelId = data.channel_id;

            setTimeout(async () => {
                setLoading(false);
                const detail = await YoutubeGetDetails(channelId);
                setYtId(detail.channel_id);
                setYtAvatar(detail.avatar[2].url);
                setYtTitle(detail.title);
                setYtDesc(detail.description);
                setYtSubsCount(detail.subscriber_count);
                setYtLinks(detail.links);
                setYtAvatars(detail.avatar);
                setYtVerified(detail.verified);
                setYtHasBusiness(detail.has_business_email);
                setYtViewCount(detail.view_count);
                setYtCountry(detail.country);
                setYtCreationDate(detail.creation_date);
            }, 2000);
        } else if (ttUsername && tiktokInput) {
            const data = await TiktokGetUserInfo(ttUsername);
            // console.log(data)

            setTimeout(() => {
                setLoading(false);
                setTtId(data.userInfo.user.id);
                setTtSecId(data.userInfo.user.secUid);
                setTtNickname(data.userInfo.user.nickname);
                setTtAvatar(data.userInfo.user.avatarLarger);
                setTtVerified(data.userInfo.user.verified);
                setTtFollowerCount(data.userInfo.stats.followerCount);
            }, 1000);
        }
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

    return (
        <main className="items-center justify-center max-w-full min-h-screen">
            <section className="relative max-w-full flex flex-col bg-black min-h-[70vh] hero-sec overflow-hidden rounded-br-[7rem] rounded-bl-[7rem]">
                <div className="absolute inset-0 ">
                    <Image src="/hero.webp" fill={true} className="object-cover transition-all animate-[] brightness-50 saturate-150" alt="hero"></Image>
                </div>

                <Navbar />

                <div className="relative z-10 flex flex-col items-center justify-center flex-1 gap-4">
                    <h1 className="text-[4rem] text-white text-center font-hndExtBold">Welcome, mate!</h1>
                    <p className="text-2xl text-white font-hndReg">Please select the available information gathering tools</p>

                    <div className="flex flex-wrap gap-5">
                        <Tippy content={<span>500 limits/month</span>}>
                            <button onClick={youtubeClick} className="flex flex-col items-center px-10 py-10 transition-all bg-white hover:scale-110 hover:shadow-xl rounded-xl">
                                <Image src="/services/yt.png" width={100} height={100} alt="yt" className="m-auto"></Image>
                                <p className="text-2xl">Youtube</p>
                            </button>
                        </Tippy>
                        <Tippy content={<span>1000 limits/month</span>}>
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
                    </div>
                </div>
            </section>

            {/* Input */}

            <section className="flex flex-col items-center max-w-full gap-4 py-4 pb-12 min-h-10">
                <p className="text-2xl font-hndMedium text-[#0a0a0a]">Enter the {youtubeInput ? "Youtube" : tiktokInput ? "Tiktok" : ""} username below.</p>

                {youtubeInput && <input onChange={(e) => setYtUsername(e.target.value)} className="py-2 text-2xl text-center border-2 border-red-500 outline-none px-7 rounded-2xl font-hndMedium" type="text" name="username" id="username" placeholder="Username here" />}

                {tiktokInput && <input onChange={(e) => setTtUsername(e.target.value)} className="py-2 text-2xl text-center border-2 border-black outline-none px-7 rounded-2xl font-hndMedium" type="text" name="username" id="username" placeholder="Username here" />}

                {loading ? (
                    <button disabled className="px-5 py-2 text-xl text-white bg-blue-500 opacity-50 cursor-not-allowed rounded-xl">
                        Loading...
                    </button>
                ) : (
                    <button disabled={!ytUsername && !ttUsername} onClick={handleSubmit} className={`${!ytUsername && !ttUsername ? "opacity-50 cursor-not-allowed" : ""} transition-all px-5 py-2 text-xl text-white bg-blue-500 rounded-xl`}>
                        Submit
                    </button>
                )}
            </section>

            {/* Hasil pelacakan */}

            <section className="flex flex-col items-center max-w-full min-h-screen">
                <h1 className="text-[3rem] font-hndMedium">Result</h1>

                {loading ? <div className="w-12 h-12 border-4 border-t-4 rounded-full border-t-blue-400 animate-spin"></div> : null}

                {ytId && <YoutubeResult ytId={ytId} ytAvatar={ytAvatar} ytTitle={ytTitle} ytSubsCount={ytSubsCount} ytLinks={ytLinks} ytAvatars={ytAvatars} ytVerified={ytVerified} ytHasBusiness={ytHasBusiness} ytViewCount={ytViewCount} ytCountry={ytCountry} ytCreationDate={ytCreationDate} />}

                {ttId && <TiktokResult ttId={ttId} ttSecUid={ttSecId} ttNickname={ttNickname} ttAvatar={ttAvatar} ttVerified={ttVerified} ttFollowerCount={ttFollowerCount} />}
            </section>
        </main>
    );
}
