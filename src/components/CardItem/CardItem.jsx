import React from 'react'
import styles from './CardItem.module.css'
import Image from 'next/image'
const CardItem = ({ title, catSlug, createdAt, description, img }) => {
	return (
		<div className={styles.container}>
			<div className={styles.imgContainer}>
				<Image src={img ? img : "/p1.png"} fill />
			</div>
			<div className={styles.textContainer}>
				<span className={styles.postInfo}>
					<strong className={styles.postDate}>
						{new Date(createdAt).toLocaleDateString()}
					</strong>
					<h3 className={styles.postCategory}>{catSlug}</h3>
				</span>
				<h1 className={styles.postTitle}>
					{title}
				</h1>
				<p className={styles.postDescription}>
					{description}
				</p>
				<button className={styles.button}>Read More</button>
			</div>
		</div>
	)
}

export default CardItem
