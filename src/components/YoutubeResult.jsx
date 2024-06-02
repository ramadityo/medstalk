import React from "react";

import Image from "next/image";
import Verified from "./Verified";

function YoutubeResult(props) {
    // ytId, ytAvatar, ytTitle, ytDesc, ytSubsCount, ytLinks, ytAvatars, ytVerified, ytHasBusiness, ytViewCount, ytCountry, ytCreationDate
    const { ytId, ytAvatar, ytTitle, ytDesc, ytSubsCount, ytLinks, ytAvatars, ytVerified, ytHasBusiness, ytViewCount, ytCountry, ytCreationDate } = props;

    return (
        <>
            <table className="text-lg border-separate border-spacing-3">
                <tr className="p-0">
                    <td rowSpan={4} className="mr-2">
                        <Image src={ytAvatar} width={162} height={162} className="rounded-full "></Image>
                    </td>
                    <td>Title</td>
                    <td>:</td>
                    <td className="flex items-center gap-4">
                        <span>{ytTitle}</span> {ytVerified == true ? <Verified /> : ""}
                    </td>
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

            <h1 className="text-3xl pt-9 font-hndMedium">Avatars</h1>
            <div className="flex items-end gap-4 pt-6">
                {ytAvatars.map((avatar, idx) => {
                    return (
                        <div key={idx}>
                            <Image src={avatar.url} width={avatar.width} height={avatar.height} className="rounded-full" />
                        </div>
                    );
                })}
            </div>

            <h1 className="pt-12 text-3xl font-hndMedium">Miscellaneous Info</h1>

            <div className="max-w-1/2">
                <table className="text-lg">
                    <tr>
                        <td>Youtube descirption</td>
                        <td>:</td>
                        <td>{ytDesc}</td>
                    </tr>
                </table>
            </div>
        </>
    );
}

export default YoutubeResult;
