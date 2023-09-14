import React from 'react'
import styles from './Menu.module.css'
import MenuPost from '../MenuPost/MenuPost'
import MenuEditors from '../MenuEditor/MenuEditor'
import CategoryList from '../CategoryList/CategoryList'

const Menu = () => {
	return (
		<div className={styles.container}>
			<div className={styles.popular}>
				<h2 className={styles.subtitle}>What{"'"}s hot</h2>
				<h1 className={styles.title}>Most popular</h1>
				<div className={styles.posts}>
					<MenuPost />
					<MenuPost />
					<MenuPost />
					<MenuPost />
				</div>
			</div>

			<div className={styles.categories}>
			
				<CategoryList withImage={false} />
			</div>

			<div className={styles.editors}>
				<h2 className={styles.subtitle}>Chosen by the editor</h2>
				<h1 className={styles.title}>Editors Pick</h1>
				<div className={styles.editors}>
					<MenuEditors />
					<MenuEditors />
					<MenuEditors />
					<MenuEditors />
				</div>
			</div>
		</div>
	)
}

export default Menu
