import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
    title: "Medstalk | A simple information gathering website!",
    description: "Generated by create next app",
};

export default function RootLayout({ children }) {
    return (
        <html lang="en" className="overflow-x-hidden">
            <body className={`${inter.className} !pr-0`}>{children}</body>
        </html>
    );
}
