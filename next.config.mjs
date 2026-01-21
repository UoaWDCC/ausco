import { withPayload } from "@payloadcms/next/withPayload";

/** @type {import('next').NextConfig} */
const nextConfig = {
  // Your Next.js config here
  images: {
    qualities: [75, 80, 85, 90],
  },
};

export default withPayload(nextConfig, { devBundleServerPackages: false });
