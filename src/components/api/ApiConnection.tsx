// import React, { useState } from 'react'
import React from 'react'

export default async function ApiConnection({ slugs, link, host }: { slugs: string, link: string, host: string }) {

    // const [result, setResult] = useState([]);

    const result : any = [];
    const url = `${link}${slugs}`;
    const options = {
        method: "GET",
        headers: {
            // "X-RapidAPI-Key": `${process.env.RAPID_API_KEY}`,
            "X-RapidAPI-Key": `${process.env.RAPID_API_KEY}`,
            "X-RapidAPI-Host": host,
        },
    };

    try {
        const response = await fetch(url, options);
        const result = await response.text();
        console.log(result);
    } catch (error) {
        console.error(error);
    }

    return result;
}
