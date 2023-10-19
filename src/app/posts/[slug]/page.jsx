import React from 'react'
import styles from './SinglePage.module.css'
import Image from 'next/image'
import Menu from '@/components/Menu/Menu'
import Comments from '@/components/Comments/Comments'

const getPost = async slug => {
	const res = await fetch(`http://localhost:3000/api/posts/${slug}`, {
		cache: 'no-cache'
	})
	if (!res.ok) return new Error('ERROR')
	return res.json()
}

const SinglePage = async ({ key, params }) => {
	const post = await getPost(params.slug)
	return (
		<div className={styles.container}>
			<div className={styles.shortInfo}>
				<div className={styles.textContent}>
					<h1 className={styles.title}>{post.title} </h1>
					<b>Views: {post.views}</b>
					<div className={styles.info}>
						{post.user.image && (
							<Image
								className={styles.authorImage}
								src={post.user.image}
								width={40}
								height={40}
								alt=""
							/>
						)}
						<span className={styles.details}>
							<strong className={styles.author}>{post.user.name}</strong>
							<time className={styles.date}>
								{new Date(post.createdAt).toLocaleDateString()}
							</time>
						</span>
					</div>
				</div>
		
				<div className={styles.imageWrapper}>
					<Image src={post.img ? post.img : '/p1.jpeg'} fill alt="" />
				</div>
			</div>
			<div className={styles.mainContent}>
				<div className={styles.post}>
					<div
						className={styles.postText}
						dangerouslySetInnerHTML={{ __html: post?.description }}
					></div>
					<Comments postSlug={params.slug} />
				</div>
				<Menu />
			</div>
		</div>
	)
}

export default SinglePage
