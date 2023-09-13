'use client'
import { ThemeContext } from '@/context/ThemeContext'
import React, { useContext, useEffect, useState } from 'react'

const ThemeProvider = ({ children }) => {
	const [isMounted, setIsMounted] = useState(false)
	const { theme } = useContext(ThemeContext)

	useEffect(() => {
		setIsMounted(true)
	}, [])

	if(isMounted) return <div className={theme}>{children}</div>
	
}

export default ThemeProvider
