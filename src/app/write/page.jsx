'use client'
import { useEffect, useState } from 'react'
import styles from './Write.module.css'
import Image from 'next/image'
import ReactQuill from 'react-quill'
import 'react-quill/dist/quill.bubble.css'
import {
	getStorage,
	ref,
	uploadBytesResumable,
	getDownloadURL
} from 'firebase/storage'
import { app } from '@/utils/firebase'
import { useRouter } from 'next/navigation'

const Write = () => {
	const [open, setOpen] = useState(false)
	const [title, setTitle] = useState(false)
	const [value, setValue] = useState('')
	const [file, setFile] = useState(null)
	const [media, setMedia] = useState('')
	
	const router = useRouter()

	const storage = getStorage(app)
	
	useEffect(() => {
		const storage = getStorage(app);
		const upload = () => {
		  const name = new Date().getTime() + file.name;
		  const storageRef = ref(storage, name);
	
		  const uploadTask = uploadBytesResumable(storageRef, file);
	
		  uploadTask.on(
			"state_changed",
			(snapshot) => {
			  const progress =
				(snapshot.bytesTransferred / snapshot.totalBytes) * 100;
			  console.log("Upload is " + progress + "% done");
			  switch (snapshot.state) {
				case "paused":
				  console.log("Upload is paused");
				  break;
				case "running":
				  console.log("Upload is running");
				  break;
			  }
			},
			(error) => {},
			() => {
			  getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
				setMedia(downloadURL);
			  });
			}
		  );
		};
	
		file && upload();
	  }, [file]);

	const titleToSlug = (str) => {
		return str.trim().toLowerCase().replace(/\s/g, '-')
	}

	

	const handleSubmit = async () => {
		const res = await fetch('/api/posts/', {
			method: 'POST',
			body: JSON.stringify({
				title,
				description: value,
				img: media,
				slug: titleToSlug(title),
				catSlug: "style"
			})
		})
		console.log(res)
		
		if (res.status === 200) {
			const data = await res.json();
			router.push(`/posts/${data.slug}`);
		  }
	}
	return (
		<div className={styles.container}>
			<input
				type="text"
				onChange={e => setTitle(e.target.value)}
				placeholder="Title"
				className={styles.input}
			/>
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
								onChange={e => setFile(e.target.files[0])}
								style={{ display: 'none' }}
							/>

							<button className={styles.button}>
								<label htmlFor="image">
									{' '}
									<Image src={'/image.png'} width={16} height={16} alt="+" />
								</label>
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
				{media && <Image src={media} width={200} height={200}/>}
				<ReactQuill
					className={styles.textArea}
					theme={'bubble'}
					onChange={setValue}
					placeholder="Tell your story"
				/>
			</div>
			<button onClick={() => handleSubmit()} className={styles.publish}>
				Publish
			</button>
		</div>
	)
}

export default Write
