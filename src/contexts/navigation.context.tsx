import { createContext, useContext } from 'react'

import { NavigationContextProps } from '@/types'

const defaultContext: NavigationContextProps = {
	navigation: {
		current: 1,
		setCurrent: () => {},
	},
}

export const NavigationContext = createContext<NavigationContextProps>(defaultContext)

export const useNavigationContext = () => useContext(NavigationContext)
