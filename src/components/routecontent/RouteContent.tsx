'use client'

import React from 'react'
import { usePathname } from "next/navigation";

function RouteContent({children} : {children: React.ReactNode}) {
    const pathname = usePathname();
    return (
        <div key={pathname}>
            { children }
        </div>
    )
}

export default RouteContent