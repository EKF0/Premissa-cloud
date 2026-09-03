/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "standalone",
  transpilePackages: ["@permissa/contracts"],
};

export default nextConfig;
