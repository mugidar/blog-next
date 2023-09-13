import React from 'react'
import styles from './CategoryList.module.css'
import Link from 'next/link'
import Image from 'next/image'

const CategoryList = () => {
	return (
		<div className={styles.container}>
			<h1 className={styles.title}>Categories</h1>
			<div className={styles.categories}>
				<Link
					href={'/blog?cat=style'}
					className={`${styles.category} ${styles.style}`}
				>
					<Image
						className={styles.image}
						src={'/style.png'}
						width={32}
						height={32}
						alt="icon"
					/>
					Style
				</Link>
				<Link
					href={'/blog?cat=style'}
					className={`${styles.category} ${styles.food}`}
				>
					<Image
						className={styles.image}
						src={'/food.png'}
						width={32}
						height={32}
						alt="icon"
					/>
					Food
				</Link>
				<Link
					href={'/blog?cat=style'}
					className={`${styles.category} ${styles.culture}`}
				>
					<Image
						className={styles.image}
						src={'/culture.png'}
						width={32}
						height={32}
						alt="icon"
					/>
					Culture
				</Link>
				<Link
					href={'/blog?cat=style'}
					className={`${styles.category} ${styles.style}`}
				>
					<Image
						className={styles.image}
						src={'/travel.png'}
						width={32}
						height={32}
						alt="icon"
					/>
					Travel
				</Link>
				<Link
					href={'/blog?cat=style'}
					className={`${styles.category} ${styles.style}`}
				>
					<Image
						className={styles.image}
						src={'/fashion.png'}
						width={32}
						height={32}
						alt="icon"
					/>
					Fashion
				</Link>
				<Link
					href={'/blog?cat=style'}
					className={`${styles.category} ${styles.style}`}
				>
					<Image
						className={styles.image}
						src={'/coding.png'}
						width={32}
						height={32}
						alt="icon"
					/>
					Coding
				</Link>
			</div>
		</div>
	)
}

export default CategoryList
