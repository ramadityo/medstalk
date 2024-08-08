/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: false,
    images: {
        remotePatterns: [
            {
                protocol: "https",
                hostname: "yt3.googleusercontent.com",
                port: "",
                pathname: "/**",
            },
            {
                protocol: "https",
                hostname: "p16-sign-va.tiktokcdn.com",
                port: "",
                pathname: "/**",
            },
            {
                protocol: "https",
                hostname: "p19-sign.tiktokcdn-us.com",
                port: "",
                pathname: "/**",
            },
            {
                protocol: "https",
                hostname: "p16-sign.tiktokcdn-us.com",
                port: "",
                pathname: "/**",
            },
        ],
    },
};

export default nextConfig;
