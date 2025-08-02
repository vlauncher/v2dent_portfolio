import type { Metadata } from "next";
import { Fira_Code, Geist, Geist_Mono, Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ 
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
});

const firaCode = Fira_Code({ 
  subsets: ['latin'],
  variable: '--font-fira-code',
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'Samson Amos | Software Developer',
  description: 'Portfolio of Samson Amos - Software Developer specializing in Python, JavaScript, and cloud technologies',
  keywords: ['Software Developer', 'Python', 'JavaScript', 'React', 'Node.js', 'AWS', 'Portfolio'],
  authors: [{ name: 'Samson Amos' }],
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: '#ffffff' },
    { media: '(prefers-color-scheme: dark)', color: '#1a1a1a' },
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${inter.variable} ${firaCode.variable} scroll-smooth`}>
      <body className="bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100 transition-colors duration-300">
        {children}
      </body>
    </html>
  );
}
