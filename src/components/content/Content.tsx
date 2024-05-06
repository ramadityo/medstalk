import React from "react";
import Navbar from "@/components/navbar/Navbar";
import Footer from "@/components/footer/Footer";

function Content({ children }: { children: React.ReactNode }) {
    return (
        <>
            <Navbar />
            <main className="relative w-full">{children}</main>
            <Footer />
        </>
    );
}

export default Content;
