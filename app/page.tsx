// 'use client'

import Billboard from "@/components/Billboard"
import MovieList from "@/components/MovieList"
import Navbar from "@/components/Navbar"
import getMovies from "@/lib/functions"
import { getServerSession } from "next-auth"
import { redirect } from "next/navigation"

// import { getServerSession } from "next-auth"

export default async function Home() {

  // const {data:session} = useSession()
  const session = await getServerSession()
  if(!session){
    redirect("/auth")
  }
  const movies = await getMovies()
  console.log(movies)
  return (
    <div>
        <Navbar/>
        <Billboard/>
        <div className="pb-40">
          <MovieList title="Trending now" data={movies!}/>
        </div>
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
