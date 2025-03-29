import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

interface appProps {
    data: {
        id: string,
        title: string,
        content: string,
        imageUrl: string,
        authorId: string,
        authorName: string,
        createdAt: Date,
        updatedAt: Date,
    }
}

export default function BlogPostCard({ data } : appProps) {
  return (
    <div 
        className='group relative overflow-hidden rounded-lg border border-gray-200 bg-white shadow-md transition-all hover:shadow-sm'
    >
        <Link href={`/post/${data.id}`} className='block w-full h-full'>

            <div className="relative h-48 w-full overflow-hidden">
                <Image src={data.imageUrl} alt='Hero Image' fill className='object-cover transition-transform duration-300 group-hover:scale-105'/>
            </div>

            <div className="p-4">
                <h3 className="mb-2 font-semibold text-lg">{data.title}</h3>

                <p className='text-sm font-normal tracking-tight line-clamp-3 mb-3'>{data.content}</p>

                <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-2">
                        <div className="relative size-8 overflow-hidden rounded-full">
                            <Image src={data.imageUrl} alt={data.title} fill className='object-cover' priority/>
                        </div>

                        <p className='text-gray-700 text-sm font-medium'>{data.authorName}</p>
                    </div>

                    <time className='text-sm text-gray-700 font-semibold font-mono'>

                        {new Intl.DateTimeFormat('en-US', {
                            year: "numeric",
                            month: "short",
                            day: "numeric"
                        }).format(data.createdAt)}
                    </time>
                </div>
            </div>
        </Link>
    </div>
  )
}
