import { Outfit } from "next/font/google";
import "./globals.css";
import ParticleBackground from "../../components/ParticleBackground";
const outfit = Outfit({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const metadata = {
  title: "Ahmad Mujtaba | MERN Stack & Next.js Developer",
  description:
    "Portfolio of Ahmad Mujtaba, a full-stack developer specializing in MongoDB, Express, React, Node.js, and Next.js. Explore projects like TaskFlow and PowerHouse Gym.",
  keywords: [
    "Ahmad Mujtaba",
    "MERN Stack Developer",
    "Next.js Developer",
    "Full Stack Developer Peshawar",
    "React Developer Pakistan",
    "Node.js Developer",
  ],
  authors: [{ name: "Ahmad Mujtaba" }],
  metadataBase: new URL("https://your-domain.vercel.app"), // apna actual deployed URL daalein
  openGraph: {
    title: "Ahmad Mujtaba | MERN Stack & Next.js Developer",
    description:
      "Full-stack developer building modern web applications with MongoDB, Express, React, Node.js, and Next.js.",
    url: "https://your-domain.vercel.app", // apna actual deployed URL daalein
    siteName: "Ahmad Mujtaba Portfolio",
    images: [
      {
        url: "/og-image.png", // niche explain kiya hai
        width: 1200,
        height: 630,
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Ahmad Mujtaba | MERN Stack & Next.js Developer",
    description:
      "Full-stack developer building modern web applications with MongoDB, Express, React, Node.js, and Next.js.",
    images: ["/og-image.png"],
  },
  robots: {
    index: true,
    follow: true,
  },
  icons: {
    icon: "/icon.png",
    shortcut: "/icon.png",
    apple: "/icon.png",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning className="scroll-smooth">
      <head>
        {/* Ye script page paint hone se PEHLE chalta hai, isliye flash nahi hota */}
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function() {
                try {
                  var theme = localStorage.getItem('theme');
                  if (theme === 'dark' || (!theme && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
                    document.documentElement.classList.add('dark');
                  }
                } catch (e) {}
              })();
            `,
          }}
        />
      </head>
      <body
        className={`${outfit.className} antialiased leading-8 overflow-x-hidden relative dark:bg-darkTheme dark:text-white`}
      >
          <ParticleBackground />
        {children}
      </body>
    </html>
  );
}
