import Image from 'next/image'
import React, { use } from 'react'
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"


type NavbarProps = { 
    username? : string; 
    avatar_url?: string ; 
}

function Navbar( { username , avatar_url} : NavbarProps) {
    return (
        <nav className='flex justify-between items-center'>

            <div className='flex items-center gap-3' >
                <Image src={"./logo.svg"} alt='Inter AI logo' width={34} height={34} />
                <h3>InterAI</h3>
            </div>

            <Avatar className='h-14 w-14'>
                <AvatarImage src= { avatar_url || 'https://avatars.githubusercontent.com/u/72189934?v=4 '} />
                <AvatarFallback> {username || "InterAI user"} </AvatarFallback>
            </Avatar>


        </nav>

    )
}

export default Navbar