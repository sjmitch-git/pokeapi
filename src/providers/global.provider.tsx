'use client'

import { NavigationProvider } from '@/providers/navigation.provider'

export const GlobalProvider = ({ children }: { children: React.ReactNode }) => {
	return <NavigationProvider>{children}</NavigationProvider>
}

export default GlobalProvider
