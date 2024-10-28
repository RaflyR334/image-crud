/** @type {import('next').NextConfig} */
const nextConfig = {
    images:{
        remotePatterns:[
            {
                protocol: "https",
                hostname: "zbp9rorv9ijoyvnb.public.blob.vercel-storage.com"
            }
        ]
    }
};

export default nextConfig;
