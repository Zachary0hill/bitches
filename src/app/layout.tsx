import type { Metadata } from 'next';
import { Geist, Geist_Mono, Press_Start_2P } from 'next/font/google';
import './globals.css';

const geistSans = Geist({
	variable: '--font-geist-sans',
	subsets: ['latin'],
});

const geistMono = Geist_Mono({
	variable: '--font-geist-mono',
	subsets: ['latin'],
});

const pressStart = Press_Start_2P({
	variable: '--font-retro',
	weight: '400',
	subsets: ['latin'],
});

export const metadata: Metadata = {
	title: 'read the url',
	description: 'A visual landing page',
	icons: {
		icon: '/icon.png',
	},
	openGraph: {
		title: 'read the url',
		description: 'A visual landing page',
		siteName: 'read the url',
	},
	twitter: {
		title: 'read the url',
		description: 'A visual landing page',
	},
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html
			lang="en"
			className={`${geistSans.variable} ${geistMono.variable} ${pressStart.variable} h-full antialiased dark`}
		>
			<body className="min-h-full flex flex-col bg-[#050508]">
				{children}
			</body>
		</html>
	);
}
