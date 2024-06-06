import React from "react";

import Image from "next/image";
import Link from "next/link";
import Verified from "./Verified";
import ShorterText from "./ShorterText";

function TiktokResult(props) {
    const { ttId, ttSecUid, ttNickname, ttAvatar, ttVerified, ttFollowerCount } = props;
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
                        <span className="block">{ttNickname}</span> {ttVerified == true ? <Verified /> : ""}
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
                    <td><ShorterText long_text={ttSecUid} /></td>
                </tr>
                <tr>
                    <td>Follower count</td>
                    <td>:</td>
                    <td>{ttFollowerCount}</td>
                </tr>
            </table>
        </>
    );
}

export default TiktokResult;
