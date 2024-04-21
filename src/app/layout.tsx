import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import '@/styles/index.css'

import { AppProvider } from '@/providers/app-provider'

import Header from './header'
import Footer from './footer'
import Container from './container'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
	title: 'Pokemon API Test',
	description: 'Generated by create next app',
}

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode
}>) {
	return (
		<html lang='en'>
			<AppProvider>
				<body className={`${inter.className} flex h-screen flex-col`}>
					<Header />
					<Container className='flex-grow'>{children}</Container>
					<Footer />
				</body>
			</AppProvider>
		</html>
	)
}
