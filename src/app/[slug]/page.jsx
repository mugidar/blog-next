import React from 'react'
import styles from './SinglePage.module.css'
import Image from 'next/image'
import Menu from '@/components/Menu/Menu'
import Comments from '@/components/Comments/Comments'

const SinglePage = ({ params }) => {
	console.log(params)
	return (
		<div className={styles.container}>
			<div className={styles.shortInfo}>
				<div className={styles.textContent}>
					<h1 className={styles.title}>
						Lorem ipsum dolor, sit amet consectetur adipisicing elit. ?
					</h1>
					<div className={styles.info}>
						<Image
							className={styles.authorImage}
							src="/p1.jpeg"
							width={40}
							height={40}
							alt=""
						/>
						<span className={styles.details}>
							<strong className={styles.author}>Billy Boba</strong>
							<time className={styles.date}>23 Apr 2023</time>
						</span>
					</div>
				</div>
				<div className={styles.imageWrapper}>
					<Image src={'/p1.jpeg'} fill alt="" />
				</div>
			</div>
			<div className={styles.mainContent}>
				<div className={styles.post}>
					<div className={styles.postText}>
						<p>
							Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste
							similique quasi omnis recusandae at fugit libero dolorum
							architecto temporibus tempora laboriosam, pariatur voluptas eius
							animi assumenda dignissimos reprehenderit reiciendis dolore natus,
							saepe, non ducimus porro corrupti veniam.
						</p>
						<p>
							Tenetur voluptatum error iure libero aperiam ad, possimus
							doloribus nemo rerum tempora consectetur necessitatibus dolore
							odio, natus harum facere excepturi ipsam ab itaque dolorem aliquam
							ut eligendi. Inventore reiciendis eveniet odit. Corrupti alias
							illo voluptate suscipit, distinctio quia illum velit laboriosam
							itaque quis architecto perspiciatis nihil ipsum reprehenderit
							delectus incidunt laborum.
						</p>{' '}
						<p>
							Mollitia sequi, rerum perspiciatis dolore officia quas dignissimos
							voluptate quidem illo ipsa perferendis ipsum reprehenderit,
							corrupti aperiam voluptas quae exercitationem asperiores enim
							voluptatum facere eum? Delectus nostrum dicta perspiciatis quam,
							laboriosam esse consectetur perferendis numquam laborum quisquam
							facilis deserunt tempore impedit pariatur. Doloribus voluptatum
							molestias nam illum. Aut excepturi iusto deserunt aperiam vero
							cumque iure accusamus asperiores dicta, minus a saepe.
						</p>{' '}
						Sed perspiciatis neque cupiditate possimus tenetur ducimus impedit
						inventore, eveniet repudiandae quaerat dolore, quas, fugiat ullam!
						Iste deserunt quasi culpa eos accusamus temporibus iure quia earum
						facere modi rem, provident quam harum quibusdam fugit odit, tenetur
						eveniet nam expedita architecto perspiciatis illum est. Quibusdam
						eum placeat libero delectus, magnam debitis. Dolorum?{' '}
					</div>
					<Comments/>
				</div>
				<Menu />
			</div>
		</div>
	)
}

export default SinglePage
