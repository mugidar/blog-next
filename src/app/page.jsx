import CategoryList from '@/components/CategoryList/CategoryList'
import Featured from '@/components/Featured/Featured'
import React from 'react'
import styles from './page.module.css'
import CardList from '@/components/CardList/CardList'
import Menu from '@/components/Menu/Menu'
const page = () => {
	return (
		<div>
			<Featured />
			<CategoryList />
			<div className={styles.container}>
				<CardList />
				<Menu />
			</div>
		</div>
	)
}

export default page
