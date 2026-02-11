import type { NextConfig } from "next";

const nextConfig: NextConfig = {
	images: {
		remotePatterns: [
			{
				protocol: "https",
				hostname: "placehold.co",
				port: "",
				pathname: "/**", // Pozwala na wszystkie obrazy z tej domeny
			},
		],
	},
	eslint: {
		// Ostrzeżenie: To pozwala na build projektu nawet z błędami ESLint.
		ignoreDuringBuilds: true,
	},
	typescript: {
		// Ostrzeżenie: To pozwala na build projektu nawet z błędami TypeScript.
		ignoreBuildErrors: true,
	},
};

export default nextConfig;
