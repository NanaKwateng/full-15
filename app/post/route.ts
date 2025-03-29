// import { NextApiRequest, NextApiResponse } from 'next'
// import { prisma } from '@/app/utils/db'
// import { getKindeServerSession } from '@kinde-oss/kinde-auth-nextjs/server'

// export default async function handler(req: NextApiRequest, res: NextApiResponse) {
//   if (req.method !== 'DELETE') {
//     return res.status(405).json({ message: 'Method Not Allowed' })
//   }

//   const { id } = req.query
//   const { getUser } = getKindeServerSession(req, res)
//   const user = await getUser()

//   if (!user) {
//     return res.status(401).json({ message: 'Unauthorized' })
//   }

//   try {
//     const post = await prisma.blogPost.findUnique({
//       where: {
//         id: id as string,
//       }
//     })

//     if (!post || post.authorId !== user.id) {
//       return res.status(403).json({ message: 'Forbidden' })
//     }

//     await prisma.blogPost.delete({
//       where: {
//         id: id as string,
//       }
//     })

//     res.status(200).json({ message: 'Post deleted successfully' })
//   } catch (error) {
//     console.error('Error deleting post:', error)
//     res.status(500).json({ message: 'Internal Server Error' })
//   }
// }
