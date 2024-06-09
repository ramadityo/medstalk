import React from "react";
import axios from "axios";

async function TiktokGetUserInfo(username) {
    const options = {
        method: "GET",
        url: `${process.env.TIKTOK_USER_INFO_API_2}`,
        params: {
            // username: username,
            user_name: username,
        },
        headers: {
            // "x-rapidapi-key": `${process.env.NEXT_PUBLIC_RAPID_API_KEY}`,
            "x-rapidapi-key": `${process.env.RAPID_API_KEY}`,
            "x-rapidapi-host": "tiktok-scraper2.p.rapidapi.com",
        },
    };

    try {
        const response = await axios.request(options);
        // const data = response.data;
        // console.log(data)
        return response.data;
    } catch (error) {
        // console.error(error);
        return null;
    }
}

export default TiktokGetUserInfo;
