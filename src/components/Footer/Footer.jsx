import React from 'react'
import styles from './Footer.module.css'
import Image from 'next/image'
import Link from 'next/link'

const Footer = () => {
	return (
		<div className={styles.container}>
			<div className={styles.info}>
				<div className={styles.logo}>
					<Image className={styles.logoImg} src={'/culture.png'} alt="Mugiblog" width={50} height={50} />
					<h1 className={styles.logoText}>MugiBlog</h1>
				</div>
				<p className={styles.desc}>
					Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque nam
					veniam totam laborum natus sequi maiores accusantium non ducimus?
					Tempore!
				</p>
				<div className={styles.icons}>
					<Image src={'/facebook.png'} width={18} height={18} alt="" />
					<Image src={'/instagram.png'} width={18} height={18} alt="" />
					<Image src={'/youtube.png'} width={18} height={18} alt="" />
				</div>
			</div>
			<div className={styles.listsContainer}><div className={styles.links}>
				<span className={styles.listTitle}>NavLinks</span>
				<ul className={styles.list}>
					<li>
						<Link href="/">Homepage</Link>
					</li>
					<li>
						<Link href="/">Blog</Link>
					</li>
					<li>
						<Link href="/">About</Link>
					</li>
					<li>
						<Link href="/">Contact</Link>
					</li>
				</ul>
			</div>
			<div className={styles.links}>
				<span className={styles.listTitle}>Tags</span>
				<ul className={styles.list}>
					<li>
						<Link href="/">Fashion</Link>
					</li>
					<li>
						<Link href="/">Food</Link>
					</li>
					<li>
						<Link href="/">Coding</Link>
					</li>
					<li>
						<Link href="/">Travel</Link>
					</li>
				</ul>
			</div>
			<div className={styles.links}>
				<span className={styles.listTitle}>Links</span>
				<ul className={styles.list}>
					<li>
						<Link href="/">Facebook</Link>
					</li>
					<li>
						<Link href="/">Youtube</Link>
					</li>
					<li>
						<Link href="/">Gmail</Link>
					</li>
					<li>
						<Link href="/">Linkedin</Link>
					</li>
				</ul>
			</div></div>
			
		</div>
	)
}

export default Footer
