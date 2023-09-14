import React from 'react'
import styles from './MenuPosts.module.css'
import Link from 'next/link'

const MenuPosts = () => {
	return (
		<Link href={'/'} className={styles.container}>
		
				<strong className={styles.category}>Food</strong>
				<p className={styles.title}>
					Lorem ipsum dolor sit amet consectetur adipisicing elit.
				</p>
				<span className={styles.details}>
					<strong className={styles.author}>Tonny</strong>
					<time className={styles.date}>23.05.2030</time>
				</span>
	
		</Link>
	)
}

export default MenuPosts
