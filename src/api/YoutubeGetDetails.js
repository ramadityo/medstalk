"use server";

import React from "react";
import axios from "axios";

export default async function YoutubeGetDetails(channel_id) {
    const options = {
        method: "GET",
        url: `${process.env.NEXT_PUBLIC_YOUTUBE_DETAIL_API}`,
        params: {
            channel_id: channel_id,
        },
        headers: {
            "x-rapidapi-key": `${process.env.NEXT_PUBLIC_RAPID_API_KEY}`,
            "x-rapidapi-host": "youtube-v2.p.rapidapi.com",
        },
    };

    try {
        const response = await axios.request(options);
        const data = response.data;

        console.log(data);

        return data;
    } catch (error) {
        console.error(error);
    }
}
