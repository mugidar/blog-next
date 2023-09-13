import React, { useContext } from 'react'
import styles from './Navbar.module.css'
import Image from 'next/image'
import Link from 'next/link'
import AuthLinks from '../AuthLinks/AuthLinks'
import ThemeToggle from '../ThemeToggle/ThemeToggle'

const Navbar = () => {

	return (
		<div className={styles.container}>
			<div className={styles.social}>
				<Image alt="facebook" src="/facebook.png" width={24} height={24} />
				<Image alt="instagram" src="/instagram.png" width={24} height={24} />
				<Image alt="youtube" src="/youtube.png" width={24} height={24} />
			</div>
			<div className={styles.logo}>
				<Link href="/">
					<h1>MugiBlog</h1>
				</Link>
			</div>
			<div className={styles.links}>
				<ThemeToggle />
				<Link className={styles.link} href={'/'}>Homepage</Link>
				<Link className={styles.link} href={'/contact'}>Contact</Link>
				<Link className={styles.link} href={'/about'}>About</Link>
				<AuthLinks />
			</div>
		</div>
	)
}

export default Navbar
