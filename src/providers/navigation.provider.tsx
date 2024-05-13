import { useContext, useState } from 'react'

import { NavigationContextProps } from '@/types'
import { NavigationContext } from '@/contexts/navigation.context'

export const NavigationProvider = ({ children }: { children: React.ReactNode }) => {
    const initialState = useContext(NavigationContext)
    const [current, setCurrent] = useState<number>(initialState.navigation.current)

	const navigationContextValue: NavigationContextProps = {
		navigation: {
			current: current,
			setCurrent: setCurrent,
		},
	}

	return (
		<NavigationContext.Provider value={navigationContextValue}>
			{children}
		</NavigationContext.Provider>
	)
}
