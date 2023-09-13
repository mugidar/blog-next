'use client'
import React, { useState } from 'react'
import styles from './AuthLinks.module.css'
import Link from 'next/link'

const AuthLinks = () => {
	const [authed, setAuthed] = useState(true)
	const [open, setOpen] = useState(false)

	return (
		<>
			{authed ? (
				<span className={styles.auth_links}>
					<Link className={styles.link} href={'/write'}>
						Write{' '}
					</Link>
					<Link className={styles.link} href={'/logout'}>
						Logout{' '}
					</Link>
				</span>
			) : (
				<span>
					<Link className={styles.link} href={'/login'}>
						Login{' '}
					</Link>
					<Link className={styles.link} href={'/register'}>
						Register{' '}
					</Link>
				</span>
			)}
			<div className={styles.burger} onClick={() => setOpen(!open)}>
				<div
					style={{ transform: open && 'translateY(100%) rotate(45deg)' }}
					className={styles.line}
				></div>
				<div style={{ opacity: open && 0 }} className={styles.line}></div>
				<div
					style={{ transform: open && 'translateY(-100%) rotate(-45deg)' }}
					className={styles.line}
				></div>
			</div>

			{open && (
				<div className={styles.mobileMenu}>
					<Link href={'/'}>Homepage</Link>
					<Link href={'/'}>About</Link>
					<Link href={'/'}>Contact</Link>
				</div>
			)}
		</>
	)
}

export default AuthLinks
