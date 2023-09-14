import React from 'react'
import styles from './MenuEditor.module.css'
import Link from 'next/link'
import Image from 'next/image'

const MenuEditors = () => {
	return (
		<Link href={'/'} className={styles.container}>
			<div className={styles.post}>
				<Image
					width={60}
					height={60}
					src={'/p1.jpeg'}
					alt=""
					className={styles.image}
				/>
				<div className={styles.info}>
					<strong className={styles.category}>Food</strong>
					<p className={styles.title}>
						Lorem ipsum dolor sit amet consectetur adipisicing elit.
					</p>
					<span className={styles.details}>
						<strong className={styles.author}>Tonny</strong>
						<time className={styles.date}>23.05.2030</time>
					</span>
				</div>
			</div>
		</Link>
	)
}

export default MenuEditors
