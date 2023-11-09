// 'use client'

import Navbar from "@/components/Navbar"
import { getServerSession } from "next-auth"
import { redirect } from "next/navigation"

// import { getServerSession } from "next-auth"

export default async function Home() {

  // const {data:session} = useSession()
  const session = await getServerSession()
  if(!session){
    redirect("/auth")
  }
  return (
    <div>
        <Navbar/>
        {/* {
          session ? (
            <button className="h-10 w-full bg-white" onClick={() => signOut()}>Sign out</button>
          ) : (
            <button className="h-10 w-full bg-white" onClick={() => signIn()}>Sign in</button>
          )
        } */}

    </div>

  )
}
