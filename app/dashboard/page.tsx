import { buttonVariants } from '@/components/ui/button'
import { getKindeServerSession } from '@kinde-oss/kinde-auth-nextjs/server'
import Link from 'next/link'
import { redirect } from 'next/navigation'
import React from 'react'
import { prisma } from '../utils/db'
import BlogPostCard from '@/components/general/BlogPostCard'




async function getData(userId: string) {
  //For the time it takes to load the data
  await new Promise((resolve) => setTimeout(resolve, 2000))

  const data = await prisma.blogPost.findMany({
    where: {
      authorId:  userId,
    },
    orderBy: {
      createdAt: "desc"
    }
  })

  return data
}
export default async function DashboardPage() {

  //retrieving the user from the kinde server to extract the id for the author
  const {getUser} = getKindeServerSession() 
  const user = await getUser()

  //Checks if the user is not authenticated and redirects him to the authentication page.
  if(!user) {
    return redirect("api/auth/register")
  }

  //Gets the full detail of the user from the db into the data
  const data = await getData(user.id)

  return (
    <div className='w-full flex-1'>
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-xl font-semi-bold">
            Your Blog Articles.
        </h2>

        <Link href={"/dashboard/create"} className={buttonVariants()}>
            Create Post.
        </Link>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {data.map((item) => (

          <BlogPostCard data={item} key={item.id} />

        ))}
        
      </div>
    </div>
  )
}
