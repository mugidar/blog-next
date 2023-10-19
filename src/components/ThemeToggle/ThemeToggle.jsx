'use client'
import React, { useContext } from 'react'
import styles from './ThemeToggle.module.css'
import Image from 'next/image'
import { ThemeContext } from '@/context/ThemeContext'

const ThemeToggle = () => {
	const { theme, toggle } = useContext(ThemeContext)

	return (
		<div onClick={() => toggle()} className={styles.container}>
			<Image alt="dark" src={'/moon.png'} width={14} height={14} />
			<div
				className={styles.ball}
				style={{ translate: theme === "dark" ? "0%": "100%"}}
			></div>
			<Image alt="light" src={'/sun.png'} width={14} height={14} />
		</div>
	)
}

export default ThemeToggle
