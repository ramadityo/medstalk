import React from 'react'

function NumFormater({number}) {
    const rawNumber = number;

    const numberWithCommas = rawNumber.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");

    return <span>{numberWithCommas}</span>
}

export default NumFormater