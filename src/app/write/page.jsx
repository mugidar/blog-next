'use client'
import { useState } from 'react'
import styles from './Write.module.css'
import Image from 'next/image'
import ReactQuill from 'react-quill'
import 'react-quill/dist/quill.bubble.css'

const Write = () => {
	const [open, setOpen] = useState(false)
	const [value, setValue] = useState('')
	const [file, setFile] = useState(null)

	return (
		<div className={styles.container}>
			<input type="text" placeholder="Title" className={styles.input} />
			<div className={styles.editor}>
				<div className={styles.buttons}>
					<button onClick={() => setOpen(!open)} className={styles.button}>
						<Image src={'/plus.png'} width={16} height={16} alt="+" />
					</button>
					{open && (
						<div className={styles.add}>
							<input
								type="file"
								id="image"
								onChange={(e = setFile(e.target.files[0]))}
								style={{display: none}}
							/>
							<button className={styles.button}>
								<Image src={'/image.png'} width={16} height={16} alt="+" />
							</button>
							<button className={styles.button}>
								<Image src={'/external.png'} width={16} height={16} alt="+" />
							</button>
							<button className={styles.button}>
								<Image src={'/video.png'} width={16} height={16} alt="+" />
							</button>
						</div>
					)}
				</div>
				<ReactQuill
					className={styles.textArea}
					theme={'bubble'}
					onChange={setValue}
					placeholder="Tell your story"
				/>
			</div>
			<button className={styles.publish}>Publish</button>
		</div>
	)
}

export default Write
