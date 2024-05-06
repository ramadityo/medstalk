"use client";

import React, { useEffect, useState } from "react";

function page({ params }: { params: { slug: string } }) {
    const [isLoaded, setIsLoaded] = useState(true);
    // const [apiKey, setApiKey] = useState("");

    const fetchDataYoutube = async () => {
        const url = `https://youtube-v2.p.rapidapi.com/channel/id?channel_name=${params.slug}`;
        const options = {
            method: "GET",
            headers: {
                // "X-RapidAPI-Key": `${process.env.RAPID_API_KEY}`,
                "X-RapidAPI-Key": "fa49474c7amsh3a748c919e4eb16p1a5865jsn6e18d95e3568",
                "X-RapidAPI-Host": "youtube-v2.p.rapidapi.com",
            },
        };

        try {
            const response = await fetch(url, options);
            const result = await response.text();
            console.log(result);
        } catch (error) {
            console.error(error);
        }
    };

    useEffect(() => {
        fetchDataYoutube();
    }, []);

    return (
        <div>
            <h1>{params.slug}</h1>
            {/* <p>API Key terdeteksi: {process.env.NEXT_PUBLIC_RAPID_API_KEY}</p> */}
        </div>
    );
}

export default page;
