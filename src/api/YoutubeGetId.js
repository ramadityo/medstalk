import React from 'react'
import axios from "axios";

export default async function GetChannelId(channel_name) {
    const options = {
        method: "GET",
        url: `${process.env.NEXT_PUBLIC_YOUTUBE_ID_API}`,
        params: {
            channel_name: channel_name,
        },
        headers: {
            "X-RapidAPI-Key": `${process.env.NEXT_PUBLIC_RAPID_API_KEY}`,
            "X-RapidAPI-Host": "youtube-v2.p.rapidapi.com",
        },
    };

    try {
        const response = await axios.request(options);
        const data = response.data;

        return data;
    } catch (error) {
        console.error(error);
    }
}
