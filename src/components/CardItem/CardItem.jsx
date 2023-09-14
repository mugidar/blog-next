import React from 'react'
import styles from './CardItem.module.css'
import Image from 'next/image'
const CardItem = () => {
	return (
		<div className={styles.container}>
			<div className={styles.imgContainer}>
				<Image src={'/p1.jpeg'} fill />
			</div>
			<div className={styles.textContainer}>
				<span className={styles.postInfo}>
					<strong className={styles.postDate}>11.02.2023</strong>
					<h3 className={styles.postCategory}>CULTURE</h3>
				</span>
				<h1 className={styles.postTitle}>
					Lorem ipsum dolor sit amet consectetur adipisicing elit.
				</h1>
				<p className={styles.postDescription}>
					Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate
					aperiam fuga distinctio quas sint tempora aspernatur eligendi beatae
					molestiae iure iusto repellat, ipsa alias corporis voluptatum quidem
					eius aut dolorum accusantium. Suscipit dolores saepe ad
					exercitationem. Cumque debitis reprehenderit voluptatum.
				</p>
				<button className={styles.button}>Read More</button>
			</div>
		</div>
	)
}

export default CardItem
