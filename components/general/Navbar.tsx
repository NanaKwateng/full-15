import Link from 'next/link'
import React from 'react'
import { buttonVariants } from '../ui/button'

//from kind
import {RegisterLink, LoginLink, LogoutLink} from "@kinde-oss/kinde-auth-nextjs/components";
import { getKindeServerSession } from '@kinde-oss/kinde-auth-nextjs/server';



export default async function Navbar() {

    //Fetching data from the kinde server using with the user session
    const {getUser} = getKindeServerSession()
    const user = await getUser()
  return (
    <div>
        <nav className="px-5 py-2 bg-white/60 backdrop-blur-lg flex items-center justify-between">
            <div className="flex items-center gap-6">
                <Link href={"/"}>
                     <h3 className="text-blue-400 text-2xl">Agents.</h3>
                </Link>

            </div>

            <div className="hidden sm:flex items-center gap-6">
                <Link 
                    href={"/"} 
                    className='text-sm font-antialiased font-mono transition-colors hover:text-gray-500 text-gray-700'>
                    Home
                </Link>
                <Link 
                    href={"/dashboard"} 
                    className='text-sm font-antialiased font-mono transition-colors hover:text-gray-500 text-gray-700'>
                    Dashboard
                </Link>
            </div>

            {user? (
                <div className='flex items-center justify-between gap-4'>
                    <p>Welcome, {user.given_name}</p>
                    <LogoutLink className={buttonVariants({variant: "secondary"})}>Logout</LogoutLink>
                </div>
            ): (
                <div className='flex items-center justify-between gap-4'>
                    <LoginLink className={buttonVariants()}>Login</LoginLink>
                    <RegisterLink className={buttonVariants({variant: "secondary"})}>
                        Sign up
                    </RegisterLink>
                </div>
            )}
        </nav>
    </div>
  )
}

//For the Loading UI
