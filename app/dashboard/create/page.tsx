import handleSubmission from '@/app/actions/action'
import SubmitButton from '@/components/general/SubmitButton'


import { Card, CardContent, CardDescription, CardTitle } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { Label } from '@radix-ui/react-label'

import React from 'react'

export default function page() {
    //Implementing the mutation with the nextjs server-side server actions
    // async function handleSubmission() {
    //     " use server " //Marked to render on the server

    //     const data = await prisma.blogPost.create ({
    //         data: {
    //             authorId: 
    //         }
    //     })
    // } 

    //...The fact is we could have written all the data to create all our post inside our db but its a best practice to do it inside a separate file. We intend doing it inside our app/action folder.... 

  return (
    <div className='w-full'>
        <Card className='p-5 max-w-3xl mx-auto flex-1'>
            <CardTitle>
                Create Post.
            </CardTitle>
            <CardDescription>
                Create a new post to share with the world.
            </CardDescription>
            <CardContent>
                <form action={handleSubmission} className='flex flex-col gap-4'>
                    <div className="flex flex-col gap-2">
                        <Label>
                            Title
                        </Label>
                        <Input name='title' required type='text' placeholder="Your Blog Title"/>
                    </div>
                    <div className="flex flex-col gap-2">
                        <Label>
                            Content
                        </Label>
                        <Textarea name='content' required placeholder='Your post content'/>
                    </div>
                    <div className="flex flex-col gap-2">
                        <Label>
                            Image Url 
                        </Label>
                        <Input name='url' required type='url' placeholder='Your Image URL'/>
                    </div>

                    <SubmitButton />
                </form>
            </CardContent>

        </Card>
    </div>
  )
}
