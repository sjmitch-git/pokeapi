'use client'

import { createContext, useContext, useState } from 'react'

type AppNavigation = {
	current: number
	setCurrent: React.Dispatch<React.SetStateAction<number>>
}

type AppContextType = {
	navigation: AppNavigation
}

const defaultAppContext: AppContextType = {
	navigation: {
		current: 0,
		setCurrent: () => {},
	},
}

const AppContext = createContext<AppContextType>(defaultAppContext)

export const AppProvider = ({ children }: { children: React.ReactNode }) => {
	const [currentPage, setCurrentPage] = useState<number>(0)

	const navigation: AppNavigation = {
		current: currentPage,
		setCurrent: setCurrentPage,
	}

	const contextValue: AppContextType = {
		navigation,
	}

	return <AppContext.Provider value={contextValue}>{children}</AppContext.Provider>
}

export const useAppContext = () => useContext(AppContext)
