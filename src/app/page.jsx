import CategoryList from '@/components/CategoryList/CategoryList'
import Featured from '@/components/Featured/Featured'
import React from 'react'
import styles from './page.module.css'
import CardList from '@/components/CardList/CardList'
import Menu from '@/components/Menu/Menu'
const page = ({searchParams}) => {
	const page = Number(searchParams.page) || 1

	return (
		<div>
			<Featured />
			<CategoryList />
			<div className={styles.container}>
				<CardList page={page} />
				<Menu />
			</div>
		</div>
	)
}

export default page
