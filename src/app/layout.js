import Navbar from '@/components/Navbar/Navbar'
import './globals.css'
import { Inter } from 'next/font/google'
import Footer from '@/components/Footer/Footer'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
	title: 'MugiBlog',
	description: 'This is a blog created by Mugidar'
}

export default function RootLayout({ children }) {
	return (
		<html lang="en">
			<body className={inter.className}>
				<div class="container">
					<div class="wrapper">
						<Navbar />
						{children}
						<Footer />
					</div>
				</div>
			</body>
		</html>
	)
}
