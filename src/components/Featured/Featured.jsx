import React from 'react'
import styles from './Featured.module.css'
import Image from 'next/image'

const Featured = () => {
	return (
		<div className={styles.container}>
			<p className={styles.title}>
				<b>Lorem ipsum, dolor</b> sit amet consectetur adipisicing elit. Vero
				cupiditate ratione enim ullam molestiae distinctio.
			</p>
			<div className={styles.post}>
				<div className={styles.imgContainer}>
					<Image src={'/p1.jpeg'} alt="" fill />
				</div>
				<div className={styles.textContainer}>
					<h1 className={styles.postTitle}>
						Lorem ipsum dolor sit amet alim, adipisicing elit. Veniam,
						debitis?
					</h1>
					<p className={styles.postDescription}>
						Lorem ipsum dolor, sit amet consectetur adipisicing elit. Minus
						numquam consectetur in impedit temporibus praesentium recusandae?
						Minus rem quas quae.
					</p>
					<button className={styles.button}>Read More</button>
				</div>
			</div>
		</div>
	)
}

export default Featured
