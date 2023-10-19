import React from 'react'
import styles from './CardList.module.css'
import Pagination from '../Pagination/Pagination'
import CardItem from '../CardItem/CardItem'

const getPosts = async (page, cat) => {
	const res = await fetch(
		`https://blog-next-nine-blush.vercel.app/api/posts?page=${page}&cat=${cat || ''}`, {
			cache: "no-cache"
		}
	)

	if (!res.ok) return new Error('Failed')

	return res.json()
}

const CardList = async ({ page, cat }) => {
	const { POSTS_PER_PAGE, posts, count } = await getPosts(page, cat)
	const hasPrev = POSTS_PER_PAGE * (page - 1) > 0
	const hasNext = POSTS_PER_PAGE * (page - 1) + POSTS_PER_PAGE < count
	return (
		<div className={styles.container}>
			<h1 className={styles.title}>Recent posts</h1>
			<div className={styles.posts}>
				{posts?.length > 0 && posts.map(post => <CardItem key={post._id} {...post} />)}
			</div>
			<Pagination hasNext={hasNext} hasPrev={hasPrev} page={page} />
		</div>
	)
}

export default CardList
