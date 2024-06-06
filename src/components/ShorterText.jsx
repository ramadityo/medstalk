"use client";

import React from "react";

import Tippy from "@tippyjs/react";
import "tippy.js/dist/tippy.css";

import { AiFillInfoCircle } from "react-icons/ai";

function ShorterText({ long_text }) {
    const longText = long_text;
    if (longText.length > 50) {
        return (
            <span className="flex items-center">
                {longText.slice(0, 15) + "..."}
                <Tippy content={<span>{longText}</span>}>
                    <div>
                        <AiFillInfoCircle />
                    </div>
                </Tippy>
            </span>
        );
    }
}

export default ShorterText;
