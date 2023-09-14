'use client'
import React, { useState } from 'react'
import styles from './Comments.module.css'
import Image from 'next/image'

const Comments = () => {
	const [authed, setAuthed] = useState(true)
	return (
		<div className={styles.container}>
			<h1>Comments</h1>
			{authed ? (
				<div className={styles.control}>
					<textarea
						className={styles.textArea}
						rows={3}
						placeholder="Write your comment..."
					/>
					<button className={styles.button}>Comment</button>
				</div>
			) : (
				<h1>Login to write</h1>
			)}
			<div className={styles.comments}>
				<div className={styles.comment}>
					<div className={styles.user}>
						<Image
							src={'/p1.jpeg'}
							alt=""
							width={50}
							height={50}
							className={styles.image}
						/>
						<div className={styles.userInfo}>
							<span className={styles.username}>Meme Moma</span>
							<time className={styles.date}>02.04.2023</time>
						</div>
					</div>
					<p className={styles.desc}>
						Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae
						quidem porro iste voluptatem obcaecati incidunt, saepe quaerat
						voluptatum repellendus nostrum.
					</p>
				</div>
				<div className={styles.comment}>
					<div className={styles.user}>
						<Image
							src={'/p1.jpeg'}
							alt=""
							width={50}
							height={50}
							className={styles.image}
						/>
						<div className={styles.userInfo}>
							<span className={styles.username}>Meme Moma</span>
							<time className={styles.date}>02.04.2023</time>
						</div>
					</div>
					<p className={styles.desc}>
						Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae
						quidem porro iste voluptatem obcaecati incidunt, saepe quaerat
						voluptatum repellendus nostrum.
					</p>
				</div>
				<div className={styles.comment}>
					<div className={styles.user}>
						<Image
							src={'/p1.jpeg'}
							alt=""
							width={50}
							height={50}
							className={styles.image}
						/>
						<div className={styles.userInfo}>
							<span className={styles.username}>Meme Moma</span>
							<time className={styles.date}>02.04.2023</time>
						</div>
					</div>
					<p className={styles.desc}>
						Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae
						quidem porro iste voluptatem obcaecati incidunt, saepe quaerat
						voluptatum repellendus nostrum.
					</p>
				</div>
			</div>
		</div>
	)
}

export default Comments
