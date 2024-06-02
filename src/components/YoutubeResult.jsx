import React from "react";

import Image from "next/image";
import Verified from "./Verified";

function YoutubeResult({ ytId, ytAvatar, ytTitle, ytDesc, ytSubsCount, ytLinks, ytAvatars, ytVerified, ytHasBusiness, ytViewCount, ytCountry, ytCreationDate }) {
    return (
        <>
            <table className="text-lg border-separate border-spacing-3">
                {/* Main info */}
                {/*
                    1. Avatar
                    2. Id
                    3. Title
                    4. Country
                */}
                <tr className="p-0">
                    <td rowSpan={4} className="mr-2">
                        <Image src={ytAvatar} width={162} height={162} className="rounded-full "></Image>
                    </td>
                    <td>Title</td>
                    <td>:</td>
                    <td><span>{ytTitle}</span> {ytVerified == true ? <Verified /> : ""}</td>
                </tr>
                <tr>
                    <td>ID</td>
                    <td>:</td>
                    <td>{ytId}</td>
                </tr>
                <tr>
                    <td>Subs count</td>
                    <td>:</td>
                    <td>{ytSubsCount}</td>
                </tr>
                <tr>
                    <td>Country</td>
                    <td>:</td>
                    <td>{ytCountry}</td>
                </tr>
            </table>
        </>
    );
}

export default YoutubeResult;
