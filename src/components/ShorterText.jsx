import React from 'react'

function ShorterText({long_text}) {
    const longText = long_text;
    if (longText.length > 50){
        return <span>{longText.slice(0, 15) + "..."}</span>
    }
}

export default ShorterText