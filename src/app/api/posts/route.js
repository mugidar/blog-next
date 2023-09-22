import prisma from '@/utils/connect'
import { NextResponse } from 'next/server'

export const GET = async req => {
	const { searchParams } = new URL(req.url)

	const page = searchParams.get('page')
	
	
	try {
		const POSTS_PER_PAGE = 1
		const [posts, count] = await prisma.$transaction([
			prisma.post.findMany({
				take: POSTS_PER_PAGE,
				skip: POSTS_PER_PAGE * (page - 1)
			}),
			prisma.post.count()
		])

		return new NextResponse(JSON.stringify({POSTS_PER_PAGE,posts,count}), {
			status: 200
		})
	} catch (error) {
		console.log(error)
		return new NextResponse(JSON.stringify({ message: error }), {
			status: 500
		})
	}
}
