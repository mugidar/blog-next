'use client'
import React, { useState } from 'react'
import styles from './Comments.module.css'
import Image from 'next/image'
import useSWR from 'swr'
import { useSession } from 'next-auth/react'

const fetcher = async (url) => {
	const res = await fetch(url, {cache: "no-cache"}) 

	const data = await res.json()

	if(!res.ok) throw new Error("ERROR")

	return data
}

const Comments = ({postSlug}) => {
	const status = useSession()
	const {data, isLoading} =useSWR(`http://localhost:3000/api/comments?postSlug=${postSlug}`, fetcher)
	return (
		<div className={styles.container}>
			<h1>Comments</h1>
			{status === "authenticated" ? (
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
				{!isLoading && data?.map((comment) => <div key={comment._id} className={styles.comment}>
					<div className={styles.user}>
						<Image
							src={comment.user.image ? comment.user.image:'/p1.jpeg'}
							alt=""
							width={50}
							height={50}
							className={styles.image}
						/>
						<div className={styles.userInfo}>
							<span className={styles.username}>{comment.user.name}</span>
							<time className={styles.date}>{new Date(comment.createdAt).toLocaleDateString()}</time>
						</div>
					</div>
					<p className={styles.desc}>
					{comment.description}
					</p>
				</div>) }
				
			</div>
		</div>
	)
}

export default Comments
