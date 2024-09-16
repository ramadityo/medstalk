"use client";

import React, { useEffect, useState } from "react";

import Image from "next/image";
import Link from "next/link";
import Verified from "./Verified";
import ShorterText from "./ShorterText";
import NumFormater from "./NumFormater";

function TiktokResult(props) {
    const { detail } = props;

    // Main info
    const [ttId, setTtId] = useState(null);
    const [ttSecId, setTtSecId] = useState("");
    const [ttNickname, setTtNickname] = useState("");
    const [ttLogId, setTtLogId] = useState("");
    const [ttAvatar, setTtAvatar] = useState("");

    // Avatars
    const [ttAvatarLarger, setTtAvatarLarger] = useState("");
    const [ttAvatarMedium, setTtAvatarMedium] = useState("");
    const [ttAvatarThumb, setTtAvatarThumb] = useState("");

    // Misc info
    const [ttVerified, setTtVerified] = useState(false);
    const [ttFollowerCount, setTtFollowerCount] = useState(0);
    const [ttFollowingCount, setTtFollowingCount] = useState(0);

    const [ttBusinessAcc, setTtBusinessAcc] = useState(false);
    const [ttRegion, setTtRegion] = useState("");
    const [ttFriend, setTtFriend] = useState("");
    const [ttHeartCount, setTtHeartCount] = useState(0);
    const [ttVideoCount, setTtVideoCount] = useState(0);

    useEffect(() => {
        setTtId(detail.user.id);
        if (ttId) {
            setTimeout(() => {
                console.clear();
            }, 3000);
        }
        setTtSecId(detail.user.secUid);
        setTtNickname(detail.user.nickname);
        setTtAvatar(detail.user.avatarLarger);
        setTtVerified(detail.user.verified);
        setTtFollowerCount(detail.stats.followerCount);
        setTtAvatarThumb(detail.user.avatarThumb);
        setTtAvatarMedium(detail.user.avatarMedium);
        setTtAvatarLarger(detail.user.avatarLarger);

        setTtBusinessAcc(detail.user.commerceUserInfo.commerceUser);
        setTtRegion(detail.user.region);
        setTtFollowingCount(detail.stats.followingCount);
        setTtHeartCount(detail.stats.heartCount);
        setTtFriend(detail.stats.friendCount);
        setTtVideoCount(detail.stats.videoCount);
    }, [detail]);

    return (
        <>
            <table className="text-lg border-separate border-spacing-3">
                <tr className="p-0">
                    <td rowSpan={4} className="mr-2">
                        <Image src={ttAvatar} width={162} height={162} className="rounded-full "></Image>
                    </td>
                    <td>Title</td>
                    <td>:</td>
                    <td>
                        <span className="inline-block">{ttNickname}</span> {ttVerified == true ? <Verified /> : ""}
                    </td>
                </tr>
                <tr>
                    <td>ID</td>
                    <td>:</td>
                    <td>{ttId}</td>
                </tr>
                <tr>
                    <td>Sec ID</td>
                    <td>:</td>
                    {/* <td>{ttSecUid}</td> */}
                    <td>
                        <ShorterText long_text={ttSecId} />
                    </td>
                </tr>
                <tr>
                    <td>Region</td>
                    <td>:</td>
                    <td>{ttRegion}</td>
                </tr>
            </table>

            <h1 className="text-3xl pt-9 font-hndMedium">Avatars</h1>

            <div className="flex items-end gap-4 pt-6">
                <div>
                    <Image src={ttAvatarThumb} width={48} height={48} className="border-2 border-black rounded-full" alt="Image thumb" />
                </div>
                <div>
                    <Image src={ttAvatarMedium} width={88} height={88} className="border-2 border-black rounded-full" alt="Image thumb" />
                </div>
                <div>
                    <Image src={ttAvatarLarger} width={172} height={172} className="border-2 border-black rounded-full" alt="Image thumb" />
                </div>
            </div>

            <h1 className="pt-12 text-3xl font-hndMedium">Miscellaneous Info</h1>

            <div>
                <table className="text-lg border-separate border-spacing-3">
                    <tr>
                        <td>Followers count</td>
                        <td>:</td>
                        <td>
                            <NumFormater number={ttFollowerCount} />
                        </td>
                    </tr>
                    <tr>
                        <td>Following count</td>
                        <td>:</td>
                        <td>{ttFollowingCount}</td>
                    </tr>
                    <tr>
                        <td>Has business account</td>
                        <td>:</td>
                        <td>{ttBusinessAcc ? "Yes" : "No"}</td>
                    </tr>
                    <tr>
                        <td>Friends count</td>
                        <td>:</td>
                        <td>{ttFriend}</td>
                    </tr>
                    <tr>
                        <td>Videos count</td>
                        <td>:</td>
                        <td>{ttVideoCount}</td>
                    </tr>
                    <tr>
                        <td>Favorited total</td>
                        <td>:</td>
                        <td>
                            <NumFormater number={ttHeartCount} />
                        </td>
                    </tr>

                    {/* <tr>
                        <td>Viewed count</td>
                        <td>:</td>
                        <td>{ytViewCount}</td>
                    </tr>
                    
                    <tr>
                        <td>Account created</td>
                        <td>:</td>
                        <td>{ytCreationDate}</td>
                    </tr> */}
                </table>
            </div>
        </>
    );
}

export default TiktokResult;
