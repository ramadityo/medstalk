import React from "react";

import Image from "next/image";
import Verified from "./Verified";
import Link from "next/link";

function YoutubeResult(props) {
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

            <div className="">
                <table className="text-lg border-separate border-spacing-3">
                    <tr>
                        <td>Links</td>
                        <td>:</td>
                        <td className="flex gap-2">
                            {ytLinks.map((link, idx) => {
                                return (
                                    <span key={idx}>
                                        <Link href={`https://` + `${link.endpoint}`} className="text-blue-500 underline" target="_blank">
                                            {link.name}
                                        </Link>
                                    </span>
                                );
                            })}
                        </td>
                    </tr>
                    <tr>
                        <td>Has business email</td>
                        <td>:</td>
                        <td>{ytHasBusiness ? "Yes" : "No"}</td>
                    </tr>
                    <tr>
                        <td>Viewed count</td>
                        <td>:</td>
                        <td>{ytViewCount}</td>
                    </tr>
                    
                    <tr>
                        <td>Account created</td>
                        <td>:</td>
                        <td>{ytCreationDate}</td>
                    </tr>
                </table>
            </div>
        </>
    );
}

export default YoutubeResult;
