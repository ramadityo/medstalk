import React from "react";

import Image from "next/image";
import Link from "next/link";
import Verified from "./Verified";
import ShorterText from "./ShorterText";
import NumFormater from "./NumFormater";

function TiktokResult(props) {
    const { ttId, ttSecUid, ttNickname, ttAvatar, ttVerified, ttFollowerCount, ttAvatarThumb, ttAvatarMedium, ttAvatarLarger, ttBusinessAcc, ttRegion, ttFollowingCount, ttFriend, ttHeartCount, ttVideoCount } = props;
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
                        <ShorterText long_text={ttSecUid} />
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
                    <Image src={ttAvatarThumb} width={48} height={48} className="border-2 border-black rounded-full" />
                </div>
                <div>
                    <Image src={ttAvatarMedium} width={88} height={88} className="border-2 border-black rounded-full" />
                </div>
                <div>
                    <Image src={ttAvatarLarger} width={172} height={172} className="border-2 border-black rounded-full" />
                </div>
            </div>

            <h1 className="pt-12 text-3xl font-hndMedium">Miscellaneous Info</h1>

            <div>
                <table className="text-lg border-separate border-spacing-3">
                    <tr>
                        <td>Followers count</td>
                        <td>:</td>
                        <td><NumFormater number={ttFollowerCount} /></td>
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
                        <td><NumFormater number={ttHeartCount} /></td>
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
