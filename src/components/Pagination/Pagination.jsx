"use client"
import React from 'react'
import styles from './Pagination.module.css'
import { useRouter } from 'next/navigation'

const Pagination = ({page,hasPrev, hasNext}) => {

	const router = useRouter()
	console.log(page)
	return <div className={styles.container}>
		<button disabled={!hasPrev} onClick={() => router.push(`?page=${page-1}`)} className={styles.button}>Previous</button>
		<button disabled={!hasNext} onClick={() => router.push(`?page=${page+1}`)} className={styles.button}>Next</button>
	</div>
}

export default Pagination
