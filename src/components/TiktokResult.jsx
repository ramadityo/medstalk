import React from "react";

import Image from "next/image";
import Link from "next/link";
import Verified from "./Verified";

function TiktokResult(props) {
    const { ttId, ttSecUid, ttNickname, ttAvatar, ttVerified } = props;
    return (
        <>
            <table className="text-lg border-separate border-spacing-3">
                <tr className="p-0">
                    <td rowSpan={4} className="mr-2">
                        <Image src={ttAvatar} width={162} height={162} className="rounded-full "></Image>
                    </td>
                    <td>Title</td>
                    <td>:</td>
                    <td className="flex items-center gap-4">
                        <span>{ttNickname}</span> {ttVerified == true ? <Verified /> : ""}
                    </td>
                </tr>
                <tr>
                    <td>ID</td>
                    <td>:</td>
                    <td>{ttId}</td>
                </tr>
                {/* <tr>
                    <td>Subs count</td>
                    <td>:</td>
                    <td>{ytSubsCount}</td>
                </tr>
                <tr>
                    <td>Country</td>
                    <td>:</td>
                    <td>{ytCountry}</td>
                </tr> */}
            </table>
        </>
    );
}

export default TiktokResult;
