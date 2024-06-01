import React from "react";
import Tippy from "@tippyjs/react";
import "tippy.js/dist/tippy.css"; // optional

export const Tooltip = ({ children }) => {
    return (
        <Tippy content={<span>Tooltip</span>}>
            
        </Tippy>
    );
};

// export default function Tooltip({ children }) {
//     return (
//         <>
//             <Tippy content={<span>Tooltip</span>}>{children}</Tippy>
//         </>
//     );
// }
