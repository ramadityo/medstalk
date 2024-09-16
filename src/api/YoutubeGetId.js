"use server";

import React from "react";
import axios from "axios";

export default async function YoutubeGetId(channel_name) {
    const options = {
        method: "GET",
        url: `${process.env.NEXT_PUBLIC_YOUTUBE_ID_API}`,
        params: {
            channel_name: channel_name,
        },
        headers: {
            "x-rapidapi-key": `${process.env.NEXT_PUBLIC_RAPID_API_KEY}`,
            "x-rapidapi-host": "youtube-v2.p.rapidapi.com",
        },
    };

    try {
        const response = await axios.request(options);
        // const data = response.data;
        return response.data;
    } catch (error) {
        console.error(error);
    }
}
