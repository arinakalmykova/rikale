import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Rikale — веб-дизайн и разработка",
  description:
    "Портфолио Арины Калмыковой — веб-дизайн, веб-разработка и создание современных цифровых проектов.",
  keywords: [
    "веб-дизайн",
    "веб-разработка",
    "создание сайтов",
    "дизайн сайтов",
    "frontend",
    "backend",
    "графический дизайн",
  ],
  icons: {
    icon: "/favicon.ico",
  },
  openGraph: {
    title: "Rikale — веб-дизайн и разработка",
    description:
      "Сайты, интерфейсы и цифровые проекты от идеи и дизайна до реализации.",
    url: "https://rikale.ru",
    siteName: "Rikale",
    locale: "ru_RU",
    type: "website",
    images: [
      {
        url: "https://rikale.ru/logo.svg",
        width: 1200,
        height: 630,
        alt: "Rikale",
      },
    ],
  },
};


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ru" className="h-full antialiased">
      <body className="min-h-full flex flex-col">
        {children}
      </body>
    </html>
  );
}
