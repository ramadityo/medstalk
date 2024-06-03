import React from "react";
const axios = require("axios");

async function TiktokGetDetails(username) {
    const options = {
        method: "GET",
        url: `${process.env.NEXT_PUBLIC_TIKTOK_DETAIL_API}`,
        params: {
            username: username,
        },
        headers: {
            "X-RapidAPI-Key": `${process.env.NEXT_PUBLIC_RAPID_API_KEY}`,
            "X-RapidAPI-Host": "scraptik.p.rapidapi.com",
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

async function TiktokGetUserInfo(username){
    const options = {
        method: "GET",
        url: `${process.env.NEXT_PUBLIC_TIKTOK_USER_INFO_API}`,
        params: {
            username: username,
        },
        headers: {
            "X-RapidAPI-Key": `${process.env.NEXT_PUBLIC_RAPID_API_KEY}`,
            "X-RapidAPI-Host": "scraptik.p.rapidapi.com",
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

export default {TiktokGetDetails, TiktokGetUserInfo}
