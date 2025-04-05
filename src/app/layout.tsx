import type { Metadata } from "next";
import { Inter } from 'next/font/google'
import "./globals.css";
import AddToCartProvider from "@/contextApi/addToCartProvider";
import ProductDetailsProvider from "@/contextApi/productDetailsProvider";
import AddressProvider from "@/contextApi/addressProvider";
import { Toaster } from "react-hot-toast";
import LiveChatPopup from "@/components/liveChatPopup";

const inter = Inter(
  {
    subsets: ['latin'],
    display: 'swap',
    variable: '--inter',
  }
)

export const metadata: Metadata = {
  title: "zmac",
  description: "zmac an multi vendor ecommerce web site",
  keywords: ["ecommerce", "zmac", "product", "site", "react.js", "next.js"],
  openGraph: {
    title: "zmac",
    description: "zmac an multi vendor ecommerce web site",
    images: [{
      url: "https://example.com/og.png",
    }],
    url: `${process.env.API_URL}`
  },
  twitter: {
    title: "zmac",
    description: "zmac an multi vendor ecommerce web site",
    images: [{
      url: "https://example.com/og.png",
    }],
    card:"summary_large_image",
    creator:"zmac"
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning={true}>
      <body
        className={`${inter.variable}`}
        suppressHydrationWarning={true}
      >
        <AddressProvider>
          <ProductDetailsProvider>
            <AddToCartProvider>
              {/* <Header/> */}
              {children}
              {/* <Footer/> */}
            </AddToCartProvider>
          </ProductDetailsProvider>
        </AddressProvider>
        <Toaster />
        <LiveChatPopup/>
      </body>
    </html>
  );
}
