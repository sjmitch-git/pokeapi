import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import '@/styles/index.css'

import { GlobalProvider } from '@/providers/global.provider'

import { APP_TITLE, APP_DESCRIPTION, APP_BASE_URL, APP_AUTHOR, APP_AUTHOR_URL } from '@/constants'

import Header from './header'
import Footer from './footer'
import Container from './container'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
	title: {
		default: APP_TITLE,
		template: `%s | ${APP_TITLE}`,
	},
	description: APP_DESCRIPTION,
	metadataBase: new URL(APP_BASE_URL),
	alternates: {
		canonical: '/',
	},
	authors: [{ name: APP_AUTHOR, url: APP_AUTHOR_URL }],
	verification: {
		google: 'Ws4t6yaR0RsGkflU774SwgOj3duRsycUnDwyXY3SSD0',
	},
	openGraph: {
		title: APP_TITLE,
		description: APP_DESCRIPTION,
		url: new URL(APP_BASE_URL),
		siteName: APP_TITLE,
		images: [
			{
				url: '/icon.png',
				width: 512,
				height: 512,
			},
		],
		locale: 'en_GB',
		type: 'website',
	},
	twitter: {
		card: 'summary_large_image',
	},
}

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode
}>) {
	return (
		<html lang='en'>
			<GlobalProvider>
				<body className={`${inter.className}`}>
					<Header />
					<Container className='flex-grow'>{children}</Container>
					<Footer />
				</body>
			</GlobalProvider>
		</html>
	)
}
