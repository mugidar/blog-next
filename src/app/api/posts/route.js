import prisma from '@/utils/connect'
import { NextResponse } from 'next/server'

export const GET = async req => {
	const { searchParams } = new URL(req.url)
	const page = searchParams.get('page')
	const cat = searchParams.get('cat')
	try {
		const POSTS_PER_PAGE = 1
	
		const query = {
			take: POSTS_PER_PAGE,
			skip: POSTS_PER_PAGE * (page - 1),
			where: {
				...(cat && {catSlug: cat})
			}
		}
		const [posts, count] = await prisma.$transaction([
			prisma.post.findMany(query),
			prisma.post.count({
				where: query.where
			})
		])

		return new NextResponse(JSON.stringify({ POSTS_PER_PAGE, posts, count }), {
			status: 200
		})
	} catch (error) {
		console.log(error)
		return new NextResponse(JSON.stringify({ message: error }), {
			status: 500
		})
	}
}

export const POST = async (req,res) => {
	const session = await getAuthSession()
	if(!session) {
		return new NextResponse(JSON.stringify({ message: "Not authed" }), {
			status: 401
		})
	}
	try {
		const body = await req.json()
		const post =  await prisma.post.create({
			data: {
				...body, 
				userEmail: session.user.email
			}
		})



		return new NextResponse(JSON.stringify(comment), {
			status: 200
		})
	} catch (error) {
		console.log(error)
		return new NextResponse(JSON.stringify({ message: error }), {
			status: 500
		})
	}
}
