import type { Metadata } from "next";
import "./globals.css";

// Get the base path for static assets
const isDev = process.env.NODE_ENV === 'development';
const basePath = isDev ? '' : ''; // No base path for root deployment

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
    <html lang="en" className="scroll-smooth">
      <head>
        <link rel="icon" href="/favicon.ico" />
      </head>
      <body className="font-sans bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100 transition-colors duration-300">
        {children}
      </body>
    </html>
  );
}
