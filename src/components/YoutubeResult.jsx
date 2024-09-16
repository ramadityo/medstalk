"use client";

import React, { useEffect, useState } from "react";

import Image from "next/image";
import Verified from "./Verified";
import Link from "next/link";

function YoutubeResult(props) {
    const { detail } = props;

    const [ytId, setYtId] = useState("");
    const [ytAvatar, setYtAvatar] = useState("");
    const [ytTitle, setYtTitle] = useState("");
    const [ytDesc, setYtDesc] = useState("");
    const [ytSubsCount, setYtSubsCount] = useState("");
    const [ytLinks, setYtLinks] = useState([]);
    const [ytAvatars, setYtAvatars] = useState([]);
    const [ytVerified, setYtVerified] = useState();
    const [ytHasBusiness, setYtHasBusiness] = useState();
    const [ytViewCount, setYtViewCount] = useState("");
    const [ytCountry, setYtCountry] = useState("");
    const [ytCreationDate, setYtCreationDate] = useState("");

    useEffect(() => {
        setYtId(detail.channel_id);
        if (ytId) {
            setTimeout(() => {
                console.clear();
            }, 3000);
        }
        setYtAvatar(detail.avatar[0].url);
        setYtTitle(detail.title);
        setYtDesc(detail.description);
        setYtSubsCount(detail.subscriber_count);
        setYtLinks(detail.links);
        setYtAvatars(detail.avatar);
        setYtVerified(detail.verified);
        setYtHasBusiness(detail.has_business_email);
        setYtViewCount(detail.view_count);
        setYtCountry(detail.country);
        setYtCreationDate(detail.creation_date);
    }, [detail]);

    return (
        <>
            <table className="text-lg border-separate border-spacing-3">
                <tbody>
                    <tr className="p-0">
                        <td rowSpan={4} className="mr-2">
                            {ytAvatar && <Image src={ytAvatar} width={162} height={162} className="rounded-full mobile:hidden" alt="Photo profile" />}
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
                </tbody>
            </table>

            <h1 className="text-3xl pt-9 font-hndMedium mobile:hidden">Avatars</h1>
            <div className="flex items-end gap-4 pt-6 mobile:hidden">
                {ytAvatars.map((avatar, idx) => {
                    return (
                        <div key={idx}>
                            <Image src={avatar.url} width={avatar.width} height={avatar.height} className="rounded-full" alt={`Image thumb ${idx}`} />
                        </div>
                    );
                })}
            </div>

            <h1 className="pt-12 text-3xl font-hndMedium">Miscellaneous Info</h1>

            <div>
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
