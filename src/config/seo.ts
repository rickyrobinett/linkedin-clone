import { DefaultSeoProps } from "next-seo";

export const baseUrl = "https://linkedin-clone-martstech.vercel.app";

export const defaultSEO: DefaultSeoProps = {
  title: "LinkedIn Clone",
  description:
    "750 million+ members | Manage your professional identity. Build and engage with your professional network. Access knowledge, insights and opportunities.",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: baseUrl,
    site_name: "LinkedIn Clone",
    images: [
      {
        url: `${baseUrl}/meta/icon.png`,
        alt: "LinkedIn Clone",
      },
    ],
  },
};
