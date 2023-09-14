import CardList from '@/components/CardList/CardList'
import Menu from '@/components/Menu/Menu'
import React from 'react'
import styles from './BlogPage.module.css'

const BlogPage = () => {
   
	return (
		<div className={styles.container}>
			<h1 className={styles.title}>Style Blog</h1>
			<div className={styles.content}>
				<CardList />
				<Menu />
			</div>
		</div>
	)
}

export default BlogPage
