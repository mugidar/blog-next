import React from 'react'
import styles from './CategoryList.module.css'
import Link from 'next/link'
import Image from 'next/image'

const getCats = async () => {
	const res = await fetch('https://blog-next-nine-blush.vercel.app/api/categories', {
		cache: process.env.NODE_ENV === 'development' ? 'no-cache' : 'force-cache'
	})
	if (!res.ok) return new Error('Smth went wrong')
	const data = await res.json()
	return data
}

const CategoryList = async ({ withImage = true }) => {
	const categories = await getCats()
	return (
		<div className={styles.container}>
			<h1 className={styles.title}>Categories</h1>
			<div className={styles.categories}>
				{categories?.length > 0 &&
					categories.map(category => (
						<Link
							key={category._id}
							href={`/blog?cat=${category.slug}`}
							className={`${styles.category} ${styles[category.color]}`}
						>
							{withImage && (
								<Image
									className={styles.image}
									src={category.img ? category.img : ''}
									width={32}
									height={32}
									alt="icon"
								/>
							)}
							{category.title}
						</Link>
					))}
			</div>
		</div>
	)
}

export default CategoryList
