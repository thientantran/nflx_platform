'use client'

import { useSession } from "next-auth/react"

// import { getServerSession } from "next-auth"

export default  function Home() {

  const {data:session} = useSession()
  return (
    <div>
        <div className="text-lg text-white">Hello {session?.user?.name} with email: {session?.user?.email}</div>
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
