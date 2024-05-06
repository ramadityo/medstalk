"use client";

import React, { useState } from "react";

import { redirect, useRouter } from "next/navigation";
import { useSearchParams } from "next/navigation";
import { usePathname } from "next/navigation";

import Content from "@/components/content/Content";

import Image from "next/image";
import Link from "next/link";

export default function Home() {
    const router = useRouter();

    const pathname = usePathname();

    const [youtubeSearch, setYoutubeSearch] = useState(false);
    const [tiktokSearch, setTiktokSearch] = useState(true);
    const [isLoading, setIsLoading] = useState(false);

    const [username, setUsername] = useState("");

    const enableYoutubeSearch = () => {
        setYoutubeSearch(true);
        setTiktokSearch(false);
    };

    const enableTiktokSearch = () => {
        setYoutubeSearch(false);
        setTiktokSearch(true);
    };

    const onSubmit = async () => {
        // e.preventDefault();
        // console.log(username);
        setIsLoading(true);
        if (youtubeSearch) {
            // router.push(`/youtube/`);
            redirect(`/youtube/${username}`);
        } else if (tiktokSearch) {
            // router.push(`/tiktok/`);
            redirect(`/tiktok/${username}`);
        }
    };

    return (
        <Content>
            <main>
                <div className="flex flex-col gap-7 items-center min-h-[50vh] bg-blue-500">
                    <div className="m-auto">
                        <h1 className="font-bold text-5xl text-white mb-5">Media Stalking Tools!</h1>
                        <div className="tools-ct flex items-center justify-center gap-3">
                            <div
                                className="bg-white box flex flex-col items-center gap-2 py-5 shadow-md border px-9 transition-all hover:scale-105 hover:shadow-xl rounded-md cursor-pointer"
                                onClick={enableTiktokSearch}
                            >
                                <Image src="/tiktok.webp" alt="tiktok" width={100} height={100}></Image>
                                <p className="w-max text-xl font-bold">Tiktok</p>
                            </div>
                            <div
                                className="bg-white box flex flex-col items-center gap-2 py-5 shadow-md border px-9 transition-all hover:scale-105 hover:shadow-xl rounded-md cursor-pointer"
                                onClick={enableYoutubeSearch}
                            >
                                <Image src="/youtube.webp" alt="youtube" width={100} height={100}></Image>
                                <p className="w-max text-xl font-bold">Youtube</p>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="form-ct max-w-full min-h-[50vh] flex">
                    <div className="mx-auto pt-14">
                        <form action={onSubmit}>
                            <div className="flex flex-col items-center">
                                <h1 className="font-bold text-3xl mb-5">
                                    Masukkan username {tiktokSearch ? <span>Tiktok</span> : <span>Youtube</span>}
                                </h1>
                                <input
                                    type="text"
                                    placeholder={`${tiktokSearch ? "Username tiktok" : "Username youtube"}`}
                                    className={`outline-none w-full h-8 text-center px-2 py-5 rounded-xl border border-spacing-2 transition-all ${
                                        tiktokSearch ? "border-blue-500" : "border-red-500"
                                    }`}
                                    required
                                    onChange={(e) => setUsername(e.target.value)}
                                    value={username}
                                />

                                {/* <button className="cursor-pointer mt-5 bg-blue-500 text-white px-4 py-2 rounded-md">
                                    {isLoading && <span>Loading...</span>}
                                    {!isLoading && <span>Mulai stalk!</span>}
                                </button> */}
                                <input
                                    type="submit"
                                    placeholder="Submit"
                                    onSubmit={onSubmit}
                                    className="cursor-pointer mt-5 bg-blue-500 text-white px-4 py-2 rounded-md"
                                />
                            </div>
                        </form>
                    </div>
                </div>
            </main>
        </Content>
    );
}
