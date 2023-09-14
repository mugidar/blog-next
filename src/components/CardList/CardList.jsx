import React from 'react'
import styles from './CardList.module.css'
import Pagination from '../Pagination/Pagination'
import CardItem from '../CardItem/CardItem'

const CardList = () => {
	return (
		<div className={styles.container}>
			<h1 className={styles.title}>Recent posts</h1>
			<div className={styles.posts}>
				<CardItem />
				<CardItem />
				<CardItem />
			</div>
			<Pagination />
		</div>
	)
}

export default CardList
