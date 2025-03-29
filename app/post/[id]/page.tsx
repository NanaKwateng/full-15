import { prisma } from '@/app/utils/db'
import { buttonVariants } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'

import Image from 'next/image'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import React from 'react'

//we're fetching data from prisma for each of the post cards.
async function getData( id:string ) {
  const data = await prisma.blogPost.findUnique({
    where: {
      id: id,
    }
  })

  //So in case we do not any data for the blog post we return a not found
  if(!data) {
    return notFound()
  }

  return data
}


//defining the dynamic IDs for the cards using the word Params
type Params = Promise<{ id: string }> //Note that the id should correspond to your dynamic folder name, here, ie, /post/[id]

export default async function IdPage( { params }: { params: Params } ) {

  //calling the data to be fetched from the db inside our UI component
  const { id } = await params
  const data = await getData(id)


  return (
    <div className='w-full px-8 mx-auto py-8 min-h-screen'>
      <Link className={buttonVariants({ variant: "secondary" })} href="/">Back to the Dashboard</Link>

      <div className="mb-8 mt-6">
        <h2 className="text-2xl font-medium text-gray-700 tracking-tight mb-4">{data.title}</h2>

        <div className="flex items-center space-x-4">
          <div className="flex items-center space-x-2">
            <div className="relative size-10 overflow-hidden rounded-xl">

              <Image 
                src={data.imageUrl} 
                alt={data.title} fill priority 
                className='object-cover'
              />
              
            </div>
            <p className="font-medium">{data.authorName}</p>
          </div>
          <p className="text-sm text-gray-500">{new Intl.DateTimeFormat("en-US", {
            year: "numeric",
            month: "long",
            day: "numeric",
          }).format(data.createdAt)}</p>
        </div>
      </div>

      <div className="relative h-[400px] w-full overflow-hidden mb-8 rounded-lg">
        <Image src={data.imageUrl} alt={data.title} fill priority className='object-cover'/>
      </div>

      <Card>
        <CardContent>
          <p className='text-gray-700'>{data.content}</p>
        </CardContent>
      </Card>
    </div>
  )
}

//For the Loading UI

