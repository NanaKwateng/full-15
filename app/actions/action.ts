"use server"

//The action file here is mainly for handling the creation of the blog post that when created, directs the user to the dashboard, and if  not authenticated, redirects him back to the authentication page for him to be authenticated. 

//This purposely for the server side validation and data security.

import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server"
import { prisma } from "../utils/db"
import { redirect } from "next/navigation"

export default async function handleSubmission(formData: FormData) {

    //Where we find the user details from the authentication library, kinde
    const {getUser} = getKindeServerSession()
    const user = await getUser() 

    //-Differ user from creating a blog post if not signed in
    if(!user) {
        return redirect("api/auth/register")
    }

    const title = formData.get('title')
    const content = formData.get('content')
    const url = formData.get('url')
    
    

    await prisma.blogPost.create({
        data: {
            title: title as string,
            content: content as string,
            imageUrl: url as string,
            authorId: user.id,
            
            authorName: user.given_name as string,
        }
    })

    return redirect("/dashboard")
} 
