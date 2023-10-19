import React from 'react'
import styles from './CardItem.module.css'
import Image from 'next/image'
import Link from 'next/link'
const CardItem = ({ title, catSlug, createdAt, description, img, slug }) => {
	return (
		<div className={styles.container}>
			<div className={styles.imgContainer}>
				<Image src={img ? img : "/p1.png"} fill alt='' />
			</div>
			<div className={styles.textContainer}>
				<span className={styles.postInfo}>
					<strong className={styles.postDate}>
						{new Date(createdAt).toLocaleDateString()}
					</strong>
					<h3 className={styles.postCategory}>{catSlug}</h3>
				</span>
				<h1 className={styles.postTitle}>
				<Link href={`/posts/${slug}`} className={styles.button}>{title}</Link>
				</h1>
				<p className={styles.postDescription}  dangerouslySetInnerHTML={{__html:description}}>
					
				</p>
				<Link href={`/posts/${slug}`} className={styles.button}>Read More</Link>
			</div>
		</div>
	)
}

export default CardItem
