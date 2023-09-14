import './globals.css'
import { Inter } from 'next/font/google'
import Footer from '@/components/Footer/Footer'
import { ThemeContextProvider } from '@/context/ThemeContext'
import ThemeProvider from '@/providers/ThemeProvider'
import Navbar from '@/components/Navbar/Navbar'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
	title: 'MugiBlog',
	description: 'This is a blog created by Mugidar'
}

export default function RootLayout({ children }) {
	return (
		<html lang="en">
			<body className={inter.className}>
				<ThemeContextProvider>
					<ThemeProvider>
						<div className="container">
							<div className="wrapper">
								<Navbar />
								<main>{children}</main>
								<Footer />
							</div>
						</div>
					</ThemeProvider>
				</ThemeContextProvider>
			</body>
		</html>
	)
}
