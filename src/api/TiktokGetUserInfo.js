import React from "react";
import axios from "axios";

async function TiktokGetUserInfo(username) {
    const options = {
        method: "GET",
        url: `${process.env.NEXT_PUBLIC_TIKTOK_USER_INFO_API}`,
        params: {
            username: username,
        },
        headers: {
            "x-rapidapi-key": `${process.env.NEXT_PUBLIC_RAPID_API_KEY}`,
            "x-rapidapi-host": "tiktok239.p.rapidapi.com",
        },
    };

    try {
        const response = await axios.request(options);
        // const data = response.data;
        // console.log(data)
        return response.data;
    } catch (error) {
        console.error(error);
    }
}

export default TiktokGetUserInfo;
